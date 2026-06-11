export default function Boutique() {
  const produits = [
    { nom: 'Bonnet AVAMOUSSA', prix: 3500, promo: null, emoji: '🏊', categorie: 'Accessoire', desc: 'Bonnet officiel AVAMOUSSA — confortable et resistant' },
    { nom: 'Lunettes de natation', prix: 7500, promo: 6000, emoji: '🥽', categorie: 'Accessoire', desc: 'Lunettes anti-buee — protection UV — vision claire' },
    { nom: 'Maillot AVAMOUSSA', prix: 18000, promo: null, emoji: '👙', categorie: 'Vetement', desc: 'Maillot officiel AVAMOUSSA — qualite professionnelle' },
    { nom: 'T-shirt AVAMOUSSA', prix: 12000, promo: 9000, emoji: '👕', categorie: 'Vetement', desc: 'T-shirt AVAMOUSSA — coton premium — logo brode' },
    { nom: 'Planche de natation', prix: 8000, promo: null, emoji: '🏄', categorie: 'Materiel', desc: 'Planche de natation professionnelle — mousse haute densite' },
    { nom: 'Pull buoy', prix: 6000, promo: null, emoji: '🟠', categorie: 'Materiel', desc: 'Pull buoy pour travailler les bras — materiau resistant' },
    { nom: 'Serviette microfibre', prix: 9000, promo: 7500, emoji: '🏳️', categorie: 'Accessoire', desc: 'Serviette microfibre AVAMOUSSA — seche rapidement' },
    { nom: 'Sac natation AVAMOUSSA', prix: 15000, promo: null, emoji: '🎒', categorie: 'Accessoire', desc: 'Sac filet officiel AVAMOUSSA — imperméable et solide' },
  ]

  const digitaux = [
    { nom: 'Programme PDF Crawl Debutant', prix: 2500, emoji: '📄', desc: 'Guide complet pour apprendre le crawl en 6 jours — 30 pages — exercices detailles' },
    { nom: 'Ebook Securite Aquatique', prix: 2000, emoji: '📘', desc: 'Tout savoir sur la securite en piscine et en mer — conseils pour parents et enfants' },
    { nom: 'Programme Aquaphobie PDF', prix: 3000, emoji: '💙', desc: 'Programme de 10 seances pour vaincre la peur de l eau — methode AVAMOUSSA' },
    { nom: 'Formation Video Crawl', prix: 15000, emoji: '🎥', desc: '5 heures de videos — technique crawl complete — Methode AVAMOUSSA Elite x Malcolm' },
    { nom: 'Coaching Digital 1 mois', prix: 25000, emoji: '💻', desc: 'Suivi personnalise par WhatsApp pendant 1 mois — corrections videos — programme sur mesure' },
    { nom: 'Pack Complet AVAMOUSSA', prix: 35000, promo: 28000, emoji: '🏆', desc: 'PDF crawl + PDF aquaphobie + formation video + 1 mois coaching digital — OFFRE SPECIALE' },
  ]

  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Boutique AVAMOUSSA</h1>
        <p className="text-xl mb-4">Equipez-vous avec les meilleurs produits de natation</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span style={{backgroundColor: 'rgba(255,255,255,0.2)'}} className="px-4 py-2 rounded-full text-sm font-medium">Paiement Wave</span>
          <span style={{backgroundColor: 'rgba(255,255,255,0.2)'}} className="px-4 py-2 rounded-full text-sm font-medium">Orange Money</span>
          <span style={{backgroundColor: 'rgba(255,255,255,0.2)'}} className="px-4 py-2 rounded-full text-sm font-medium">Livraison Dakar</span>
          <span style={{backgroundColor: 'rgba(255,255,255,0.2)'}} className="px-4 py-2 rounded-full text-sm font-medium">Tout le Senegal</span>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4" style={{color: '#FF6B00'}}>Produits physiques</h2>
        <p className="text-gray-600 mb-8">Bonnets, lunettes, vetements et equipements de natation</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produits.map((p) => (
            <div key={p.nom} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              {p.promo && (
                <div style={{backgroundColor: '#CC0000'}} className="text-white text-center text-xs font-bold py-1">PROMO</div>
              )}
              <div style={{backgroundColor: '#F8F8F8'}} className="h-32 flex items-center justify-center text-6xl">{p.emoji}</div>
              <div className="p-4">
                <span style={{backgroundColor: '#E6F0FF', color: '#0066CC'}} className="text-xs font-medium px-2 py-1 rounded-full">{p.categorie}</span>
                <h3 className="font-bold mt-2 mb-1 text-sm">{p.nom}</h3>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-2 mb-3">
                  {p.promo ? (
                    <>
                      <span className="text-lg font-bold" style={{color: '#FF6B00'}}>{p.promo.toLocaleString()} FCFA</span>
                      <span className="text-sm text-gray-400 line-through">{p.prix.toLocaleString()}</span>
                    </>
                  ) : (
                    <span className="text-lg font-bold" style={{color: '#FF6B00'}}>{p.prix.toLocaleString()} FCFA</span>
                  )}
                </div>
                <a href={`https://wa.me/221785015969?text=Bonjour je veux commander : ${p.nom} — ${p.promo || p.prix} FCFA`} style={{backgroundColor: '#FF6B00'}} className="text-white px-4 py-2 rounded-full text-xs font-medium block text-center">Commander</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{color: '#0066CC'}}>Produits digitaux</h2>
          <p className="text-gray-600 mb-8">Ebooks, formations video, programmes PDF et coaching en ligne</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitaux.map((d) => (
              <div key={d.nom} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                {d.promo && (
                  <div style={{backgroundColor: '#CC0000'}} className="text-white text-center text-xs font-bold py-1">OFFRE SPECIALE</div>
                )}
                <div style={{backgroundColor: '#E6F0FF'}} className="h-28 flex items-center justify-center text-6xl">{d.emoji}</div>
                <div className="p-4">
                  <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-xs font-medium px-2 py-1 rounded-full">Digital</span>
                  <h3 className="font-bold mt-2 mb-1 text-sm">{d.nom}</h3>
                  <p className="text-gray-500 text-xs mb-3 leading-relaxed">{d.desc}</p>
                  <div className="flex items-center gap-2 mb-3">
                    {d.promo ? (
                      <>
                        <span className="text-lg font-bold" style={{color: '#FF6B00'}}>{d.promo.toLocaleString()} FCFA</span>
                        <span className="text-sm text-gray-400 line-through">{d.prix.toLocaleString()}</span>
                      </>
                    ) : (
                      <span className="text-lg font-bold" style={{color: '#FF6B00'}}>{d.prix.toLocaleString()} FCFA</span>
                    )}
                  </div>
                  <a href={`https://wa.me/221785015969?text=Bonjour je veux acheter : ${d.nom}`} style={{backgroundColor: '#0066CC'}} className="text-white px-4 py-2 rounded-full text-xs font-medium block text-center">Acheter maintenant</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10" style={{color: '#FF6B00'}}>Comment payer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="font-bold text-lg mb-2" style={{color: '#0066CC'}}>Wave</h3>
            <p className="text-gray-600 text-sm mb-4">Paiement instantane par Wave — envoyez au 78 501 59 69</p>
            <a href="https://wa.me/221785015969?text=Je veux payer par Wave" style={{backgroundColor: '#1A73E8'}} className="text-white px-6 py-2 rounded-full text-sm font-bold block">Payer par Wave</a>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <div className="text-5xl mb-4">🟠</div>
            <h3 className="font-bold text-lg mb-2" style={{color: '#FF6B00'}}>Orange Money</h3>
            <p className="text-gray-600 text-sm mb-4">Paiement par Orange Money — envoyez au 78 501 59 69</p>
            <a href="https://wa.me/221785015969?text=Je veux payer par Orange Money" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-bold block">Payer par Orange Money</a>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="font-bold text-lg mb-2" style={{color: '#25D366'}}>WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-4">Commandez directement sur WhatsApp — reponse rapide garantie</p>
            <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white px-6 py-2 rounded-full text-sm font-bold block">Commander sur WhatsApp</a>
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-8 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4" style={{color: '#FF6B00'}}>Livraison disponible</h3>
          <div className="flex justify-center gap-6 flex-wrap text-sm text-gray-600">
            <span>📦 Livraison Dakar — 24h</span>
            <span>🇸🇳 Tout le Senegal — 48 a 72h</span>
            <span>✅ Produits digitaux — instantane</span>
          </div>
        </div>
      </section>

    </main>
  )
}