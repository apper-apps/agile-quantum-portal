import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { teamApi } from "@/services/api/teamApi";
import TeamCard from "@/components/molecules/TeamCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";

const TeamSection = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTeam = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await teamApi.getAll();
      setTeam(data);
    } catch (err) {
      setError(err.message || "Failed to load team");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeam();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadTeam} />;
  if (!team.length) return <Empty title="No Team Members Available" onAction={loadTeam} />;

  return (
    <section id="team" className="py-24 bg-deep-black relative overflow-hidden">
      {/* Background neural network */}
      <div className="absolute inset-0 bg-neural-network opacity-10" />
      
      {/* Floating certification badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["Salesforce", "AWS", "Google Cloud", "Azure", "TensorFlow", "OpenCV"].map((cert, i) => (
          <motion.div
            key={cert}
            className="absolute glass rounded-lg px-3 py-1 text-xs font-space text-success-glow border border-success-glow/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          >
            {cert}
          </motion.div>
        ))}
      </div>

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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-success-glow/10 to-electric/10 border border-success-glow/30 rounded-full backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <ApperIcon name="Users" size={16} className="text-success-glow" />
            </motion.div>
            <span className="text-sm font-space font-medium text-gray-300">
              Dreamwares Innovators
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-space font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-success-glow via-cyber-blue to-electric bg-clip-text text-transparent">
              Meet Our AI Experts
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our team of certified Salesforce developers and AI specialists combines deep technical 
            expertise with innovative thinking to deliver transformative solutions for your business.
          </motion.p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <TeamCard
              key={member.Id}
              member={member}
              index={index}
            />
          ))}
        </div>

        {/* Team stats */}
        <motion.div
          className="glass rounded-2xl p-8 border border-success-glow/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-space font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-success-glow to-cyber-blue bg-clip-text text-transparent">
                Team Excellence
              </span>
            </h3>
            <p className="text-gray-300 font-inter max-w-2xl mx-auto">
              Our collective expertise and certifications represent years of dedication to AI and Salesforce mastery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "Award",
                count: "200+",
                label: "Total Certifications",
                description: "Across Salesforce, AI, and Cloud platforms",
                color: "success-glow"
              },
              {
                icon: "Code",
                count: "50,000+",
                label: "Hours of Development",
                description: "In AI and Salesforce solutions",
                color: "cyber-blue"
              },
              {
                icon: "Lightbulb",
                count: "100+",
                label: "AI Models Deployed",
                description: "Custom AI solutions in production",
                color: "electric"
              },
              {
                icon: "Users",
                count: "24/7",
                label: "Global Support",
                description: "Round-the-clock expert assistance",
                color: "cyber-purple"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-${stat.color}/20 to-${stat.color}/40 border border-${stat.color}/30 flex items-center justify-center group-hover:border-${stat.color}/60 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 25px rgba(${stat.color === 'success-glow' ? '0, 255, 136' : stat.color === 'cyber-blue' ? '0, 212, 255' : stat.color === 'electric' ? '255, 0, 102' : '139, 0, 255'}, 0.3)`
                  }}
                >
                  <ApperIcon name={stat.icon} size={28} className={`text-${stat.color}`} />
                </motion.div>
                
                <motion.div
                  className={`text-2xl font-space font-bold text-${stat.color} mb-2`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.count}
                </motion.div>
                
                <h4 className="text-sm font-space font-bold text-white mb-2">
                  {stat.label}
                </h4>
                
                <p className="text-xs text-gray-300 font-inter">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join team CTA */}
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
            <h3 className="text-2xl font-space font-bold text-white mb-4">
              Ready to Join Our AI Revolution?
            </h3>
            <p className="text-gray-300 mb-6 font-inter max-w-2xl mx-auto">
              We're always looking for talented AI engineers, Salesforce developers, and 
              innovation leaders to join our growing team of experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-success-glow to-cyber-blue text-white font-space font-semibold rounded-lg border border-success-glow/50 hover:border-cyber-blue transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Users" size={18} />
                  <span>View Open Positions</span>
                </div>
              </motion.button>
              
              <motion.button
                className="px-6 py-3 bg-transparent text-white font-space font-semibold rounded-lg border border-white/20 hover:border-electric hover:bg-electric/10 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 0, 102, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Mail" size={18} />
                  <span>Contact HR</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating expertise badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["AI", "ML", "NLP", "CV", "Salesforce", "Cloud", "API", "IoT"].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-success-glow/20 to-cyber-blue/20 border border-success-glow/30 flex items-center justify-center text-xs font-space font-bold text-success-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;