import React, { useEffect, useState } from 'react'
import './ComingSoon.css'

const ComingSoon: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length)
    }
  }

  const images = [
    '/assets/grid-view/474581413_629309472885166_5344410509555292510_n.jpg',
    '/assets/grid-view/474745541_629304356219011_8383925119962198929_n.jpg',
    '/assets/grid-view/487549746_689835843559885_4846915069271499123_n.jpg',
    '/assets/grid-view/487886335_689835423559927_1105927186176174643_n.jpg',
    '/assets/grid-view/503563474_736885608854908_4835939213272009089_n.jpg',
    '/assets/grid-view/517594801_766075272602608_8216639341401445011_n.jpg',
    '/assets/grid-view/517704565_766075209269281_1190333363071007838_n.jpg',
    '/assets/grid-view/557729700_835517365658398_1346972867897369949_n.jpg',
    '/assets/grid-view/558091748_835517492325052_5375433594120132772_n.jpg'
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#fe0000] to-[#fcc611] flex items-center justify-center p-3 md:p-5 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(/assets/banner.jpg)',
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <article className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 md:p-10 text-center shadow-2xl max-w-4xl w-full animate-fade-in">
        <header className="mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow overflow-hidden bg-white">
            <img src="/assets/logo.jpg" alt="JP Fashion Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 animate-slide-down">JP Fashion</h1>
          <p className="text-lg md:text-xl text-white/90">Online Dress Shopping</p>
        </header>
        
        <section className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#fcc611] to-[#fe0000] bg-clip-text text-transparent mb-6 animate-pulse-slow">Coming Soon</h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto">
            Ladies, gents and kids clothing, bags, shoes and accessories, lifestyle, home appliances.
            Quality products, affordable prices, under one roof!
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Shop at JP Fashion</h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-4 items-start">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <img src={img} alt={`JP Fashion clothing collection ${idx + 1}`} className="w-full h-48 md:h-64 object-cover object-top" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <iframe 
            className="w-full h-64 md:h-80" 
            frameBorder="0" 
            scrolling="no" 
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=JP%20Fashion%20Oruwala&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            title="JP Fashion Oruwala Location">
          </iframe>
        </section>
        
        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Us</h2>
          <div className="flex flex-row justify-center items-center gap-4">
            <a href="tel:0112772154" className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white p-3 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg" aria-label="Call JP Fashion">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </a>
            <a href="https://wa.me/94711660660" target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-green-600/80 hover:bg-green-600 border border-white/20 text-white p-3 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg" aria-label="WhatsApp JP Fashion">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a href="https://web.facebook.com/jptextilesl" target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-blue-600/80 hover:bg-blue-600 border border-white/20 text-white p-3 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg" aria-label="Facebook JP Fashion">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@jpfashion._?lang=en-GB" target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-black/80 hover:bg-black border border-white/20 text-white p-3 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg" aria-label="TikTok JP Fashion">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </section>
        
        <footer className="mt-6 text-white/70 text-sm">
          © 2025 JP Fashion, All Rights Reserved
        </footer>
      </article>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 text-white bg-[#fe0000] hover:bg-[#fcc611] rounded-full p-3 transition-all hover:scale-110 z-10 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 md:left-4 text-white bg-[#fcc611] hover:bg-[#fe0000] rounded-full p-2 md:p-3 transition-all hover:scale-110 z-10 cursor-pointer"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 md:right-4 text-white bg-[#fcc611] hover:bg-[#fe0000] rounded-full p-2 md:p-3 transition-all hover:scale-110 z-10 cursor-pointer"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <img
            src={images[selectedImageIndex]}
            alt="Full screen"
            className="max-w-full max-h-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}

export default ComingSoon