import { api } from '@api/api';
import { UserDataAndEssaysModel } from '@domain/models/essay';

export const loadEssayByUserId = async (userId: string) => {
  const { data } = await api.get<UserDataAndEssaysModel>(`/user/${userId}`);
  return data;
};
