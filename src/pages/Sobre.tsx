import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'

const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-petroleo via-verde-petroleo/95 to-marrom-escuro text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2020/10/GettyImages-896594292-Convertido.png"
            alt="Sobre Nós"
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
              <span className="relative z-10">Sobre Nós</span>
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-caramelo to-dourado-couro rounded-full"></span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Conheça a missão, visão e valores que guiam o trabalho da Eleva Mulher
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão e Visão - Layout Alternado */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          {/* Missão */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-verde-petroleo/10 text-verde-petroleo rounded-full text-sm font-semibold border border-verde-petroleo/20">
                    Nossa Missão
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-marrom-escuro mb-6 relative">
                  <span className="relative z-10">Missão</span>
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-verde-petroleo to-caramelo rounded-full"></span>
                </h2>
                <p className="text-lg md:text-xl text-marrom-escuro/70 leading-relaxed">
                  Criar uma rede de apoio solidária que oferece suporte material, social e médico 
                  para mulheres em necessidade, promovendo transparência, amor e impacto positivo 
                  na comunidade.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <Card delay={0.1} className="bg-gradient-to-br from-verde-petroleo/5 to-verde-petroleo/10 border-2 border-verde-petroleo/20 p-8 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-verde-petroleo/20 to-verde-petroleo/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-verde-petroleo/30">
                    <svg className="w-10 h-10 text-verde-petroleo" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-marrom-escuro mb-4 text-center">Compromisso</h3>
                  <p className="text-marrom-escuro/70 text-center leading-relaxed">
                    Estamos comprometidos em fazer a diferença na vida de cada mulher que cruza nosso caminho.
                  </p>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Visão */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card delay={0.2} className="bg-gradient-to-br from-caramelo/10 to-dourado-couro/5 border-2 border-caramelo/20 p-8 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-caramelo/20 to-dourado-couro/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-caramelo/30">
                    <svg className="w-10 h-10 text-caramelo" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-marrom-escuro mb-4 text-center">Visão de Futuro</h3>
                  <p className="text-marrom-escuro/70 text-center leading-relaxed">
                    Um futuro onde todas as mulheres têm acesso ao apoio necessário para prosperar.
                  </p>
                </Card>
              </div>
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-caramelo/10 text-caramelo rounded-full text-sm font-semibold border border-caramelo/20">
                    Nossa Visão
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-marrom-escuro mb-6 relative">
                  <span className="relative z-10">Visão</span>
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-caramelo to-dourado-couro rounded-full"></span>
                </h2>
                <p className="text-lg md:text-xl text-marrom-escuro/70 leading-relaxed">
                  Ser uma referência em solidariedade e transparência, construindo uma comunidade 
                  mais forte e unida, onde todas as mulheres tenham acesso ao apoio necessário 
                  para superar desafios e alcançar seus objetivos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Trabalhamos - Timeline */}
      <section className="py-24 bg-bege-claro/30 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marrom-escuro mb-4 relative inline-block">
              <span className="relative z-10">Como Trabalhamos</span>
              <span className="absolute -bottom-2 left-0 w-48 h-1.5 bg-gradient-to-r from-verde-petroleo via-caramelo to-terracota rounded-full"></span>
            </h2>
            <p className="text-xl text-marrom-escuro/70 max-w-3xl mx-auto">
              Nosso processo em 4 etapas claras e transparentes
            </p>
          </motion.div>

          <div className="relative">
            {/* Linha conectora (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-verde-petroleo via-caramelo to-terracota transform -translate-y-1/2 rounded-full shadow-lg"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { 
                  step: '1', 
                  title: 'Identificação', 
                  description: 'Identificamos mulheres que precisam de apoio através de nossa rede e parceiros',
                  color: 'verde-petroleo',
                  iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                },
                { 
                  step: '2', 
                  title: 'Avaliação', 
                  description: 'Avaliamos as necessidades específicas de cada caso com cuidado e atenção',
                  color: 'caramelo',
                  iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
                },
                { 
                  step: '3', 
                  title: 'Ação', 
                  description: 'Mobilizamos recursos e oferecemos o apoio necessário de forma eficiente',
                  color: 'dourado-couro',
                  iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
                },
                { 
                  step: '4', 
                  title: 'Acompanhamento', 
                  description: 'Acompanhamos o progresso e oferecemos suporte contínuo em todas as etapas',
                  color: 'terracota',
                  iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                },
              ].map((item, index) => {
                const colorClasses = {
                  'verde-petroleo': {
                    bg: 'bg-verde-petroleo',
                    bgLight: 'bg-verde-petroleo/10',
                    text: 'text-verde-petroleo',
                    border: 'border-verde-petroleo/30',
                    borderHover: 'hover:border-verde-petroleo/50',
                    gradient: 'from-verde-petroleo/20 to-verde-petroleo/10',
                    shadow: 'shadow-verde-petroleo/20',
                  },
                  'caramelo': {
                    bg: 'bg-caramelo',
                    bgLight: 'bg-caramelo/10',
                    text: 'text-caramelo',
                    border: 'border-caramelo/30',
                    borderHover: 'hover:border-caramelo/50',
                    gradient: 'from-caramelo/20 to-caramelo/10',
                    shadow: 'shadow-caramelo/20',
                  },
                  'dourado-couro': {
                    bg: 'bg-dourado-couro',
                    bgLight: 'bg-dourado-couro/10',
                    text: 'text-dourado-couro',
                    border: 'border-dourado-couro/30',
                    borderHover: 'hover:border-dourado-couro/50',
                    gradient: 'from-dourado-couro/20 to-dourado-couro/10',
                    shadow: 'shadow-dourado-couro/20',
                  },
                  'terracota': {
                    bg: 'bg-terracota',
                    bgLight: 'bg-terracota/10',
                    text: 'text-terracota',
                    border: 'border-terracota/30',
                    borderHover: 'hover:border-terracota/50',
                    gradient: 'from-terracota/20 to-terracota/10',
                    shadow: 'shadow-terracota/20',
                  },
                }
                const colors = colorClasses[item.color as keyof typeof colorClasses]
                return (
                  <Card key={item.step} delay={index * 0.15} className={`group hover:shadow-xl transition-all duration-300 border-2 ${colors.border} ${colors.borderHover} relative bg-gradient-to-br ${colors.gradient}`}>
                    <div className="text-center">
                      <div className={`w-20 h-20 ${colors.bg} text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-white/50`}>
                        {item.step}
                      </div>
                      <div className={`w-16 h-16 ${colors.bgLight} rounded-2xl flex items-center justify-center mx-auto mb-4 border ${colors.border} group-hover:scale-105 transition-transform duration-300`}>
                        <svg className={`w-8 h-8 ${colors.text}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                        </svg>
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold ${colors.text} mb-4`}>{item.title}</h3>
                      <p className="text-marrom-escuro/70 leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-verde-petroleo to-marrom-escuro text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Junte-se a Nós
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sua ajuda faz a diferença. Participe desta rede de solidariedade.
            </p>
            <Button to="/como-ajudar" variant="secondary" className="text-lg px-8 py-4">
              Quero Ajudar
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Sobre

