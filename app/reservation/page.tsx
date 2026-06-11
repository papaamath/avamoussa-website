'use client'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export default function Reservation() {
  const [groupes, setGroupes] = useState<any[]>([])
  const [chargement, setChargement] = useState(true)
  const [groupeSelectionne, setGroupeSelectionne] = useState<any>(null)
  const [confirme, setConfirme] = useState(false)
  const [envoi, setEnvoi] = useState(false)
  const [form, setForm] = useState({
    nom: '', telephone: '', age: '', ville: '', niveau: '', formation: ''
  })

  useEffect(() => {
    const charger = async () => {
      const snapshot = await getDocs(collection(db, 'groupes'))
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
      setGroupes(data)
      setChargement(false)
    }
    charger()
  }, [])

  const handleReserver = async () => {
    if (!form.nom || !form.telephone || !form.age) {
      alert('Veuillez remplir tous les champs')
      return
    }
    setEnvoi(true)
    try {
      await addDoc(collection(db, 'reservations'), {
        ...form,
        groupe: groupeSelectionne.nom,
        ville: groupeSelectionne.ville,
        prix: groupeSelectionne.prix,
        statut: 'En attente',
        date: new Date().toISOString()
      })
      setConfirme(true)
      const message = `Bonjour AVAMOUSSA ! Nouvelle reservation :\nNom: ${form.nom}\nTel: ${form.telephone}\nAge: ${form.age}\nNiveau: ${form.niveau}\nGroupe: ${groupeSelectionne.nom}\nVille: ${groupeSelectionne.ville}\nPrix: ${Number(groupeSelectionne.prix).toLocaleString()} FCFA`
      window.open(`https://wa.me/221785015969?text=${encodeURIComponent(message)}`, '_blank')
    } catch (error) {
      alert('Erreur lors de la reservation. Reessayez.')
    }
    setEnvoi(false)
  }

  if (confirme) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4" style={{backgroundColor: '#F8F8F8'}}>
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2" style={{color: '#FF6B00'}}>Reservation envoyee !</h2>
          <p className="text-gray-600 mb-2">Votre reservation a ete enregistree avec succes.</p>
          <p className="text-gray-600 mb-6">WhatsApp vient de s ouvrir — AVAMOUSSA va vous confirmer rapidement.</p>
          <div style={{backgroundColor: '#FFF0E6'}} className="rounded-xl p-4 mb-6 text-left">
            <p className="font-bold mb-2" style={{color: '#FF6B00'}}>Recapitulatif</p>
            <p className="text-sm text-gray-600">Nom : {form.nom}</p>
            <p className="text-sm text-gray-600">Telephone : {form.telephone}</p>
            <p className="text-sm text-gray-600">Groupe : {groupeSelectionne.nom}</p>
            <p className="text-sm text-gray-600">Ville : {groupeSelectionne.ville}</p>
            <p className="text-sm font-bold" style={{color: '#FF6B00'}}>Prix : {Number(groupeSelectionne.prix).toLocaleString()} FCFA</p>
          </div>
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white px-8 py-3 rounded-full font-bold block mb-3">Contacter AVAMOUSSA</a>
          <button onClick={() => { setConfirme(false); setGroupeSelectionne(null); setForm({ nom: '', telephone: '', age: '', ville: '', niveau: '', formation: '' }) }} style={{backgroundColor: '#F8F8F8', color: '#666'}} className="px-8 py-3 rounded-full font-medium block w-full">Nouvelle reservation</button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Reservations AVAMOUSSA</h1>
        <p className="text-xl">Choisissez votre groupe et reservez votre place</p>
      </section>

      {!groupeSelectionne ? (
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Groupes disponibles</h2>
          <p className="text-center text-gray-600 mb-10">Cliquez sur un groupe pour reserver votre place</p>
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
                          <span className="text-gray-600">Places reservees</span>
                          <span className="font-bold" style={{color: urgent ? '#CC0000' : '#FF6B00'}}>{g.reservees}/{g.places}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                          <div style={{backgroundColor: urgent ? '#CC0000' : presque ? '#FF6B00' : '#2E7D32', width: `${pourcentage}%`}} className="h-4 rounded-full"></div>
                        </div>
                      </div>
                      {restantes === 0 ? (
                        <div style={{backgroundColor: '#F8F8F8', color: '#999'}} className="py-3 rounded-full text-center font-bold">Groupe complet</div>
                      ) : (
                        <button onClick={() => setGroupeSelectionne(g)} style={{backgroundColor: urgent ? '#CC0000' : '#FF6B00'}} className="text-white py-3 rounded-full font-bold block w-full text-center">
                          {urgent ? 'Reserver — Urgent !' : 'Je choisis ce groupe'}
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      ) : (
        <section className="py-16 px-4 max-w-2xl mx-auto">
          <div style={{backgroundColor: '#FFF0E6'}} className="rounded-2xl p-4 mb-6 flex items-center justify-between">
            <div>
              <p className="font-bold" style={{color: '#FF6B00'}}>{groupeSelectionne.nom}</p>
              <p className="text-sm text-gray-600">📍 {groupeSelectionne.ville} — {Number(groupeSelectionne.prix).toLocaleString()} FCFA</p>
            </div>
            <button onClick={() => setGroupeSelectionne(null)} style={{color: '#FF6B00'}} className="text-sm font-medium">Changer</button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#FF6B00'}}>Vos informations</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" placeholder="Votre nom et prenom" value={form.nom} onChange={(e) => setForm({...form, nom: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telephone WhatsApp</label>
                <input type="tel" placeholder="Ex: 77 000 00 00" value={form.telephone} onChange={(e) => setForm({...form, telephone: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input type="number" placeholder="Votre age" value={form.age} onChange={(e) => setForm({...form, age: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Niveau</label>
                <select value={form.niveau} onChange={(e) => setForm({...form, niveau: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value="">Choisir votre niveau</option>
                  <option>Debutant</option>
                  <option>Intermediaire</option>
                  <option>Avance</option>
                  <option>Aquaphobie</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type de formation</label>
                <select value={form.formation} onChange={(e) => setForm({...form, formation: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value="">Choisir une formation</option>
                  <option>Coaching Prive VIP</option>
                  <option>Stage Prive</option>
                  <option>Stage Promo</option>
                  <option>Aquaphobie</option>
                </select>
              </div>
              <button onClick={handleReserver} disabled={envoi} style={{backgroundColor: '#FF6B00'}} className="text-white py-4 rounded-full font-bold text-lg mt-2">
                {envoi ? 'Envoi en cours...' : 'Confirmer ma reservation'}
              </button>
            </div>
          </div>
        </section>
      )}

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Une question ?</h2>
        <p className="text-lg mb-8">Contactez-nous sur WhatsApp</p>
        <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp — 78 501 59 69</a>
      </section>

    </main>
  )
}