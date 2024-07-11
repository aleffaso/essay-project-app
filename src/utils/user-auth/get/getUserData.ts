import { KEYS } from '@constants/keys';
import { UserModel } from '@domain/models/authenticate/login';

export const getUserData = () => {
  const userData = window.localStorage.getItem(KEYS.STORAGE.USER.DATA);
  return (userData ? JSON.parse(userData) : {}) as UserModel['user'];
};
