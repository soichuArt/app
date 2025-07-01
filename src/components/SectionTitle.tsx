import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2 className={`text-2xl geomanist-ultra-thin mb-6 text-center ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
