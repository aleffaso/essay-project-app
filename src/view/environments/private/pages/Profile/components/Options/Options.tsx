import { cn } from '@utils/tailwind/cn';
import { OptionList } from './mapped';

interface OptionsProps {
  className?: string;
  essayId: string;
}

export const Options = ({ className, essayId }: OptionsProps) => {
  return (
    <div className={className}>
      {OptionList.map((item, index) => (
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
