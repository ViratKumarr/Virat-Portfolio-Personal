'use client';

import React from 'react';
import { FaCode, FaServer, FaDatabase, FaGitAlt, FaCloud, FaTools } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => {
  const { isDark } = useTheme();
  
  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[var(--color-primary)]">{name}</span>
        <span className="text-[var(--color-secondary)]">{percentage}%</span>
      </div>
      <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 group-hover:brightness-125 ${isDark ? 'bg-white' : 'bg-black'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  icon: React.ElementType;
  title: string;
  skillCount: string;
  skills: SkillBarProps[];
}

const SkillCategory = ({ title, skills, icon: Icon }: SkillCategoryProps) => {
  const { isDark } = useTheme();
  
  return (
    <div className="bg-[var(--color-background)] p-8 rounded-lg border border-[var(--color-border)] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-3xl text-[var(--color-primary)] transition-all duration-300 group-hover:animate-wiggle" />
        <h3 className="text-xl font-bold text-[var(--color-primary)]">{title}</h3>
      </div>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

const TechnicalSkills = () => {
  const frontendSkills = [
    { name: "React", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "HTML/CSS", percentage: 95 }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "Express", percentage: 80 },
    { name: "Python", percentage: 75 },
    { name: "Java", percentage: 70 }
  ];

  const databaseSkills = [
    { name: "MongoDB", percentage: 85 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "MySQL", percentage: 75 },
    { name: "Firebase", percentage: 70 }
  ];

  const versionControlSkills = [
    { name: "Git", percentage: 86 },
    { name: "GitHub", percentage: 90 },
    { name: "Vercel / Netlify", percentage: 70 },
    { name: "Docker", percentage: 65 }
  ];

  const cloudDevOpsSkills = [
    { name: "AWS", percentage: 75 },
    { name: "Google Cloud Platform", percentage: 80 },
    { name: "Apache", percentage: 70 }
  ];

  const developmentTools = [
    { name: "VS Code", percentage: 85 },
    { name: "IntelliJ", percentage: 76 },
    { name: "Apache NetBeans", percentage: 70 },
    { name: "BlueJ", percentage: 78 },
    { name: "Figma / Canva", percentage: 85 }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="text-center mb-12">
          <p className="text-[var(--color-secondary)] text-lg font-medium">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory
            icon={FaCode}
            title="Frontend"
            skillCount="4"
            skills={frontendSkills}
          />
          <SkillCategory
            icon={FaServer}
            title="Backend"
            skillCount="4"
            skills={backendSkills}
          />
          <SkillCategory
            icon={FaDatabase}
            title="Database"
            skillCount="4"
            skills={databaseSkills}
          />
          <SkillCategory
            icon={FaGitAlt}
            title="Version Control & Deployment"
            skillCount="4"
            skills={versionControlSkills}
          />
          <SkillCategory
            icon={FaCloud}
            title="Cloud & DevOps"
            skillCount="3"
            skills={cloudDevOpsSkills}
          />
          <SkillCategory
            icon={FaTools}
            title="Development Tools"
            skillCount="5"
            skills={developmentTools}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills; 