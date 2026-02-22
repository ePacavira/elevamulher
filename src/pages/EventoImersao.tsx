import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import Logo from '../components/Logo'
import plpImage from '../assets/plp.png'
import svg02 from '../assets/02.svg'

const EventoImersao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bege-claro via-white to-bege-claro/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={plpImage}
            alt="Encontro de Imersão"
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8 flex flex-col items-center gap-6">
              <Logo />
              <div className="h-80 md:h-[500px] flex items-center justify-center overflow-hidden">
                <img 
                  src={svg02} 
                  alt="" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Encontro de Imersão
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-3 font-light">
              Uma experiência transformadora para mulheres
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-caramelo to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Junte-se a nós para um dia de conexão, crescimento pessoal e fortalecimento da comunidade feminina
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" className="text-lg px-8 py-4">
                Inscrever-me
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-4">
                Saber Mais
              </Button>
            </motion.div>
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

      {/* Sobre o Evento */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-marrom-escuro mb-6">
              Sobre o Encontro
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-verde-petroleo to-caramelo mx-auto mb-8"></div>
            <p className="text-xl text-marrom-escuro/70 leading-relaxed">
              O Encontro de Imersão é um espaço seguro e acolhedor criado especialmente para mulheres que buscam crescimento pessoal, 
              conexão genuína e fortalecimento da comunidade. Durante este dia especial, oferecemos workshops, palestras inspiradoras, 
              momentos de reflexão e oportunidades únicas de networking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card delay={0.1} className="text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-verde-petroleo to-verde-petroleo/80 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-marrom-escuro mb-4">Conexão</h3>
              <p className="text-marrom-escuro/70">Conecte-se com outras mulheres em um ambiente acolhedor e inspirador</p>
            </Card>

            <Card delay={0.2} className="text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-caramelo to-dourado-couro rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-marrom-escuro mb-4">Crescimento</h3>
              <p className="text-marrom-escuro/70">Workshops e palestras que promovem desenvolvimento pessoal e profissional</p>
            </Card>

            <Card delay={0.3} className="text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-terracota to-caramelo rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-marrom-escuro mb-4">Transformação</h3>
              <p className="text-marrom-escuro/70">Uma experiência que transforma vidas e fortalece a comunidade feminina</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programação */}
      <section className="py-24 bg-gradient-to-b from-white to-bege-claro/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-marrom-escuro mb-6">
              Programação
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-verde-petroleo to-caramelo mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { time: '09:00', title: 'Acolhimento e Café da Manhã', description: 'Momento de boas-vindas e networking' },
              { time: '10:00', title: 'Abertura Oficial', description: 'Palestra de abertura com tema inspirador' },
              { time: '11:00', title: 'Workshop: Desenvolvimento Pessoal', description: 'Sessão interativa de crescimento pessoal' },
              { time: '12:30', title: 'Almoço em Comunidade', description: 'Refeição compartilhada e networking' },
              { time: '14:00', title: 'Painel de Mulheres Inspiradoras', description: 'Histórias de superação e sucesso' },
              { time: '15:30', title: 'Workshop: Empoderamento', description: 'Ferramentas práticas para fortalecimento' },
              { time: '17:00', title: 'Encerramento e Conexões', description: 'Momento de reflexão e criação de laços' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-verde-petroleo"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-verde-petroleo to-verde-petroleo/80 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {item.time}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-marrom-escuro mb-2">{item.title}</h3>
                    <p className="text-marrom-escuro/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-verde-petroleo to-marrom-escuro text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={plpImage}
            alt=""
            className="w-full h-full object-cover"
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
              Não Perça Esta Oportunidade
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Vagas limitadas! Garanta já o seu lugar neste encontro transformador
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="text-lg px-8 py-4 bg-white text-verde-petroleo hover:bg-bege-claro">
                Inscrever-me Agora
              </Button>
              <Link to="/">
                <Button variant="secondary" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white/10">
                  Voltar ao Site
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="bg-marrom-escuro text-white py-8">
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

