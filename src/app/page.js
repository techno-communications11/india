"use client";
import LandingHeader from '../components/LandingHeader';
import AboutUsPage from './about/page';
import ServicesPage from './services/page';
import ContactPage from './contact/page';
import React, { useRef } from 'react';
export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = (e) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <LandingHeader
        onAboutClick={scrollToAbout}
        onServicesClick={scrollToServices}
        onContactClick={scrollToContact}
      />
      <main>
        <div ref={aboutRef}>
          <AboutUsPage />
        </div>
        <div ref={servicesRef}>
          <ServicesPage />
        </div>
        <div ref={contactRef}>
          <ContactPage />
        </div>
      </main>
    </>
  );
}