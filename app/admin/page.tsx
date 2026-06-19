'use client'
import { useEffect, useState } from 'react'
import { db, auth } from '@/lib/firebase'
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'

export default function Admin() {
  const [inscriptions, setInscriptions] = useState<any[]>([])
  const [reservations, setReservations] = useState<any[]>([])
  const [chargement, setChargement] = useState(true)
  const [onglet, setOnglet] = useState('dashboard')
  const [autorise, setAutorise] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user && user.email === 'avamoussa012z@gmail.com') {
        setAutorise(true)
        chargerDonnees()
      } else {
        window.location.href = '/admin/login'
      }
    })
    return () => unsub()
  }, [])

  const chargerDonnees = async () => {
    const snapInscriptions = await getDocs(collection(db, 'inscriptions'))
    setInscriptions(snapInscriptions.docs.map(d => ({ id: d.id, ...d.data() })))
    const snapReservations = await getDocs(collection(db, 'reservations'))
    setReservations(snapReservations.docs.map(d => ({ id: d.id, ...d.data() })))
    setChargement(false)
  }

  const supprimerInscription = async (id: string) => {
    await deleteDoc(doc(db, 'inscriptions', id))
    chargerDonnees()
  }

  const changerStatutInscription = async (id: string, statut: string) => {
    await updateDoc(doc(db, 'inscriptions', id), { statut })
    chargerDonnees()
  }

  const changerStatutReservation = async (id: string, statut: string) => {
    await updateDoc(doc(db, 'reservations', id), { statut })
    chargerDonnees()
  }

  const supprimerReservation = async (id: string) => {
    await deleteDoc(doc(db, 'reservations', id))
    chargerDonnees()
  }

  if (!autorise) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#F8F8F8'}}>
        <div className="text-center">
          <div className="text-5xl mb-4">🔐</div>
          <p className="text-gray-600">Verification en cours...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#F8F8F8'}}>

      <div style={{backgroundColor: '#FF6B00'}} className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/ava.jpeg" alt="AVAMOUSSA" style={{height: '40px', width: 'auto'}} />
          <h1 className="text-white text-xl font-bold">Admin AVAMOUSSA</h1>
        </div>
        <a href="/" className="text-white text-sm border border-white px-4 py-2 rounded-full">Voir le site</a>
      </div>

      <div style={{backgroundColor: 'white'}} className="px-6 py-3 flex gap-2 flex-wrap border-b border-gray-100 shadow-sm">
        {[
          { id: 'dashboard', label: 'Dashboard', emoji: '📊' },
          { id: 'inscriptions', label: 'Inscriptions', emoji: '📋' },
          { id: 'reservations', label: 'Reservations', emoji: '📅' },
        ].map((o) => (
          <button key={o.id} onClick={() => setOnglet(o.id)} style={{backgroundColor: onglet === o.id ? '#FF6B00' : 'transparent', color: onglet === o.id ? 'white' : '#666'}} className="px-4 py-2 rounded-full text-sm font-medium transition">
            {o.emoji} {o.label}
          </button>
        ))}
        <Link href="/admin/stages" style={{color: '#666'}} className="px-4 py-2 rounded-full text-sm font-medium">🏊 Stages</Link>
        <Link href="/admin/boutique" style={{color: '#666'}} className="px-4 py-2 rounded-full text-sm font-medium">🛍️ Boutique</Link>
        <Link href="/admin/temoignages" style={{color: '#666'}} className="px-4 py-2 rounded-full text-sm font-medium">💬 Temoignages</Link>
        <Link href="/admin/promos" style={{color: '#666'}} className="px-4 py-2 rounded-full text-sm font-medium">🎟️ Promos</Link>
      </div>

      <div className="p-6 max-w-7xl mx-auto">

        {onglet === 'dashboard' && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold" style={{color: '#FF6B00'}}>{inscriptions.length}</p>
                <p className="text-sm text-gray-500 mt-1">Inscriptions</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold" style={{color: '#0066CC'}}>{reservations.length}</p>
                <p className="text-sm text-gray-500 mt-1">Reservations</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold" style={{color: '#2E7D32'}}>{reservations.filter(r => r.statut === 'Confirme').length}</p>
                <p className="text-sm text-gray-500 mt-1">Confirmes</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold" style={{color: '#CC0000'}}>{reservations.filter(r => r.statut === 'En attente').length}</p>
                <p className="text-sm text-gray-500 mt-1">En attente</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Link href="/admin/stages" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
                <div className="text-4xl mb-3">🏊</div>
                <h3 className="font-bold text-lg mb-1" style={{color: '#FF6B00'}}>Gerer les stages</h3>
                <p className="text-gray-500 text-sm">Ajouter, modifier, supprimer les stages</p>
              </Link>
              <Link href="/admin/boutique" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
                <div className="text-4xl mb-3">🛍️</div>
                <h3 className="font-bold text-lg mb-1" style={{color: '#FF6B00'}}>Gerer la boutique</h3>
                <p className="text-gray-500 text-sm">Ajouter, modifier, supprimer les produits</p>
              </Link>
              <Link href="/admin/temoignages" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-bold text-lg mb-1" style={{color: '#FF6B00'}}>Gerer les temoignages</h3>
                <p className="text-gray-500 text-sm">Ajouter, modifier, supprimer les avis</p>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-lg mb-4" style={{color: '#FF6B00'}}>Actions rapides</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">Ouvrir WhatsApp</a>
                  <a href="mailto:avamoussa012z@gmail.com" style={{backgroundColor: '#FF6B00'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">Ouvrir Email</a>
                  <a href="https://console.firebase.google.com" target="_blank" style={{backgroundColor: '#0066CC'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">Firebase Console</a>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-lg mb-4" style={{color: '#0066CC'}}>Reseaux sociaux</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://www.instagram.com/avamoussa.z" target="_blank" style={{backgroundColor: '#E1306C'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">Instagram @avamoussa.z</a>
                  <a href="https://www.tiktok.com/@avamoussa.z" target="_blank" style={{backgroundColor: '#000000'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">TikTok @avamoussa.z</a>
                  <a href="https://www.facebook.com/share/1HK3M1jTJ9" target="_blank" style={{backgroundColor: '#1877F2'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">Facebook AVAMOUSSA</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {onglet === 'inscriptions' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4" style={{color: '#FF6B00'}}>Inscriptions recues ({inscriptions.length})</h2>
            {chargement ? (
              <p className="text-center py-8 text-gray-500">Chargement...</p>
            ) : inscriptions.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📭</div>
                <p className="text-gray-500">Aucune inscription pour le moment</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {inscriptions.map((i) => (
                  <div key={i.id} className="border border-gray-100 rounded-2xl p-4">
                    <div className="flex items-start justify-between flex-wrap gap-3">
                      <div>
                        <p className="font-bold text-lg">{i.nom}</p>
                        <p className="text-gray-600 text-sm">📞 {i.telephone}</p>
                        <p className="text-gray-600 text-sm">Age : {i.age} ans</p>
                        <p className="text-gray-600 text-sm">Niveau : {i.niveau}</p>
                        <p className="text-gray-600 text-sm">Formation : {i.formation}</p>
                        <p className="text-gray-400 text-xs mt-1">Date : {i.date ? new Date(i.date).toLocaleDateString('fr-FR') : '-'}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <select value={i.statut} onChange={(e) => changerStatutInscription(i.id, e.target.value)} className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none">
                          <option>En attente</option>
                          <option>Confirme</option>
                          <option>Annule</option>
                          <option>Termine</option>
                        </select>
                        <a href={`https://wa.me/221${i.telephone?.replace(/\s/g, '')}`} style={{backgroundColor: '#25D366'}} className="text-white px-4 py-2 rounded-xl text-sm font-medium text-center">WhatsApp</a>
                        <button onClick={() => supprimerInscription(i.id)} style={{backgroundColor: '#FFE6E6', color: '#CC0000'}} className="px-4 py-2 rounded-xl text-sm font-medium">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {onglet === 'reservations' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4" style={{color: '#FF6B00'}}>Reservations recues ({reservations.length})</h2>
            {chargement ? (
              <p className="text-center py-8 text-gray-500">Chargement...</p>
            ) : reservations.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📭</div>
                <p className="text-gray-500">Aucune reservation pour le moment</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {reservations.map((r) => (
                  <div key={r.id} className="border border-gray-100 rounded-2xl p-4">
                    <div className="flex items-start justify-between flex-wrap gap-3">
                      <div>
                        <p className="font-bold text-lg">{r.nom}</p>
                        <p className="text-gray-600 text-sm">📞 {r.telephone}</p>
                        <p className="text-gray-600 text-sm">Age : {r.age} ans</p>
                        <p className="text-gray-600 text-sm">Niveau : {r.niveau}</p>
                        <p className="text-gray-600 text-sm">Groupe : {r.groupe}</p>
                        <p className="text-gray-600 text-sm">Ville : {r.ville}</p>
                        <p className="font-bold text-sm" style={{color: '#FF6B00'}}>Prix : {r.prix ? Number(r.prix).toLocaleString() : '-'} FCFA</p>
                        <p className="text-gray-400 text-xs mt-1">Date : {r.date ? new Date(r.date).toLocaleDateString('fr-FR') : '-'}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <select value={r.statut} onChange={(e) => changerStatutReservation(r.id, e.target.value)} className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none">
                          <option>En attente</option>
                          <option>Confirme</option>
                          <option>Annule</option>
                          <option>Termine</option>
                        </select>
                        <a href={`https://wa.me/221${r.telephone?.replace(/\s/g, '')}`} style={{backgroundColor: '#25D366'}} className="text-white px-4 py-2 rounded-xl text-sm font-medium text-center">WhatsApp</a>
                        <button onClick={() => supprimerReservation(r.id)} style={{backgroundColor: '#FFE6E6', color: '#CC0000'}} className="px-4 py-2 rounded-xl text-sm font-medium">Supprimer</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  )
}