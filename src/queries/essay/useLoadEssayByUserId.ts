import { QUERIES } from '@constants/queries';
import { useQuery } from '@tanstack/react-query';
import { userAuth } from '@utils/user-auth';
import { loadEssayByUserId } from './services/loadEssayByUserId';
import { globalQueryClient } from '@queries/globalQueryClient';

export const useLoadEssayByUserId = () => {
  const userId = userAuth.get.user().id;
  return useQuery({
    queryKey: [QUERIES.USER.USER_DATA_ESSAYS, userId],
    queryFn: async () => await loadEssayByUserId(userId)
  });
};

export const invalidateLoadEssayByUserId = () => {
  const userId = userAuth.get.user().id;
  globalQueryClient.invalidateQueries({
    queryKey: [QUERIES.USER.USER_DATA_ESSAYS, userId],
    exact: false
  });
};
