import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './section-heading';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius"
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  }
];

const quoteVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export default function RandomQuotes() {
  const [currentQuote, setCurrentQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  });

  const generateNewQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[newIndex].text === currentQuote.text);
    setCurrentQuote(quotes[newIndex]);
  };

  return (
    <section id="quotes" className="py-20 px-4">
      <SectionHeading 
        title="Random Quotes" 
        subtitle="Words of wisdom from great minds that inspire and motivate"
      />
      
      <motion.div 
        className="max-w-3xl mx-auto mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[200px] mb-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote.text}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full"
            >
              <motion.p 
                className="text-2xl font-serif italic mb-4 text-[var(--color-primary)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                "{currentQuote.text}"
              </motion.p>
              <motion.p 
                className="text-lg font-medium text-[var(--color-primary)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                - {currentQuote.author}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={generateNewQuote}
          className="px-6 py-2 rounded-full bg-[var(--color-primary)] text-[var(--color-background)]
                    shadow-md hover:shadow-lg transition-all duration-300
                    border border-[var(--color-primary)] relative overflow-hidden
                    hover:scale-105 active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="relative z-10"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Generate Quote
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-[var(--color-primary)] opacity-20"
            initial={{ scale: 0, x: "-50%", y: "-50%" }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
} 