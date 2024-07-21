import { cn } from '@utils/tailwind/cn';

export interface Options {
  icon: React.ReactNode;
  label: React.ReactNode;
  path: string;
  disabled?: boolean;
}

interface OptionsProps {
  className?: string;
  essayId: string;
  mapped: Options[];
}

export const Options = ({ className, essayId, mapped }: OptionsProps) => {
  return (
    <div className={className}>
      {mapped.map((item, index) => (
        <button
          disabled={item.disabled}
          className={cn({
            'cursor-not-allowed text-gray-400': item.disabled,
            'cursor-pointer': !item.disabled
          })}
          key={index}
          onClick={() => (window.location.href = item.path + `${essayId}`)}>
          <span className="">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};
