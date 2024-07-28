import { api } from '@api/index';
import { EssayDataAndModel, UpdateEssayModel } from '@domain/models/essay';

export const addUpdateEssay = async (id: string, data: UpdateEssayModel) => {
  console.log(data);
  const response = await api.put<EssayDataAndModel>(`/essay/${id}`, data);
  return response.data;
};
