import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'

const Galeria = () => {
  const [filtro, setFiltro] = useState<'todos' | 'instagram' | 'tiktok'>('todos')

  // Por enquanto, a galeria está vazia
  // Em produção, aqui seriam carregados os posts reais
  const posts: Array<{
    id: string
    tipo: 'instagram' | 'tiktok'
    url: string
    thumbnail?: string
  }> = []

  const postsFiltrados = filtro === 'todos' 
    ? posts 
    : posts.filter(post => post.tipo === filtro)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-petroleo to-marrom-escuro text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Galeria</h1>
            <p className="text-xl text-white/90">
              Veja nossos posts e atualizações nas redes sociais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros e Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {(['todos', 'instagram', 'tiktok'] as const).map((tipo) => (
              <button
                key={tipo}
                onClick={() => setFiltro(tipo)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filtro === tipo
                    ? 'bg-verde-petroleo text-white'
                    : 'bg-bege-claro text-marrom-escuro hover:bg-bege-claro/80'
                }`}
              >
                {tipo === 'todos' ? 'Todos' : tipo === 'instagram' ? 'Instagram' : 'TikTok'}
              </button>
            ))}
          </motion.div>

          {/* Grid de Posts */}
          {postsFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {postsFiltrados.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-0 overflow-hidden">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {post.thumbnail ? (
                        <img
                          src={post.thumbnail}
                          alt={`Post ${post.tipo}`}
                          className="w-full h-64 object-cover"
                        />
                      ) : (
                        <div className="w-full h-64 bg-bege-claro flex items-center justify-center">
                          <span className="text-marrom-escuro/50">
                            {post.tipo === 'instagram' ? '📷' : '🎵'}
                          </span>
                        </div>
                      )}
                      <div className="p-4">
                        <span className="text-sm text-verde-petroleo font-semibold uppercase">
                          {post.tipo}
                        </span>
                      </div>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📸</div>
                  <h3 className="text-2xl font-bold text-marrom-escuro mb-4">
                    Galeria em Construção
                  </h3>
                  <p className="text-marrom-escuro/70 mb-6 max-w-md mx-auto">
                    Estamos trabalhando para trazer nossos posts do Instagram e TikTok em breve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://instagram.com/elevamulher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-verde-petroleo text-white rounded-lg font-semibold hover:bg-verde-petroleo/90 transition-colors"
                    >
                      Ver no Instagram
                    </a>
                    <a
                      href="https://tiktok.com/@elevamulher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-caramelo text-marrom-escuro rounded-lg font-semibold hover:bg-caramelo/90 transition-colors"
                    >
                      Ver no TikTok
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Galeria


