import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-block text-center'
  
  const variantClasses = {
    primary: 'bg-verde-petroleo text-white hover:bg-verde-petroleo/90',
    secondary: 'bg-caramelo text-marrom-escuro hover:bg-caramelo/90',
    outline: 'border-2 border-verde-petroleo text-verde-petroleo hover:bg-verde-petroleo hover:text-white',
  }

  const motionProps = {
    className: `${baseClasses} ${variantClasses[variant]} ${className}`,
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
  }

  if (to) {
    return (
      <Link to={to}>
        <motion.span {...motionProps}>
          {children}
        </motion.span>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <motion.span {...motionProps}>
          {children}
        </motion.span>
      </a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}

export default Button

