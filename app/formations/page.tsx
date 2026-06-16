import InscriptionForm from './InscriptionForm'

export default function Formations() {
  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Nos Formations</h1>
        <p className="text-xl">Choisissez la formation adaptee a votre niveau</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#FF6B00'}} className="p-6 text-white">
              <div className="text-4xl mb-3">⭐</div>
              <h2 className="text-2xl font-bold">Coaching Prive VIP</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">Coaching personnalise a domicile ou a la piscine AVAMOUSSA. Suivi individuel avec la Methode AVAMOUSSA Elite x Malcolm.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Duree</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>1h30 par seance</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Eleves</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>1 eleve</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Seances</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>6 seances</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold" style={{color: '#0066CC'}}>200 000 FCFA</span>
                <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-medium">Je reserve</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
  <div style={{backgroundColor: '#0066CC'}} className="p-6 text-white">
    <div className="text-4xl mb-3">💙</div>
    <h2 className="text-2xl font-bold">Aquaphobie</h2>
  </div>
  <div className="p-6">
    <p className="text-gray-600 mb-6">Programme special pour enfants et adultes ayant peur de l eau. Methode douce et progressive.</p>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="text-center bg-gray-50 rounded-xl p-3">
        <p className="text-xs text-gray-500 mb-1">Seances</p>
        <p className="font-bold text-sm" style={{color: '#FF6B00'}}>6 seances</p>
      </div>
      <div className="text-center bg-gray-50 rounded-xl p-3">
        <p className="text-xs text-gray-500 mb-1">Places max</p>
        <p className="font-bold text-sm" style={{color: '#FF6B00'}}>5 eleves</p>
      </div>
      <div className="text-center bg-gray-50 rounded-xl p-3">
        <p className="text-xs text-gray-500 mb-1">Niveau</p>
        <p className="font-bold text-sm" style={{color: '#FF6B00'}}>Debutants peur eau</p>
      </div>
      <div className="text-center bg-gray-50 rounded-xl p-3">
        <p className="text-xs text-gray-500 mb-1">Objectif</p>
        <p className="font-bold text-sm" style={{color: '#FF6B00'}}>Confiance et flottaison</p>
      </div>
    </div>
    <div style={{backgroundColor: '#E6F0FF'}} className="rounded-xl p-3 mb-4">
      <p className="text-xs text-center" style={{color: '#0066CC'}}>Confiance, flottaison et deplacements de base</p>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold" style={{color: '#0066CC'}}>50 000 FCFA</span>
      <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-medium">Je reserve</a>
    </div>
  </div>
</div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#FF6B00'}} className="p-6 text-white">
              <div className="text-4xl mb-3">🎯</div>
              <h2 className="text-2xl font-bold">Stage Promo</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">Formation en groupe avec publication des videos sur TikTok et Instagram AVAMOUSSA. Rejoins la communaute.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Duree</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>1h par seance</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Eleves</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>15 a 20 eleves</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Seances</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>6 seances</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold" style={{color: '#0066CC'}}>60 000 FCFA</span>
                <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-medium">Je reserve</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#0066CC'}} className="p-6 text-white">
              <div className="text-4xl mb-3">💙</div>
              <h2 className="text-2xl font-bold">Aquaphobie</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">Programme special pour enfants et adultes ayant peur de l eau. Methode douce et progressive.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Duree</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>45min</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Eleves</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>Individuel</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Seances</p>
                  <p className="font-bold text-sm" style={{color: '#FF6B00'}}>Selon niveau</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold" style={{color: '#0066CC'}}>Sur devis</span>
                <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-3 rounded-full font-medium">Je reserve</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#FF6B00'}}>Formulaire inscription</h2>
          <InscriptionForm />
        </div>
      </section>

    </main>
  )
}