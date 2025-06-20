'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Coding', href: '#coding', id: 'coding' },
  { name: 'Certificates', href: '#certificates', id: 'certificates' },
  { name: 'Gallery', href: '#gallery', id: 'gallery' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded-full transition-all duration-200
        ${isActive
          ? 'bg-[var(--color-border)] text-[var(--color-primary)]'
          : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'}`}
    >
      {children}
    </Link>
  );
};

const Separator = () => (
  <span className="text-[var(--color-secondary)] opacity-50 mx-4">|</span>
);

const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [time, setTime] = useState<string>(formatTime(new Date()));
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle section highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clock update
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Navbar scroll background effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Blur Layer */}
      <div
        className={`fixed top-0 left-0 right-0 h-24 backdrop-blur-md z-40 pointer-events-none
        ${isScrolled ? 'bg-theme/5' : 'bg-transparent'}`}
      />

      {/* Main Navbar */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[900px] 
        rounded-full border border-theme z-50 transition-all duration-300
        ${isScrolled
            ? 'bg-[var(--color-background)]/70 shadow-lg'
            : 'bg-[var(--color-background)]/40'
          }`}
      >
        <div className="px-6 py-3 flex items-center justify-between text-sm w-full flex-wrap gap-3 md:gap-0">
          {/* Left: Location */}
          <div className="text-theme-secondary">
            Asia/Bangalore
          </div>

          {/* Center: Navigation (Desktop Only) */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activeSection === item.id}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right: Theme + Clock + Menu Button */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--color-border)] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiSun className="w-4 h-4 text-[var(--color-primary)]" />
              ) : (
                <FiMoon className="w-4 h-4 text-[var(--color-primary)]" />
              )}
            </button>

            {/* Clock */}
            <div className="text-theme-secondary font-medium whitespace-nowrap">
              {time}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-[var(--color-secondary)] text-lg">
                {menuOpen ? '✖' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[var(--color-background)] border-t border-theme md:hidden flex flex-col items-center space-y-3 py-4 z-50">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} isActive={activeSection === item.id}>
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
