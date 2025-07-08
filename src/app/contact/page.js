"use client";
import React, { useState, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import contactInfo from "@/constants/contactInfo";
import { textVariants, rippleVariants, floatVariants } from "@/utils/animationVariants";
import GeometricShapes from "@/utils/GeometricShapes";
import { toast } from "sonner"; // Using sonner for toast notifications

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = `transform transition-all duration-1000 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Validation
    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      // Reset form on success
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
      {/* Background Effects (Lightened) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-30 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
        />
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-10 right-40 w-16 h-16 border-2 border-blue-300/50 rotate-45"
          variants={floatVariants}
          animate="float"
        />
        <motion.div
          className="absolute bottom-10 left-60 w-12 h-12 bg-cyan-200/30 rounded-full"
          variants={floatVariants}
          animate="float"
          transition={{ delay: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Geometric Shapes (Assuming light theme compatibility) */}
      <GeometricShapes />

      {/* Grid Pattern Overlay (Lightened) */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-px h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-200/20"></div>
          ))}
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className={`${fadeInUp} delay-200 text-center mb-16`} initial="hidden" animate="visible" variants={textVariants} custom={0}>
            <motion.h2
              className="text-5xl font-bold mb-6 text-gray-900"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {"Reach Out to Us".split("").map((char, i) => (
                <motion.span key={i} variants={textVariants} custom={i}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={textVariants}
              custom={1}
            >
              We are here to assist you with all your backend operation needs.
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`${fadeInUp} group transition-all duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={index}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-md hover:shadow-lg">
                  <motion.div
                    className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300"
                    variants={floatVariants}
                    animate="float"
                  >
                    {info.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-4 text-gray-800"
                    variants={textVariants}
                    custom={index + 0.5}
                  >
                    {info.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 leading-relaxed mb-4"
                    variants={textVariants}
                    custom={index + 1}
                  >
                    {info.details}
                  </motion.p>
                  <a
                    href={info.href}
                    className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300"
                  >
                    {info.action}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div className={`${fadeInUp} delay-200 text-center mb-16`} initial="hidden" animate="visible" variants={textVariants} custom={0}>
            <motion.h2
              className="text-5xl font-bold mb-6 text-gray-900"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {"Send Us a Message".split("").map((char, i) => (
                <motion.span key={i} variants={textVariants} custom={i}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={textVariants}
              custom={1}
            >
              Fill out the form below, and our team will get back to you promptly.
            </motion.p>
          </motion.div>
          <motion.div
            className={`${fadeInUp} bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
            whileHover={{ scale: 1.02 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div 
                  className="p-4 bg-red-100 text-red-700 rounded-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={textVariants} custom={3}>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                <motion.div variants={textVariants} custom={3.5}>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>
              </div>
              <motion.div variants={textVariants} custom={4}>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Subject"
                  required
                />
              </motion.div>
              <motion.div variants={textVariants} custom={4.5}>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className={`group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center mx-auto ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={!isSubmitting ? { scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="inline-block ml-2 w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;