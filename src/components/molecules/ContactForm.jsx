import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Generative AI Solutions",
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Salesforce Implementation",
    "Custom Development"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Message sent successfully! Our AI team will contact you soon.", {
        position: "top-right",
        autoClose: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name field */}
          <div className="space-y-2">
            <label className="block text-sm font-space font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="focus:border-electric"
            />
          </div>

          {/* Email field */}
          <div className="space-y-2">
            <label className="block text-sm font-space font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@company.com"
              required
              className="focus:border-electric"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company field */}
          <div className="space-y-2">
            <label className="block text-sm font-space font-medium text-gray-300 mb-2">
              Company Name
            </label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              required
              className="focus:border-cyber-blue"
            />
          </div>

          {/* Service selection */}
          <div className="space-y-2">
            <label className="block text-sm font-space font-medium text-gray-300 mb-2">
              Service Interest
            </label>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-white/20 text-white focus:border-cyber-blue focus:outline-none transition-all duration-300 font-inter appearance-none"
              >
                <option value="" className="bg-near-black text-white">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-near-black text-white">
                    {service}
                  </option>
                ))}
              </select>
              <ApperIcon 
                name="ChevronDown" 
                size={20} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" 
              />
            </div>
          </div>
        </div>

        {/* Message field */}
        <div className="space-y-2">
          <label className="block text-sm font-space font-medium text-gray-300 mb-2">
            Project Details
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your AI transformation needs..."
            rows={5}
            required
            className="w-full px-4 py-3 bg-transparent border-b-2 border-white/20 text-white placeholder-gray-400 focus:border-cyber-purple focus:outline-none transition-all duration-300 font-inter resize-none focus:shadow-[0_2px_10px_rgba(139,0,255,0.3)]"
          />
        </div>

        {/* Submit button */}
        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            variant="default"
            disabled={isSubmitting}
            className="w-full md:w-auto px-12 py-4 relative overflow-hidden group"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <ApperIcon name="Loader2" size={20} />
                </motion.div>
                <span>Transmitting Data...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <ApperIcon name="Send" size={20} />
                <span>Begin Transformation</span>
              </div>
            )}

            {/* Particle effect on hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </Button>
        </div>
      </form>

      {/* Success animation overlay */}
      {isSubmitting && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-32 h-32 border-4 border-electric rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;