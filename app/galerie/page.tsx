export default function Galerie() {
  const temoignages = [
    { nom: 'Moussa Diallo', age: '28 ans', note: 5, texte: 'Avant je ne savais pas nager et j avais peur de l eau. Apres 6 seances avec AVAMOUSSA je nage le crawl ! Methode incroyable et coach tres patient.', formation: 'Stage Promo Dakar', emoji: '🧑' },
    { nom: 'Fatou Sow', age: 'Maman de Amadou 9 ans', note: 5, texte: 'Mon fils avait une peur terrible de l eau. Aujourd hui il nage seul et adore la piscine. Merci AVAMOUSSA pour cette transformation !', formation: 'Programme Aquaphobie', emoji: '👩' },
    { nom: 'Ibrahima Ba', age: '35 ans', note: 5, texte: 'Le meilleur investissement de ma vie. En 6 jours j ai appris a nager le crawl. La pedagogie est unique et les resultats sont rapides et concrets.', formation: 'Coaching Prive VIP', emoji: '👨' },
    { nom: 'Aissatou Diop', age: '22 ans', note: 5, texte: 'Je recommande AVAMOUSSA a tout le monde. Methode serieuse, coach professionnel et ambiance super positive. J ai adore chaque seance !', formation: 'Stage Prive', emoji: '👩' },
    { nom: 'Omar Ndiaye', age: '42 ans', note: 5, texte: 'A 42 ans j ai appris a nager grace a AVAMOUSSA. Je pensais que c etait impossible a mon age. Coach patient et pedagogie adaptee a chaque niveau.', formation: 'Programme Aquaphobie', emoji: '👨' },
    { nom: 'Mariama Fall', age: '15 ans', note: 5, texte: 'Super stage ! J ai appris le crawl en 6 jours. Le coach est top et les exercices sont bien expliques. Je recommande a tous mes amis !', formation: 'Stage Promo Dakar', emoji: '👧' },
  ]

  const transformations = [
    { avant: 'Peur de l eau', apres: 'Nage le crawl', emoji: '🏊', duree: '6 jours' },
    { avant: 'Ne sait pas nager', apres: 'Nage 50 metres', emoji: '💪', duree: '6 seances' },
    { avant: 'Aquaphobie severe', apres: 'Aime la piscine', emoji: '💙', duree: '10 seances' },
    { avant: 'Debutant complet', apres: 'Nage en mer', emoji: '🌊', duree: '6 jours' },
  ]

  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Galerie de Transformations</h1>
        <p className="text-xl">AVAMOUSSA transforme des vies a travers la natation</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Transformations reelles</h2>
        <p className="text-center text-gray-600 mb-10">Avant et apres — nos eleves qui ont change leur vie</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((t) => (
            <div key={t.avant} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div style={{backgroundColor: '#F8F8F8'}} className="h-32 flex items-center justify-center text-7xl">{t.emoji}</div>
              <div className="p-4">
                <div className="flex flex-col gap-2 mb-3">
                  <div style={{backgroundColor: '#FFE6E6'}} className="rounded-xl p-2 text-center">
                    <p className="text-xs text-gray-500">Avant</p>
                    <p className="font-bold text-sm" style={{color: '#CC0000'}}>{t.avant}</p>
                  </div>
                  <div className="text-center text-xl">↓</div>
                  <div style={{backgroundColor: '#E6F4EA'}} className="rounded-xl p-2 text-center">
                    <p className="text-xs text-gray-500">Apres</p>
                    <p className="font-bold text-sm" style={{color: '#2E7D32'}}>{t.apres}</p>
                  </div>
                </div>
                <p className="text-center text-xs font-bold" style={{color: '#FF6B00'}}>En {t.duree}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Videos avant/apres</h2>
          <p className="text-center text-gray-600 mb-10">Retrouvez toutes nos videos de transformation sur TikTok et Instagram</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['🏊', '💪', '🎯', '🏆', '🌊', '⭐', '🥇', '🎉'].map((emoji, i) => (
              <a key={i} href="https://www.tiktok.com/@avamoussa.z" target="_blank" style={{backgroundColor: '#E6F0FF'}} className="rounded-2xl h-40 flex flex-col items-center justify-center gap-2 hover:opacity-80 transition">
                <span className="text-5xl">{emoji}</span>
                <span className="text-xs text-gray-500">Voir la video</span>
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://www.tiktok.com/@avamoussa.z" target="_blank" style={{backgroundColor: '#000000'}} className="text-white px-8 py-3 rounded-full font-bold">TikTok @avamoussa.z</a>
            <a href="https://www.instagram.com/avamoussa.z" target="_blank" style={{backgroundColor: '#E1306C'}} className="text-white px-8 py-3 rounded-full font-bold">Instagram @avamoussa.z</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Temoignages des eleves AVAMOUSSA</h2>
        <p className="text-center text-gray-600 mb-10">Ce que disent nos eleves apres leur formation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temoignages.map((t) => (
            <div key={t.nom} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div style={{backgroundColor: '#FFF0E6'}} className="w-12 h-12 rounded-full flex items-center justify-center text-2xl">{t.emoji}</div>
                <div>
                  <p className="font-bold">{t.nom}</p>
                  <p className="text-xs text-gray-500">{t.age}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(t.note)].map((_, i) => (
                  <span key={i} style={{color: '#FF6B00'}} className="text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">{t.texte}</p>
              <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-xs px-3 py-1 rounded-full font-medium">{t.formation}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Vous voulez apparaitre dans notre galerie ?</h2>
        <p className="text-lg mb-8">Inscrivez-vous a une formation et rejoignez la famille AVAMOUSSA</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/formations" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">Voir les formations</a>
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp — 78 501 59 69</a>
        </div>
      </section>

    </main>
  )
}