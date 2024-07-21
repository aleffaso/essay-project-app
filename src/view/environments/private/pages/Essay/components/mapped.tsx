import { ROUTES } from '@constants/routes';
import { ChatCircleDots, FileArrowDown } from '@phosphor-icons/react';

export interface Options {
  icon: React.ReactNode;
  label: React.ReactNode;
  path: string;
  disabled?: boolean;
}

const iconSize = 16;
const iconClassName = 'hover:text-gray-400';

export const OptionList: Options[] = [
  {
    icon: <ChatCircleDots size={iconSize} className={iconClassName} />,
    label: 'Comentários',
    path: ROUTES.PRIVATE.ESSAY_BY_ID,
    disabled: true
  },
  {
    icon: <FileArrowDown size={iconSize} className={iconClassName} />,
    label: 'Download',
    path: ROUTES.PRIVATE.ESSAY_BY_ID,
    disabled: true
  }
];
