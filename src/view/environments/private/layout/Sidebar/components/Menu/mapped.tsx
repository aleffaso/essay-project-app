import { logOut } from '@authenticate/logout';
import { ROUTES } from '@constants/routes';
import {
  Newspaper,
  SignOut,
  UserCircleGear,
  FilePlus,
  Wallet,
  ChartLine,
  Book
} from '@phosphor-icons/react';

export interface MenuItem {
  icon?: React.ReactNode;
  label: React.ReactNode;
  path?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const iconSize = 16;

export const MenuList: MenuItem[] = [
  {
    label: 'Painel',
    icon: <Newspaper size={iconSize} />,
    path: ROUTES.PRIVATE.PROFILE,
    disabled: false
  },
  {
    label: 'Nova Redação',
    icon: <FilePlus size={iconSize} />,
    path: ROUTES.PRIVATE.NEW_ESSAY,
    disabled: false
  },
  {
    label: 'Evolução',
    icon: <ChartLine size={iconSize} />,
    path: ROUTES.PRIVATE.PROFILE,
    disabled: true
  },
  {
    label: 'Carteira',
    icon: <Wallet size={iconSize} />,
    path: ROUTES.PRIVATE.PROFILE,
    disabled: true
  },
  {
    label: 'Materiais',
    icon: <Book size={iconSize} />,
    path: ROUTES.PRIVATE.ACCOUNT,
    disabled: true
  },
  {
    label: 'Conta',
    icon: <UserCircleGear size={iconSize} />,
    path: ROUTES.PRIVATE.ACCOUNT,
    disabled: true
  },
  {
    label: 'Sair',
    icon: <SignOut size={iconSize} />,
    onClick: () => logOut(),
    disabled: false
  }
];
