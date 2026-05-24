export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">AVAMOUSSA</h1>
        <p className="text-2xl mb-2">Apprendre à vie, avec amour 🧡</p>
        <p className="text-lg mb-8 opacity-90">École de natation au Sénégal — Méthode AVAMOUSSA Élite x Malcolm™</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/formations" style={{backgroundColor: 'white', color: '#FF6B00'}} className="font-bold px-8 py-3 rounded-full text-lg">
            S'inscrire maintenant
          </a>
          <a href="/contact" style={{border: '2px solid white'}} className="text-white font-bold px-8 py-3 rounded-full text-lg">
            Contact WhatsApp
          </a>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6" style={{color: '#FF6B00'}}>Notre Mission</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Former des nageurs confiants et sauver des vies grâce à la natation.
          AVAMOUSSA est la première école de natation professionnelle au Sénégal,
          avec une méthode unique adaptée à tous les niveaux.
        </p>
      </section>

      {/* FORMATIONS */}
      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#FF6B00'}}>Nos Formations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { titre: 'Coaching Privé', desc: 'À domicile ou piscine AVAMOUSSA. 1h par séance, VIP personnalisé.', prix: 'Sur devis' },
            { titre: 'Formation Privée', desc: '5 à 10 élèves maximum. Sans vidéo publiée sur les réseaux.', prix: 'Sur devis' },
            { titre: 'Formation Promo', desc: '15 à 20 élèves. Avec vidéos publiées sur les réseaux sociaux.', prix: 'Accessible' },
            { titre: 'Aquaphobie', desc: 'Pour enfants et adultes ayant peur de l\'eau. Méthode douce.', prix: 'Sur devis' },
          ].map((f) => (
            <div key={f.titre} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <h3 className="text-xl font-bold mb-3" style={{color: '#0066CC'}}>{f.titre}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{f.desc}</p>
              <p className="font-bold mb-4" style={{color: '#FF6B00'}}>{f.prix}</p>
              <a href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium">
                Je réserve
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contacte-nous</h2>
        <p className="text-lg mb-8 opacity-90">📞 78 501 59 69</p>
        <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white font-bold px-8 py-3 rounded-full text-lg">
          WhatsApp direct 💬
        </a>
      </section>

    </main>
  )
}