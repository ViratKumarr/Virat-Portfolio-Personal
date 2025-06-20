import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 px-4 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">About</h3>
            <p className="text-[var(--color-secondary)]">
              A passionate developer focused on creating beautiful and functional web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Skills
                </Link>
              </li>
              
              <li>
                <Link href="#projects" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Projects
                </Link>
              </li>
              
              <li>
                <Link href="#coding" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Coding
                </Link>
              </li>
              <li>
                <Link href="#certificates" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Certificates
                </Link>
              </li>
              
              <li>
                <Link href="#contact" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Contact</h3>
            <ul className="space-y-2">
              <li className="text-[var(--color-secondary)]">Bangalore, India</li>
              <li>
                <a 
                  href="mailto:viratwrks@gmail.com" 
                  className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  viratwrks@gmail.com
                </a>
              </li>
              <li className="text-[var(--color-secondary)]">+91 834-069-4346</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Follow Me</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/ViratKumarr"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center
                          ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'}
                          transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/virat-kumar-b0b57024a"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center
                          ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'}
                          transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/___virat_chaudhary___/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center
                          ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'}
                          transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'} text-center`}
        >
          <p className="text-[var(--color-primary)]">© {currentYear} Virat Kumar. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1 text-[var(--color-primary)]">
            Made with <FaHeart className="w-4 h-4 text-red-500" /> by VIRAT
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 