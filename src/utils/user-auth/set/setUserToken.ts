import { KEYS } from '@constants/keys';
import { UserModel } from '@domain/models/authenticate/login';

export const setUserToken = async (token: UserModel['token']) =>
  window.localStorage.setItem(KEYS.STORAGE.USER.TOKEN, token);
