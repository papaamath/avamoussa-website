export default function Stages() {
  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Stages Internationaux</h1>
        <p className="text-xl">Vivez une experience unique avec AVAMOUSSA</p>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-8">
          <div style={{backgroundColor: '#0066CC'}} className="p-6 text-white">
            <span className="text-3xl">🇫🇷🇸🇳</span>
            <h2 className="text-2xl font-bold mt-2">Stage International AVAMOUSSA x Malcolm</h2>
            <p className="text-lg">France — Senegal</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Date</p>
                <p className="font-bold" style={{color: '#FF6B00'}}>A venir</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Lieu</p>
                <p className="font-bold" style={{color: '#FF6B00'}}>France + Senegal</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Places</p>
                <p className="font-bold" style={{color: '#FF6B00'}}>Limitees</p>
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Niveau</p>
                <p className="font-bold" style={{color: '#FF6B00'}}>Tous niveaux</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{color: '#0066CC'}}>Programme du stage</h3>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl">🏊</span>
                <p className="text-gray-700">Seances de natation intensives avec la Methode AVAMOUSSA Elite x Malcolm</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl">🎯</span>
                <p className="text-gray-700">Coaching personnalise et suivi individuel</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl">📸</span>
                <p className="text-gray-700">Seances photos et videos professionnelles</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl">🏆</span>
                <p className="text-gray-700">Certificat de participation officiel AVAMOUSSA</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl">🤝</span>
                <p className="text-gray-700">Echanges entre nageurs senegalais et francais</p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-gray-500">Prix du stage</p>
                <p className="text-3xl font-bold" style={{color: '#FF6B00'}}>Sur devis</p>
              </div>
              <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">Reserver ma place</a>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: '#FFF0E6'}} className="rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold mb-3" style={{color: '#FF6B00'}}>Prochain stage bientot annonce</h3>
          <p className="text-gray-600 mb-4">Laissez votre contact pour etre informe en premier</p>
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-3 rounded-full font-bold">Me prevenir sur WhatsApp</a>
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Une question sur les stages ?</h2>
        <p className="text-lg mb-8">Contactez-nous sur WhatsApp</p>
        <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp — 78 501 59 69</a>
      </section>

    </main>
  )
}