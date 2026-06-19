'use client'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import Link from 'next/link'

export default function AdminPromos() {
  const [promos, setPromos] = useState<any[]>([])
  const [mode, setMode] = useState<'liste' | 'ajouter' | 'modifier'>('liste')
  const [selectionne, setSelectionne] = useState<any>(null)
  const [chargement, setChargement] = useState(true)
  const [form, setForm] = useState({
    code: '', reduction: '', type: 'pourcentage', actif: true, description: ''
  })

  useEffect(() => { charger() }, [])

  const charger = async () => {
    const snapshot = await getDocs(collection(db, 'promos'))
    const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    setPromos(data)
    setChargement(false)
  }

  const reinitForm = () => setForm({ code: '', reduction: '', type: 'pourcentage', actif: true, description: '' })

  const handleAjouter = async () => {
    if (!form.code || !form.reduction) { alert('Remplissez le code et la reduction'); return }
    await addDoc(collection(db, 'promos'), { ...form, code: form.code.toUpperCase(), reduction: Number(form.reduction) })
    reinitForm()
    setMode('liste')
    charger()
  }

  const handleModifier = async () => {
    if (!selectionne) return
    await updateDoc(doc(db, 'promos', selectionne.id), { ...form, code: form.code.toUpperCase(), reduction: Number(form.reduction) })
    setMode('liste')
    setSelectionne(null)
    reinitForm()
    charger()
  }

  const handleSupprimer = async (id: string) => {
    await deleteDoc(doc(db, 'promos', id))
    charger()
  }

  const toggleActif = async (promo: any) => {
    await updateDoc(doc(db, 'promos', promo.id), { actif: !promo.actif })
    charger()
  }

  const ouvrirModifier = (p: any) => {
    setSelectionne(p)
    setForm({ code: p.code, reduction: p.reduction, type: p.type, actif: p.actif, description: p.description })
    setMode('modifier')
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#F8F8F8'}}>

      <div style={{backgroundColor: '#FF6B00'}} className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Codes Promo</h1>
        <Link href="/admin" className="text-white text-sm border border-white px-4 py-2 rounded-full">Retour admin</Link>
      </div>

      <div className="p-6 max-w-5xl mx-auto">

        {mode === 'liste' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{color: '#FF6B00'}}>Tous les codes promo ({promos.length})</h2>
              <button onClick={() => setMode('ajouter')} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">+ Creer un code promo</button>
            </div>
            {chargement ? (
              <p className="text-center py-8 text-gray-500">Chargement...</p>
            ) : promos.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                <div className="text-5xl mb-4">🎟️</div>
                <p className="text-gray-500 mb-4">Aucun code promo pour le moment</p>
                <button onClick={() => setMode('ajouter')} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">Creer le premier code</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {promos.map((p) => (
                  <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span style={{backgroundColor: '#FFF0E6', color: '#FF6B00'}} className="font-mono font-bold px-3 py-1 rounded-lg">{p.code}</span>
                          <span style={{backgroundColor: p.actif ? '#E6F4EA' : '#FFE6E6', color: p.actif ? '#2E7D32' : '#CC0000'}} className="text-xs px-2 py-1 rounded-full font-medium">{p.actif ? 'Actif' : 'Inactif'}</span>
                        </div>
                        <p className="font-bold" style={{color: '#0066CC'}}>
                          {p.type === 'pourcentage' ? `-${p.reduction}%` : `-${Number(p.reduction).toLocaleString()} FCFA`}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">{p.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => toggleActif(p)} style={{backgroundColor: p.actif ? '#FFE6E6' : '#E6F4EA', color: p.actif ? '#CC0000' : '#2E7D32'}} className="px-4 py-2 rounded-xl text-sm font-medium">
                          {p.actif ? 'Desactiver' : 'Activer'}
                        </button>
                        <button onClick={() => ouvrirModifier(p)} style={{backgroundColor: '#0066CC'}} className="text-white px-4 py-2 rounded-xl text-sm font-medium">Modifier</button>
                        <button onClick={() => handleSupprimer(p.id)} style={{backgroundColor: '#FFE6E6', color: '#CC0000'}} className="px-4 py-2 rounded-xl text-sm font-medium">Supprimer</button>
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
            <h2 className="text-xl font-bold mb-6" style={{color: '#FF6B00'}}>{mode === 'ajouter' ? 'Creer un code promo' : 'Modifier le code promo'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Code promo</label>
                <input type="text" placeholder="Ex: AVAMOUSSA10" value={form.code} onChange={(e) => setForm({...form, code: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type de reduction</label>
                <select value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value="pourcentage">Pourcentage (%)</option>
                  <option value="montant">Montant fixe (FCFA)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Valeur de reduction</label>
                <input type="number" placeholder={form.type === 'pourcentage' ? 'Ex: 10' : 'Ex: 5000'} value={form.reduction} onChange={(e) => setForm({...form, reduction: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                <select value={form.actif ? 'actif' : 'inactif'} onChange={(e) => setForm({...form, actif: e.target.value === 'actif'})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value="actif">Actif</option>
                  <option value="inactif">Inactif</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input type="text" placeholder="Ex: Code promo lancement site web" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={mode === 'ajouter' ? handleAjouter : handleModifier} style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-3 rounded-full font-bold">
                {mode === 'ajouter' ? 'Creer le code' : 'Enregistrer'}
              </button>
              <button onClick={() => { setMode('liste'); reinitForm() }} style={{backgroundColor: '#F8F8F8', color: '#666'}} className="px-8 py-3 rounded-full font-medium">Annuler</button>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
