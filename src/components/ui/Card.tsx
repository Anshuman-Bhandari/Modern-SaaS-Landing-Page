import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg hover:shadow-xl',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl',
    elevated: 'bg-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-1',
  };

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: variant === 'elevated' ? 1.02 : 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card; 