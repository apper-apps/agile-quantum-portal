import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        {/* Error icon with glitch effect */}
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-error-glow/20 to-electric/20 border border-error-glow/30 mb-6"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 51, 102, 0.3)",
              "0 0 40px rgba(255, 51, 102, 0.5)",
              "0 0 20px rgba(255, 51, 102, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ApperIcon name="AlertTriangle" size={48} className="text-error-glow" />
          </motion.div>
        </motion.div>

        {/* Error title */}
        <motion.h3
          className="text-2xl font-space font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-glow">Neural Network Error</span>
        </motion.h3>

        {/* Error message */}
        <motion.p
          className="text-gray-300 mb-8 font-inter leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {message}
        </motion.p>

        {/* Retry button */}
        {onRetry && (
          <motion.button
            onClick={onRetry}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-electric to-electric-dark text-white font-space font-semibold rounded-lg border border-electric/50 hover:border-electric transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 0, 102, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ApperIcon name="RefreshCw" size={18} className="group-hover:animate-spin" />
            <span>Reinitialize System</span>
          </motion.button>
        )}

        {/* Background glitch effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-error-glow/5 to-electric/5 rounded-lg -z-10"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Error particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-error-glow rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Error;