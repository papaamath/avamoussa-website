 export default function Partenaires() {
  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Nos Partenaires</h1>
        <p className="text-xl">Ensemble pour developper la natation au Senegal</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Partenaires officiels</h2>
        <p className="text-center text-gray-600 mb-10">Ils nous font confiance et nous accompagnent dans notre mission</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#0066CC'}} className="p-6 text-white">
              <div className="text-4xl mb-2">🏪</div>
              <h3 className="text-2xl font-bold">B2S Store</h3>
              <p className="text-sm" style={{opacity: 0.9}}>Partenaire boutique officiel</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">B2S Store est notre partenaire officiel pour la vente d equipements de natation au Senegal. Retrouvez tous les produits AVAMOUSSA en boutique.</p>
              <div className="flex flex-col gap-2 mb-4">
                <p className="text-sm text-gray-500">Type de collaboration</p>
                <span style={{backgroundColor: '#E6F0FF', color: '#0066CC'}} className="text-sm px-3 py-1 rounded-full font-medium w-fit">Distribution produits</span>
              </div>
              <a href="https://wa.me/221785015969?text=Je veux en savoir plus sur B2S Store" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium block text-center">Contacter B2S Store</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#FF6B00'}} className="p-6 text-white">
              <div className="text-4xl mb-2">🇫🇷</div>
              <h3 className="text-2xl font-bold">Malcolm</h3>
              <p className="text-sm" style={{opacity: 0.9}}>Coach partenaire — France</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">Malcolm est notre coach partenaire base en France. Ensemble nous avons cree la Methode AVAMOUSSA Elite x Malcolm pour former les nageurs au Senegal et en France.</p>
              <div className="flex flex-col gap-2 mb-4">
                <p className="text-sm text-gray-500">Type de collaboration</p>
                <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-sm px-3 py-1 rounded-full font-medium w-fit">Methode et stages internationaux</span>
              </div>
              <a href="https://wa.me/221785015969?text=Je veux en savoir plus sur Malcolm" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium block text-center">En savoir plus</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#0066CC'}} className="p-6 text-white">
              <div className="text-4xl mb-2">🏊</div>
              <h3 className="text-2xl font-bold">Piscines partenaires</h3>
              <p className="text-sm" style={{opacity: 0.9}}>Dakar, Saly, Mbour, Thies, Saint-Louis</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">AVAMOUSSA collabore avec les meilleures piscines du Senegal pour offrir des conditions optimales de formation a nos eleves.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Dakar', 'Saly', 'Mbour', 'Thies', 'Saint-Louis'].map((v) => (
                  <span key={v} style={{backgroundColor: '#E6F0FF', color: '#0066CC'}} className="text-xs px-3 py-1 rounded-full font-medium">{v}</span>
                ))}
              </div>
              <a href="https://wa.me/221785015969?text=Je veux connaitre les piscines partenaires" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium block text-center">Voir les piscines</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#FF6B00'}} className="p-6 text-white">
              <div className="text-4xl mb-2">🏨</div>
              <h3 className="text-2xl font-bold">Hotels partenaires</h3>
              <p className="text-sm" style={{opacity: 0.9}}>Saly, Mbour et regions</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">Nos hotels partenaires accueillent nos stages et offrent des conditions ideales pour nos eleves lors des stages residentiels.</p>
              <div className="flex flex-col gap-2 mb-4">
                <span style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-sm px-3 py-1 rounded-full font-medium w-fit">Stages residentiels</span>
              </div>
              <a href="https://wa.me/221785015969?text=Je veux connaitre les hotels partenaires" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium block text-center">En savoir plus</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#0066CC'}} className="p-6 text-white">
              <div className="text-4xl mb-2">🏫</div>
              <h3 className="text-2xl font-bold">Ecoles partenaires</h3>
              <p className="text-sm" style={{opacity: 0.9}}>Senegal</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">AVAMOUSSA collabore avec des ecoles pour initier les enfants a la natation des le plus jeune age. Programme special ecoles disponible.</p>
              <div className="flex flex-col gap-2 mb-4">
                <span style={{backgroundColor: '#E6F0FF', color: '#0066CC'}} className="text-sm px-3 py-1 rounded-full font-medium w-fit">Programme scolaire</span>
              </div>
              <a href="https://wa.me/221785015969?text=Je suis une ecole et je veux collaborer avec AVAMOUSSA" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium block text-center">Programme ecoles</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div style={{backgroundColor: '#FF6B00'}} className="p-6 text-white">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="text-2xl font-bold">Sponsors</h3>
              <p className="text-sm" style={{opacity: 0.9}}>Soutenez AVAMOUSSA</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">Rejoignez les sponsors AVAMOUSSA et participez au developpement de la natation au Senegal. Visibilite garantie sur tous nos supports de communication.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Logo sur site', 'Reseaux sociaux', 'Stages', 'Certificats'].map((b) => (
                  <span key={b} style={{backgroundColor: '#FFF0E6', color: '#CC5500'}} className="text-xs px-3 py-1 rounded-full font-medium">{b}</span>
                ))}
              </div>
              <a href="https://wa.me/221785015969?text=Je veux sponsoriser AVAMOUSSA" style={{backgroundColor: '#FF6B00'}} className="text-white px-6 py-2 rounded-full text-sm font-medium block text-center">Devenir sponsor</a>
            </div>
          </div>

        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{color: '#FF6B00'}}>Devenir partenaire AVAMOUSSA</h2>
          <p className="text-center text-gray-600 mb-8">Vous souhaitez collaborer avec AVAMOUSSA ? Remplissez ce formulaire et nous vous recontacterons rapidement.</p>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de votre entreprise</label>
                <input type="text" placeholder="Ex: Mon Entreprise" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre nom et prenom</label>
                <input type="text" placeholder="Ex: Moussa Diallo" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telephone WhatsApp</label>
                <input type="tel" placeholder="Ex: 77 000 00 00" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                <input type="email" placeholder="contact@monentreprise.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type de partenariat</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none">
                  <option value="">Choisir un type</option>
                  <option>Sponsor financier</option>
                  <option>Partenaire piscine</option>
                  <option>Partenaire hotel</option>
                  <option>Partenaire ecole</option>
                  <option>Partenaire boutique</option>
                  <option>Partenaire media</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea placeholder="Decrivez votre proposition de partenariat..." rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none resize-none" />
              </div>
              <a href="https://wa.me/221785015969?text=Bonjour AVAMOUSSA je souhaite devenir partenaire" style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-4 rounded-full font-bold text-lg">Envoyer ma proposition</a>
              <a href="mailto:avamoussa012z@gmail.com" style={{backgroundColor: '#0066CC'}} className="text-white text-center py-3 rounded-full font-bold">Envoyer par Email</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ensemble pour la natation au Senegal</h2>
        <p className="text-lg mb-8">Rejoignez le mouvement AVAMOUSSA et participez au developpement du sport aquatique</p>
        <a href="https://wa.me/221785015969" style={{backgroundColor: '#FF6B00'}} className="text-white px-8 py-4 rounded-full font-bold text-lg">Nous contacter — 78 501 59 69</a>
      </section>

    </main>
  )
}
