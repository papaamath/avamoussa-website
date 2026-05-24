export default function APropos() {
  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">A propos de AVAMOUSSA</h1>
        <p className="text-xl">Apprendre a vie, avec amour</p>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#FF6B00'}}>Notre Histoire</h2>
            <p className="text-gray-600 leading-relaxed mb-4">AVAMOUSSA est nee d'une passion profonde pour la natation et d'un desir de partager ce sport avec le plus grand nombre au Senegal.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Depuis nos debuts, nous avons forme des centaines de nageurs de tous ages et de tous niveaux, des enfants ayant peur de l eau jusqu'aux nageurs competiteurs.</p>
            <p className="text-gray-600 leading-relaxed">Notre mission est simple : rendre la natation accessible a tous les Senegalais et sauver des vies grace a ce sport.</p>
          </div>
          <div style={{backgroundColor: '#FFF0E6'}} className="rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🏊</div>
            <h3 className="text-2xl font-bold mb-2" style={{color: '#FF6B00'}}>AVAMOUSSA</h3>
            <p className="text-gray-600">Ecole de natation professionnelle au Senegal</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold mb-3" style={{color: '#FF6B00'}}>Notre Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Former des nageurs confiants et sauver des vies grace a la natation au Senegal et en Afrique.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100">
            <div className="text-4xl mb-3">👁️</div>
            <h3 className="text-xl font-bold mb-3" style={{color: '#FF6B00'}}>Notre Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Devenir la plus grande ecole de natation du Senegal et creer une plateforme de formation natation africaine.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="text-xl font-bold mb-3" style={{color: '#FF6B00'}}>Nos Valeurs</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Amour, respect, excellence et engagement envers chaque eleve pour les aider a atteindre leur plein potentiel.</p>
          </div>
        </div>

        <div style={{backgroundColor: '#F8F8F8'}} className="rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#FF6B00'}}>La Methode AVAMOUSSA Elite x Malcolm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div style={{backgroundColor: '#FF6B00'}} className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold mb-1" style={{color: '#0066CC'}}>Evaluation initiale</h4>
                <p className="text-gray-600 text-sm">Chaque eleve est evalue individuellement pour determiner son niveau et ses objectifs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div style={{backgroundColor: '#FF6B00'}} className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold mb-1" style={{color: '#0066CC'}}>Programme personnalise</h4>
                <p className="text-gray-600 text-sm">Un programme sur mesure est cree pour chaque eleve selon son niveau et ses objectifs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div style={{backgroundColor: '#FF6B00'}} className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold mb-1" style={{color: '#0066CC'}}>Suivi progressif</h4>
                <p className="text-gray-600 text-sm">Chaque seance est documentee pour suivre la progression et ajuster le programme.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div style={{backgroundColor: '#FF6B00'}} className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold mb-1" style={{color: '#0066CC'}}>Certification finale</h4>
                <p className="text-gray-600 text-sm">Chaque eleve recoit un certificat officiel AVAMOUSSA a la fin de sa formation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
          <div>
            <p className="text-4xl font-bold" style={{color: '#FF6B00'}}>500+</p>
            <p className="text-gray-600 text-sm mt-1">Eleves formes</p>
          </div>
          <div>
            <p className="text-4xl font-bold" style={{color: '#FF6B00'}}>5+</p>
            <p className="text-gray-600 text-sm mt-1">Annees experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold" style={{color: '#FF6B00'}}>10+</p>
            <p className="text-gray-600 text-sm mt-1">Stages organises</p>
          </div>
          <div>
            <p className="text-4xl font-bold" style={{color: '#FF6B00'}}>2</p>
            <p className="text-gray-600 text-sm mt-1">Pays couverts</p>
          </div>
        </div>

      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Rejoignez la famille AVAMOUSSA</h2>
        <p className="text-lg mb-8">Commencez votre aventure avec nous aujourd'hui</p>
        <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">Nous contacter sur WhatsApp</a>
      </section>

    </main>
  )
}
