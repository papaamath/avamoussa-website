 'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}} className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold" style={{color: '#FF6B00'}}>
          AVAMOUSSA
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/formations" className="hover:text-orange-500 transition">Formations</Link>
          <Link href="/stages" className="hover:text-orange-500 transition">Stages</Link>
          <Link href="/boutique" className="hover:text-orange-500 transition">Boutique</Link>
          <Link href="/galerie" className="hover:text-orange-500 transition">Galerie</Link>
          <Link href="/a-propos" className="hover:text-orange-500 transition">À propos</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
          <Link href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
            S'inscrire
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" style={{color: '#FF6B00'}}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3 text-sm font-medium border-t">
          <Link href="/formations" onClick={() => setOpen(false)} className="py-2 border-b">Formations</Link>
          <Link href="/stages" onClick={() => setOpen(false)} className="py-2 border-b">Stages</Link>
          <Link href="/boutique" onClick={() => setOpen(false)} className="py-2 border-b">Boutique</Link>
          <Link href="/galerie" onClick={() => setOpen(false)} className="py-2 border-b">Galerie</Link>
          <Link href="/a-propos" onClick={() => setOpen(false)} className="py-2 border-b">À propos</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
          <Link href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-2 rounded-full font-medium">
            S'inscrire
          </Link>
        </div>
      )}
    </nav>
  )
}
