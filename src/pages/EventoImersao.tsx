import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import plpImage from '../assets/plp.png'
import svg02 from '../assets/02.svg'

const WHATSAPP_EVENTO = '244938565536'
const MENSAGEM_INSCRICAO = 'Olá! Gostaria de me inscrever no Encontro de Imersão - Entre o Silêncio e a Voz (28 de Março).'
const urlInscrever = `https://wa.me/${WHATSAPP_EVENTO}?text=${encodeURIComponent(MENSAGEM_INSCRICAO)}`

const EventoImersao = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-bege-claro via-[#FAF6F0] to-[#F0E8E0] bg-evento-pattern relative overflow-hidden">
      {/* Degradé que segue o mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-60"
        style={{
          background: `radial-gradient(circle 35vmax at ${mousePos.x}% ${mousePos.y}%, rgba(225, 183, 122, 0.4) 0%, rgba(217, 164, 65, 0.15) 30%, rgba(166, 91, 58, 0.08) 50%, transparent 70%)`,
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Hero com destaque */}
        <div className="absolute inset-0 z-0">
          <img
            src={plpImage}
            alt="Encontro de Imersão"
            className="w-full h-full object-cover object-center"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, rgba(74, 47, 26, 0.3) 100%),
                linear-gradient(135deg, rgba(74, 47, 26, 0.88) 0%, rgba(74, 47, 26, 0.78) 40%, rgba(47, 111, 103, 0.85) 100%)
              `
            }}
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-6xl mx-auto"
          >
            {/* Imagem */}
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <div className="h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] w-full flex items-center justify-center overflow-hidden">
                <img 
                  src={svg02} 
                  alt="Encontro de Imersão" 
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            </div>

            {/* Texto e botões */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                Encontro de Imersão
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 mb-2 font-light italic">
                Entre o Silêncio e a Voz
              </p>
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-caramelo to-transparent mb-3 sm:mb-4 lg:mx-0 mx-auto"></div>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-2 max-w-xl lg:max-w-none leading-relaxed">
                Prepare-se para um mergulho profundo de escuta, consciência e despertar interior
              </p>
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 flex items-center gap-2 justify-center lg:justify-start">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>28 de Março · 9h às 13h</span>
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center lg:items-start"
              >
                <Button href={urlInscrever} variant="primary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 min-w-[140px]">
                  Inscrever-me
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 min-w-[140px]">
                  Saber Mais
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sobre o Evento - Destaque verde-petroleo */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-evento-sobre" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-verde-petroleo/10 text-verde-petroleo text-sm font-semibold mb-6">
              O QUE É
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marrom-escuro mb-6">
              Sobre o Encontro
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-verde-petroleo via-caramelo to-terracota mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-marrom-escuro/80 leading-relaxed max-w-3xl mx-auto">
              O Encontro de Imersão é um espaço seguro e acolhedor criado especialmente para mulheres que buscam crescimento pessoal, 
              conexão genuína e fortalecimento da comunidade. Durante este dia especial, oferecemos workshops, palestras inspiradoras, 
              momentos de reflexão e oportunidades únicas de networking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Conexão', description: 'Conecte-se com outras mulheres em um ambiente acolhedor e inspirador', color: 'from-verde-petroleo to-verde-petroleo/80', borderColor: 'border-verde-petroleo/30 hover:border-verde-petroleo', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Crescimento', description: 'Workshops e palestras que promovem desenvolvimento pessoal e profissional', color: 'from-caramelo to-dourado-couro', borderColor: 'border-caramelo/30 hover:border-caramelo', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Transformação', description: 'Uma experiência que transforma vidas e fortalece a comunidade feminina', color: 'from-terracota to-caramelo', borderColor: 'border-terracota/30 hover:border-terracota', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-2 ${item.borderColor}`}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-marrom-escuro mb-3 text-center">{item.title}</h3>
                <p className="text-marrom-escuro/70 text-center leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programação - Destaque caramelo/dourado */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-evento-programacao" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-caramelo/20 text-marrom-escuro text-sm font-semibold mb-6">
              CRONOGRAMA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marrom-escuro mb-6">
              Programação
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-verde-petroleo via-caramelo to-terracota mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto relative pl-4 md:pl-0">
            {/* Linha vertical da timeline */}
            <div className="absolute left-6 md:left-12 top-8 bottom-8 w-0.5 bg-gradient-to-b from-verde-petroleo/40 via-caramelo/60 to-terracota/40 rounded-full"></div>

            <div className="space-y-6">
              {[
                { time: '09:00', title: 'Acolhimento e Café da Manhã', description: 'Momento de boas-vindas e networking' },
                { time: '10:00', title: 'Abertura Oficial', description: 'Palestra de abertura com tema inspirador' },
                { time: '11:00', title: 'Workshop: Desenvolvimento Pessoal', description: 'Sessão interativa de crescimento pessoal' },
                { time: '12:00', title: 'Workshop: Empoderamento', description: 'Ferramentas práticas para fortalecimento' },
                { time: '13:00', title: 'Encerramento e Conexões', description: 'Momento de reflexão e criação de laços' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex gap-6 items-stretch"
                >
                  {/* Ponto na linha */}
                  <div className="absolute left-4 md:left-10 w-4 h-4 rounded-full bg-gradient-to-br from-verde-petroleo to-caramelo border-4 border-white shadow-md z-10 top-1/2 -translate-y-1/2"></div>

                  {/* Card */}
                  <div className="flex-1 ml-8 md:ml-16">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-bege-claro/50 hover:border-verde-petroleo/30 transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-verde-petroleo to-verde-petroleo/80 rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-md group-hover:scale-105 transition-transform">
                            {item.time}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-marrom-escuro mb-1">{item.title}</h3>
                          <p className="text-marrom-escuro/70 text-sm md:text-base">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informações do Evento - Destaque terracota */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-evento-informacoes" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-terracota/20 text-marrom-escuro text-sm font-semibold mb-6">
              INFORMAÇÕES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-marrom-escuro mb-6">
              Detalhes do Evento
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-verde-petroleo via-caramelo to-terracota mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-transparent hover:border-verde-petroleo/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-verde-petroleo to-verde-petroleo/80 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-marrom-escuro mb-2">Contactos</h3>
              <a href="tel:+244938565536" className="text-verde-petroleo hover:underline text-sm">+244 938 565 536</a>
              <a href="tel:+244931710176" className="text-verde-petroleo hover:underline text-sm mt-1">+244 931 710 176</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-caramelo/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-caramelo to-dourado-couro rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-marrom-escuro mb-2">Localização</h3>
              <p className="text-marrom-escuro/70 text-sm">Brevemente</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-terracota/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-terracota to-caramelo rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-marrom-escuro mb-2">Data e Hora</h3>
              <p className="text-marrom-escuro/70 text-sm">28 de Março · 9h às 13h</p>
            </motion.div>

            <motion.a
              href="https://elevamulher.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border-2 border-transparent hover:border-verde-petroleo/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-verde-petroleo to-marrom-escuro rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-bold text-marrom-escuro mb-2">Mais Informações</h3>
              <p className="text-verde-petroleo hover:underline text-sm break-all">elevamulher.vercel.app</p>
            </motion.a>
          </div>

          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-bege-claro/50"
          >
            <h3 className="text-xl md:text-2xl font-bold text-marrom-escuro mb-2">Dress Code Casual Chic</h3>
            <p className="text-marrom-escuro/70 text-sm mb-6">Tons nudes, beige, creme, castanho forte e castanho suave</p>
            <div className="flex justify-center gap-2">
              <div className="w-12 h-16 sm:w-14 sm:h-20 rounded-lg shadow-inner" style={{ backgroundColor: '#F5F0E8' }} title="Creme"></div>
              <div className="w-12 h-16 sm:w-14 sm:h-20 rounded-lg shadow-inner" style={{ backgroundColor: '#E8DCC8' }} title="Beige claro"></div>
              <div className="w-12 h-16 sm:w-14 sm:h-20 rounded-lg shadow-inner" style={{ backgroundColor: '#C4A574' }} title="Castanho médio"></div>
              <div className="w-12 h-16 sm:w-14 sm:h-20 rounded-lg shadow-inner" style={{ backgroundColor: '#4A2F1A' }} title="Castanho forte"></div>
              <div className="w-12 h-16 sm:w-14 sm:h-20 rounded-lg shadow-inner" style={{ backgroundColor: '#D4C4A8' }} title="Castanho suave"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final - Destaque com profundidade */}
      <section className="py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-evento-cta" />
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não Perca Esta Oportunidade
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Vagas limitadas! Garanta já o seu lugar neste encontro transformador
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={urlInscrever} variant="primary" className="!bg-white !text-verde-petroleo hover:!bg-bege-claro hover:!text-marrom-escuro text-lg px-8 py-4">
                Inscrever-me Agora
              </Button>
              <Link to="/home">
                <Button variant="secondary" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white/10">
                  Voltar ao Site
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Simples - Destaque marrom */}
      <footer className="bg-gradient-to-b from-marrom-escuro to-marrom-escuro/95 text-white py-8 relative overflow-hidden">
        <div className="container-custom text-center">
          <p className="text-white/70">
            © 2024 Eleva Mulher. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default EventoImersao

