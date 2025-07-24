import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No Data Found",
  description = "The neural network hasn't detected any information yet.",
  actionText = "Initialize System",
  onAction,
  icon = "Database"
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        {/* Empty state icon */}
        <motion.div
          className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 border border-cyber-purple/20 mb-8 relative overflow-hidden"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
        >
          {/* Holographic background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <ApperIcon name={icon} size={64} className="text-cyber-blue" />
          </motion.div>
        </motion.div>

        {/* Empty state title */}
        <motion.h3
          className="text-3xl font-space font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h3>

        {/* Empty state description */}
        <motion.p
          className="text-gray-300 mb-8 font-inter leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {description}
        </motion.p>

        {/* Action button */}
        {onAction && (
          <motion.button
            onClick={onAction}
            className="inline-flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-space font-semibold rounded-lg border border-cyber-purple/50 hover:border-cyber-blue transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(139, 0, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <ApperIcon name="Zap" size={20} className="relative z-10 group-hover:animate-pulse" />
            <span className="relative z-10">{actionText}</span>
          </motion.button>
        )}

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 
                  ? "radial-gradient(circle, #8B00FF, transparent)"
                  : "radial-gradient(circle, #00D4FF, transparent)",
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Neural network lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
        >
          <svg className="w-full h-full">
            <motion.path
              d="M50,300 Q200,100 350,300"
              stroke="url(#neural-gradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              animate={{
                strokeDashoffset: [0, -20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <defs>
              <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B00FF" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B00FF" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Empty;