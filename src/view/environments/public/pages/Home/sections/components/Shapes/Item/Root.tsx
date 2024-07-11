import { cn } from '@utils/tailwind/cn';
import { HTMLAttributes } from 'react';

export const ItemRootShape = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('relative w-[150px] h-[150px] text-white', className)} {...props}>
    {children}
  </div>
);
