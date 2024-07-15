import { QUERIES } from '@constants/queries';
import { useQuery } from '@tanstack/react-query';
import { globalQueryClient } from '@queries/globalQueryClient';
import { loadEssayById } from './services/loadEssayById';

export const useLoadEssayById = (essayId: string) => {
  return useQuery({
    queryKey: [QUERIES.ESSAY.ESSAY_DATA_ESSAY, essayId],
    queryFn: async () => await loadEssayById(essayId)
  });
};

export const invalidateLoadEssayById = (essayId: string) => {
  globalQueryClient.invalidateQueries({
    queryKey: [QUERIES.ESSAY.ESSAY_DATA_ESSAY, essayId],
    exact: false
  });
};
