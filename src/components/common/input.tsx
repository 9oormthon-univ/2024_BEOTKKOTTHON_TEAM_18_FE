import React, { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      className="px-5 py-3 text-sm font-semibold border-[1.5px] border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 w-[338px]  h-[54px]"
    />
  );
};

export default Input;
