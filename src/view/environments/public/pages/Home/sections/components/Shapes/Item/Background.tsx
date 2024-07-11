import { cn } from '@utils/tailwind/cn';
import { HTMLAttributes } from 'react';

export const ItemBackgroundShape = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'w-[150px] h-[150px] rounded-[15%] max-md:w-[80px] max-md:h-[80px] absolute top-0 left-0',
      className
    )}
    {...props}>
    {children}
  </div>
);
