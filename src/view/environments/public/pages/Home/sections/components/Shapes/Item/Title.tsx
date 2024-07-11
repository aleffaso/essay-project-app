import { cn } from '@utils/tailwind/cn';
import { HTMLAttributes } from 'react';

export const ItemTitleShape = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      'ml-[-15px] text-[42px]  max-md:ml-[-10px] max-md:text-[26px] font-staatliches relative z-[2]',
      className
    )}
    {...props}>
    {children}
  </h1>
);
