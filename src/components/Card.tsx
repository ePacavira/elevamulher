import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  onClick?: () => void
}

const Card = ({ children, className = '', delay = 0, onClick }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl shadow-lg p-6 border border-bege-claro ${className}`}
      whileHover={{ scale: 1.02, shadow: 'xl' }}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </motion.div>
  )
}

export default Card

