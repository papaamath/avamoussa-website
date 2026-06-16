export default function APropos() {
  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">A propos de AVAMOUSSA</h1>
        <p className="text-xl">Apprendre a vie, avec amour</p>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{color: '#FF6B00'}}>Notre Histoire</h2>
        <div className="flex flex-col gap-6 text-gray-700 leading-relaxed text-lg">
          <p>AVAMOUSSA est nee d'une histoire vraie, d'un parcours de transformation et d'une conviction profonde : si une personne peut apprendre a nager, elle peut apprendre n'importe quoi dans sa vie.</p>
          <p>Depuis mon enfance, j'ai toujours aime apprendre, partager et transmettre. Durant mon parcours scolaire puis universitaire a l'UCAD, au departement Mathematiques, Physique et Informatique, je revais deja d'aider les autres a progresser.</p>
          <p>Pourtant, apres l'obtention de mon baccalaureat, je traversais une periode difficile. Sans meme le savoir, je vivais une forme de depression liee aux incertitudes de l'avenir. C'est a cette periode que la plage est devenue pour moi un lieu de liberte et de reconstruction.</p>
          <div style={{backgroundColor: '#FFF0E6', borderLeft: '4px solid #FF6B00'}} className="rounded-xl p-6">
            <p className="font-bold text-xl mb-2" style={{color: '#FF6B00'}}>En 2022, je ne savais ni flotter, ni me deplacer dans l'eau.</p>
            <p>J'ai alors commence un long travail sur moi-meme a travers des formations en developpement personnel, en prise de parole en public, en entrepreneuriat et bien sur en natation.</p>
          </div>
          <p>Au fil du temps, j'ai decouvert en moi un etat d'esprit que j'ai appele AVAMOUSSA : apprendre toute sa vie, se transformer et transmettre aux autres ce que l'on a appris.</p>
          <div style={{backgroundColor: '#E6F0FF', borderLeft: '4px solid #0066CC'}} className="rounded-xl p-6">
            <p className="font-bold text-xl mb-2" style={{color: '#0066CC'}}>Au debut de l'ete 2024</p>
            <p>Une de mes videos sur la natation est devenue virale sur les reseaux sociaux. J'ai alors realise que des milliers de personnes au Senegal ne savaient pas nager et vivaient avec la peur de l'eau.</p>
          </div>
          <p>J'ai compris qu'il existait un immense besoin et surtout une opportunite de creer une solution accessible a tous. C'est ainsi qu'est nee l'Ecole de Natation AVAMOUSSA.</p>
          <p>Nous avons commence modestement avec quelques eleves qui nous ont accorde leur confiance. Aujourd'hui, notre mission reste la meme : transformer des vies grace a la natation.</p>
          <div style={{backgroundColor: '#F8F8F8'}} className="rounded-2xl p-6">
            <p className="font-bold text-xl mb-3" style={{color: '#FF6B00'}}>Notre approche</p>
            <p>Nous privilegions volontairement des groupes reduits afin d'offrir un accompagnement personnalise et obtenir un maximum de resultats pour chaque eleve.</p>
          </div>
          <div style={{backgroundColor: '#FFF0E6'}} className="rounded-2xl p-6">
            <p className="text-xl font-bold mb-3" style={{color: '#FF6B00'}}>Chez AVAMOUSSA, nous ne formons pas seulement des nageurs.</p>
            <p>Nous aidons des personnes a vaincre leurs peurs, a developper leur confiance en elles et a decouvrir qu'elles sont capables de bien plus qu'elles ne l'imaginent.</p>
          </div>
          <p>Notre ambition est de rendre la natation accessible a tous les Senegalais et de former des milliers de personnes partout au Senegal.</p>
          <div style={{backgroundColor: '#0066CC'}} className="rounded-2xl p-6 text-white text-center">
            <p className="text-2xl font-bold mb-2">Bienvenue dans l'aventure AVAMOUSSA</p>
            <p className="mb-4">Reservez votre place pour rejoindre une communaute qui transforme ses faiblesses en forces grace a la natation.</p>
            <a href="/reservation" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-3 rounded-full font-bold inline-block">Reserver maintenant</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold" style={{color: '#FF6B00'}}>200+</p>
            <p className="text-gray-600 text-sm mt-1">Eleves formes</p>
          </div>
          <div>
            <p className="text-4xl font-bold" style={{color: '#FF6B00'}}>2023</p>
            <p className="text-gray-600 text-sm mt-1">Annee de debut</p>
          </div>
          <div>
            <p className="text-4xl font-bold" style={{color: '#FF6B00'}}>5</p>
            <p className="text-gray-600 text-sm mt-1">Villes au Senegal</p>
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
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/reservation" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">Reserver maintenant</a>
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp — 78 501 59 69</a>
        </div>
      </section>

    </main>
  )
}