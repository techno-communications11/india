"use client";
import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import contactInfo from '@/constants/contactInfo';
import { textVariants,rippleVariants,floatVariants } from '@/utils/animationVariants';
import GeometricShapes from '@/utils/GeometricShapes';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = `transform transition-all duration-1000 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
  }`;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
        }}
      />
      
     <GeometricShapes/>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-px h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-cyan-300/20"></div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-30 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
        />
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
          variants={rippleVariants}
          animate="pulse"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-10 right-40 w-16 h-16 border-2 border-cyan-400/50 rotate-45"
          variants={floatVariants}
          animate="float"
        />
        <motion.div
          className="absolute bottom-10 left-60 w-12 h-12 bg-cyan-400/30 rounded-full"
          variants={floatVariants}
          animate="float"
          transition={{ delay: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-50 pb-32 px-6">
        <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
        }}
      />
      
     <GeometricShapes/>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-px h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-cyan-300/20"></div>
          ))}
        </div>
      </div>
        <div className="max-w-6xl mx-auto text-center">
          <div className={`${fadeInUp} delay-200`}>
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial="hidden"
              animate="visible"
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
              {"Contact Us".split("").map((char, i) => (
                <motion.span key={i} variants={textVariants} custom={i}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={1}
            >
              Get in touch with our team to discuss how we can streamline your business operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className={`${fadeInUp} delay-200 text-center mb-16`} initial="hidden" animate="visible" variants={textVariants} custom={0}>
            <motion.h2
              className="text-5xl font-bold mb-6"
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
              className="text-xl text-gray-400 max-w-3xl mx-auto"
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
                  <motion.div
                    className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                    variants={floatVariants}
                    animate="float"
                  >
                    {info.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-4 text-white"
                    variants={textVariants}
                    custom={index + 0.5}
                  >
                    {info.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 leading-relaxed mb-4"
                    variants={textVariants}
                    custom={index + 1}
                  >
                    {info.details}
                  </motion.p>
                  <a
                    href={info.href}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
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
      <section className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div className={`${fadeInUp} delay-200 text-center mb-16`} initial="hidden" animate="visible" variants={textVariants} custom={0}>
            <motion.h2
              className="text-5xl font-bold mb-6"
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
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              variants={textVariants}
              custom={1}
            >
              Fill out the form below, and our team will get back to you promptly.
            </motion.p>
          </motion.div>
          <motion.div
            className={`${fadeInUp} bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm`}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
            whileHover={{ scale: 1.02 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={textVariants} custom={3}>
                  <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                <motion.div variants={textVariants} custom={3.5}>
                  <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>
              </div>
              <motion.div variants={textVariants} custom={4}>
                <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Subject"
                  required
                />
              </motion.div>
              <motion.div variants={textVariants} custom={4.5}>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send className="inline-block ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;