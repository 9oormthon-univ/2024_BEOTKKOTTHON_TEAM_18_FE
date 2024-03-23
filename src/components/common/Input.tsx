import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import { cn } from '@/lib/utils.ts';
import CommentButtonIcon from '@/components/icons/CommentButtonIcon.tsx';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  variant: 'gray' | 'white';
  hasCommentButton?: boolean;
}

const Input = React.forwardRef(
  (
    { variant, error, className, hasCommentButton, ...otherProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputVariant = {
      gray: 'bg-hc-grayLight',
      white: 'bg-hc-white'
    };

    return (
      <div className={'flex justify-center items-center relative'}>
        <input
          className={cn(
            'w-[338px] h-[54px] rounded-3xl border-2 border-hc-grayLight focus:outline-none text-sm font-semibold px-6 py-2.5 mt-5',
            inputVariant[variant],
            className
          )}
          {...otherProps}
          ref={ref}
        />
        {hasCommentButton && (
          <CommentButtonIcon
            width={16}
            height={14}
            className={'absolute top-1/2 right-4 cursor-pointer'}
          />
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
