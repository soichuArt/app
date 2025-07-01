import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  cta: string;
  onClick: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon: Icon,
  cta,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition group border border-soichu-100 cursor-pointer"
    style={{ minHeight: 220 }}
  >
    <Icon className="h-10 w-10 mb-4 text-soichu-600 group-hover:text-soichu-700" />
    <h3 className="text-lg font-medium mb-1 text-soichu-700">{title}</h3>
    <p className="mb-2 text-sm text-center">{description}</p>
    <span className="mt-auto px-4 py-1 bg-soichu-50 text-soichu-700 rounded-full text-sm shadow group-hover:bg-soichu-100">
      {cta}
    </span>
  </button>
);

export default ResourceCard;
