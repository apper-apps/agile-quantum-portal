import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { achievementsApi } from "@/services/api/achievementsApi";
import AchievementCard from "@/components/molecules/AchievementCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAchievements = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await achievementsApi.getAll();
      setAchievements(data);
    } catch (err) {
      setError(err.message || "Failed to load achievements");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAchievements();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadAchievements} />;
  if (!achievements.length) return <Empty title="No Achievements Available" onAction={loadAchievements} />;

  return (
    <section className="py-24 bg-gradient-to-br from-near-black via-deep-black to-near-black relative overflow-hidden">
      {/* Quantum particle field */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-warning-glow rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Holographic grid */}
      <motion.div
        className="absolute inset-0 cyber-grid opacity-5"
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 30,
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-warning-glow/10 to-electric/10 border border-warning-glow/30 rounded-full backdrop-blur-sm mb-6"
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
              <ApperIcon name="Trophy" size={16} className="text-warning-glow" />
            </motion.div>
            <span className="text-sm font-space font-medium text-gray-300">
              Quantum Milestones
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-space font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-warning-glow via-electric to-cyber-purple bg-clip-text text-transparent">
              Milestone Achievements
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every milestone represents years of dedication, innovation, and client success. 
            These achievements showcase our commitment to pushing the boundaries of AI excellence.
          </motion.p>
        </motion.div>

        {/* Achievements timeline */}
        <div className="relative mb-20">
          {/* Central timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-warning-glow via-electric to-cyber-purple rounded-full"
            style={{ height: "100%" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.Id}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Achievement content */}
                <div className="w-5/12">
                  <AchievementCard achievement={achievement} index={index} />
                </div>

                {/* Timeline node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r from-${achievement.color}/50 to-${achievement.color} border-4 border-deep-black relative z-10`}
                    whileHover={{ scale: 1.3 }}
                    animate={{
                      boxShadow: [
                        `0 0 20px rgba(${achievement.color === 'electric' ? '255, 0, 102' : achievement.color === 'cyber-purple' ? '139, 0, 255' : achievement.color === 'cyber-blue' ? '0, 212, 255' : achievement.color === 'success-glow' ? '0, 255, 136' : '255, 184, 0'}, 0.5)`,
                        `0 0 40px rgba(${achievement.color === 'electric' ? '255, 0, 102' : achievement.color === 'cyber-purple' ? '139, 0, 255' : achievement.color === 'cyber-blue' ? '0, 212, 255' : achievement.color === 'success-glow' ? '0, 255, 136' : '255, 184, 0'}, 0.8)`,
                        `0 0 20px rgba(${achievement.color === 'electric' ? '255, 0, 102' : achievement.color === 'cyber-purple' ? '139, 0, 255' : achievement.color === 'cyber-blue' ? '0, 212, 255' : achievement.color === 'success-glow' ? '0, 255, 136' : '255, 184, 0'}, 0.5)`,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    {/* Pulse rings */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-2 border-${achievement.color}/30`}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className={`absolute inset-0 rounded-full border-2 border-${achievement.color}/20`}
                      animate={{
                        scale: [1, 3, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3 + 0.5,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Year badge */}
                <div className="w-5/12 flex justify-center">
                  <motion.div
                    className="glass rounded-lg px-4 py-2 border border-gray-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-lg font-space font-bold text-white">
                      {achievement.year}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement metrics */}
        <motion.div
          className="glass rounded-2xl p-8 border border-warning-glow/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-space font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-warning-glow to-electric bg-clip-text text-transparent">
                Impact by the Numbers
              </span>
            </h3>
            <p className="text-gray-300 font-inter max-w-2xl mx-auto">
              Quantifying our journey of innovation and client transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "500M+",
                label: "Data Points Processed",
                description: "Through our AI systems",
                icon: "Database",
                color: "cyber-blue"
              },
              {
                metric: "99.9%",
                label: "System Uptime",
                description: "Across all deployed solutions",
                icon: "Shield",
                color: "success-glow"
              },
              {
                metric: "$50M+",
                label: "Client Value Generated",
                description: "Through AI optimizations",
                icon: "TrendingUp",
                color: "warning-glow"
              },
              {
                metric: "150+",
                label: "Patents & Publications",
                description: "In AI and automation",
                icon: "BookOpen",
                color: "electric"
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-${metric.color}/20 to-${metric.color}/40 border border-${metric.color}/30 flex items-center justify-center group-hover:border-${metric.color}/60 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 25px rgba(${metric.color === 'cyber-blue' ? '0, 212, 255' : metric.color === 'success-glow' ? '0, 255, 136' : metric.color === 'warning-glow' ? '255, 184, 0' : '255, 0, 102'}, 0.3)`
                  }}
                >
                  <ApperIcon name={metric.icon} size={28} className={`text-${metric.color}`} />
                </motion.div>
                
                <motion.div
                  className={`text-3xl font-space font-bold text-${metric.color} mb-2`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {metric.metric}
                </motion.div>
                
                <h4 className="text-sm font-space font-bold text-white mb-2">
                  {metric.label}
                </h4>
                
                <p className="text-xs text-gray-300 font-inter">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future vision */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block glass rounded-2xl p-8 border border-electric/20"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-electric/20 to-cyber-purple/20 border border-electric/30 flex items-center justify-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <ApperIcon name="Telescope" size={40} className="text-electric" />
            </motion.div>
            
            <h3 className="text-2xl font-space font-bold text-white mb-4">
              The Next Quantum Leap
            </h3>
            <p className="text-gray-300 mb-6 font-inter max-w-2xl mx-auto">
              As we look toward the future, we're working on breakthrough technologies that will 
              reshape entire industries. Join us on this journey of continuous innovation.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-electric to-cyber-purple text-white font-space font-semibold rounded-lg border border-electric/50 hover:border-cyber-purple transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 0, 102, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Be Part of the Future
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;