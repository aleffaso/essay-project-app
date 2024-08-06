import { ROUTES } from '@constants/routes';
import { LoginModel } from '@domain/models/authenticate/login';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from './services/login';

export const useLogin = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (data: LoginModel) => await login(data),
    onSuccess: () => navigate(ROUTES.PRIVATE.PANEL),
    onError: () => console.log('error ao tentar autenticar')
  });
  const loginReq = async (data: LoginModel) => mutation.mutateAsync(data);
  return {
    login: loginReq,
    ...mutation
  };
};
