import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-12 py-3 text-lg font-semibold text-white bg-blue-500 rounded-3xl focus:outline-none w-[338px] h-[54px]">
      {text}
    </button>
  );
};

export default Button;
