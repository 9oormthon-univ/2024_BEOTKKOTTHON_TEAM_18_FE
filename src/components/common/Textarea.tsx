import { cn } from '@/lib/utils.ts';
import React, { ComponentProps, ForwardedRef } from 'react';

const Textarea = React.forwardRef(
  (
    { ...otherProps }: ComponentProps<'textarea'>,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        className={cn(
          'w-[338px] h-[160px] rounded-3xl border-2 border-hc-grayLight focus:outline-none text-lg font-semibold px-6 py-2.5'
        )}
        {...otherProps}
        ref={ref}
      />
    );
  }
);

Textarea.displayName = 'TextArea';

export default Textarea;
