'use client'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Reservation() {
  const [groupes, setGroupes] = useState<any[]>([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    const charger = async () => {
      const snapshot = await getDocs(collection(db, 'groupes'))
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
      setGroupes(data)
      setChargement(false)
    }
    charger()
  }, [])

  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Reservations AVAMOUSSA</h1>
        <p className="text-xl">Choisissez votre groupe et reservez votre place</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Groupes en formation</h2>
        <p className="text-center text-gray-600 mb-10">Places limitees — Reservez rapidement !</p>

        {chargement ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Chargement des groupes...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupes.map((g) => {
              const restantes = g.places - g.reservees
              const pourcentage = Math.round((g.reservees / g.places) * 100)
              const urgent = restantes <= 3
              const presque = restantes <= 5
              return (
                <div key={g.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                  {urgent && (
                    <div style={{backgroundColor: '#CC0000'}} className="text-white text-center text-sm font-bold py-2">PRESQUE COMPLET — Plus que {restantes} places !</div>
                  )}
                  {!urgent && presque && (
                    <div style={{backgroundColor: '#FF6B00'}} className="text-white text-center text-sm font-bold py-2">Bientot complet — Reservez vite !</div>
                  )}
                  <div style={{backgroundColor: g.couleur || '#FF6B00'}} className="p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{g.nom}</h3>
                        <p className="text-sm">📍 {g.ville}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold">{restantes}</p>
                        <p className="text-xs">places restantes</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-500">Prix</p>
                        <p className="font-bold" style={{color: '#FF6B00'}}>{Number(g.prix).toLocaleString()} FCFA</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-500">Horaires</p>
                        <p className="font-bold text-xs" style={{color: '#0066CC'}}>{g.horaires}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 font-medium">Places reservees</span>
                        <span className="font-bold" style={{color: urgent ? '#CC0000' : '#FF6B00'}}>{g.reservees}/{g.places}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div style={{backgroundColor: urgent ? '#CC0000' : presque ? '#FF6B00' : '#2E7D32', width: `${pourcentage}%`}} className="h-4 rounded-full"></div>
                      </div>
                    </div>
                    {restantes === 0 ? (
                      <div style={{backgroundColor: '#F8F8F8', color: '#999'}} className="py-3 rounded-full text-center font-bold">Groupe complet</div>
                    ) : (
                      <a href={`https://wa.me/221785015969?text=Bonjour AVAMOUSSA je veux reserver une place dans le groupe ${g.nom}`} style={{backgroundColor: urgent ? '#CC0000' : '#FF6B00'}} className="text-white py-3 rounded-full font-bold block text-center">
                        {urgent ? 'Reserver maintenant — Urgent !' : 'Reserver ma place'}
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8" style={{color: '#FF6B00'}}>Comment reserver ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div style={{backgroundColor: '#FF6B00'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2" style={{color: '#0066CC'}}>Choisissez votre groupe</h3>
            <p className="text-gray-600 text-sm">Selectionnez la ville et le groupe qui vous convient</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div style={{backgroundColor: '#FF6B00'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2" style={{color: '#0066CC'}}>Cliquez sur Reserver</h3>
            <p className="text-gray-600 text-sm">WhatsApp s ouvre avec votre reservation</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div style={{backgroundColor: '#FF6B00'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2" style={{color: '#0066CC'}}>Confirmation et paiement</h3>
            <p className="text-gray-600 text-sm">AVAMOUSSA confirme votre place et vous indique comment payer</p>
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Une question sur les reservations ?</h2>
        <p className="text-lg mb-8">Contactez-nous sur WhatsApp</p>
        <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp — 78 501 59 69</a>
      </section>

    </main>
  )
}