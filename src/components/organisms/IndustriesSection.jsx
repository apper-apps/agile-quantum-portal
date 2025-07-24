import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { industriesApi } from "@/services/api/industriesApi";
import IndustryCard from "@/components/molecules/IndustryCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";

const IndustriesSection = () => {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadIndustries = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await industriesApi.getAll();
      setIndustries(data);
    } catch (err) {
      setError(err.message || "Failed to load industries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIndustries();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadIndustries} />;
  if (!industries.length) return <Empty title="No Industries Available" onAction={loadIndustries} />;

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-deep-black to-near-black relative overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="matrix-rain">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * -1}s`,
                fontSize: "12px",
                opacity: 0.1,
              }}
            >
              AI ML CV NLP IOT API CRM ERP...
            </div>
          ))}
        </div>
      </div>

      {/* Neural network backdrop */}
      <div className="absolute inset-0 bg-neural-network opacity-5" />

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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyber-blue/10 to-success-glow/10 border border-cyber-blue/30 rounded-full backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ApperIcon name="Building2" size={16} className="text-cyber-blue" />
            </motion.div>
            <span className="text-sm font-space font-medium text-gray-300">
              Sectors We Transform
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-space font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyber-blue via-success-glow to-cyber-purple bg-clip-text text-transparent">
              Industry Transformation
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From financial services to healthcare, manufacturing to media - our AI solutions 
            are revolutionizing how industries operate, compete, and deliver value to their customers.
          </motion.p>
        </motion.div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.Id}
              industry={industry}
              index={index}
            />
          ))}
        </div>

        {/* Industry insights section */}
        <motion.div
          className="glass rounded-2xl p-8 border border-cyber-blue/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-space font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyber-blue to-success-glow bg-clip-text text-transparent">
                AI Transformation Impact
              </span>
            </h3>
            <p className="text-gray-300 font-inter max-w-3xl mx-auto">
              Real metrics from our industry transformations showing the power of AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "85%",
                label: "Average Efficiency Gain",
                description: "Across all industry implementations",
                icon: "TrendingUp",
                color: "success-glow"
              },
              {
                metric: "92%",
                label: "Average Accuracy Improvement",
                description: "In predictive analytics and decision making",
                icon: "Target",
                color: "cyber-blue"
              },
              {
                metric: "58%",
                label: "Average Cost Reduction",
                description: "Through intelligent automation",
                icon: "DollarSign",
                color: "electric"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-${insight.color}/20 to-${insight.color}/40 border border-${insight.color}/30 flex items-center justify-center group-hover:border-${insight.color}/60 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 30px rgba(${insight.color === 'success-glow' ? '0, 255, 136' : insight.color === 'cyber-blue' ? '0, 212, 255' : '255, 0, 102'}, 0.3)`
                  }}
                >
                  <ApperIcon name={insight.icon} size={32} className={`text-${insight.color}`} />
                </motion.div>
                
                <motion.div
                  className={`text-4xl font-space font-bold text-${insight.color} mb-2`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {insight.metric}
                </motion.div>
                
                <h4 className="text-lg font-space font-bold text-white mb-2">
                  {insight.label}
                </h4>
                
                <p className="text-sm text-gray-300 font-inter">
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block glass rounded-2xl p-8 border border-cyber-blue/20"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-space font-bold text-white mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-300 mb-6 font-inter max-w-2xl mx-auto">
              Our AI solutions are adaptable across all sectors. Let's discuss how we can 
              transform your specific industry challenges into competitive advantages.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-success-glow text-white font-space font-semibold rounded-lg border border-cyber-blue/50 hover:border-success-glow transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Custom Solutions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating industry icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 border border-cyber-blue/10 rounded-lg flex items-center justify-center"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          >
            <ApperIcon 
              name={["Building", "Heart", "Factory", "ShoppingBag", "Smartphone", "GraduationCap", "Building2", "Video"][Math.floor(Math.random() * 8)]} 
              size={24} 
              className="text-cyber-blue/20" 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;