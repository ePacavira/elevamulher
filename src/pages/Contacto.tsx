import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'

const Contacto = () => {
  const [formData, setFormData] = useState({
    primeiroNome: '',
    ultimoNome: '',
    email: '',
    mensagem: '',
    privacidade: false,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Por enquanto, apenas mostra um alerta
    // Em produção, isso seria enviado para um backend
    alert('Obrigado pela sua mensagem! Entraremos em contacto em breve.')
    setFormData({
      primeiroNome: '',
      ultimoNome: '',
      email: '',
      mensagem: '',
      privacidade: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-petroleo to-marrom-escuro text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-white/90">
              Entre em contacto conosco. Estamos aqui para ajudar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contacto Section */}
      <section className="py-24 bg-gradient-to-b from-white to-bege-claro/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Informações de Contacto - Lado Esquerdo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col h-full"
              >
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-marrom-escuro mb-4">
                    Entre em Contacto
                  </h2>
                  <p className="text-xl text-marrom-escuro/70">
                    Escolha a forma que preferir para nos contactar
                  </p>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                  {/* Email */}
                  <Card delay={0.1} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-verde-petroleo/3 to-white border-2 border-verde-petroleo/10 hover:border-verde-petroleo/30">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-verde-petroleo/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <a
                      href="mailto:elevamulher@gmail.com"
                      className="block p-6 relative z-10 hover:bg-verde-petroleo/5 transition-all duration-300 rounded-xl"
                    >
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-verde-petroleo/30 to-verde-petroleo/10 rounded-xl blur-md group-hover:blur-xl transition-all duration-300"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-verde-petroleo via-verde-petroleo/90 to-verde-petroleo/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                            <svg className="w-9 h-9 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 border-l-2 border-verde-petroleo/20 pl-5">
                          <h3 className="text-xl font-bold text-marrom-escuro mb-2 group-hover:text-verde-petroleo transition-colors duration-300">Email</h3>
                          <p className="text-verde-petroleo font-semibold text-base break-all group-hover:underline decoration-2 underline-offset-2 transition-all duration-300">
                            elevamulher@gmail.com
                          </p>
                        </div>
                        <div className="flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                          <svg className="w-7 h-7 text-verde-petroleo/50 group-hover:text-verde-petroleo transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Card>

                  {/* WhatsApp */}
                  <Card delay={0.2} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-caramelo/3 to-white border-2 border-caramelo/10 hover:border-caramelo/30">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-caramelo/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <a
                      href="https://wa.me/244944997358"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 relative z-10 hover:bg-caramelo/5 transition-all duration-300 rounded-xl"
                    >
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-caramelo/30 to-dourado-couro/10 rounded-xl blur-md group-hover:blur-xl transition-all duration-300"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-caramelo via-dourado-couro to-caramelo/90 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                            <svg className="w-9 h-9 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 border-l-2 border-caramelo/20 pl-5">
                          <h3 className="text-xl font-bold text-marrom-escuro mb-2 group-hover:text-caramelo transition-colors duration-300">WhatsApp</h3>
                          <p className="text-caramelo font-semibold text-base group-hover:underline decoration-2 underline-offset-2 transition-all duration-300">
                            +244 944 997 358
                          </p>
                        </div>
                        <div className="flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                          <svg className="w-7 h-7 text-caramelo/50 group-hover:text-caramelo transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Card>

                  {/* Redes Sociais */}
                  <Card delay={0.3} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-terracota/3 to-white border-2 border-terracota/10 hover:border-terracota/30">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-terracota/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="p-6 relative z-10 hover:bg-terracota/5 transition-all duration-300 rounded-xl">
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-terracota/30 to-caramelo/10 rounded-xl blur-md group-hover:blur-xl transition-all duration-300"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-terracota via-caramelo to-terracota/90 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                            <svg className="w-9 h-9 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 border-l-2 border-terracota/20 pl-5">
                          <h3 className="text-xl font-bold text-marrom-escuro mb-2 group-hover:text-terracota transition-colors duration-300">Redes Sociais</h3>
                          <div className="flex gap-3">
                            <a
                              href="https://www.instagram.com/elevamulher2025/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/social relative w-10 h-10 bg-gradient-to-br from-terracota/10 to-caramelo/10 rounded-lg flex items-center justify-center text-terracota hover:from-terracota hover:to-caramelo hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md border border-terracota/20 hover:border-transparent"
                              aria-label="Instagram"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-terracota/20 to-caramelo/20 rounded-lg blur opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                              </svg>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/alice-ribeiro-b17295313/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/social relative w-10 h-10 bg-gradient-to-br from-terracota/10 to-caramelo/10 rounded-lg flex items-center justify-center text-terracota hover:from-terracota hover:to-caramelo hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md border border-terracota/20 hover:border-transparent"
                              aria-label="LinkedIn"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-terracota/20 to-caramelo/20 rounded-lg blur opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                            <a
                              href="https://tiktok.com/@elevamulher"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/social relative w-10 h-10 bg-gradient-to-br from-terracota/10 to-caramelo/10 rounded-lg flex items-center justify-center text-terracota hover:from-terracota hover:to-caramelo hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md border border-terracota/20 hover:border-transparent"
                              aria-label="TikTok"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-terracota/20 to-caramelo/20 rounded-lg blur opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                          <svg className="w-7 h-7 text-terracota/50 group-hover:text-terracota transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* Formulário - Lado Direito */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col h-full"
              >
              <Card className="bg-gradient-to-br from-bege-claro/50 to-white border-2 border-caramelo/20 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-verde-petroleo to-verde-petroleo/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-marrom-escuro mb-4">
                    Envie-nos uma Mensagem
                  </h2>
                  <p className="text-marrom-escuro/70">
                    Preencha o formulário abaixo e entraremos em contacto o mais breve possível
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="primeiroNome" className="block text-sm font-medium text-marrom-escuro mb-1">
                        Primeiro Nome *
                      </label>
                      <input
                        type="text"
                        id="primeiroNome"
                        name="primeiroNome"
                        value={formData.primeiroNome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-bege-claro rounded-lg focus:ring-2 focus:ring-verde-petroleo focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="ultimoNome" className="block text-sm font-medium text-marrom-escuro mb-1">
                        Último Nome *
                      </label>
                      <input
                        type="text"
                        id="ultimoNome"
                        name="ultimoNome"
                        value={formData.ultimoNome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-bege-claro rounded-lg focus:ring-2 focus:ring-verde-petroleo focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-marrom-escuro mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-bege-claro rounded-lg focus:ring-2 focus:ring-verde-petroleo focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-marrom-escuro mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-bege-claro rounded-lg focus:ring-2 focus:ring-verde-petroleo focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacidade"
                      name="privacidade"
                      checked={formData.privacidade}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="privacidade" className="text-sm text-marrom-escuro/70">
                      Concordo com a política de privacidade *
                    </label>
                  </div>

                  <Button type="submit" variant="primary" className="w-full text-lg py-4">
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto

