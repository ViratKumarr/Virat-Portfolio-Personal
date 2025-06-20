import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { isDark } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/ViratKumarr',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/virat-kumar-b0b57024a',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/___virat_chaudhary___/',
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setStatus('loading');
      setErrorMessage('');

      await emailjs.sendForm(
        'service_wqaaclj',
        'template_83m2lse',
        form.current,
        'O7whhIO64oNbdqFpQ'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');

      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <SectionHeading 
        title="Contact Me" 
        subtitle="Let's turn ideas into reality together"
      />
      
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[var(--color-primary)]">
              Let's Build Something Amazing Together
            </h3>
            
            <p className="text-[var(--color-secondary)] leading-relaxed">
              I'm always excited to collaborate on new projects and bring innovative ideas to life. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center
                              ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                  <FiMail className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)]">Email Me At</h4>
                  <p className="text-[var(--color-secondary)]">viratwrks@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center
                              ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                  <FiMessageSquare className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-primary)]">Response Time</h4>
                  <p className="text-[var(--color-secondary)]">Within 24 hours</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-semibold text-[var(--color-primary)] mb-3">Connect With Me</h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center
                                ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'}
                                transition-all duration-300 hover:scale-110`}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiUser className={`text-[var(--color-secondary)]`} />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={status === 'loading'}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg outline-none
                            ${isDark ? 'bg-white/10' : 'bg-black/5'}
                            border-2 ${isDark ? 'border-white/20' : 'border-black/20'}
                            focus:border-[var(--color-primary)] transition-colors
                            text-[var(--color-primary)] placeholder-[var(--color-secondary)]
                            disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiMail className={`text-[var(--color-secondary)]`} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={status === 'loading'}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg outline-none
                            ${isDark ? 'bg-white/10' : 'bg-black/5'}
                            border-2 ${isDark ? 'border-white/20' : 'border-black/20'}
                            focus:border-[var(--color-primary)] transition-colors
                            text-[var(--color-primary)] placeholder-[var(--color-secondary)]
                            disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                  <FiMessageSquare className={`text-[var(--color-secondary)]`} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  disabled={status === 'loading'}
                  rows={5}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg outline-none
                            ${isDark ? 'bg-white/10' : 'bg-black/5'}
                            border-2 ${isDark ? 'border-white/20' : 'border-black/20'}
                            focus:border-[var(--color-primary)] transition-colors
                            text-[var(--color-primary)] placeholder-[var(--color-secondary)]
                            disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Status Message */}
              {(status === 'success' || status === 'error') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-2
                            ${status === 'success' 
                              ? 'bg-green-500/10 text-green-500' 
                              : 'bg-red-500/10 text-red-500'}`}
                >
                  {status === 'success' ? (
                    <>
                      <FiCheckCircle />
                      <span>Message sent successfully!</span>
                    </>
                  ) : (
                    <>
                      <FiAlertCircle />
                      <span>{errorMessage}</span>
                    </>
                  )}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg
                          ${isDark 
                            ? 'bg-white text-black hover:bg-white/90' 
                            : 'bg-black text-white hover:bg-black/90'}
                          flex items-center justify-center gap-2 font-medium
                          transition-all duration-300
                          disabled:opacity-50 disabled:cursor-not-allowed
                          border-2 ${isDark ? 'border-white/20' : 'border-black/20'}`}
              >
                {status === 'loading' ? (
                  <>
                    <div className={`w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin`} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 