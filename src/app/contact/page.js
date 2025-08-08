{"use client"};
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import contactInfo from "@/constants/contactInfo";
import {
  textVariants,
  rippleVariants,
  floatVariants,
} from "@/utils/animationVariants";
import GeometricShapes from "@/utils/GeometricShapes";
import Head from "next/head";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = `transform transition-all duration-1000 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("Thank you! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitStatus(""), 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Techno Communications | Get in Touch</title>
        <meta
          name="description"
          content="Contact Techno Communications for expert IT support, partnerships, or inquiries. Reach our team at our Mumbai or Delhi offices."
        />
        <meta property="og:title" content="Contact Techno Communications | Get in Touch" />
        <meta
          property="og:description"
          content="Connect with Techno Communications for IT solutions, support, and collaboration. Offices in Mumbai and Delhi."
        />
        <meta
          property="og:image"
          content="https://technocommunicationsglobal.com/contact-banner.png"
        />
        <meta
          property="og:url"
          content="https://technocommunicationsglobal.com/contact"
        />
      </Head>

      <div id="contact" className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
        {/* Background Effects (Lightened, Hidden on Small Screens) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block">
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

        {/* Geometric Shapes (Hidden on Small Screens) */}
        <GeometricShapes className="hidden md:block" />

        {/* Grid Pattern Overlay (Lightened, Hidden on Small Screens) */}
        <div className="absolute inset-0 opacity-5 hidden md:block">
          <div className="grid grid-cols-12 gap-px h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-gray-200/20"></div>
            ))}
          </div>
        </div>

        {/* Contact Information Section */}
        <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto">
            <motion.div
              className={`${fadeInUp} delay-200 text-center mb-8 sm:mb-10 md:mb-16`}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={0}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
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
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto"
                variants={textVariants}
                custom={1}
              >
                We are here to assist you with all your IT needs. Contact our team for support, partnerships, or inquiries.
              </motion.p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={`${fadeInUp} group transition-all duration-500`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-md hover:shadow-lg">
                    <motion.div
                      className="text-blue-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                      variants={floatVariants}
                      animate="float"
                    >
                      {info.icon}
                    </motion.div>
                    <motion.h3
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800"
                      variants={textVariants}
                      custom={index + 0.5}
                    >
                      {info.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4"
                      variants={textVariants}
                      custom={index + 1}
                    >
                      {info.details}
                    </motion.p>
                    <a
                      href={info.href}
                      className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300 text-sm sm:text-base"
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
        <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className={`${fadeInUp} delay-300 text-center mb-8 sm:mb-10 md:mb-12`}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={2}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
                variants={textVariants}
                custom={2}
              >
                Send Us a Message
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                variants={textVariants}
                custom={3}
              >
                Fill out the form below, and our team will respond within 24 hours.
              </motion.p>
            </motion.div>
            <motion.form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={4}
            >
              <motion.div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>
              <motion.div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>
              <motion.div className="mb-4 md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300 h-32 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </motion.div>
              <motion.div className="md:col-span-2 text-center">
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
                {submitStatus && (
                  <motion.p
                    className="mt-4 text-green-600 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {submitStatus}
                  </motion.p>
                )}
              </motion.div>
            </motion.form>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default ContactPage;