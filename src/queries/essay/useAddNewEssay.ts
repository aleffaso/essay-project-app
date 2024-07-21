import { ROUTES } from '@constants/routes';
import { NewEssayModel } from '@domain/models/essay';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { addNewEssay } from './services/addNewEssay';

export const useAddNewEssay = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (data: NewEssayModel) => await addNewEssay(data),
    onSuccess: () => navigate(ROUTES.PRIVATE.PROFILE + '?newEssay=true'),
    onError: () => console.log('error ao tentar adicionar nova redação')
  });
  const newEssayReq = async (data: NewEssayModel) => mutation.mutateAsync(data);
  return {
    newEssay: newEssayReq,
    ...mutation
  };
};
