'use client'
import { useEffect, useState } from 'react'
import { auth, db } from '@/lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore'
import Link from 'next/link'

export default function MonEspace() {
  const [utilisateur, setUtilisateur] = useState<any>(null)
  const [inscriptions, setInscriptions] = useState<any[]>([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUtilisateur(user)
        const q = query(collection(db, 'inscriptions'), where('telephone', '!=', ''))
        const snapshot = await getDocs(collection(db, 'inscriptions'))
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter((i: any) => i.email === user.email)
        setInscriptions(data)
      } else {
        window.location.href = '/connexion'
      }
      setChargement(false)
    })
    return () => unsub()
  }, [])

  const handleDeconnexion = async () => {
    await signOut(auth)
    window.location.href = '/'
  }

  if (chargement) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#F8F8F8'}}>
        <div className="text-center">
          <div className="text-5xl mb-4">🏊</div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{backgroundColor: '#F8F8F8'}}>

      <div style={{backgroundColor: '#FF6B00'}} className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Mon Espace AVAMOUSSA</h1>
        <button onClick={handleDeconnexion} className="text-white text-sm border border-white px-4 py-2 rounded-full">
          Se deconnecter
        </button>
      </div>

      <div className="p-6 max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center gap-4">
            <div style={{backgroundColor: '#FF6B00'}} className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {utilisateur?.displayName?.charAt(0) || 'A'}
            </div>
            <div>
              <h2 className="text-xl font-bold">{utilisateur?.displayName || 'Client AVAMOUSSA'}</h2>
              <p className="text-gray-600 text-sm">{utilisateur?.email}</p>
              <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-xs px-3 py-1 rounded-full font-medium">Client AVAMOUSSA</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-xl font-bold mb-4" style={{color: '#FF6B00'}}>Mes inscriptions</h2>
          {inscriptions.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">📋</div>
              <p className="text-gray-500">Aucune inscription pour le moment</p>
              <Link href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold inline-block mt-4">
                Voir les formations
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {inscriptions.map((i) => (
                <div key={i.id} style={{backgroundColor: '#F8F8F8'}} className="rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold" style={{color: '#0066CC'}}>{i.formation}</p>
                      <p className="text-sm text-gray-600">Niveau : {i.niveau}</p>
                      <p className="text-sm text-gray-600">Date : {i.date ? new Date(i.date).toLocaleDateString('fr-FR') : '-'}</p>
                    </div>
                    <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-xs px-3 py-1 rounded-full font-medium">{i.statut}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white p-4 rounded-2xl text-center font-bold">
            Nouvelle inscription
          </Link>
          <Link href="/boutique" style={{backgroundColor: '#0066CC'}} className="text-white p-4 rounded-2xl text-center font-bold">
            Boutique
          </Link>
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white p-4 rounded-2xl text-center font-bold">
            Contacter AVAMOUSSA
          </a>
        </div>

      </div>
    </main>
  )
}