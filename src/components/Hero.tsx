'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import StarBackground from './StarBackground';
import { useTheme } from '@/context/ThemeContext';

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--color-text)] hover:text-[var(--color-text)] transition-all duration-300 transform hover:scale-110 hover:shadow-lg p-2 rounded-full"
    aria-label={label}
  >
    <Icon className="w-7 h-7" />
  </a>
);

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Star Background contained within hero */}
      <div className="absolute inset-0">
        <StarBackground />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text)] mb-6 transition-colors">
          Hii, This is Virat
        </h1>

        {/* Typing Animation */}
        <div className="text-2xl md:text-4xl flex items-center justify-center gap-2 mb-8">
          <span className="text-[var(--color-text)] transition-colors">I&apos;m a</span>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'MERN Developer',
              2000,
              'Java Developer',
              2000,
              'Enthusiast',
              2000,
              'Visionary',
              2000,
              'Adventurer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[var(--color-primary)] font-semibold transition-colors"
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-8">
          <SocialLink
            href="https://github.com/ViratKumarr"
            icon={FaGithub}
            label="GitHub Profile"
          />
          <SocialLink
            href="https://linkedin.com/in/virat-kumar-b0b57024a"
            icon={FaLinkedin}
            label="LinkedIn Profile"
          />
          <SocialLink
            href="https://instagram.com/___virat_chaudhary___/"
            icon={FaInstagram}
            label="Instagram Profile"
          />
        </div>

        {/* Resume Download Button */}
        <a
          href="/projects/Virat_Resume_August.pdf"
          download
          className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full 
            ${isDark ? 'bg-white text-black' : 'bg-black text-white'}
            hover:bg-opacity-90 transition-all text-sm font-medium
            shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
        >
          <HiDownload className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero; 