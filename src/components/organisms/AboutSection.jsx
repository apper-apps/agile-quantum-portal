import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import StatsCounter from "@/components/molecules/StatsCounter";

const AboutSection = () => {
  const achievements = [
    {
      icon: "Award",
      title: "Salesforce Partner",
      description: "Official PDO Status",
      color: "electric"
    },
    {
      icon: "Zap",
      title: "AI Innovation Leader",
      description: "Cutting-edge Solutions",
      color: "cyber-purple"
    },
    {
      icon: "Globe",
      title: "Global Reach",
      description: "30+ Countries Served",
      color: "cyber-blue"
    },
    {
      icon: "Users",
      title: "Expert Team",
      description: "100+ Certified Professionals",
      color: "success-glow"
    }
  ];

  const values = [
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "Pioneering AI solutions that push the boundaries of what's possible",
    },
    {
      icon: "Target",
      title: "Excellence",
      description: "Delivering superior quality in every project with meticulous attention to detail",
    },
    {
      icon: "Heart",
      title: "Client Success",
      description: "Your success is our mission - we're partners in your digital transformation",
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-deep-black via-near-black to-deep-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-neural-network opacity-5" />
      
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 cyber-grid opacity-10"
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-electric/10 to-cyber-blue/10 border border-electric/30 rounded-full backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ApperIcon name="Sparkles" size={16} className="text-electric" />
            </motion.div>
            <span className="text-sm font-space font-medium text-gray-300">
              Dreamwares AI Profile
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-space font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-electric via-cyber-purple to-cyber-blue bg-clip-text text-transparent">
              14+ Years of AI Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            AI-First Salesforce Company transforming businesses with intelligent solutions. 
            We bridge the gap between enterprise needs and cutting-edge artificial intelligence, 
            making the impossible possible through intelligent automation.
          </motion.p>
        </motion.div>

        {/* Stats section */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value={14} suffix="+" label="Years of Innovation" />
            <StatsCounter value={1000} suffix="+" label="Successful Projects" />
            <StatsCounter value={500} suffix="+" label="Global Clients" />
            <StatsCounter value={100} suffix="+" label="Certified Experts" />
          </div>
        </div>

        {/* Achievement badges */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 text-center border border-electric/20 hover:border-electric/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-${achievement.color}/20 to-${achievement.color}/40 border border-${achievement.color}/30 flex items-center justify-center`}>
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <ApperIcon name={achievement.icon} size={32} className={`text-${achievement.color}`} />
                  </motion.div>
                </div>
                <h3 className="text-lg font-space font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-300 font-inter">
                  {achievement.description}
                </p>

                {/* Hover effect particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-${achievement.color} rounded-full`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-space font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
                Core Values
              </span>
            </h3>
            <p className="text-gray-300 font-inter max-w-2xl mx-auto">
              The principles that guide our AI innovation and client partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 border border-cyber-purple/30 flex items-center justify-center group-hover:border-cyber-blue/50 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(139, 0, 255, 0.3)"
                  }}
                >
                  <ApperIcon name={value.icon} size={36} className="text-cyber-purple group-hover:text-cyber-blue transition-colors duration-300" />
                </motion.div>
                
                <h4 className="text-xl font-space font-bold text-white mb-4">
                  {value.title}
                </h4>
                
                <p className="text-gray-300 font-inter leading-relaxed">
                  {value.description}
                </p>

                {/* Floating orb */}
                <motion.div
                  className="mx-auto mt-6 w-12 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company timeline */}
        <motion.div
          className="glass rounded-2xl p-8 border border-electric/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-space font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-electric to-cyber-blue bg-clip-text text-transparent">
                Our Evolution Timeline
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { year: "2010", event: "Company Founded", desc: "Started as a Salesforce consulting firm" },
                { year: "2018", event: "AI Integration", desc: "Pivoted to AI-first solutions" },
                { year: "2024", event: "Global Leader", desc: "Recognized AI innovation partner" }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-electric/20 to-cyber-blue/20 border-2 border-electric/40 flex items-center justify-center text-xl font-bold text-white"
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.year}
                    </motion.div>
                    <h4 className="text-lg font-space font-bold text-white mb-2">
                      {milestone.event}
                    </h4>
                    <p className="text-sm text-gray-300 font-inter">
                      {milestone.desc}
                    </p>
                  </div>
                  
                  {/* Connecting line */}
                  {index < 2 && (
                    <motion.div
                      className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-electric/50 to-cyber-blue/50"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? "radial-gradient(circle, #FF0066, transparent)"
                : i % 3 === 1
                ? "radial-gradient(circle, #8B00FF, transparent)"
                : "radial-gradient(circle, #00D4FF, transparent)",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;