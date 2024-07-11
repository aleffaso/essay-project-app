import { cn } from '@utils/tailwind/cn';
import { HTMLAttributes } from 'react';

export const ItemSubtitleShape = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn(
      'ml-[-15px] text-2xl max-md:ml-[-10px] max-md:text-[16px] relative z-[2]',
      className
    )}
    {...props}>
    {children}
  </h2>
);
