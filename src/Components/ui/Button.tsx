import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
