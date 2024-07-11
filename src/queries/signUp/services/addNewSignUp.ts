import { api } from '@api/index';
import { SignUpModel, SignUpResponseModel } from '@domain/models/signUp';

export const addNewSignUp = async (data: SignUpModel) => {
  const response = await api.post<SignUpResponseModel>('/user', data);
  return response.data;
};
