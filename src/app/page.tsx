'use client';

import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechnicalSkills from '@/components/TechnicalSkills';
import SoftSkills from '@/components/SoftSkills';
import InteractiveGlobe from '@/components/InteractiveGlobe';
import Projects from '@/components/Projects';
import RandomQuotes from '@/components/RandomQuotes';
import Coding from '@/components/Coding';
import Certificates from '@/components/Certificates';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Stars */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Technical Skills Section */}
      <TechnicalSkills />

      {/* Soft Skills Section */}
      <SoftSkills />

      {/* Interactive Globe Section */}
      <InteractiveGlobe />

      {/* Projects Section */}
      <Projects />

      {/* Random Quotes Section */}
      <RandomQuotes />

      {/* Coding Profiles Section */}
      <Coding />

      {/* Certificates Section */}
      <Certificates />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
} 