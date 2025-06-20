import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { 
  SiLeetcode, 
  SiHackerrank, 
  SiCodechef, 
  SiGithub,
  SiGeeksforgeeks
} from 'react-icons/si';

interface CodingPlatform {
  name: string;
  icon: React.ElementType;
  username: string;
  link: string;
  stats?: string;
  description: string;
}

const platforms: CodingPlatform[] = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    username: "___ViRaT___",
    link: "https://leetcode.com/u/___ViRaT___/",
    stats: "Active Problem Solver",
    description: "Data Structures & Algorithms, Problem Solving"
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    username: "viratwrks",
    link: "https://www.hackerrank.com/profile/viratwrks",
    stats: "Problem Solving & Java",
    description: "Problem Solving, Python, Java, SQL"
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    username: "v_irat",
    link: "https://www.codechef.com/users/v_irat",
    stats: "359 Problems Solved",
    description: "Competitive Programming, Problem Solver - Silver Badge"
  },
  {
    name: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    username: "viratr3px",
    link: "https://www.geeksforgeeks.org/user/viratr3px/",
    stats: "Institute Rank 119",
    description: "22 Problems Solved, Java Programming"
  },
  {
    name: "GitHub",
    icon: SiGithub,
    username: "ViratKumarr",
    link: "https://github.com/ViratKumarr",
    stats: "7+ Repositories",
    description: "Full Stack Projects & Open Source Contributions"
  }
];

const Coding = () => {
  return (
    <section id="coding" className="py-20 px-4">
      <SectionHeading 
        title="Coding Profiles" 
        subtitle="Check out my progress and achievements on various coding platforms"
      />
      
      <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="platform-card group bg-[var(--color-background)] p-6 rounded-xl border border-[var(--color-border)]
                         transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="platform-icon w-12 h-12 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ 
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <platform.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                    {platform.name}
                  </h3>
                  <p className="text-[var(--color-secondary)] text-sm">
                    @{platform.username}
                  </p>
                </div>
              </div>
              
              {platform.stats && (
                <div className="mb-3 text-[var(--color-primary)] font-medium">
                  {platform.stats}
                </div>
              )}
              
              <p className="text-[var(--color-secondary)]">
                {platform.description}
              </p>
              
              <div className="mt-4 text-[var(--color-primary)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                View Profile 
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coding; 