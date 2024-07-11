import { UserModel } from '@domain/models/authenticate/login';
import { getUserData, getUserToken } from './get';
import { removeUserData, removeUserToken } from './remove';
import { setUserData, setUserToken } from './set';

export const userAuth = {
  set: {
    token: async (token: UserModel['token']) => await setUserToken(token),
    user: async (data: UserModel) => await setUserData(data)
  },
  get: {
    token: getUserToken,
    user: getUserData
  },
  remove: {
    token: removeUserToken,
    user: removeUserData
  }
};
