'use client';

import React from 'react';
import { FaChartLine, FaComments, FaPuzzlePiece, FaSync, FaUsers, FaClock, FaLightbulb } from 'react-icons/fa';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const SkillCard = ({ title, description, icon: Icon }: SkillCardProps) => (
  <div className="group bg-[var(--color-background)] p-8 rounded-lg border border-[var(--color-border)] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-3xl text-[var(--color-primary)] transition-all duration-300 group-hover:animate-wiggle" />
      <h3 className="text-xl font-bold text-[var(--color-primary)]">{title}</h3>
    </div>
    <p className="text-[var(--color-secondary)] leading-relaxed group-hover:text-[var(--color-primary)] transition-colors duration-300">
      {description}
    </p>
  </div>
);

const SoftSkills = () => {
  const skills = [
    {
      title: "Leadership",
      description: "Inspiring and guiding team members, taking ownership of projects, making informed decisions, and helping others grow technically and professionally.",
      icon: FaChartLine
    },
    {
      title: "Communication",
      description: "Conveying ideas clearly, writing effective documentation, and ensuring smooth collaboration across teams.",
      icon: FaComments
    },
    {
      title: "Problem-Solving",
      description: "Tackling technical challenges methodically with innovative and effective solutions.",
      icon: FaPuzzlePiece
    },
    {
      title: "Adaptability",
      description: "Embracing new technologies, tools, and changes in project direction or requirements quickly.",
      icon: FaSync
    },
    {
      title: "Teamwork & Collaboration",
      description: "Working harmoniously in diverse teams, participating in code reviews, and contributing positively to group goals.",
      icon: FaUsers
    },
    {
      title: "Time Management",
      description: "Managing workloads efficiently, meeting deadlines, and staying productive across multiple tasks or sprints.",
      icon: FaClock
    },
    {
      title: "Creativity & Innovation",
      description: "Bringing fresh ideas to the table, enhancing user experiences, and finding elegant solutions to technical problems.",
      icon: FaLightbulb
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Soft Skills</h2>
        <div className="text-center mb-12">
          <p className="text-[var(--color-secondary)] text-lg font-medium">
            Essential interpersonal and professional capabilities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills; 