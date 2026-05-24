'use client'
import { useState } from 'react'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'

export default function Connexion() {
  const [email, setEmail] = useState('')
  const [motdepasse, setMotdepasse] = useState('')
  const [chargement, setChargement] = useState(false)
  const [erreur, setErreur] = useState('')

  const handleConnexion = async () => {
    if (!email || !motdepasse) {
      setErreur('Veuillez remplir tous les champs')
      return
    }
    setChargement(true)
    setErreur('')
    try {
      await signInWithEmailAndPassword(auth, email, motdepasse)
      window.location.href = '/mon-espace'
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setErreur('Aucun compte trouve avec cet email')
      } else if (error.code === 'auth/wrong-password') {
        setErreur('Mot de passe incorrect')
      } else {
        setErreur('Erreur de connexion. Verifiez vos informations')
      }
    }
    setChargement(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{backgroundColor: '#F8F8F8'}}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold" style={{color: '#FF6B00'}}>AVAMOUSSA</h1>
          <p className="text-gray-600 mt-1">Connectez-vous a votre espace</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8">
          {erreur && (
            <div style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="rounded-xl p-3 mb-4 text-sm text-center">{erreur}</div>
          )}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
              <input type="password" placeholder="Votre mot de passe" value={motdepasse} onChange={(e) => setMotdepasse(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
            </div>
            <button onClick={handleConnexion} disabled={chargement} style={{backgroundColor: '#FF6B00'}} className="text-white py-4 rounded-full font-bold text-lg mt-2">
              {chargement ? 'Connexion...' : 'Se connecter'}
            </button>
            <p className="text-center text-sm text-gray-600">
              Pas encore de compte ?{' '}
              <Link href="/inscription" style={{color: '#FF6B00'}} className="font-medium">Creer un compte</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
