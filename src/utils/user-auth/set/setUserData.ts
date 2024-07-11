import { KEYS } from '@constants/keys';
import { UserModel } from '@domain/models/authenticate/login';

export const setUserData = async (data: UserModel) =>
  window.localStorage.setItem(KEYS.STORAGE.USER.DATA, JSON.stringify(data.user));
