import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { cn } from '@/lib/utils.ts';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  variant: 'gray' | 'white';
}

const Input = React.forwardRef(
  (
    { variant, className, ...otherProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputVariant = {
      gray: 'bg-hc-grayLight',
      white: 'bg-hc-white'
    };

    return (
      <input
        className={cn(
          'w-[338px] h-[54px] rounded-3xl border-2 border-hc-grayLight focus:outline-none text-sm font-semibold px-6 py-2.5 mt-[5px]',

          inputVariant[variant],

          className
        )}
        {...otherProps}
        ref={ref}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
