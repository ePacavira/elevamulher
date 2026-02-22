import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'

const Historia = () => {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const timelineEvents = [
    {
      year: '2023',
      title: 'O Início',
      description: 'A Eleva Mulher nasceu da necessidade de criar uma rede de apoio sólida e transparente para mulheres em situação de vulnerabilidade. Observando as dificuldades que muitas mulheres enfrentam diariamente, decidimos agir.',
      description2: 'Com o compromisso de oferecer apoio material, social e médico, começamos nossa jornada com a missão de fazer a diferença na vida de cada mulher que cruza nosso caminho.',
      color: 'verde-petroleo',
    },
    {
      year: '2024',
      title: 'Nossa Evolução',
      description: 'Ao longo do tempo, expandimos nossos programas e fortalecemos nossa rede de apoio. Cada doação, cada voluntário e cada mulher ajudada nos motiva a continuar crescendo.',
      description2: 'Hoje, somos uma comunidade unida, guiada pelos valores de transparência, amor, impacto e comunidade. Acreditamos que juntas podemos transformar vidas e construir um futuro melhor.',
      color: 'caramelo',
    },
    {
      year: 'Hoje',
      title: 'O Presente',
      description: 'Continuamos a crescer e a impactar mais vidas a cada dia. Nossa rede se expande e nosso compromisso com a transparência e o impacto positivo permanece firme.',
      description2: 'Estamos construindo um futuro onde todas as mulheres têm acesso ao apoio necessário para prosperar e alcançar seus objetivos.',
      color: 'dourado-couro',
    },
  ]

  const selectedEvent = timelineEvents[selectedIndex]
  
  const colorClasses = {
    'verde-petroleo': {
      bg: 'bg-verde-petroleo',
      text: 'text-verde-petroleo',
      border: 'border-verde-petroleo/30',
      gradient: 'from-verde-petroleo/20 to-verde-petroleo/10',
    },
    'caramelo': {
      bg: 'bg-caramelo',
      text: 'text-caramelo',
      border: 'border-caramelo/30',
      gradient: 'from-caramelo/20 to-caramelo/10',
    },
    'dourado-couro': {
      bg: 'bg-dourado-couro',
      text: 'text-dourado-couro',
      border: 'border-dourado-couro/30',
      gradient: 'from-dourado-couro/20 to-dourado-couro/10',
    },
  }
  
  const colors = colorClasses[selectedEvent.color as keyof typeof colorClasses]

  const nextEvent = () => {
    setSelectedIndex((prev) => (prev + 1) % timelineEvents.length)
  }

  const prevEvent = () => {
    setSelectedIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length)
  }

  // Troca automática a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % timelineEvents.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [timelineEvents.length])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-petroleo to-marrom-escuro text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://plus.unsplash.com/premium_photo-1675034824937-addb3c6da91a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGlzdCVDMyVCM3JpYSUyMGRhcyUyME11bGhlcmVzfGVufDB8fDB8fHww"
            alt="Nossa História"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">Nossa História</span>
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-caramelo to-dourado-couro rounded-full"></span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Conheça a jornada que nos trouxe até aqui
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Vertical Interativa */}
      <section className="relative overflow-hidden bg-white pb-0">

        <div className="container-custom relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Timeline Vertical - Lado Esquerdo */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24">
                <div className="relative" style={{ minHeight: 'calc(100vh - 8rem)' }}>
                  {/* Linha vertical da timeline - vai de cima para baixo até o final */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-marrom-escuro/20"></div>
                  
                  <div className="space-y-32 relative pt-8">
                    {timelineEvents.map((event, index) => {
                      const eventColors = colorClasses[event.color as keyof typeof colorClasses]
                      const isSelected = index === selectedIndex
                      
                      return (
                        <motion.button
                          key={event.year}
                          onClick={() => setSelectedIndex(index)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`relative flex items-center w-full text-left group ${
                            isSelected ? 'z-20' : 'z-10'
                          }`}
                        >
                          {/* Ponto na linha */}
                          <div className={`absolute left-6 transform -translate-x-1/2 transition-all duration-300 z-10 ${
                            isSelected 
                              ? `w-3 h-3 ${eventColors.bg} border-2 border-white rounded-full shadow-sm` 
                              : 'w-2.5 h-2.5 bg-transparent border-2 border-marrom-escuro/30 rounded-full'
                          }`}></div>
                          
                          {/* Ano */}
                          <div className={`ml-12 transition-all duration-300 ${
                            isSelected 
                              ? 'text-marrom-escuro text-5xl md:text-6xl font-bold' 
                              : 'text-marrom-escuro/40 text-2xl md:text-3xl font-normal hover:text-marrom-escuro/60'
                          }`}>
                            {event.year}
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo do Evento - Lado Direito */}
            <div className="lg:col-span-8 flex items-center">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-white rounded-xl p-8 md:p-12 border border-marrom-escuro/10 shadow-sm">
                  {/* Navegação */}
                  <div className="flex items-center justify-between mb-10 pb-6 border-b border-marrom-escuro/10">
                    <button
                      onClick={prevEvent}
                      className="flex items-center gap-2 text-marrom-escuro/60 hover:text-marrom-escuro transition-colors group"
                    >
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="text-sm font-medium">Anterior</span>
                    </button>
                    
                    <span className="text-marrom-escuro/50 text-xs font-medium uppercase tracking-wider">
                      {selectedIndex + 1} de {timelineEvents.length}
                    </span>
                    
                    <button
                      onClick={nextEvent}
                      className="flex items-center gap-2 text-marrom-escuro/60 hover:text-marrom-escuro transition-colors group"
                    >
                      <span className="text-sm font-medium">Próximo</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Badge do Ano */}
                  <div className="inline-block mb-8">
                    <span className={`px-3 py-1.5 ${colors.bg} text-white rounded-full text-xs font-semibold tracking-wide`}>
                      {selectedEvent.year}
                    </span>
                  </div>

                  {/* Título */}
                  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${colors.text} mb-8 leading-tight`}>
                    {selectedEvent.title}
                  </h2>

                  {/* Descrição */}
                  <div className="space-y-5 text-marrom-escuro/70 text-base md:text-lg leading-relaxed">
                    <p>{selectedEvent.description}</p>
                    <p>{selectedEvent.description2}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80"
            alt="Junte-se a nós"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-marrom-escuro/80 via-marrom-escuro/75 to-verde-petroleo/80"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative inline-block">
              <span className="relative z-10">Faça Parte Desta História</span>
              <span className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-caramelo to-dourado-couro rounded-full"></span>
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              Sua contribuição ajuda a escrever novos capítulos de esperança e transformação.
            </p>
            <Button to="/como-ajudar" variant="secondary" className="text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-shadow">
              Quero Ajudar
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Historia

