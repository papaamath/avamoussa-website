export default function Contact() {
  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl">Disponibles 7j/7 pour vous aider</p>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#FF6B00'}}>Nos coordonnees</h2>
            <div className="flex flex-col gap-5">

              <a href="https://wa.me/221785015969" className="flex items-center gap-4 hover:opacity-80 transition">
                <div style={{backgroundColor: '#25D366'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">💬</div>
                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <p className="font-bold">78 501 59 69</p>
                </div>
              </a>

              <a href="mailto:avamoussa012z@gmail.com" className="flex items-center gap-4 hover:opacity-80 transition">
                <div style={{backgroundColor: '#FF6B00'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">📧</div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-bold">avamoussa012z@gmail.com</p>
                </div>
              </a>

              <a href="https://whatsapp.com/channel/0029VbCbsac7T8bgkPysGt3L" target="_blank" className="flex items-center gap-4 hover:opacity-80 transition">
                <div style={{backgroundColor: '#128C7E'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">📢</div>
                <div>
                  <p className="text-xs text-gray-500">Chaine WhatsApp</p>
                  <p className="font-bold" style={{color: '#128C7E'}}>Rejoindre la chaine</p>
                </div>
              </a>

              <a href="https://www.instagram.com/avamoussa.z?igsh=a29idGViMGVnM3Vo&utm_source=qr" target="_blank" className="flex items-center gap-4 hover:opacity-80 transition">
                <div style={{backgroundColor: '#E1306C'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">📸</div>
                <div>
                  <p className="text-xs text-gray-500">Instagram</p>
                  <p className="font-bold" style={{color: '#E1306C'}}>@avamoussa.z</p>
                </div>
              </a>

              <a href="https://www.tiktok.com/@avamoussa.z?_r=1&_t=ZN-96eoMsT6sn0" target="_blank" className="flex items-center gap-4 hover:opacity-80 transition">
                <div style={{backgroundColor: '#000000'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">🎵</div>
                <div>
                  <p className="text-xs text-gray-500">TikTok</p>
                  <p className="font-bold">@avamoussa.z</p>
                </div>
              </a>

              <a href="https://www.facebook.com/share/1HK3M1jTJ9/?mibextid=wwXIfr" target="_blank" className="flex items-center gap-4 hover:opacity-80 transition">
                <div style={{backgroundColor: '#1877F2'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">📘</div>
                <div>
                  <p className="text-xs text-gray-500">Facebook</p>
                  <p className="font-bold" style={{color: '#1877F2'}}>AVAMOUSSA</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div style={{backgroundColor: '#0066CC'}} className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">📍</div>
                <div>
                  <p className="text-xs text-gray-500">Adresse</p>
                  <p className="font-bold">Dakar, Senegal</p>
                  <p className="text-sm text-gray-500">Saly, Mbour, Thies, Saint-Louis</p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#FF6B00'}}>Envoyer un message</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input type="text" placeholder="Votre nom" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telephone WhatsApp</label>
                <input type="tel" placeholder="Ex: 77 000 00 00" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea placeholder="Votre message..." rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none resize-none" />
              </div>
              <a href="https://wa.me/221785015969?text=Bonjour AVAMOUSSA je vous contacte depuis le site web" style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-4 rounded-full font-bold text-lg">Envoyer sur WhatsApp</a>
              <a href="mailto:avamoussa012z@gmail.com" style={{backgroundColor: '#0066CC'}} className="text-white text-center py-3 rounded-full font-bold">Envoyer par Email</a>
            </div>
          </div>

        </div>
      </section>

      <section style={{backgroundColor: '#F8F8F8'}} className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{color: '#FF6B00'}}>Retrouvez-nous</h2>
          <div className="rounded-2xl overflow-hidden shadow-md" style={{height: '300px'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0!2d-17.4441!3d14.6937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzM3LjMiTiAxN8KwMjYnMzguOCJX!5e0!3m2!1sfr!2ssn!4v1234567890"
              width="100%"
              height="300"
              style={{border: 0}}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#0066CC'}} className="py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Rejoignez la communaute AVAMOUSSA</h2>
        <p className="text-lg mb-8">Suivez-nous sur les reseaux sociaux</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white px-6 py-3 rounded-full font-bold">WhatsApp</a>
          <a href="https://whatsapp.com/channel/0029VbCbsac7T8bgkPysGt3L" style={{backgroundColor: '#128C7E'}} className="text-white px-6 py-3 rounded-full font-bold">Chaine WhatsApp</a>
          <a href="https://www.instagram.com/avamoussa.z?igsh=a29idGViMGVnM3Vo&utm_source=qr" style={{backgroundColor: '#E1306C'}} className="text-white px-6 py-3 rounded-full font-bold">Instagram</a>
          <a href="https://www.tiktok.com/@avamoussa.z" style={{backgroundColor: '#000000'}} className="text-white px-6 py-3 rounded-full font-bold">TikTok</a>
          <a href="https://www.facebook.com/share/1HK3M1jTJ9/?mibextid=wwXIfr" style={{backgroundColor: '#1877F2'}} className="text-white px-6 py-3 rounded-full font-bold">Facebook</a>
        </div>
      </section>

    </main>
  )
}