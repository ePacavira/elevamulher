import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'

const ComoAjudar = () => {
  const [ibanCopied, setIbanCopied] = useState(false)
  const [showIban, setShowIban] = useState(false)

  const iban = 'AO06 0040 0000 4346 1739 1013 6'
  const nome = 'Alice Engrácia Faria Ribeiro'
  const banco = 'Banco BAI'
  const whatsapp = '+244 944 997 358'
  const mensagem = 'Olá! Gostaria de ajudar a Eleva Mulher.'

  const copiarIban = async () => {
    try {
      await navigator.clipboard.writeText(iban)
      setIbanCopied(true)
      setTimeout(() => setIbanCopied(false), 3000)
    } catch (err) {
      console.error('Erro ao copiar IBAN:', err)
    }
  }

  const partilharCampanha = async () => {
    const url = window.location.origin
    const texto = 'Conheça a Eleva Mulher - Rede de apoio solidária para mulheres. Nos ajude a ajudar!'

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Eleva Mulher',
          text: texto,
          url: url,
        })
      } catch (err) {
        console.error('Erro ao partilhar:', err)
      }
    } else {
      // Fallback: copiar URL
      try {
        await navigator.clipboard.writeText(`${texto} ${url}`)
        alert('Link copiado para a área de transferência!')
      } catch (err) {
        console.error('Erro ao copiar:', err)
      }
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-petroleo to-marrom-escuro text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.topelegance.com.br/admin/image/noticia/17238/37658lg.jpg"
            alt="Como Ajudar"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Como Ajudar</h1>
            <p className="text-xl text-white/90">
              Existem várias formas de fazer a diferença. Escolha a que melhor se adequa a você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formas de Ajudar */}
      <section className="py-24 bg-gradient-to-b from-white to-bege-claro/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Grid Principal - 3 Formas Principais */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Doação Financeira */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2"
              >
                <Card className="h-full bg-gradient-to-br from-verde-petroleo to-verde-petroleo/90 text-white border-0 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Faça uma Doação
                      </h2>
                      <p className="text-lg md:text-xl text-white/95 mb-4 leading-relaxed">
                        Sua contribuição financeira <span className="font-semibold">transforma vidas</span>. Cada doação é direcionada 
                        <span className="font-semibold"> integralmente</span> para programas de apoio que fazem a diferença.
                      </p>
                      <div className="mb-6 space-y-2">
                        <div className="flex items-center gap-2 text-white/90">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Apoio material direto</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Programas sociais e médicos</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>100% sem fins lucrativos</span>
                        </div>
                      </div>
                      {!showIban ? (
                        <Button
                          variant="secondary"
                          onClick={() => setShowIban(true)}
                          className="w-full md:w-auto text-lg px-10 py-5 font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                          Ver Dados para Transferência
                        </Button>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-4 bg-white/10 backdrop-blur-sm rounded-xl p-6"
                        >
                          <div>
                            <label className="block text-sm font-medium text-white/90 mb-2">
                              IBAN
                            </label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={iban}
                                readOnly
                                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white font-mono text-sm backdrop-blur-sm"
                              />
                              <Button
                                variant={ibanCopied ? 'secondary' : 'primary'}
                                onClick={copiarIban}
                                className="whitespace-nowrap"
                              >
                                {ibanCopied ? 'Copiado!' : 'Copiar'}
                              </Button>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-white/90 mb-2">
                                Nome
                              </label>
                              <input
                                type="text"
                                value={nome}
                                readOnly
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white backdrop-blur-sm"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/90 mb-2">
                                Banco
                              </label>
                              <input
                                type="text"
                                value={banco}
                                readOnly
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white backdrop-blur-sm"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-caramelo to-dourado-couro text-white border-0 shadow-2xl flex flex-col">
                  <div className="text-center mb-6 flex-1">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Fale Connosco
                    </h2>
                    <p className="text-white/95 mb-6 text-base leading-relaxed">
                      Tem dúvidas ou quer saber mais? Entre em contacto através do WhatsApp e nossa equipe 
                      terá prazer em ajudar.
                    </p>
                  </div>
                  <Button
                    href={`https://wa.me/${whatsapp.replace(/\s/g, '')}?text=${encodeURIComponent(mensagem)}`}
                    variant="secondary"
                    className="w-full text-lg py-4 font-semibold"
                  >
                    Enviar Mensagem
                  </Button>
                </Card>
              </motion.div>
            </div>

            {/* Outras Formas de Ajudar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="bg-gradient-to-br from-bege-claro/50 to-white border-2 border-caramelo/20">
                <h2 className="text-3xl md:text-4xl font-bold text-marrom-escuro mb-8 text-center">
                  Outras Formas de Ajudar
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: (
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      ),
                      title: 'Profissional de Saúde',
                      description: 'Ofereça seus serviços profissionais para ajudar mulheres em necessidade',
                      color: 'from-verde-petroleo to-verde-petroleo/80',
                    },
                    {
                      icon: (
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      ),
                      title: 'Voluntariado',
                      description: 'Dedique seu tempo como voluntário e faça parte da nossa rede de apoio',
                      color: 'from-caramelo to-dourado-couro',
                    },
                    {
                      icon: (
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      ),
                      title: 'Partilhar Campanha',
                      description: 'Ajude-nos a alcançar mais pessoas partilhando nossa campanha',
                      color: 'from-terracota to-caramelo',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-marrom-escuro mb-3">{item.title}</h3>
                      <p className="text-marrom-escuro/70 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Redes Sociais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-marrom-escuro to-marrom-escuro/95 text-white border-0 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Siga-nos nas Redes Sociais
                </h2>
                <p className="text-lg text-white/90 mb-8 text-center max-w-2xl mx-auto">
                  Acompanhe nosso trabalho, histórias de transformação e formas de ajudar através das nossas redes sociais
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    {
                      name: 'Instagram',
                      icon: (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      ),
                      url: 'https://www.instagram.com/elevamulher2025/',
                      color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
                    },
                    {
                      name: 'LinkedIn',
                      icon: (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      ),
                      url: 'https://www.linkedin.com/in/alice-ribeiro-b17295313/',
                      color: 'hover:bg-blue-700',
                    },
                    {
                      name: 'TikTok',
                      icon: (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      ),
                      url: 'https://tiktok.com/@elevamulher',
                      color: 'hover:bg-black',
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white transition-all duration-300 ${social.color} border border-white/20 hover:border-white/40`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <p className="text-sm text-white/70 mt-8 text-center">
                  @elevamulher
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComoAjudar

