import React from "react";

const ResourceCard = ({ title, description, icon: Icon, onClick, cta }) => (
  <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-md transition h-full">
    <div className="mb-4">
      {Icon && <Icon className="w-10 h-10 text-soichu-600" />}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {cta && (
      <button
        onClick={onClick}
        className="w-full min-h-[44px] px-6 py-2 mt-auto bg-soichu-600 text-white text-base font-medium rounded hover:bg-soichu-700 transition flex items-center justify-center"
      >
        {cta}
      </button>
    )}
  </div>
);

export default ResourceCard;
