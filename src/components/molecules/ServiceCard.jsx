import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const ServiceCard = ({ service, index }) => {
  const { title, description, icon, features, animationType } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:border-electric/30 transition-all duration-300">
        {/* Service icon with animation */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-electric/20 to-cyber-purple/20 border border-electric/30 mb-6 mx-auto">
          <motion.div
            className={`animate-${animationType}`}
            whileHover={{ scale: 1.2 }}
          >
            <ApperIcon name={icon} size={32} className="text-electric" />
          </motion.div>
        </div>

        {/* Service title */}
        <h3 className="text-xl font-space font-bold text-white mb-4 text-center">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>

        {/* Service description */}
        <p className="text-gray-300 mb-6 text-center font-inter leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        <div className="space-y-3">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + featureIndex * 0.1 
              }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-electric rounded-full animate-pulse-glow" />
              <span className="text-sm text-gray-300 font-inter">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Circuit pattern overlay */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M20,20 L80,20 L80,80 L20,80 Z M40,40 L60,40 M50,30 L50,50"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-electric"
              animate={{
                strokeDashoffset: [0, -20],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;