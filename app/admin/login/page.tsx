'use client'
import { useState } from 'react'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function AdminLogin() {
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
      const result = await signInWithEmailAndPassword(auth, email, motdepasse)
      if (result.user.email !== 'avamoussa012z@gmail.com') {
        setErreur('Acces refuse — compte non autorise')
        await auth.signOut()
        setChargement(false)
        return
      }
      window.location.href = '/admin'
    } catch (error: any) {
      setErreur('Email ou mot de passe incorrect')
    }
    setChargement(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{backgroundColor: '#F8F8F8'}}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/ava.jpeg" alt="AVAMOUSSA" style={{height: '100px', width: 'auto', margin: '0 auto 16px'}} />
          <h1 className="text-2xl font-bold" style={{color: '#FF6B00'}}>Espace Administrateur</h1>
          <p className="text-gray-500 text-sm mt-1">Acces reserve a AVAMOUSSA</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8">
          {erreur && (
            <div style={{backgroundColor: '#FFE6E6', color: '#CC0000'}} className="rounded-xl p-3 mb-4 text-sm text-center font-medium">{erreur}</div>
          )}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email admin</label>
              <input type="email" placeholder="admin@avamoussa.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
              <input type="password" placeholder="Mot de passe admin" value={motdepasse} onChange={(e) => setMotdepasse(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
            </div>
            <button onClick={handleConnexion} disabled={chargement} style={{backgroundColor: '#FF6B00'}} className="text-white py-4 rounded-full font-bold text-lg mt-2">
              {chargement ? 'Connexion...' : 'Acceder au tableau de bord'}
            </button>
            <a href="/" className="text-center text-sm text-gray-500 hover:text-gray-700">Retour au site</a>
          </div>
        </div>
      </div>
    </main>
  )
}
