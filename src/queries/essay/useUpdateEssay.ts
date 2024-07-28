import { ROUTES } from '@constants/routes';
import { UpdateEssayModel } from '@domain/models/essay';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { addUpdateEssay } from './services/addUpdateEssay';

export const useUpdateEssay = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateEssayModel }) =>
      await addUpdateEssay(id, data),
    onSuccess: () => navigate(ROUTES.PRIVATE.PANEL + '?essayUpdated=true'),
    onError: () => console.log('error ao tentar atualizar redação')
  });
  const updateEssayReq = async (id: string, data: UpdateEssayModel) =>
    mutation.mutateAsync({ id, data });
  return {
    updateEssay: updateEssayReq,
    ...mutation
  };
};
