import { motion } from 'framer-motion'
import Logo from './Logo'

interface LogoFullProps {
  showTagline?: boolean
  className?: string
}

const LogoFull = ({ showTagline = false, className = '' }: LogoFullProps) => {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo size="md" />
      <div>
        <h1 className="text-xl font-bold text-verde-petroleo">Eleva Mulher</h1>
        {showTagline && (
          <p className="text-sm text-marrom-escuro/70">Nos ajude a ajudar</p>
        )}
      </div>
    </motion.div>
  )
}

export default LogoFull

