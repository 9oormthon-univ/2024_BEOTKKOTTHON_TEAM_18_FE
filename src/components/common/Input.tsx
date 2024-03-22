import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { cn } from '@/lib/utils.ts';

interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  variant: 'gray' | 'white';
  size: 'sm' | 'lg';
}

const Input = ({ variant, size, ...otherProps }: InputProps) => {
  const inputVariant = {
    gray: 'bg-hc-grayLight',
    white: 'bg-hc-white'
  };

  const inputSize = {
    lg: 'w-[338px]',
    sm: 'w-[238px]'
  };

  return (
    <input
      className={cn(
        'h-[54px] rounded-3xl border-2 border-hc-grayLight focus:outline-none text-sm font-semibold px-6 py-2.5 mt-[5px]',

        inputVariant[variant],
        inputSize[size]
      )}
      {...otherProps}
    />
  );
};

Input.displayName = 'Input';

export default Input;
