"use client";
import LandingHeader from "../components/LandingHeader";
import AboutUsPage from "./about/page";
import ServicesPage from "./services/page";
import ContactPage from "./contact/page";
import React, { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = (e) => {
    e.preventDefault();
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Techno Communications Global PVT LTD",
              "url": "https://technocommunicationsglobal.com",
              "logo": "https://technocommunicationsglobal.com/logoT.png"
            }),
          }}
        />
      </Head>

      <LandingHeader
        onAboutClick={scrollToAbout}
        onServicesClick={scrollToServices}
        onContactClick={scrollToContact}
      />
      <main className="min-h-screen">
        <div ref={aboutRef} className="scroll-mt-16" id="about">
          <AboutUsPage />
        </div>
        <div ref={servicesRef} className="scroll-mt-16" id="services">
          <ServicesPage />
        </div>
        <div ref={contactRef} className="scroll-mt-16" id="contact">
          <ContactPage />
        </div>
      </main>
    </>
  );
}
