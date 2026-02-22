import { motion } from 'framer-motion'
import logo from '../assets/logo.svg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <motion.img
      src={logo}
      alt="Eleva Mulher Logo"
      className={`${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    />
  )
}

export default Logo

