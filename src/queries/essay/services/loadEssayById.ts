import { api } from '@api/api';
import { EssayDataAndModel } from '@domain/models/essay';

export const loadEssayById = async (essayId: string) => {
  const { data } = await api.get<EssayDataAndModel>(`/essay/${essayId}`);
  return data;
};
