'use client'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Admin() {
  const [inscriptions, setInscriptions] = useState<any[]>([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    const charger = async () => {
      const snapshot = await getDocs(collection(db, 'inscriptions'))
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setInscriptions(data)
      setChargement(false)
    }
    charger()
  }, [])

  return (
    <main className="min-h-screen" style={{backgroundColor: '#F8F8F8'}}>

      <div style={{backgroundColor: '#FF6B00'}} className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Tableau de bord AVAMOUSSA</h1>
        <a href="/" className="text-white text-sm">Retour au site</a>
      </div>

      <div className="p-6 max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold" style={{color: '#FF6B00'}}>{inscriptions.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total inscriptions</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold" style={{color: '#0066CC'}}>{inscriptions.filter(i => i.statut === 'En attente').length}</p>
            <p className="text-sm text-gray-500 mt-1">En attente</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold" style={{color: '#FF6B00'}}>{inscriptions.filter(i => i.formation === 'Coaching Prive VIP').length}</p>
            <p className="text-sm text-gray-500 mt-1">Coaching VIP</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
            <p className="text-3xl font-bold" style={{color: '#0066CC'}}>{inscriptions.filter(i => i.formation === 'Aquaphobie').length}</p>
            <p className="text-sm text-gray-500 mt-1">Aquaphobie</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-xl font-bold mb-4" style={{color: '#FF6B00'}}>Inscriptions recues</h2>
          {chargement ? (
            <p className="text-gray-500 text-center py-8">Chargement...</p>
          ) : inscriptions.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-500">Aucune inscription pour le moment</p>
              <p className="text-gray-400 text-sm mt-1">Les inscriptions apparaitront ici automatiquement</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{backgroundColor: '#FFF0E6'}}>
                    <th className="text-left p-3">Nom</th>
                    <th className="text-left p-3">Telephone</th>
                    <th className="text-left p-3">Age</th>
                    <th className="text-left p-3">Niveau</th>
                    <th className="text-left p-3">Formation</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {inscriptions.map((i) => (
                    <tr key={i.id} className="border-b border-gray-50">
                      <td className="p-3 font-medium">{i.nom}</td>
                      <td className="p-3 text-gray-600">{i.telephone}</td>
                      <td className="p-3 text-gray-600">{i.age} ans</td>
                      <td className="p-3 text-gray-600">{i.niveau}</td>
                      <td className="p-3 text-gray-600">{i.formation}</td>
                      <td className="p-3 text-gray-600">{i.date ? new Date(i.date).toLocaleDateString('fr-FR') : '-'}</td>
                      <td className="p-3">
                        <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="px-3 py-1 rounded-full text-xs font-medium">{i.statut}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4" style={{color: '#FF6B00'}}>Actions rapides</h2>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">Ouvrir WhatsApp</a>
              <a href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">Voir les formations</a>
              <a href="/boutique" style={{backgroundColor: '#0066CC'}} className="text-white px-4 py-3 rounded-xl font-medium text-center">Voir la boutique</a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4" style={{color: '#0066CC'}}>Prochain stage</h2>
            <div style={{backgroundColor: '#FFF0E6'}} className="rounded-xl p-4">
              <p className="font-bold" style={{color: '#FF6B00'}}>Stage International AVAMOUSSA x Malcolm</p>
              <p className="text-gray-600 text-sm mt-1">France — Senegal</p>
              <p className="text-gray-600 text-sm">Date : A confirmer</p>
              <p className="text-gray-600 text-sm">Places : Limitees</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}