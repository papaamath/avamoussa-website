 export default function Boutique() {
  const produits = [
    { nom: 'Bonnet AVAMOUSSA', prix: '5 000 FCFA', emoji: '🏊', categorie: 'Accessoire' },
    { nom: 'Lunettes de natation', prix: '8 000 FCFA', emoji: '🥽', categorie: 'Accessoire' },
    { nom: 'Maillot AVAMOUSSA', prix: '15 000 FCFA', emoji: '👙', categorie: 'Vetement' },
    { nom: 'T-shirt AVAMOUSSA', prix: '10 000 FCFA', emoji: '👕', categorie: 'Vetement' },
    { nom: 'Programme PDF Natation', prix: '3 000 FCFA', emoji: '📄', categorie: 'Digital' },
    { nom: 'Planche de natation', prix: '12 000 FCFA', emoji: '🏄', categorie: 'Materiel' },
  ]

  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Boutique AVAMOUSSA</h1>
        <p className="text-xl">Equipez-vous avec les meilleurs produits de natation</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produits.map((p) => (
            <div key={p.nom} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div style={{backgroundColor: '#F8F8F8'}} className="h-40 flex items-center justify-center text-7xl">
                {p.emoji}
              </div>
              <div className="p-5">
                <span style={{backgroundColor: '#E6F0FF', color: '#0066CC'}} className="text-xs font-medium px-3 py-1 rounded-full">{p.categorie}</span>
                <h3 className="text-lg font-bold mt-3 mb-2">{p.nom}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold" style={{color: '#FF6B00'}}>{p.prix}</span>
                  <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-4 py-2 rounded-full text-sm font-medium">Commander</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{color: '#FF6B00'}}>Livraison disponible</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="font-bold mb-2" style={{color: '#0066CC'}}>Livraison Dakar</h3>
            <p className="text-gray-600 text-sm">Livraison rapide dans tout Dakar</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-4xl mb-3">🇸🇳</div>
            <h3 className="font-bold mb-2" style={{color: '#0066CC'}}>Tout le Senegal</h3>
            <p className="text-gray-600 text-sm">Livraison dans toutes les regions</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-bold mb-2" style={{color: '#0066CC'}}>Paiement facile</h3>
            <p className="text-gray-600 text-sm">Wave, Orange Money, Free Money</p>
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Commander maintenant</h2>
        <p className="text-lg mb-8">Contactez-nous sur WhatsApp pour passer votre commande</p>
        <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp — 78 501 59 69</a>
      </section>

    </main>
  )
}
