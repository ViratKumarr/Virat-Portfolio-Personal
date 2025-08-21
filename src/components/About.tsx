'use client';

import React from 'react';
import Image from 'next/image'; // ✅ Correct import
import { HiDownload } from 'react-icons/hi';
import { useTheme } from '@/context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title with animated underline */}
        <h2 className="section-heading">About Me</h2>
        <div className="text-center mb-12">
          <p className="text-[var(--color-secondary)] text-lg font-medium">
            Learn more about my background, skills, and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-[350px] h-[350px] relative rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/profile.jpg"
                alt="Profile Picture"
                width={350}
                height={350}
                className="object-cover rounded-full"
                priority // ensures it loads faster
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Hello! I&apos;m a passionate developer
              </h3>
              <p className="text-[var(--color-secondary)] leading-relaxed text-justify">
                Hello! I'm a passionate developer with a strong foundation in web development and a keen eye for design. I enjoy creating elegant solutions to complex problems.
              </p>
            </div>

            <div>
              <p className="text-[var(--color-secondary)] leading-relaxed text-justify">
                With several years of experience in the tech industry, I've worked on a variety of projects ranging from small business websites to complex enterprise applications. My goal is to build products that are not only functional but also provide an exceptional user experience.
              </p>
            </div>

            <div>
              <p className="text-[var(--color-secondary)] leading-relaxed text-justify">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <a
                href="/projects/Virat_Resume_August.pdf"
                download
                className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full 
                  ${isDark ? 'bg-white text-black' : 'bg-black text-white'}
                  hover:bg-opacity-90 transition-all text-sm font-medium
                  shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
              >
                <HiDownload className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
