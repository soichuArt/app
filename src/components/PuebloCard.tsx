import React from 'react';

interface PuebloCardProps {
  title: string;
  description: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const PuebloCard: React.FC<PuebloCardProps> = ({ title, description, onClick, children }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-xl p-6 mb-6 cursor-pointer hover:shadow-xl transition"
      onClick={onClick}
    >
      <h2 className="text-2xl font-semibold text-soichu-700 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default PuebloCard;
