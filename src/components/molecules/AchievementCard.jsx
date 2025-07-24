import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const AchievementCard = ({ achievement, index }) => {
  const { title, description, year, icon, color } = achievement;

  const colorClasses = {
    "electric": "from-electric/20 to-electric-dark/20 border-electric/30 text-electric",
    "cyber-purple": "from-cyber-purple/20 to-cyber-blue/20 border-cyber-purple/30 text-cyber-purple",
    "cyber-blue": "from-cyber-blue/20 to-cyber-purple/20 border-cyber-blue/30 text-cyber-blue",
    "success-glow": "from-success-glow/20 to-cyber-blue/20 border-success-glow/30 text-success-glow",
    "warning-glow": "from-warning-glow/20 to-electric/20 border-warning-glow/30 text-warning-glow"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <Card className={`h-full hover:border-${color}/30 group relative`}>
        {/* Achievement year badge */}
        <div className="absolute top-4 right-4">
          <motion.div
            className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs font-space font-bold text-gray-300">{year}</span>
          </motion.div>
        </div>

        {/* Achievement icon */}
        <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${colorClasses[color]} mb-6`}>
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ApperIcon name={icon} size={32} className={colorClasses[color].split(' ').pop()} />
          </motion.div>
        </div>

        {/* Achievement title */}
        <h3 className="text-xl font-space font-bold text-white mb-4 leading-tight">
          <span className={`bg-gradient-to-r ${colorClasses[color].includes('electric') ? 'from-electric to-electric-dark' : colorClasses[color].includes('purple') ? 'from-cyber-purple to-cyber-blue' : colorClasses[color].includes('blue') ? 'from-cyber-blue to-cyber-purple' : colorClasses[color].includes('success') ? 'from-success-glow to-cyber-blue' : 'from-warning-glow to-electric'} bg-clip-text text-transparent`}>
            {title}
          </span>
        </h3>

        {/* Achievement description */}
        <p className="text-gray-300 font-inter leading-relaxed text-sm">
          {description}
        </p>

        {/* Particle explosion effect */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-${color}`}
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [0, (Math.cos(i * 45 * Math.PI / 180) * 50)],
                y: [0, (Math.sin(i * 45 * Math.PI / 180) * 50)],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Success ripple effect */}
        <motion.div
          className={`absolute inset-0 rounded-xl border-2 border-${color}/30 opacity-0 group-hover:opacity-100`}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Card>
    </motion.div>
  );
};

export default AchievementCard;