import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const StatsCounter = ({ value, label, suffix = "", prefix = "", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setDisplayValue(Math.floor(easeOut * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Counter value */}
      <motion.div
        className="text-4xl md:text-6xl font-space font-bold mb-2"
        animate={isInView ? {
          textShadow: [
            "0 0 20px rgba(255, 0, 102, 0.5)",
            "0 0 40px rgba(139, 0, 255, 0.7)",
            "0 0 20px rgba(0, 212, 255, 0.5)",
            "0 0 20px rgba(255, 0, 102, 0.5)",
          ]
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="bg-gradient-to-r from-electric via-cyber-purple to-cyber-blue bg-clip-text text-transparent">
          {prefix}{displayValue}{suffix}
        </span>
      </motion.div>

      {/* Counter label */}
      <motion.p
        className="text-gray-300 font-inter text-sm md:text-base font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.p>

      {/* Animated underline */}
      <motion.div
        className="h-1 bg-gradient-to-r from-electric to-cyber-purple rounded-full mt-2 mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric rounded-full"
            style={{
              top: `${30 + i * 20}%`,
              left: `${40 + i * 10}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5 + 1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default StatsCounter;