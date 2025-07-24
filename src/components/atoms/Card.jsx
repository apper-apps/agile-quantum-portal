import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Card = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "glass rounded-xl p-6 relative overflow-hidden group",
        className
      )}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(255, 0, 102, 0.1)",
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Holographic shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Neural network pattern */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className="w-full h-full bg-neural-network"></div>
      </div>
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;