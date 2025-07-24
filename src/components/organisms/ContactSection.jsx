import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import ApperIcon from "@/components/ApperIcon";
import React from "react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Global Headquarters",
      details: ["Silicon Valley, CA", "Innovation District"],
      color: "electric"
    },
    {
      icon: "Mail",
      title: "AI Consultation",
      details: ["ai@dreamwares.com", "24/7 Response"],
      color: "cyber-blue"
    },
    {
      icon: "Phone",
      title: "Direct Connect",
      details: ["+1 (555) AI-DREAM", "Instant Support"],
      color: "cyber-purple"
    }
  ];

  const offices = [
    { city: "San Francisco", country: "USA", coords: { x: 15, y: 35 } },
    { city: "London", country: "UK", coords: { x: 50, y: 25 } },
    { city: "Singapore", country: "SG", coords: { x: 75, y: 55 } },
    { city: "Sydney", country: "AU", coords: { x: 85, y: 75 } },
    { city: "Tokyo", country: "JP", coords: { x: 80, y: 40 } },
    { city: "Mumbai", country: "IN", coords: { x: 70, y: 50 } }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-deep-black via-near-black to-deep-black relative overflow-hidden">
      {/* Portal energy field */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
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
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Neural connection grid */}
      <motion.div
        className="absolute inset-0 cyber-grid opacity-10"
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 25,
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
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ApperIcon name="Zap" size={16} className="text-electric" />
            </motion.div>
            <span className="text-sm font-space font-medium text-gray-300">
              Connect to the Future
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-space font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-electric via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Begin Your AI Journey
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to transform your business with cutting-edge AI? Our team of experts is standing by 
            to discuss your vision and create a customized solution that propels you into the future.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            className="glass rounded-2xl p-8 border border-electric/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-space font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-electric to-cyber-blue bg-clip-text text-transparent">
                  Project Consultation Portal
                </span>
              </h3>
              <p className="text-gray-300 font-inter">
                Fill out the form below and our AI specialists will contact you within 24 hours 
                to discuss your transformation needs.
              </p>
            </div>

            <ContactForm />

            {/* Success indicators */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: "Clock", text: "24h Response", color: "success-glow" },
                { icon: "Shield", text: "NDA Protected", color: "cyber-blue" },
                { icon: "Award", text: "Expert Team", color: "electric" }
              ].map((indicator, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 glass rounded-lg border border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                >
                  <ApperIcon name={indicator.icon} size={20} className={`text-${indicator.color} mx-auto mb-2`} />
                  <span className="text-xs font-inter text-gray-300">{indicator.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact info and map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-6 border border-gray-600 hover:border-electric/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r from-${info.color}/20 to-${info.color}/40 border border-${info.color}/30 flex items-center justify-center group-hover:border-${info.color}/60 transition-all duration-300`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ApperIcon name={info.icon} size={24} className={`text-${info.color}`} />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-space font-bold text-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 font-inter text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${info.color} rounded-full`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Global presence map */}
            <motion.div
              className="glass rounded-xl p-6 border border-cyber-blue/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-space font-bold text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                  Global AI Network
                </span>
              </h4>

              {/* World map visualization */}
              <div className="relative w-full h-64 rounded-lg bg-gradient-to-br from-deep-black/50 to-near-black/50 border border-gray-700 overflow-hidden">
                {/* Map grid */}
                <div className="absolute inset-0 cyber-grid opacity-20" />

                {/* Office locations */}
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-4 h-4 group cursor-pointer"
                    style={{
                      left: `${office.coords.x}%`,
                      top: `${office.coords.y}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={ { once: true }}
                    whileHover={{ scale: 1.5 }}
                  >
                    {/* Office marker */}
                    <motion.div
                      className="w-full h-full bg-cyber-blue rounded-full border-2 border-white"
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(0, 212, 255, 0.5)",
                          "0 0 20px rgba(0, 212, 255, 0.8)",
                          "0 0 10px rgba(0, 212, 255, 0.5)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />

                    {/* Pulse rings */}
                    <motion.div
                      className="absolute inset-0 border border-cyber-blue/50 rounded-full"
                      animate={{
                        scale: [1, 3],
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />

                    {/* Office info tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="glass rounded-lg px-3 py-2 border border-cyber-blue/30 whitespace-nowrap">
                        <p className="text-xs font-space font-bold text-white">{office.city}</p>
                        <p className="text-xs text-gray-300">{office.country}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {offices.map((office, index) => (
                    offices.slice(index + 1).map((targetOffice, targetIndex) => (
                      <motion.line
                        key={`${index}-${targetIndex}`}
                        x1={`${office.coords.x}%`}
                        y1={`${office.coords.y}%`}
                        x2={`${targetOffice.coords.x}%`}
                        y2={`${targetOffice.coords.y}%`}
                        stroke="rgba(0, 212, 255, 0.2)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    ))
                  )).flat()}
                </svg>
              </div>

              <p className="text-center text-sm text-gray-300 font-inter mt-4">
                24/7 support across 6 global offices serving 30+ countries
<p className="text-center text-sm text-gray-300 font-inter mt-4">
                24/7 support across 6 global offices serving 30+ countries
              </p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block glass rounded-2xl p-6 border border-electric/20"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-space font-bold text-white mb-2">
              Urgent AI Consultation Needed?
            </h4>
            <p className="text-gray-300 mb-4 font-inter">
              Critical system failures or time-sensitive AI deployments
            </p>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-error-glow to-electric text-white font-space font-semibold rounded-lg border border-error-glow/50 hover:border-electric transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 51, 102, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <ApperIcon name="AlertTriangle" size={18} />
                <span>Emergency Hotline</span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background holographic elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-electric/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;