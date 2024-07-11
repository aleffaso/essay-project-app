import { api } from '@api/index';
import { LoginModel, UserModel } from '@domain/models/authenticate/login';
import { userAuth } from '@utils/user-auth';

export const login = async (data: LoginModel) => {
  const response = await api.post<UserModel>('/user/authenticate', data);
  await userAuth.set.token(response.data.token);
  await userAuth.set.user(response.data);
  return response?.data;
};
