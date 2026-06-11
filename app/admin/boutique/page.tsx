'use client'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import Link from 'next/link'

export default function AdminBoutique() {
  const [produits, setProduits] = useState<any[]>([])
  const [mode, setMode] = useState<'liste' | 'ajouter' | 'modifier'>('liste')
  const [selectionne, setSelectionne] = useState<any>(null)
  const [chargement, setChargement] = useState(true)
  const [form, setForm] = useState({
    nom: '', prix: '', promo: '', emoji: '🏊',
    categorie: 'Accessoire', desc: '', type: 'physique'
  })

  useEffect(() => { charger() }, [])

  const charger = async () => {
    const snapshot = await getDocs(collection(db, 'produits'))
    const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    setProduits(data)
    setChargement(false)
  }

  const reinitForm = () => setForm({ nom: '', prix: '', promo: '', emoji: '🏊', categorie: 'Accessoire', desc: '', type: 'physique' })

  const handleAjouter = async () => {
    if (!form.nom || !form.prix) { alert('Remplissez au moins le nom et le prix'); return }
    await addDoc(collection(db, 'produits'), { ...form, prix: Number(form.prix), promo: form.promo ? Number(form.promo) : null })
    reinitForm()
    setMode('liste')
    charger()
  }

  const handleModifier = async () => {
    if (!selectionne) return
    await updateDoc(doc(db, 'produits', selectionne.id), { ...form, prix: Number(form.prix), promo: form.promo ? Number(form.promo) : null })
    setMode('liste')
    setSelectionne(null)
    reinitForm()
    charger()
  }

  const handleSupprimer = async (id: string) => {
    await deleteDoc(doc(db, 'produits', id))
    charger()
  }

  const ouvrirModifier = (p: any) => {
    setSelectionne(p)
    setForm({ nom: p.nom, prix: p.prix, promo: p.promo || '', emoji: p.emoji, categorie: p.categorie, desc: p.desc, type: p.type })
    setMode('modifier')
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#F8F8F8'}}>

      <div style={{backgroundColor: '#FF6B00'}} className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Gestion de la Boutique</h1>
        <Link href="/admin" className="text-white text-sm border border-white px-4 py-2 rounded-full">Retour admin</Link>
      </div>

      <div className="p-6 max-w-5xl mx-auto">

        {mode === 'liste' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{color: '#FF6B00'}}>Tous les produits ({produits.length})</h2>
              <button onClick={() => setMode('ajouter')} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">+ Ajouter un produit</button>
            </div>
            {chargement ? (
              <p className="text-center py-8 text-gray-500">Chargement...</p>
            ) : produits.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                <div className="text-5xl mb-4">🛍️</div>
                <p className="text-gray-500 mb-4">Aucun produit pour le moment</p>
                <button onClick={() => setMode('ajouter')} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">Ajouter le premier produit</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {produits.map((p) => (
                  <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="text-4xl">{p.emoji}</span>
                        <div>
                          <h3 className="font-bold" style={{color: '#FF6B00'}}>{p.nom}</h3>
                          <p className="text-gray-600 text-sm">{p.desc}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-bold" style={{color: '#FF6B00'}}>{Number(p.prix).toLocaleString()} FCFA</span>
                            {p.promo && <span className="text-gray-400 line-through text-sm">{Number(p.promo).toLocaleString()}</span>}
                          </div>
                          <div className="flex gap-2 mt-1">
                            <span style={{backgroundColor: '#E6F0FF', color: '#0066CC'}} className="text-xs px-2 py-1 rounded-full">{p.categorie}</span>
                            <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-xs px-2 py-1 rounded-full">{p.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
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
            <h2 className="text-xl font-bold mb-6" style={{color: '#FF6B00'}}>{mode === 'ajouter' ? 'Ajouter un produit' : 'Modifier le produit'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom du produit</label>
                <input type="text" placeholder="Ex: Bonnet AVAMOUSSA" value={form.nom} onChange={(e) => setForm({...form, nom: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emoji</label>
                <input type="text" placeholder="Ex: 🏊" value={form.emoji} onChange={(e) => setForm({...form, emoji: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prix (FCFA)</label>
                <input type="number" placeholder="Ex: 5000" value={form.prix} onChange={(e) => setForm({...form, prix: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prix promo (laisser vide si aucune)</label>
                <input type="number" placeholder="Ex: 4000" value={form.promo} onChange={(e) => setForm({...form, promo: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categorie</label>
                <select value={form.categorie} onChange={(e) => setForm({...form, categorie: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option>Accessoire</option>
                  <option>Vetement</option>
                  <option>Materiel</option>
                  <option>Digital</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value="physique">Produit physique</option>
                  <option value="digital">Produit digital</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea placeholder="Description du produit..." value={form.desc} onChange={(e) => setForm({...form, desc: e.target.value})} rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none resize-none" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={mode === 'ajouter' ? handleAjouter : handleModifier} style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-3 rounded-full font-bold">
                {mode === 'ajouter' ? 'Ajouter le produit' : 'Enregistrer'}
              </button>
              <button onClick={() => { setMode('liste'); reinitForm() }} style={{backgroundColor: '#F8F8F8', color: '#666'}} className="px-8 py-3 rounded-full font-medium">Annuler</button>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
