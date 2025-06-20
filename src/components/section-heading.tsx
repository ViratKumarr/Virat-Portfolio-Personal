import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="section-heading">{title}</h2>
      {subtitle && (
        <p className="text-[var(--color-secondary)] text-lg font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 