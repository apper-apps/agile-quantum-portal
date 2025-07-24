import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: "bg-gradient-to-r from-electric to-electric-dark text-white border-electric/50 hover:border-electric",
    secondary: "bg-gradient-to-r from-cyber-purple to-cyber-blue text-white border-cyber-purple/50 hover:border-cyber-blue",
    outline: "bg-transparent text-white border-white/20 hover:border-electric hover:bg-electric/10",
    ghost: "bg-transparent text-white hover:bg-white/5 border-transparent",
  };

  const sizes = {
    default: "px-6 py-3",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-5 text-xl",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-space font-semibold transition-all duration-300 border relative overflow-hidden group",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === "default" 
          ? "0 0 30px rgba(255, 0, 102, 0.4)"
          : "0 0 30px rgba(139, 0, 255, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;