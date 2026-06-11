'use client'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import Link from 'next/link'

export default function AdminStages() {
  const [stages, setStages] = useState<any[]>([])
  const [mode, setMode] = useState<'liste' | 'ajouter' | 'modifier'>('liste')
  const [selectionne, setSelectionne] = useState<any>(null)
  const [chargement, setChargement] = useState(true)
  const [form, setForm] = useState({
    ville: '', lieu: '', prix: '', horaires: '',
    seances: '', places: '', reservees: '', couleur: '#0066CC', strategie: ''
  })

  useEffect(() => { charger() }, [])

  const charger = async () => {
    const snapshot = await getDocs(collection(db, 'stages'))
    const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    setStages(data)
    setChargement(false)
  }

  const reinitForm = () => setForm({ ville: '', lieu: '', prix: '', horaires: '', seances: '', places: '', reservees: '', couleur: '#0066CC', strategie: '' })

  const handleAjouter = async () => {
    if (!form.ville || !form.prix) { alert('Remplissez au moins la ville et le prix'); return }
    await addDoc(collection(db, 'stages'), { ...form, places: Number(form.places), reservees: Number(form.reservees) })
    reinitForm()
    setMode('liste')
    charger()
  }

  const handleModifier = async () => {
    if (!selectionne) return
    await updateDoc(doc(db, 'stages', selectionne.id), { ...form, places: Number(form.places), reservees: Number(form.reservees) })
    setMode('liste')
    setSelectionne(null)
    reinitForm()
    charger()
  }

  const handleSupprimer = async (id: string) => {
    await deleteDoc(doc(db, 'stages', id))
    charger()
  }

  const ouvrirModifier = (s: any) => {
    setSelectionne(s)
    setForm({ ville: s.ville, lieu: s.lieu, prix: s.prix, horaires: s.horaires, seances: s.seances, places: s.places, reservees: s.reservees, couleur: s.couleur, strategie: s.strategie })
    setMode('modifier')
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#F8F8F8'}}>

      <div style={{backgroundColor: '#FF6B00'}} className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Gestion des Stages</h1>
        <Link href="/admin" className="text-white text-sm border border-white px-4 py-2 rounded-full">Retour admin</Link>
      </div>

      <div className="p-6 max-w-5xl mx-auto">

        {mode === 'liste' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{color: '#FF6B00'}}>Tous les stages ({stages.length})</h2>
              <button onClick={() => setMode('ajouter')} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">+ Ajouter un stage</button>
            </div>
            {chargement ? (
              <p className="text-center py-8 text-gray-500">Chargement...</p>
            ) : stages.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                <div className="text-5xl mb-4">🏊</div>
                <p className="text-gray-500 mb-4">Aucun stage pour le moment</p>
                <button onClick={() => setMode('ajouter')} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">Ajouter le premier stage</button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {stages.map((s) => (
                  <div key={s.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <div className="flex items-start justify-between flex-wrap gap-3">
                      <div>
                        <h3 className="font-bold text-lg" style={{color: '#FF6B00'}}>Stage {s.ville}</h3>
                        <p className="text-gray-600 text-sm">📍 {s.lieu}</p>
                        <p className="text-gray-600 text-sm">💰 {s.prix}</p>
                        <p className="text-gray-600 text-sm">🕐 {s.horaires}</p>
                        <p className="text-gray-600 text-sm">📅 {s.seances}</p>
                        <p className="text-gray-600 text-sm">👥 Places : {s.reservees}/{s.places}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => ouvrirModifier(s)} style={{backgroundColor: '#0066CC'}} className="text-white px-4 py-2 rounded-xl text-sm font-medium">Modifier</button>
                        <button onClick={() => handleSupprimer(s.id)} style={{backgroundColor: '#FFE6E6', color: '#CC0000'}} className="px-4 py-2 rounded-xl text-sm font-medium">Supprimer</button>
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
            <h2 className="text-xl font-bold mb-6" style={{color: '#FF6B00'}}>{mode === 'ajouter' ? 'Ajouter un stage' : 'Modifier le stage'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                <input type="text" placeholder="Ex: Dakar" value={form.ville} onChange={(e) => setForm({...form, ville: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lieu exact</label>
                <input type="text" placeholder="Ex: Piscine olympique de Dakar" value={form.lieu} onChange={(e) => setForm({...form, lieu: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prix</label>
                <input type="text" placeholder="Ex: 50 000 FCFA" value={form.prix} onChange={(e) => setForm({...form, prix: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Horaires</label>
                <input type="text" placeholder="Ex: Lundi au Samedi 7h a 9h" value={form.horaires} onChange={(e) => setForm({...form, horaires: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de seances</label>
                <input type="text" placeholder="Ex: 6 seances sur 6 jours" value={form.seances} onChange={(e) => setForm({...form, seances: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Places totales</label>
                <input type="number" placeholder="Ex: 15" value={form.places} onChange={(e) => setForm({...form, places: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Places reservees</label>
                <input type="number" placeholder="Ex: 5" value={form.reservees} onChange={(e) => setForm({...form, reservees: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Couleur carte</label>
                <select value={form.couleur} onChange={(e) => setForm({...form, couleur: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value="#0066CC">Bleu</option>
                  <option value="#FF6B00">Orange</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Strategie des seances</label>
                <textarea placeholder="Ex: Jour 1-2 adaptation eau / Jour 3-4 technique crawl / Jour 5-6 perfectionnement" value={form.strategie} onChange={(e) => setForm({...form, strategie: e.target.value})} rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none resize-none" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={mode === 'ajouter' ? handleAjouter : handleModifier} style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-3 rounded-full font-bold">
                {mode === 'ajouter' ? 'Ajouter le stage' : 'Enregistrer les modifications'}
              </button>
              <button onClick={() => { setMode('liste'); reinitForm() }} style={{backgroundColor: '#F8F8F8', color: '#666'}} className="px-8 py-3 rounded-full font-medium">Annuler</button>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
