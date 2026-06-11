'use client'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import Link from 'next/link'

export default function AdminTemoignages() {
  const [temoignages, setTemoignages] = useState<any[]>([])
  const [mode, setMode] = useState<'liste' | 'ajouter' | 'modifier'>('liste')
  const [selectionne, setSelectionne] = useState<any>(null)
  const [chargement, setChargement] = useState(true)
  const [form, setForm] = useState({
    nom: '', age: '', note: 5, texte: '', formation: '', emoji: '🧑'
  })

  useEffect(() => { charger() }, [])

  const charger = async () => {
    const snapshot = await getDocs(collection(db, 'temoignages'))
    const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    setTemoignages(data)
    setChargement(false)
  }

  const reinitForm = () => setForm({ nom: '', age: '', note: 5, texte: '', formation: '', emoji: '🧑' })

  const handleAjouter = async () => {
    if (!form.nom || !form.texte) { alert('Remplissez au moins le nom et le temoignage'); return }
    await addDoc(collection(db, 'temoignages'), { ...form, note: Number(form.note) })
    reinitForm()
    setMode('liste')
    charger()
  }

  const handleModifier = async () => {
    if (!selectionne) return
    await updateDoc(doc(db, 'temoignages', selectionne.id), { ...form, note: Number(form.note) })
    setMode('liste')
    setSelectionne(null)
    reinitForm()
    charger()
  }

  const handleSupprimer = async (id: string) => {
    await deleteDoc(doc(db, 'temoignages', id))
    charger()
  }

  const ouvrirModifier = (t: any) => {
    setSelectionne(t)
    setForm({ nom: t.nom, age: t.age, note: t.note, texte: t.texte, formation: t.formation, emoji: t.emoji })
    setMode('modifier')
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#F8F8F8'}}>

      <div style={{backgroundColor: '#FF6B00'}} className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Gestion des Temoignages</h1>
        <Link href="/admin" className="text-white text-sm border border-white px-4 py-2 rounded-full">Retour admin</Link>
      </div>

      <div className="p-6 max-w-5xl mx-auto">

        {mode === 'liste' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{color: '#FF6B00'}}>Tous les temoignages ({temoignages.length})</h2>
              <button onClick={() => setMode('ajouter')} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">+ Ajouter un temoignage</button>
            </div>
            {chargement ? (
              <p className="text-center py-8 text-gray-500">Chargement...</p>
            ) : temoignages.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                <div className="text-5xl mb-4">💬</div>
                <p className="text-gray-500 mb-4">Aucun temoignage pour le moment</p>
                <button onClick={() => setMode('ajouter')} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">Ajouter le premier temoignage</button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {temoignages.map((t) => (
                  <div key={t.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{t.emoji}</span>
                        <div>
                          <h3 className="font-bold" style={{color: '#FF6B00'}}>{t.nom}</h3>
                          <p className="text-gray-500 text-xs">{t.age}</p>
                          <div className="flex gap-1 my-1">
                            {[...Array(t.note)].map((_, i) => (
                              <span key={i} style={{color: '#FF6B00'}}>⭐</span>
                            ))}
                          </div>
                          <p className="text-gray-600 text-sm italic">{t.texte}</p>
                          <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-xs px-2 py-1 rounded-full mt-1 inline-block">{t.formation}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => ouvrirModifier(t)} style={{backgroundColor: '#0066CC'}} className="text-white px-4 py-2 rounded-xl text-sm font-medium">Modifier</button>
                        <button onClick={() => handleSupprimer(t.id)} style={{backgroundColor: '#FFE6E6', color: '#CC0000'}} className="px-4 py-2 rounded-xl text-sm font-medium">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {(mode === 'ajouter' || mode === 'modifier') && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-6" style={{color: '#FF6B00'}}>{mode === 'ajouter' ? 'Ajouter un temoignage' : 'Modifier le temoignage'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l eleve</label>
                <input type="text" placeholder="Ex: Moussa Diallo" value={form.nom} onChange={(e) => setForm({...form, nom: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age ou description</label>
                <input type="text" placeholder="Ex: 28 ans ou Maman de Amadou" value={form.age} onChange={(e) => setForm({...form, age: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
                <select value={form.note} onChange={(e) => setForm({...form, note: Number(e.target.value)})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value={5}>5 etoiles</option>
                  <option value={4}>4 etoiles</option>
                  <option value={3}>3 etoiles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emoji</label>
                <select value={form.emoji} onChange={(e) => setForm({...form, emoji: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value="🧑">🧑 Homme</option>
                  <option value="👩">👩 Femme</option>
                  <option value="👧">👧 Fille</option>
                  <option value="👦">👦 Garcon</option>
                  <option value="👨">👨 Adulte homme</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Formation suivie</label>
                <select value={form.formation} onChange={(e) => setForm({...form, formation: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option>Stage Promo Dakar</option>
                  <option>Stage Prive</option>
                  <option>Coaching Prive VIP</option>
                  <option>Programme Aquaphobie</option>
                  <option>Stage International</option>
                  <option>Stage Saly</option>
                  <option>Stage Thies</option>
                  <option>Stage Saint-Louis</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Temoignage</label>
                <textarea placeholder="Ce que dit l eleve sur sa formation..." value={form.texte} onChange={(e) => setForm({...form, texte: e.target.value})} rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none resize-none" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={mode === 'ajouter' ? handleAjouter : handleModifier} style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-3 rounded-full font-bold">
                {mode === 'ajouter' ? 'Ajouter le temoignage' : 'Enregistrer'}
              </button>
              <button onClick={() => { setMode('liste'); reinitForm() }} style={{backgroundColor: '#F8F8F8', color: '#666'}} className="px-8 py-3 rounded-full font-medium">Annuler</button>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
