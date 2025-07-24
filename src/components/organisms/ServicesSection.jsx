import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { servicesApi } from "@/services/api/servicesApi";
import ServiceCard from "@/components/molecules/ServiceCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await servicesApi.getAll();
      setServices(data);
    } catch (err) {
      setError(err.message || "Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadServices} />;
  if (!services.length) return <Empty title="No Services Available" onAction={loadServices} />;

  return (
    <section id="services" className="py-24 bg-deep-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-neural-network opacity-10" />
      <div className="absolute inset-0 cyber-grid opacity-5" />

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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 border border-cyber-purple/30 rounded-full backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-2 h-2 bg-cyber-purple rounded-full" />
            </motion.div>
            <span className="text-sm font-space font-medium text-gray-300">
              AI-Powered Digital Transformation
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-space font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyber-purple via-electric to-cyber-blue bg-clip-text text-transparent">
              Enterprise AI Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Cutting-edge artificial intelligence services that transform how businesses operate, 
            innovate, and compete in the digital future.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.Id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block glass rounded-2xl p-8 border border-electric/20"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-space font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 font-inter">
              Discover how our AI solutions can revolutionize your industry
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-electric to-cyber-purple text-white font-space font-semibold rounded-lg border border-electric/50 hover:border-electric transition-all duration-300"
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
              Schedule Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating service icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 border border-cyber-purple/20 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.3, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
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

export default ServicesSection;