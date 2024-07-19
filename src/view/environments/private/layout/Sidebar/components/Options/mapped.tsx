import { logOut } from '@authenticate/logout';
import { ROUTES } from '@constants/routes';
import {
  Newspaper,
  SignOut,
  UserCircleGear,
  FilePlus,
  Wallet,
  ChartLine
} from '@phosphor-icons/react';
import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

interface CustomMenuItem {
  key: React.Key;
  icon?: React.ReactNode;
  label: React.ReactNode;
  path?: string;
  onClick?: () => void;
  children?: CustomMenuItem[];
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  path?: string,
  onClick?: () => void,
  children?: CustomMenuItem[]
): CustomMenuItem {
  return {
    key,
    icon,
    children,
    label,
    path,
    onClick
  };
}

const iconSize = 16;

export const OptionList: CustomMenuItem[] = [
  getItem('Painel', '1', <Newspaper size={iconSize} />, ROUTES.PRIVATE.PROFILE),
  getItem('Nova Redação', '2', <FilePlus size={iconSize} />, ROUTES.PRIVATE.PROFILE),
  getItem('Evolução', '3', <ChartLine size={iconSize} />, ROUTES.PRIVATE.PROFILE),
  getItem('Carteira', '4', <Wallet size={iconSize} />, ROUTES.PRIVATE.PROFILE),
  getItem('Conta', '5', <UserCircleGear size={iconSize} />, ROUTES.PRIVATE.ACCOUNT),
  getItem('Sair', '6', <SignOut size={iconSize} />, undefined, () => logOut())
];
