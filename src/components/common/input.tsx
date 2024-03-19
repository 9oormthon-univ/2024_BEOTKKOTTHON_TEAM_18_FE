import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { cn } from '@/lib/utils.ts';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  variant: 'gray' | 'white';
}

const Input = React.forwardRef(
  (
    { variant, ...otherProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputVariant = {
      gray: 'bg-hc-gray',
      white: 'bg-hc-white'
    };
    return (
      <input
        className={cn(
          'w-[338px] h-[54px] rounded-3xl border-2 border-hc-grayLight focus:outline-none px-12 py-3 text-lg font-semibold',
          inputVariant[variant]
        )}
        {...otherProps}
        ref={ref}
      />
    );
  }
);

export default Input;
