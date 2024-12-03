import React from "react";

// Define icon prop
interface IIcon {
  width?: number;
  height?: number;
  className?: string;
}

export const CompleteIcon:React.FC<IIcon> = ({width,height,className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
       width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-bookmark-check ${className}`}
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
      <path d="m9 10 2 2 4-4" />
    </svg>
  );
};

export const ExperienceIcon:React.FC<IIcon> = ({width,height,className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
       width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-flask-conical ${className}`}
    >
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </svg>
  );
};

export const SupportIcon:React.FC<IIcon> = ({width,height,className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
       width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-headset ${className}`}
    >
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </svg>
  );
};
