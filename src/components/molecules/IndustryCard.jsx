import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const IndustryCard = ({ industry, index }) => {
  const { name, description, metrics } = industry;

  const industryIcons = {
    "Financial Services": "DollarSign",
    "Healthcare": "Heart",
    "Manufacturing": "Factory",
    "Retail": "ShoppingBag",
    "High Tech": "Smartphone",
    "Education": "GraduationCap",
    "Public Sector": "Building",
    "Media": "Video"
  };

  const icon = industryIcons[name] || "Building";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:border-cyber-blue/30 group relative overflow-hidden">
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
          <div className="matrix-rain">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="matrix-column"
                style={{
                  left: `${i * 20 + 10}%`,
                  animationDelay: `${i * -2}s`,
                  fontSize: "10px",
                }}
              >
                {metrics.efficiency}% {metrics.accuracy}% {metrics.cost_reduction}%
              </div>
            ))}
          </div>
        </div>

        {/* Industry icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/30 mb-6 mx-auto">
          <motion.div
            whileHover={{ 
              rotate: 360,
              scale: 1.2 
            }}
            transition={{ duration: 0.8 }}
          >
            <ApperIcon name={icon} size={28} className="text-cyber-blue" />
          </motion.div>
        </div>

        {/* Industry name */}
        <h3 className="text-lg font-space font-bold text-white mb-4 text-center">
          <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            {name}
          </span>
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-6 text-center font-inter text-sm leading-relaxed">
          {description}
        </p>

        {/* Metrics visualization */}
        <div className="space-y-4">
          {Object.entries(metrics).map(([key, value], metricIndex) => (
            <div key={key} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400 font-inter capitalize">
                  {key.replace('_', ' ')}
                </span>
                <span className="text-xs text-cyber-blue font-space font-bold">
                  {value}%
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 relative overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${value}%` }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1 + metricIndex * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1 + index * 0.1 + metricIndex * 0.2,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 3D flip reveal on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
          style={{ transform: "rotateY(180deg)" }}
        />
      </Card>
    </motion.div>
  );
};

export default IndustryCard;