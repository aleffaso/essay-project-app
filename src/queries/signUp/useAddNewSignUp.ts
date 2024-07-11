import { ROUTES } from '@constants/routes';
import { SignUpModel } from '@domain/models/signUp';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { addNewSignUp } from './services/addNewSignUp';

export const useAddNewSignUp = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (data: SignUpModel) => await addNewSignUp(data),
    onSuccess: () => navigate(ROUTES.PUBLIC.LOGIN + '?signUp=true'),
    onError: () => console.log('error ao tentar criar usuário')
  });
  const signUpReq = async (data: SignUpModel) => mutation.mutateAsync(data);
  return {
    signUp: signUpReq,
    ...mutation
  };
};
