 export default function Galerie() {
  const photos = [
    { emoji: '🏊', titre: 'Seance de natation', categorie: 'Formation' },
    { emoji: '🏆', titre: 'Competition AVAMOUSSA', categorie: 'Competition' },
    { emoji: '👶', titre: 'Cours enfants', categorie: 'Formation' },
    { emoji: '🇫🇷🇸🇳', titre: 'Stage France Senegal', categorie: 'Stage' },
    { emoji: '💪', titre: 'Coaching prive VIP', categorie: 'Coaching' },
    { emoji: '🎯', titre: 'Entrainement intensif', categorie: 'Formation' },
    { emoji: '📸', titre: 'Shooting TikTok', categorie: 'Reseaux' },
    { emoji: '🥇', titre: 'Remise de certificats', categorie: 'Competition' },
    { emoji: '👨‍👩‍👧‍👦', titre: 'Famille AVAMOUSSA', categorie: 'Communaute' },
  ]

  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Galerie AVAMOUSSA</h1>
        <p className="text-xl">Nos meilleurs moments en photos et videos</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p) => (
            <div key={p.titre} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div style={{backgroundColor: '#F8F8F8'}} className="h-48 flex items-center justify-center text-8xl">
                {p.emoji}
              </div>
              <div className="p-4">
                <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-xs font-medium px-3 py-1 rounded-full">{p.categorie}</span>
                <h3 className="font-bold mt-2 text-gray-800">{p.titre}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{color: '#FF6B00'}}>Suivez-nous sur les reseaux</h2>
        <p className="text-gray-600 mb-8">Retrouvez toutes nos videos et photos sur TikTok et Instagram</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://tiktok.com/@avamoussa" style={{backgroundColor: '#000000'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">TikTok @avamoussa</a>
          <a href="https://instagram.com/avamoussa" style={{backgroundColor: '#E1306C'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">Instagram @avamoussa</a>
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Vous voulez apparaitre dans notre galerie ?</h2>
        <p className="text-lg mb-8">Inscrivez-vous a une formation et rejoignez la famille AVAMOUSSA</p>
        <a href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">Voir les formations</a>
      </section>

    </main>
  )
}
