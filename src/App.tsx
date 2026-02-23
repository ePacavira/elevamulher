import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Historia from './pages/Historia'
import Transparencia from './pages/Transparencia'
import ComoAjudar from './pages/ComoAjudar'
import Contacto from './pages/Contacto'
import Galeria from './pages/Galeria'
import EventoImersao from './pages/EventoImersao'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de escolha na raiz */}
        <Route path="/" element={<Landing />} />
        
        {/* Rota do evento sem Navbar e Footer */}
        <Route path="/evento-imersao" element={<EventoImersao />} />
        
        {/* Rotas principais com Navbar e Footer */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/sobre" element={<Layout><Sobre /></Layout>} />
        <Route path="/historia" element={<Layout><Historia /></Layout>} />
        <Route path="/transparencia" element={<Layout><Transparencia /></Layout>} />
        <Route path="/como-ajudar" element={<Layout><ComoAjudar /></Layout>} />
        <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
        <Route path="/galeria" element={<Layout><Galeria /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
