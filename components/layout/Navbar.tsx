'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [utilisateur, setUtilisateur] = useState<any>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUtilisateur(user)
    })
    return () => unsub()
  }, [])

  const handleDeconnexion = async () => {
    await signOut(auth)
    window.location.href = '/'
  }

  return (
    <nav style={{backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}} className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
  <img src="/ava.jpeg" alt="AVAMOUSSA" style={{height: '45px', width: 'auto'}} />
</Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/formations" className="hover:text-orange-500 transition">Formations</Link>
          <Link href="/stages" className="hover:text-orange-500 transition">Stages</Link>
          <Link href="/boutique" className="hover:text-orange-500 transition">Boutique</Link>
          <Link href="/galerie" className="hover:text-orange-500 transition">Galerie</Link>
          <Link href="/a-propos" className="hover:text-orange-500 transition">A propos</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
          <Link href="/partenaires" className="hover:text-orange-500 transition">Partenaires</Link>
          <Link href="/reservation" className="hover:text-orange-500 transition">Reservation</Link>
          {utilisateur ? (
            <div className="flex items-center gap-3">
              <Link href="/mon-espace" style={{backgroundColor: '#0066CC'}} className="text-white px-4 py-2 rounded-full font-medium">Mon espace</Link>
              <button onClick={handleDeconnexion} style={{border: '1px solid #FF6B00', color: '#FF6B00'}} className="px-4 py-2 rounded-full font-medium">Deconnexion</button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/connexion" style={{border: '1px solid #FF6B00', color: '#FF6B00'}} className="px-4 py-2 rounded-full font-medium">Connexion</Link>
              <Link href="/inscription" style={{backgroundColor: '#FF6B00'}} className="text-white px-4 py-2 rounded-full font-medium">S inscrire</Link>
            </div>
          )}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" style={{color: '#FF6B00'}}>
          {open ? 'X' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3 text-sm font-medium border-t">
          <Link href="/formations" onClick={() => setOpen(false)} className="py-2 border-b">Formations</Link>
          <Link href="/stages" onClick={() => setOpen(false)} className="py-2 border-b">Stages</Link>
          <Link href="/boutique" onClick={() => setOpen(false)} className="py-2 border-b">Boutique</Link>
          <Link href="/galerie" onClick={() => setOpen(false)} className="py-2 border-b">Galerie</Link>
          <Link href="/a-propos" onClick={() => setOpen(false)} className="py-2 border-b">A propos</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-2 border-b">Contact</Link>
          <Link href="/partenaires" className="hover:text-orange-500 transition">Partenaires</Link>
          <Link href="/reservation" className="hover:text-orange-500 transition">Reservation</Link>
          {utilisateur ? (
            <Link href="/mon-espace" onClick={() => setOpen(false)} style={{backgroundColor: '#0066CC'}} className="text-white text-center py-2 rounded-full font-medium">Mon espace</Link>
          ) : (
            <Link href="/inscription" onClick={() => setOpen(false)} style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-2 rounded-full font-medium">S inscrire</Link>
          )}
        </div>
      )}
    </nav>
  )
}