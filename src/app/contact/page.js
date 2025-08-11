"use client";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("");

    try {
      const response = await fetch(
        "https://technocommunicationsglobal.com/send-email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }).toString(),
        }
      );

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("✅ Thank you! We’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus(`❌ ${result.error || "Something went wrong. Please try again."}`);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitStatus("❌ Failed to send message. Please try again later.");
    }

    setTimeout(() => setSubmitStatus(""), 5000);
  };

  return (
    <>
      <Head>
        <title>Contact Techno Communications | Get in Touch</title>
        <meta
          name="description"
          content="Contact Techno Communications for expert IT support, partnerships, or inquiries."
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block z-0">
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

        {/* Geometric Shapes */}
        <div className="pointer-events-none z-0 hidden md:block">
          <GeometricShapes />
        </div>

        {/* Contact Info */}
        <section className="relative z-10 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-4 text-gray-900"
              variants={textVariants}
              custom={0}
            >
              Reach Out to Us
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              variants={textVariants}
              custom={1}
            >
              We are here to assist you with all your IT needs.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border shadow hover:shadow-lg transition"
              >
                <div className="text-blue-500 mb-3">{info.icon}</div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-600 mb-3">{info.details}</p>
                <a
                  href={info.href}
                  className="text-blue-500 font-semibold hover:text-blue-700"
                >
                  {info.action}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative z-10 py-12 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                />
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
                {submitStatus && (
                  <p className="mt-4 text-sm text-green-600">{submitStatus}</p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;