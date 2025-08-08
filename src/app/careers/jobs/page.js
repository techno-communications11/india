"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const CareersPage = () => {
  return (
    <>
      <Head>
        <title>Careers at Techno Communications</title>
        <meta
          name="description"
          content="Explore exciting job opportunities at Techno Communications Global PVT LTD."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <div className="bg-gray-100 font-['Montserrat, sans-serif'] text-gray-900">
        <section className="relative h-screen w-full overflow-hidden bg-black">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.7] "
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-50 text-white">
            <div className="mb-4">
              <p className="text-sm md:text-base font-bolder uppercase tracking-[0.2em] text-white/70 mb-1">
                Careers
              </p>
            </div>
            <h1
              className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mb-8 mt-10"
              style={{ fontFamily: `'Montserrat', sans-serif` }}
            >
              Build a future you truly believe in
            </h1>

            <button
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("current-openings").offsetTop,
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-base hover:bg-gray-200 transition duration-300 shadow-lg"
            >
              Apply now
              <span className="bg-black text-white p-1.5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 12h14"
                  />
                </svg>
              </span>
            </button>
          </div>
        </section>

        {/* Why Join Us - Zigzag Layout */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-8xl md:text-7xl font-bold text-center text-gray-900 mb-16">
              Why Work With Us?
            </h2>
            <div className="space-y-24">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <img
                    src="/creative_Rawpixel_gety.jpg"
                    alt="Innovate"
                    className="rounded-lg shadow-md w-full object-cover h-80"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    Innovate & Create
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    Work on cutting-edge projects that push boundaries and shape
                    the future. Collaborate with visionary thinkers in a dynamic
                    environment that encourages bold ideas. Your creativity
                    drives real-world solutions that make a difference.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                  <img
                    src="/successful.jpg"
                    alt="Grow"
                    className="rounded-lg shadow-md w-full object-cover h-80"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    Grow With Us
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    Access opportunities for learning, mentorship, and career
                    advancement. We provide continuous training and a supportive
                    community to help you reach your full potential.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <img
                    src="/employees.png"
                    alt="Inclusive Culture"
                    className="rounded-lg shadow-md w-full object-cover h-80"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    Inclusive Culture
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    Thrive in a diverse and supportive environment where every
                    voice matters. We foster a culture of respect,
                    collaboration, and belonging to drive innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
            }}
            initial={{ scale: 1 }}
            whileInView={{
              scale: 1.05,
              transition: { duration: 8, ease: "easeOut" },
            }}
            viewport={{ once: false }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </motion.div>
          <div className="relative z-10 text-left px-6 md:px-12 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-700"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1/3 bg-cyan-400"
                  animate={{
                    y: ["0%", "200%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.2 },
                  },
                }}
                className="pl-8"
              >
                <h3 className="text-base md:text-lg font-semibold tracking-widest uppercase text-cyan-400">
                  A BELIEF IN DIVERSITY
                </h3>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.4 },
                  },
                }}
                className="mt-6 pl-8"
              >
                <p className="text-2xl md:text-3xl font-bold leading-tight text-white max-w-3xl">
                  Remarkable change happens when you bring together, honor, and
                  support the most talented individuals from diverse
                  backgrounds.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative h-[60vh] w-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
            }}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/80 to-transparent"
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            whileInView={{ clipPath: "polygon(0 0, 65% 0, 35% 100%, 0 100%)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-12 left-8 md:top-16 md:left-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-2xl">
                Technology-led,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  human-centered
                </span>{" "}
                experiences
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section id="current-openings" className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are always looking for talented individuals to join our
                growing team.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-[1000px] md:h-[1200px]">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSff5e319l5AjpeZtU-QUf5X8hVsch4FHlLa6AvYlCUHAxcWvQ/viewform?embedded=true"
                  className="w-full h-full"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Job Application Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
            <div className="mt-6 text-center text-gray-600 text-sm">
              Having trouble with the form?{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYf-iBA1YnOjli8-hvpsB82qqo1JgNUYec_bKTBXjmDhrsGA/viewform"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open it in a new window
              </a>
              .
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
