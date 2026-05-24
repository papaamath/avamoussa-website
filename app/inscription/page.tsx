'use client'
import { useState } from 'react'
import { auth, db } from '@/lib/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import Link from 'next/link'

export default function Inscription() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [motdepasse, setMotdepasse] = useState('')
  const [chargement, setChargement] = useState(false)
  const [erreur, setErreur] = useState('')

  const handleInscription = async () => {
    if (!nom || !email || !telephone || !motdepasse) {
      setErreur('Veuillez remplir tous les champs')
      return
    }
    if (motdepasse.length < 6) {
      setErreur('Le mot de passe doit avoir au moins 6 caracteres')
      return
    }
    setChargement(true)
    setErreur('')
    try {
      const result = await createUserWithEmailAndPassword(auth, email, motdepasse)
      await updateProfile(result.user, { displayName: nom })
      await setDoc(doc(db, 'clients', result.user.uid), {
        nom,
        email,
        telephone,
        dateInscription: new Date().toISOString(),
        role: 'client'
      })
      window.location.href = '/mon-espace'
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setErreur('Cet email est deja utilise')
      } else {
        setErreur('Erreur lors de la creation du compte')
      }
    }
    setChargement(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{backgroundColor: '#F8F8F8'}}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold" style={{color: '#FF6B00'}}>AVAMOUSSA</h1>
          <p className="text-gray-600 mt-1">Creer votre compte</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8">
          {erreur && (
            <div style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="rounded-xl p-3 mb-4 text-sm text-center">{erreur}</div>
          )}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input type="text" placeholder="Votre nom et prenom" value={nom} onChange={(e) => setNom(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telephone WhatsApp</label>
              <input type="tel" placeholder="Ex: 77 000 00 00" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
              <input type="password" placeholder="Minimum 6 caracteres" value={motdepasse} onChange={(e) => setMotdepasse(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
            </div>
            <button onClick={handleInscription} disabled={chargement} style={{backgroundColor: '#FF6B00'}} className="text-white py-4 rounded-full font-bold text-lg mt-2">
              {chargement ? 'Creation du compte...' : 'Creer mon compte'}
            </button>
            <p className="text-center text-sm text-gray-600">
              Deja un compte ?{' '}
              <Link href="/connexion" style={{color: '#FF6B00'}} className="font-medium">Se connecter</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
