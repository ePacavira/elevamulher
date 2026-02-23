import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import LogoFull from '../components/LogoFull'
import plpImage from '../assets/plp.png'
import backImage from '../assets/back.png'

const PARTICLES_COUNT = 45
const particleColors = ['rgba(166, 91, 58, 0.35)', 'rgba(196, 138, 42, 0.3)', 'rgba(225, 183, 122, 0.4)', 'rgba(74, 47, 26, 0.25)']

const Landing = () => {
  const [hoveredCard, setHoveredCard] = useState<'home' | 'evento' | null>(null)

  const particles = useMemo(() =>
    Array.from({ length: PARTICLES_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 3,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    })),
    []
  )

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [])
  return (
    <div className="relative h-screen overflow-hidden flex flex-col">
      {/* Fundo que muda de coloração ao hover nos cards */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{
          background:
            hoveredCard === 'home'
              ? 'linear-gradient(to bottom right, rgba(47, 111, 103, 0.25), #F3E1C7, #F0E8E0)'
              : hoveredCard === 'evento'
                ? 'radial-gradient(ellipse 80% 80% at 50% 50%, #F5EDE4 0%, #EDE4D4 40%, #E5D9C4 70%), radial-gradient(ellipse 150% 150% at 0% 0%, rgba(166, 91, 58, 0.25) 0%, transparent 50%), radial-gradient(ellipse 150% 150% at 100% 0%, rgba(166, 91, 58, 0.2) 0%, transparent 50%), radial-gradient(ellipse 150% 150% at 0% 100%, rgba(74, 47, 26, 0.3) 0%, transparent 50%), radial-gradient(ellipse 150% 150% at 100% 100%, rgba(74, 47, 26, 0.25) 0%, transparent 50%), linear-gradient(135deg, #F0E6D8 0%, #EDE0D0 30%, #E8DCC8 60%, #E2D4BC 100%)'
                : 'linear-gradient(to bottom right, #F3E1C7, #FAF6F0, #F0E8E0)',
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      {/* Partículas - só visíveis ao hover no Evento */}
      <AnimatePresence>
        {hoveredCard === 'evento' && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                }}
                animate={{
                  y: [0, -15, -8, -20, 0],
                  x: [0, 8, -5, 12, 0],
                  scale: [1, 1.2, 0.9, 1.1, 1],
                  opacity: [0.3, 0.6, 0.4, 0.55, 0.3],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-10 flex flex-col flex-1 min-h-0">
      {/* Header */}
      <header className="pt-6 md:pt-8 pb-2 px-4 shrink-0">
        <div className="container-custom flex justify-center">
          <Link to="/" className="flex items-center">
            <LogoFull />
          </Link>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 min-h-0 overflow-hidden">
        <div className="container-custom max-w-4xl w-full flex flex-col items-center gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marrom-escuro mb-2">
              Bem-vinda à Eleva Mulher
            </h1>
            <p className="text-lg text-marrom-escuro/70 max-w-2xl mx-auto">
              Escolha onde deseja ir
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 w-full max-w-2xl md:max-w-3xl mx-auto">
            {/* Opção Home */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setHoveredCard('home')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to="/home">
                <div className="group relative h-full bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-verde-petroleo/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-verde-petroleo to-verde-petroleo/70 rounded-l-2xl" />
                  <div className="relative h-24 sm:h-28 -mx-5 -mt-5 md:-mx-6 md:-mt-6 mb-4 overflow-hidden rounded-t-2xl">
                    <img
                      src={backImage}
                      alt="Eleva Mulher - Rede de apoio solidária"
                      className="w-full h-full object-cover object-[center_50%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-verde-petroleo to-verde-petroleo/80 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform absolute top-3 right-3 sm:top-4 sm:right-4 z-10 shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-marrom-escuro mb-2">Home</h2>
                  <p className="text-marrom-escuro/70 leading-relaxed">
                    Conheça a nossa rede de apoio solidária, missão e formas de ajudar.
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-verde-petroleo font-semibold group-hover:gap-3 transition-all">
                    Ir para o site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Opção Evento */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onMouseEnter={() => setHoveredCard('evento')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to="/evento-imersao">
                <div className="group relative h-full bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-caramelo/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-caramelo to-dourado-couro rounded-l-2xl" />
                  <div className="relative h-24 sm:h-28 -mx-5 -mt-5 md:-mx-6 md:-mt-6 mb-4 overflow-hidden rounded-t-2xl">
                    <img
                      src={plpImage}
                      alt="Encontro de Imersão"
                      className="w-full h-full object-cover object-[center_50%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-caramelo to-dourado-couro rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform absolute top-3 right-3 sm:top-4 sm:right-4 z-10 shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-marrom-escuro mb-2">Encontro de Imersão</h2>
                  <p className="text-marrom-escuro/70 leading-relaxed mb-2">
                    Entre o Silêncio e a Voz
                  </p>
                  <p className="text-sm text-marrom-escuro/60">
                    28 de Março · 9h às 13h
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-terracota font-semibold group-hover:gap-3 transition-all">
                    Ver detalhes do evento
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="py-4 shrink-0 text-center text-marrom-escuro/60 text-sm">
        Eleva Mulher · Nos ajude a ajudar
      </footer>
      </div>
    </div>
  )
}

export default Landing
