"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { LucideArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-left px-8 md:px-16 max-w-3xl animate-fadeInDown">
          <h1 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-white/80 mb-4">
            CAREERS
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Make a future you truly believe in
          </h2>
          <button
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("current-openings").offsetTop,
                behavior: "smooth",
              })
            }
            className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3  rounded-full font-medium hover:bg-gray-200 transition-all duration-300 shadow-md mt-4"
          >
            Apply now
            <span className="bg-gray-800 text-white p-1.5 rounded-full">
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
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-32 animate-fadeInUp">
            Why Work With Us?
          </h2>

          {/* Zigzag Items */}
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 animate-slideLeft">
              <div className="md:w-1/2">
                <img
                  src="https://picsum.photos/id/1015/600/400"
                  alt="Innovate"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-1/3">
                <h3 className="text-3xl font-bold text-blue-600 ml-10">
                  Innovate & Create
                </h3>
                <p className="mt-4 text-gray-600 ml-10 max-w-xl">
                  Work on cutting-edge projects that push boundaries and shape
                  the future. Collaborate with visionary thinkers and skilled
                  professionals in a dynamic environment that encourages
                  experimentation and bold ideas. Here, your creativity drives
                  real-world solutions that make a difference — every line of
                  code, every design choice matters. Join us and turn your
                  innovative ideas into groundbreaking products that transform
                  industries and inspire change.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 animate-slideRight">
              <div className="md:w-1/2">
                <img
                  src="https://picsum.photos/id/1016/600/400"
                  alt="Grow"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-blue-600">
                  Grow With Us
                </h3>
                <p className="mt-4 text-gray-600">
                  Access opportunities for learning, mentorship, and career
                  advancement. We believe in nurturing talent by providing
                  continuous training, personalized guidance, and a supportive
                  community. Whether you are just starting out or looking to
                  deepen your expertise, you will find the resources and
                  encouragement to reach your full potential. Grow your skills,
                  take on new challenges, and build a rewarding career with us.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 animate-slideLeft">
              <div className="md:w-1/2">
                <img
                  src="https://picsum.photos/id/1018/600/400"
                  alt="Inclusive Culture"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-blue-600">
                  Inclusive Culture
                </h3>
                <p className="mt-4 text-gray-600">
                  Thrive in a diverse and supportive environment where every
                  voice matters. We celebrate individuality and foster a culture
                  of respect, collaboration, and belonging. Here, different
                  perspectives drive innovation, and everyone is empowered to
                  contribute their unique talents. Join a community that values
                  you for who you are and supports your growth both personally
                  and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
          }}
          initial={{ scale: 1 }}
          whileInView={{
            scale: 1.1,
            transition: { duration: 10, ease: "easeOut" },
          }}
          viewport={{ once: false }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
        </motion.div>

        <div className="relative z-10 text-left px-8 md:px-16 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
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
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
              className="pl-6"
            >
              <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase text-cyan-400">
                A BELIEF IN DIVERSITY
              </h3>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                },
              }}
              className="mt-6 pl-6"
            >
              <p className="text-3xl md:text-5xl font-bold leading-tight text-white">
                Remarkable change happens when you bring together, honor, and
                support the most talented individuals from diverse backgrounds.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="absolute top-0 left-0 h-full w-full z-10 bg-gradient-to-r from-white via-white to-transparent"
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          whileInView={{ clipPath: "polygon(0 0, 70% 0, 40% 100%, 0 100%)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-10 left-10 md:top-16 md:left-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl md:text-6xl  lg:text-8xl font-bold text-gray-800 leading-tight max-w-xl">
              Technology-led,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                human-centered
              </span>{" "}
              experiences
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Current Openings */}
      <section id="current-openings" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600">
              We are always looking for talented individuals to join our growing
              team.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 md:aspect-none">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfYf-iBA1YnOjli8-hvpsB82qqo1JgNUYec_bKTBXjmDhrsGA/viewform?embedded=true"
                className="w-full h-[800px] md:h-[1000px] border-0"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Job Application Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            Having trouble with the form?{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYf-iBA1YnOjli8-hvpsB82qqo1JgNUYec_bKTBXjmDhrsGA/viewform"
              className="text-blue-600 hover:underline"
            >
              Open it in a new window
            </a>
            .
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
