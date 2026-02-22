import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../components/Button'
import Card from '../components/Card'

const Home = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-verde-petroleo via-verde-petroleo/95 to-marrom-escuro text-white overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80"
            alt="Mulheres unidas"
            className="w-full h-full object-cover opacity-15"
          />
        </motion.div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto Principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-caramelo/30">
                  Rede de Apoio Solidária
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative">
                <span className="relative z-10">Eleva Mulher</span>
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-caramelo to-dourado-couro rounded-full"></span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-white/95 leading-relaxed">
                Dedicada a ajudar mulheres com transparência, amor e impacto na comunidade.
              </p>
              
              <p className="text-lg mb-8 text-white/80">
                Nos ajude a ajudar. Juntas podemos fazer a diferença.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button to="/como-ajudar" variant="secondary" className="text-lg px-8 py-4 shadow-lg">
                  Quero Ajudar
                </Button>
                <Button to="/sobre" variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-verde-petroleo">
                  Saber Mais
                </Button>
              </div>
            </motion.div>

            {/* Cards de Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <Card delay={0.1} className="bg-white/15 backdrop-blur-md border border-caramelo/20 text-white hover:bg-white/20 hover:border-caramelo/40 transition-all shadow-lg shadow-verde-petroleo/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-caramelo/30 to-dourado-couro/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-caramelo/30">
                    <svg className="w-6 h-6 text-caramelo" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Apoio Especializado</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Apoio material, social e médico para mulheres em necessidade.
                    </p>
                  </div>
                </div>
              </Card>

              <Card delay={0.2} className="bg-white/15 backdrop-blur-md border border-caramelo/20 text-white hover:bg-white/20 hover:border-caramelo/40 transition-all shadow-lg shadow-verde-petroleo/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-caramelo/30 to-dourado-couro/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-caramelo/30">
                    <svg className="w-6 h-6 text-caramelo" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Apoio Contínuo</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Acompanhamento constante em todas as etapas da jornada.
                    </p>
                  </div>
                </div>
              </Card>

              <Card delay={0.3} className="bg-white/15 backdrop-blur-md border border-caramelo/20 text-white hover:bg-white/20 hover:border-caramelo/40 transition-all md:col-span-2 shadow-lg shadow-verde-petroleo/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-caramelo/30 to-dourado-couro/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-caramelo/30">
                    <svg className="w-6 h-6 text-caramelo" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparência Total</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Todas as doações são rastreadas e divulgadas de forma transparente e honesta.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Ajudamos */}
      <section className="py-24 bg-bege-claro/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marrom-escuro mb-4 relative inline-block">
              <span className="relative z-10">Como Ajudamos</span>
              <span className="absolute -bottom-2 left-0 w-32 h-1.5 bg-gradient-to-r from-verde-petroleo to-caramelo rounded-full"></span>
            </h2>
            <p className="text-xl text-marrom-escuro/70 max-w-3xl mx-auto leading-relaxed">
              Oferecemos diferentes tipos de apoio para atender às necessidades específicas de cada mulher
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card delay={0.1} className="group hover:shadow-2xl transition-all duration-300 border-2 border-verde-petroleo/10 hover:border-verde-petroleo/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-verde-petroleo/20 via-verde-petroleo/15 to-caramelo/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-verde-petroleo/20 shadow-lg shadow-verde-petroleo/10">
                  <svg className="w-10 h-10 text-verde-petroleo" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-marrom-escuro mb-4">Apoio Material</h3>
                <p className="text-marrom-escuro/70 leading-relaxed">
                  Fornecemos materiais essenciais como roupas, alimentos, produtos de higiene e outros itens necessários para o dia a dia.
                </p>
              </div>
            </Card>

            <Card delay={0.2} className="group hover:shadow-2xl transition-all duration-300 border-2 border-caramelo/10 hover:border-caramelo/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-caramelo/25 via-caramelo/15 to-dourado-couro/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-caramelo/20 shadow-lg shadow-caramelo/10">
                  <svg className="w-10 h-10 text-caramelo" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-marrom-escuro mb-4">Apoio Social</h3>
                <p className="text-marrom-escuro/70 leading-relaxed">
                  Criamos uma rede de apoio emocional e social, promovendo encontros, grupos de apoio e fortalecimento da comunidade.
                </p>
              </div>
            </Card>

            <Card delay={0.3} className="group hover:shadow-2xl transition-all duration-300 border-2 border-terracota/10 hover:border-terracota/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-terracota/20 via-terracota/15 to-verde-petroleo/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-terracota/20 shadow-lg shadow-terracota/10">
                  <svg className="w-10 h-10 text-terracota" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-marrom-escuro mb-4">Apoio Médico</h3>
                <p className="text-marrom-escuro/70 leading-relaxed">
                  Facilitamos acesso a cuidados médicos, consultas, exames e profissionais de saúde qualificados.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marrom-escuro mb-4 relative inline-block">
              <span className="relative z-10">Nossos Valores</span>
              <span className="absolute -bottom-2 left-0 w-40 h-1.5 bg-gradient-to-r from-dourado-couro to-terracota rounded-full"></span>
            </h2>
            <p className="text-xl text-marrom-escuro/70 max-w-3xl mx-auto leading-relaxed">
              Os princípios fundamentais que guiam cada ação e decisão do nosso trabalho
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Transparência', 
                iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
                description: 'Todas as ações e doações são divulgadas de forma clara e honesta',
                color: 'verde-petroleo',
                bgColor: 'from-verde-petroleo/10 to-verde-petroleo/5'
              },
              { 
                title: 'Amor', 
                iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                description: 'Agimos com compaixão, empatia e respeito em todas as situações',
                color: 'terracota',
                bgColor: 'from-terracota/10 to-terracota/5'
              },
              { 
                title: 'Impacto', 
                iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
                description: 'Buscamos criar mudanças positivas e duradouras na vida das mulheres',
                color: 'dourado-couro',
                bgColor: 'from-dourado-couro/10 to-dourado-couro/5'
              },
              { 
                title: 'Comunidade', 
                iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                description: 'Fortalecimento coletivo através da união e solidariedade',
                color: 'caramelo',
                bgColor: 'from-caramelo/20 to-caramelo/10'
              },
            ].map((value, index) => {
              const colorClasses = {
                'verde-petroleo': 'text-verde-petroleo',
                'terracota': 'text-terracota',
                'dourado-couro': 'text-dourado-couro',
                'caramelo': 'text-caramelo',
              }
              const borderColors = {
                'verde-petroleo': 'border-verde-petroleo/20 hover:border-verde-petroleo/40',
                'terracota': 'border-terracota/20 hover:border-terracota/40',
                'dourado-couro': 'border-dourado-couro/20 hover:border-dourado-couro/40',
                'caramelo': 'border-caramelo/20 hover:border-caramelo/40',
              }
              const shadowColors = {
                'verde-petroleo': 'shadow-lg shadow-verde-petroleo/10',
                'terracota': 'shadow-lg shadow-terracota/10',
                'dourado-couro': 'shadow-lg shadow-dourado-couro/10',
                'caramelo': 'shadow-lg shadow-caramelo/10',
              }
              return (
                <Card key={value.title} delay={index * 0.1} className={`group hover:shadow-xl transition-all duration-300 border-2 ${borderColors[value.color as keyof typeof borderColors]}`}>
                  <div className={`bg-gradient-to-br ${value.bgColor} rounded-xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center border ${borderColors[value.color as keyof typeof borderColors].replace('hover:', '')} ${shadowColors[value.color as keyof typeof shadowColors]}`}>
                    <svg className={`w-12 h-12 ${colorClasses[value.color as keyof typeof colorClasses]}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={value.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-marrom-escuro mb-3">{value.title}</h3>
                  <p className="text-marrom-escuro/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="pt-0 pb-0 relative overflow-hidden min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80"
            alt="Junte-se a nós"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-marrom-escuro/80 via-marrom-escuro/75 to-verde-petroleo/80"></div>
        </div>
        <div className="container-custom relative z-10 w-full py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/98 backdrop-blur-lg border-2 border-caramelo/30 shadow-2xl px-8 py-10 md:px-12 md:py-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-caramelo/10 to-dourado-couro/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-verde-petroleo/10 to-caramelo/5 rounded-full blur-2xl"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marrom-escuro mb-6 leading-tight relative z-10">
                  <span className="relative">
                    Vamos Crescer Juntas!
                    <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-verde-petroleo to-caramelo rounded-full"></span>
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-marrom-escuro/70 mb-4 leading-relaxed max-w-2xl mx-auto">
                  Sua ajuda faz a diferença. Junte-se a nós nesta jornada de solidariedade e transformação.
                </p>
                <p className="text-base md:text-lg text-marrom-escuro/60 mb-8">
                  Cada contribuição nos aproxima mais do nosso objetivo de ajudar mais mulheres.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button to="/como-ajudar" variant="primary" className="text-base md:text-lg px-8 md:px-10 py-3 md:py-4 shadow-lg hover:shadow-xl transition-shadow">
                    Fazer uma Doação
                  </Button>
                  <Button to="/contacto" variant="outline" className="text-base md:text-lg px-8 md:px-10 py-3 md:py-4 border-2">
                    Entrar em Contacto
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

