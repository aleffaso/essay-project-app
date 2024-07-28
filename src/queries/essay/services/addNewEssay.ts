import { api } from '@api/index';
import { EssayDataAndModel, NewEssayModel } from '@domain/models/essay';

export const addNewEssay = async (data: NewEssayModel) => {
  const response = await api.post<EssayDataAndModel>('/essay', data);
  return response.data;
};
