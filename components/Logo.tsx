
import React from 'react';

const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Handle of the magnifying glass */}
      <path 
        d="M21 21L15 15" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      {/* Outer ring of the lens */}
      <circle 
        cx="10.5" 
        cy="10.5" 
        r="7.5" 
        stroke="currentColor" 
        strokeWidth="2" 
      />
      {/* Globe/Grid effect inside the lens */}
      <circle 
        cx="10.5" 
        cy="10.5" 
        r="4.5" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        strokeDasharray="1 1"
        className="opacity-40"
      />
      <path 
        d="M6 10.5H15" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        className="opacity-30"
      />
      <path 
        d="M10.5 6V15" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        className="opacity-30"
      />
      <ellipse 
        cx="10.5" 
        cy="10.5" 
        rx="2" 
        ry="4.5" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        className="opacity-40"
      />
    </svg>
  );
};

export default Logo;
