export default function Contact() {
  return (
    <main className="min-h-screen">

      <section style={{backgroundColor: '#FF6B00'}} className="text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl">78 501 59 69</p>
      </section>

      <section className="py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8" style={{color: '#FF6B00'}}>Ecrivez-nous</h2>
        <div className="flex flex-col gap-4">
          <a href="https://wa.me/221785015969" style={{backgroundColor: '#25D366'}} className="text-white py-4 rounded-full font-bold text-xl">
            WhatsApp — 78 501 59 69
          </a>
          <a href="https://instagram.com/avamoussa" style={{backgroundColor: '#E1306C'}} className="text-white py-4 rounded-full font-bold text-xl">
            Instagram @avamoussa
          </a>
          <a href="https://tiktok.com/@avamoussa" style={{backgroundColor: '#000000'}} className="text-white py-4 rounded-full font-bold text-xl">
            TikTok @avamoussa
          </a>
          <a href="https://facebook.com/avamoussa" style={{backgroundColor: '#1877F2'}} className="text-white py-4 rounded-full font-bold text-xl">
            Facebook AVAMOUSSA
          </a>
        </div>
      </section>

    </main>
  )
}