import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="relative text-white text-center py-20 px-4 min-h-screen flex flex-col items-center justify-center" style={{backgroundImage: 'url(/hero.jpeg)', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
        <div style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)'}}></div>
        <div style={{position: 'relative', zIndex: 1}} className="max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <input type="text" placeholder="Rechercher une formation, un stage, une ville..." className="w-full max-w-xl px-6 py-4 rounded-full text-gray-800 text-sm sm:text-base focus:outline-none shadow-lg" />
          </div>
          <img src="/ava.jpeg" alt="AVAMOUSSA" style={{height: '80px', width: 'auto', margin: '0 auto 16px'}} />
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">STAGES AVAMOUSSA 2026</h1>
<p className="text-lg sm:text-xl mb-2" style={{opacity: 0.9}}>Methode AVAMOUSSA Elite x Malcolm</p>
<p className="text-sm sm:text-lg mb-8 max-w-3xl mx-auto leading-relaxed px-2">Apres le stage international France et Senegal, AVAMOUSSA lance des stages de natation de 6 jours a Dakar, Saly, Mbour, Thies et Saint-Louis pour former les debutants sur la nage du crawl.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="/reservation" style={{backgroundColor: '#FF6B00'}} className="text-white font-bold px-8 py-3 rounded-full text-lg">Reserver maintenant</a>
            <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white font-bold px-8 py-3 rounded-full text-lg">WhatsApp direct</a>
            <a href="https://whatsapp.com/channel/0029VbCbsac7T8bgkPysGt3L" style={{backgroundColor: '#0066CC'}} className="text-white font-bold px-8 py-3 rounded-full text-lg">Rejoindre la chaine</a>
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#111111'}} className="py-6 px-4 text-center">
        <p className="text-white text-lg font-bold">
          <span style={{color: '#FF6B00'}}>ATTENTION</span> — Places limitees ! Il reste <span style={{color: '#FF6B00'}}>12 places</span> pour le prochain stage
        </p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>STAGES AVAMOUSSA — JUILLET 2026</h2>
<p className="text-center text-gray-600 mb-10">6 jours de transformation avec la Methode AVAMOUSSA Elite x Malcolm</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { ville: 'Dakar', emoji: '🌊', places: 8, statut: 'Disponible' },
            { ville: 'Saly', emoji: '🏖️', places: 5, statut: 'Presque complet' },
            { ville: 'Mbour', emoji: '🌴', places: 12, statut: 'Disponible' },
            { ville: 'Thies', emoji: '🏙️', places: 10, statut: 'Disponible' },
            { ville: 'Saint-Louis', emoji: '🎯', places: 3, statut: 'Presque complet' },
            { ville: 'En ligne', emoji: '💻', places: 20, statut: 'Disponible' },
          ].map((s) => (
            <div key={s.ville} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div style={{backgroundColor: s.places <= 5 ? '#CC0000' : '#0066CC'}} className="p-4 text-white text-center">
                <div className="text-3xl mb-1">{s.emoji}</div>
                <h3 className="text-xl font-bold">{s.ville}</h3>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-600 text-sm mb-2">Places restantes</p>
                <p className="text-3xl font-bold mb-2" style={{color: s.places <= 5 ? '#CC0000' : '#FF6B00'}}>{s.places}</p>
                <span style={{backgroundColor: s.places <= 5 ? '#FFE6E6' : '#E6F4EA', color: s.places <= 5 ? '#CC0000' : '#2E7D32'}} className="text-xs px-3 py-1 rounded-full font-medium">{s.statut}</span>
                <div className="mt-4">
                  <a href="/reservation" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium block">Reserver</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10" style={{color: '#FF6B00'}}>Nos Formations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { titre: 'Coaching Prive', desc: 'A domicile ou piscine AVAMOUSSA. 1h par seance VIP personnalise.', emoji: '⭐' },
            { titre: 'Formation Privee', desc: '5 a 10 eleves maximum. Sans video publiee sur les reseaux.', emoji: '🏊' },
            { titre: 'Formation Promo', desc: '15 a 20 eleves. Avec videos publiees sur les reseaux sociaux.', emoji: '🎯' },
            { titre: 'Aquaphobie', desc: 'Pour enfants et adultes ayant peur de l eau. Methode douce.', emoji: '💙' },
          ].map((f) => (
            <div key={f.titre} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-3">{f.emoji}</div>
              <h3 className="text-lg font-bold mb-3" style={{color: '#0066CC'}}>{f.titre}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{f.desc}</p>
              <a href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium">Je reserve</a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" style={{color: '#FF6B00'}}>Temoignages eleves</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { nom: 'Moussa D.', texte: 'Avant j avais peur de l eau. Apres 6 seances avec AVAMOUSSA je nage ! Methode incroyable.', note: '⭐⭐⭐⭐⭐' },
            { nom: 'Fatou S.', texte: 'Mon fils de 8 ans nage maintenant seul. AVAMOUSSA a transforme sa vie. Merci !', note: '⭐⭐⭐⭐⭐' },
            { nom: 'Ibrahima B.', texte: 'Le meilleur investissement de ma vie. La methode est unique et les resultats sont rapides.', note: '⭐⭐⭐⭐⭐' },
          ].map((t) => (
            <div key={t.nom} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <p className="text-2xl mb-3">{t.note}</p>
              <p className="text-gray-600 leading-relaxed mb-4 italic">{t.texte}</p>
              <p className="font-bold" style={{color: '#FF6B00'}}>{t.nom}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Galerie des transformations</h2>
        <p className="text-center text-gray-600 mb-10">Avant et apres — nos eleves qui ont transforme leur vie</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {['🏊', '💪', '🎯', '🏆', '🌊', '⭐', '🥇', '🎉'].map((emoji, i) => (
            <a key={i} href="/galerie" style={{backgroundColor: '#E6F0FF'}} className="rounded-2xl h-40 flex items-center justify-center text-6xl hover:opacity-80 transition">{emoji}</a>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/galerie" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-3 rounded-full font-bold">Voir toute la galerie</Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10" style={{color: '#FF6B00'}}>Nos Partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { nom: 'Malcolm', role: 'Coach partenaire France', emoji: '🇫🇷' },
            { nom: 'B2S Store', role: 'Partenaire boutique', emoji: '🏪' },
            { nom: 'Piscines partenaires', role: 'Partenaire officiel', emoji: '🏊' },
          ].map((p) => (
            <div key={p.nom} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-bold" style={{color: '#0066CC'}}>{p.nom}</h3>
              <p className="text-gray-600 text-sm mt-1">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">A propos de AVAMOUSSA</h2>
          <p className="text-lg leading-relaxed mb-8">AVAMOUSSA est la premiere ecole de natation professionnelle au Senegal. Depuis 2023, notre mission est de former des nageurs confiants et de sauver des vies grace a la natation.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { chiffre: '200+', label: 'Eleves formes' },
              { chiffre: '2023', label: 'Annee de debut' },
              { chiffre: '5', label: 'Villes au Senegal' },
              { chiffre: '2', label: 'Pays couverts' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold" style={{color: '#FF6B00'}}>{s.chiffre}</p>
                <p className="text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/a-propos" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-3 rounded-full font-bold">En savoir plus</Link>
        </div>
      </section>

      <section className="py-16 px-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4" style={{color: '#FF6B00'}}>Contactez-nous</h2>
        <p className="text-gray-600 mb-8">Disponibles 7j/7 pour repondre a vos questions</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp — 78 501 59 69</a>
          <a href="https://instagram.com/avamoussa.z" style={{backgroundColor: '#E1306C'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">Instagram</a>
        </div>
      </section>

    </main>
  )
}