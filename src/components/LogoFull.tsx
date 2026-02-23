import { motion } from 'framer-motion'
import Logo from './Logo'

interface LogoFullProps {
  showTagline?: boolean
  className?: string
  size?: 'default' | 'large'
}

const LogoFull = ({ showTagline = false, className = '', size = 'default' }: LogoFullProps) => {
  const isLarge = size === 'large'
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo size={isLarge ? 'xl' : 'md'} />
      <div>
        <h1 className={`font-bold text-verde-petroleo ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl'}`}>Eleva Mulher</h1>
        {showTagline && (
          <p className="text-sm text-marrom-escuro/70">Nos ajude a ajudar</p>
        )}
      </div>
    </motion.div>
  )
}

export default LogoFull


