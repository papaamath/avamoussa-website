export default function Stages() {
  const stages = [
    {
      ville: 'Dakar',
      emoji: '🌊',
      lieu: 'Piscine olympique de Dakar',
      prix: '50 000 FCFA',
      horaires: 'Lundi au Samedi — 7h a 9h',
      seances: '6 seances sur 6 jours',
      places: 12,
      reservees: 8,
      couleur: '#0066CC',
      strategie: 'Jour 1-2 : adaptation eau / Jour 3-4 : technique crawl / Jour 5-6 : perfectionement',
    },
    {
      ville: 'Saly et Mbour',
      emoji: '🏖️',
      lieu: 'Piscine Hotel Saly + Plage Mbour',
      prix: '55 000 FCFA',
      horaires: 'Lundi au Samedi — 8h a 10h',
      seances: '6 seances sur 6 jours',
      places: 10,
      reservees: 5,
      couleur: '#FF6B00',
      strategie: 'Jour 1-2 : adaptation eau / Jour 3-4 : technique crawl / Jour 5-6 : nage en mer',
    },
    {
      ville: 'Thies',
      emoji: '🏙️',
      lieu: 'Piscine municipale de Thies',
      prix: '45 000 FCFA',
      horaires: 'Lundi au Samedi — 7h a 9h',
      seances: '6 seances sur 6 jours',
      places: 15,
      reservees: 3,
      couleur: '#0066CC',
      strategie: 'Jour 1-2 : adaptation eau / Jour 3-4 : technique crawl / Jour 5-6 : perfectionement',
    },
    {
      ville: 'Saint-Louis',
      emoji: '🎯',
      lieu: 'Piscine de Saint-Louis',
      prix: '45 000 FCFA',
      horaires: 'Lundi au Samedi — 7h a 9h',
      seances: '6 seances sur 6 jours',
      places: 12,
      reservees: 9,
      couleur: '#FF6B00',
      strategie: 'Jour 1-2 : adaptation eau / Jour 3-4 : technique crawl / Jour 5-6 : perfectionement',
    },
  ]

    const formations = [
    { titre: 'Coaching Prive VIP', emoji: '⭐', desc: 'Coaching personnalise a domicile ou a la piscine. Suivi individuel avec la Methode AVAMOUSSA Elite x Malcolm.', prix: '200 000 FCFA', seances: '6 seances de 1h30', places: 1 },
    { titre: 'Stage Prive', emoji: '🏊', desc: 'Formation en petit groupe sans publication sur les reseaux sociaux. Ideal pour rester discret.', prix: '80 000 FCFA', seances: '6 seances', places: 10 },
    { titre: 'Stage Promo', emoji: '🎯', desc: 'Formation en groupe avec publication des videos sur TikTok et Instagram AVAMOUSSA. Rejoins la communaute.', prix: '60 000 FCFA', seances: '6 seances', places: 20 },
    { titre: 'Aquaphobie', emoji: '💙', desc: 'Programme special pour enfants et adultes ayant peur de l eau. Methode douce, progressive et bienveillante.', prix: 'Sur devis', seances: 'Selon niveau', places: 5 },
  ]

  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Stages AVAMOUSSA</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Les stages AVAMOUSSA ont pour objectif de transformer des vies a travers la natation, aider les debutants a vaincre la peur de l eau et apprendre les bases du crawl avec une pedagogie moderne et humaine.
        </p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Nos formations</h2>
        <p className="text-center text-gray-600 mb-10">Choisissez la formation adaptee a votre niveau</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((f) => (
            <div key={f.titre} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div style={{backgroundColor: '#FF6B00'}} className="p-4 text-white text-center">
                <div className="text-3xl mb-1">{f.emoji}</div>
                <h3 className="font-bold">{f.titre}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{f.desc}</p>
                <p className="text-xs text-gray-500">Seances : <span className="font-bold" style={{color: '#FF6B00'}}>{f.seances}</span></p>
                <p className="text-xs text-gray-500 mb-3">Places max : <span className="font-bold" style={{color: '#0066CC'}}>{f.places}</span></p>
                <div className="flex items-center justify-between">
                  <span className="font-bold" style={{color: '#FF6B00'}}>{f.prix}</span>
                  <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-4 py-2 rounded-full text-xs font-medium">Reserver</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Zones de stages disponibles</h2>
          <p className="text-center text-gray-600 mb-10">Retrouvez AVAMOUSSA dans ces villes du Senegal</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stages.map((s) => (
              <div key={s.ville} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div style={{backgroundColor: s.couleur}} className="p-5 text-white">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{s.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold">Stage {s.ville}</h3>
                      <p className="text-sm" style={{opacity: 0.9}}>{s.lieu}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500">Prix</p>
                      <p className="font-bold" style={{color: '#FF6B00'}}>{s.prix}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500">Seances</p>
                      <p className="font-bold" style={{color: '#FF6B00'}}>{s.seances}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500">Horaires</p>
                      <p className="font-bold text-xs" style={{color: '#0066CC'}}>{s.horaires}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500">Places dispo</p>
                      <p className="font-bold" style={{color: s.places - s.reservees <= 3 ? '#CC0000' : '#2E7D32'}}>{s.places - s.reservees} / {s.places}</p>
                    </div>
                  </div>

                  <div style={{backgroundColor: '#FFF0E6'}} className="rounded-xl p-3 mb-4">
                    <p className="text-xs font-bold mb-1" style={{color: '#FF6B00'}}>Strategie des seances</p>
                    <p className="text-xs text-gray-600">{s.strategie}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Places reservees</span>
                      <span>{s.reservees}/{s.places}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div style={{backgroundColor: '#FF6B00', width: `${(s.reservees/s.places)*100}%`}} className="h-2 rounded-full"></div>
                    </div>
                  </div>

                  <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-bold text-sm block text-center">Reserver ma place</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🇫🇷🇸🇳</div>
          <h2 className="text-3xl font-bold mb-4">Stage International AVAMOUSSA x Malcolm</h2>
          <p className="text-lg mb-6" style={{opacity: 0.9}}>France — Senegal</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Duree', val: '6 jours' },
              { label: 'Niveau', val: 'Tous niveaux' },
              { label: 'Places', val: 'Limitees' },
              { label: 'Prochaine date', val: 'Bientot' },
            ].map((i) => (
              <div key={i.label} style={{backgroundColor: 'rgba(255,255,255,0.15)'}} className="rounded-xl p-4">
                <p className="text-xs mb-1" style={{opacity: 0.8}}>{i.label}</p>
                <p className="font-bold">{i.val}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {['🏊 Natation intensive', '📸 Videos pro', '🏆 Certificat', '🤝 Echanges culturels'].map((item) => (
              <div key={item} style={{backgroundColor: 'rgba(255,255,255,0.1)'}} className="rounded-xl p-3 text-sm">{item}</div>
            ))}
          </div>
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg inline-block">Reserver le stage international</a>
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: '#FF6B00'}}>Votez la prochaine ville AVAMOUSSA</h2>
          <p className="text-gray-600 mb-8">Quelle ville voulez-vous qu AVAMOUSSA visite en prochain ?</p>
          <div className="grid grid-cols-2 gap-4">
            {['Ziguinchor', 'Kaolack', 'Tambacounda', 'Diourbel', 'Louga', 'Fatick'].map((ville) => (
              <a key={ville} href={`https://wa.me/221785015969?text=Je vote pour ${ville} comme prochaine ville AVAMOUSSA !`} style={{backgroundColor: 'white', border: '2px solid #FF6B00', color: '#FF6B00'}} className="py-3 px-4 rounded-full font-bold text-center hover:bg-orange-50 transition">
                📍 {ville}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">Cliquez sur votre ville pour voter sur WhatsApp</p>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{color: '#FF6B00'}}>Une question sur les stages ?</h2>
        <p className="text-gray-600 mb-8">Contactez-nous directement sur WhatsApp</p>
        <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp — 78 501 59 69</a>
      </section>

    </main>
  )
}