'use client'
import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function InscriptionForm() {
  const [nom, setNom] = useState('')
  const [telephone, setTelephone] = useState('')
  const [age, setAge] = useState('')
  const [niveau, setNiveau] = useState('')
  const [formation, setFormation] = useState('')
  const [envoye, setEnvoye] = useState(false)
  const [chargement, setChargement] = useState(false)

  const handleSubmit = async () => {
    if (!nom || !telephone || !age || !niveau || !formation) {
      alert('Veuillez remplir tous les champs')
      return
    }
    setChargement(true)
    try {
      await addDoc(collection(db, 'inscriptions'), {
        nom,
        telephone,
        age,
        niveau,
        formation,
        date: new Date().toISOString(),
        statut: 'En attente'
      })
      setEnvoye(true)
      const message = `Bonjour AVAMOUSSA ! Je souhaite m inscrire. Nom: ${nom}, Tel: ${telephone}, Age: ${age}, Niveau: ${niveau}, Formation: ${formation}`
      window.open(`https://wa.me/221785015969?text=${encodeURIComponent(message)}`, '_blank')
    } catch (error) {
      alert('Erreur lors de l inscription. Reessayez.')
    }
    setChargement(false)
  }

  if (envoye) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2" style={{color: '#FF6B00'}}>Inscription envoyee !</h3>
        <p className="text-gray-600 mb-4">Votre inscription a ete enregistree. WhatsApp va s ouvrir pour confirmer.</p>
        <button onClick={() => setEnvoye(false)} style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold">
          Nouvelle inscription
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
          <input type="text" placeholder="Votre nom et prenom" value={nom} onChange={(e) => setNom(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telephone WhatsApp</label>
          <input type="tel" placeholder="Ex: 77 000 00 00" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
          <input type="number" placeholder="Votre age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Niveau</label>
          <select value={niveau} onChange={(e) => setNiveau(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
            <option value="">Choisir votre niveau</option>
            <option>Debutant</option>
            <option>Intermediaire</option>
            <option>Avance</option>
            <option>Aquaphobie</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Formation choisie</label>
          <select value={formation} onChange={(e) => setFormation(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
            <option value="">Choisir une formation</option>
            <option>Coaching Prive VIP</option>
            <option>Formation Privee</option>
            <option>Formation Promo</option>
            <option>Aquaphobie</option>
          </select>
        </div>
        <button onClick={handleSubmit} disabled={chargement} style={{backgroundColor: '#FF6B00'}} className="text-white py-4 rounded-full font-bold text-lg mt-2">
          {chargement ? 'Envoi en cours...' : 'Envoyer sur WhatsApp'}
        </button>
      </div>
    </div>
  )
}
