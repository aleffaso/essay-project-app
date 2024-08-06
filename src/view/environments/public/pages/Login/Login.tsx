import { useLogin } from '@authenticate/useLogin';
import { ROUTES } from '@constants/routes';
import { LoginModel } from '@domain/models/authenticate/login';
import { LocationState, useLocationState } from '@hooks/useLocationState';
import { userAuth } from '@utils/user-auth';
import { Alert, Button, Form, Input } from 'antd';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useLoginForm } from './useLoginForm';
import { currentYear } from '@utils/formatDate';
import { useEffect } from 'react';

export const LoginPage = () => {
  const userToken = userAuth.get.token();
  const location = useLocationState<LocationState>();

  const { login, isPending, isError, error } = useLogin();
  const { form, rule } = useLoginForm();

  const [searchParams] = useSearchParams();
  const isSignUpSuccess = searchParams.get('signUp') === 'true';

  const handleLogin = (data: LoginModel) => login(data);

  const errorMessage = (error as unknown as any)?.response?.data?.error ?? error?.message;

  // useEffect(() => {
  //   //verificar com o wesley
  //   document.title = 'Login - Pontuando';
  // }, []);

  if (userToken) {
    return <Navigate to={ROUTES.PRIVATE.PANEL} state={{ from: location }} replace />;
  }
  return (
    <section className="w-screen h-screen flex flex-col gap-10 justify-center items-center max-md:h-[540px]">
      <div className="w-80">
        {isError ? <Alert message={errorMessage} type="error" /> : null}
        {isSignUpSuccess ? <Alert message="Usuário cadastrado com sucesso" type="success" /> : null}
        <Form form={form} onFinish={handleLogin} layout="vertical" className="w-full rounded-sm">
          <Form.Item name="email" rules={[rule]}>
            <Input className="" placeholder="seuemail@email.com" type="email" />
          </Form.Item>

          <Form.Item name="password" rules={[rule]}>
            <Input.Password className="" placeholder="senha" />
          </Form.Item>
          <div className="w-full flex flex-col gap-3 justify-center">
            <Button type="primary" htmlType="submit">
              {isPending ? 'Entrando...' : 'Entrar'}
            </Button>
            <Button type="default" href={ROUTES.PUBLIC.SIGN_UP}>
              Criar conta
            </Button>
          </div>
        </Form>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-xs">Todos os direitos reservados</p>
        <p className="text-xs">© {currentYear()} Pontuando</p>
      </div>
    </section>
  );
};
