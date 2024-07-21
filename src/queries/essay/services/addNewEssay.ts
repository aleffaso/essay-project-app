import { api } from '@api/index';
import { EssayDataAndModel, newEssayModel } from '@domain/models/essay';

export const addNewEssay = async (data: newEssayModel) => {
  const response = await api.post<EssayDataAndModel>('/essay', data);
  return response.data;
};
