import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const TeamCard = ({ member, index }) => {
  const { name, role, certifications, image, social } = member;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="text-center hover:border-success-glow/30 group">
        {/* Member photo with holographic effect */}
        <div className="relative mb-6 inline-block">
          <motion.div
            className="w-24 h-24 rounded-full overflow-hidden border-2 border-success-glow/30 relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            {/* Holographic overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-success-glow/20 via-transparent to-cyber-blue/20 opacity-0 group-hover:opacity-100"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          {/* Floating particles around photo */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-success-glow rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        {/* Member name */}
        <h3 className="text-lg font-space font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-success-glow to-cyber-blue bg-clip-text text-transparent">
            {name}
          </span>
        </h3>

        {/* Role */}
        <p className="text-gray-300 mb-4 font-inter text-sm">{role}</p>

        {/* Certifications */}
        <div className="space-y-2 mb-6">
          {certifications.map((cert, certIndex) => (
            <motion.div
              key={certIndex}
              className="flex items-center justify-center space-x-2 text-xs text-gray-400"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + certIndex * 0.1 
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-success-glow rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: certIndex * 0.3,
                }}
              />
              <span className="font-inter">{cert}</span>
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-4">
          {Object.entries(social).map(([platform, url]) => {
            const iconName = platform === "linkedin" ? "Linkedin" : 
                           platform === "github" ? "Github" : "Twitter";
            
            return (
              <motion.a
                key={platform}
                href={url}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center border border-gray-600 hover:border-success-glow/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ApperIcon name={iconName} size={14} className="text-gray-300 hover:text-success-glow transition-colors" />
              </motion.a>
            );
          })}
        </div>

        {/* Background neural network */}
        <div className="absolute bottom-0 left-0 w-full h-16 opacity-5 group-hover:opacity-20 transition-opacity duration-300">
          <svg viewBox="0 0 200 50" className="w-full h-full">
            <motion.path
              d="M0,25 Q50,10 100,25 T200,25"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-success-glow"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              strokeDasharray="10,10"
            />
            <motion.circle
              cx="50"
              cy="15"
              r="2"
              fill="currentColor"
              className="text-success-glow"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
            <motion.circle
              cx="150"
              cy="35"
              r="2"
              fill="currentColor"
              className="text-cyber-blue"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
              }}
            />
          </svg>
        </div>
      </Card>
    </motion.div>
  );
};

export default TeamCard;