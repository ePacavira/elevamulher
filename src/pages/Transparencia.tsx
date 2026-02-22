import { motion } from 'framer-motion'
import Card from '../components/Card'

const Transparencia = () => {

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-petroleo to-marrom-escuro text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt="Transparência"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Transparência</h1>
            <p className="text-xl text-white/90">
              Todas as doações e ações são divulgadas de forma clara e transparente
            </p>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Nossa Economia */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-bege-claro/30 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marrom-escuro mb-6">
                Como Funciona Nossa Economia
              </h2>
              <p className="text-xl md:text-2xl text-marrom-escuro/70 max-w-3xl mx-auto">
                Transparência total sobre nossos recursos e compromisso sem fins lucrativos
              </p>
            </div>

            {/* Destaque Principal - Sem Fins Lucrativos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <Card className="bg-gradient-to-br from-verde-petroleo to-verde-petroleo/90 text-white border-0 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Sem Fins Lucrativos</h3>
                    <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                      A Eleva Mulher é uma organização sem fins lucrativos. Todos os recursos arrecadados são 
                      integralmente direcionados para nossos programas de apoio às mulheres. Não há distribuição 
                      de lucros ou benefícios financeiros para membros da organização.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Fluxo de Recursos - Visual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-marrom-escuro mb-8 text-center">
                Destino dos Recursos
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Apoio Material',
                    description: 'Apoio material direto às mulheres em situação de vulnerabilidade',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    ),
                    color: 'from-caramelo to-dourado-couro',
                  },
                  {
                    title: 'Apoio Social e Médico',
                    description: 'Programas de apoio social e médico para mulheres',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ),
                    color: 'from-verde-petroleo to-verde-petroleo/80',
                  },
                  {
                    title: 'Operações Essenciais',
                    description: 'Operações essenciais da organização',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    color: 'from-terracota to-caramelo',
                  },
                ].map((item, index) => (
                  <Card key={item.title} delay={index * 0.1} className="text-center h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-marrom-escuro mb-3">{item.title}</h4>
                    <p className="text-marrom-escuro/70 leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Estatísticas Visuais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-marrom-escuro to-marrom-escuro/95 text-white border-0 shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Transparência Financeira
                </h3>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {[
                    { value: '100%', label: 'Das doações vão para os programas', color: 'text-caramelo' },
                    { value: '0%', label: 'De lucros ou benefícios pessoais', color: 'text-white' },
                    { value: '100%', label: 'De transparência nas finanças', color: 'text-dourado-couro' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`text-6xl md:text-7xl font-bold ${stat.color} mb-4`}>
                        {stat.value}
                      </div>
                      <p className="text-lg text-white/90">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/20">
                  <p className="text-lg text-white/95 leading-relaxed text-center max-w-3xl mx-auto">
                    Mantemos registros detalhados e públicos de todas as receitas e despesas. 
                    Nossos relatórios financeiros são atualizados regularmente e disponibilizados 
                    para consulta, garantindo total transparência sobre o uso de cada contribuição recebida.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="pt-12 pb-24 bg-gradient-to-b from-white to-bege-claro/30 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marrom-escuro mb-6">
                Nosso Compromisso
              </h2>
              <p className="text-xl md:text-2xl text-marrom-escuro/70 max-w-3xl mx-auto">
                A transparência é um dos nossos valores fundamentais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-verde-petroleo/10 to-verde-petroleo/5 border-2 border-verde-petroleo/20">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-verde-petroleo to-verde-petroleo/80 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-marrom-escuro mb-4">
                        Rastreamento e Divulgação
                      </h3>
                      <p className="text-lg text-marrom-escuro/70 leading-relaxed">
                        Acreditamos que todas as doações devem ser rastreadas e divulgadas de forma clara e honesta. 
                        Cada contribuição é registrada e documentada para garantir total transparência.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-caramelo/10 to-dourado-couro/5 border-2 border-caramelo/20">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-caramelo to-dourado-couro rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-marrom-escuro mb-4">
                        Registros Detalhados
                      </h3>
                      <p className="text-lg text-marrom-escuro/70 leading-relaxed">
                        Mantemos registros detalhados de todas as receitas e despesas, garantindo que 
                        cada contribuição seja utilizada da melhor forma possível para ajudar mulheres 
                        em necessidade.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Destaque Final */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <Card className="bg-gradient-to-r from-marrom-escuro via-terracota to-marrom-escuro text-white border-0 shadow-2xl">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed font-medium">
                    Cada contribuição é um passo em direção a um futuro melhor para todas as mulheres
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Transparencia

