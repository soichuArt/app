import React from "react";

type SoichuLogoProps = {
  className?: string;
};

const SoichuLogo: React.FC<SoichuLogoProps> = ({ className = "" }) => (
  <img
    src={`${import.meta.env.BASE_URL}logoSOICHU-01.jpg`}
    alt="Soichu Logo"
    className={`mx-auto w-28 mb-2 ${className}`}
  />
);

export default SoichuLogo;
