import { useLogin } from '@authenticate/useLogin';
import { ROUTES } from '@constants/routes';
import { LoginModel } from '@domain/models/authenticate/login';
import { LocationState, useLocationState } from '@hooks/useLocationState';
import { userAuth } from '@utils/user-auth';
import { Alert, Button, Form, Input } from 'antd';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useLoginForm } from './useLoginForm';

export const LoginPage = () => {
  const userToken = userAuth.get.token();
  const location = useLocationState<LocationState>();

  const { login, isPending, isError, error } = useLogin();
  const { form, rule } = useLoginForm();

  const [searchParams] = useSearchParams();
  const isSignUpSuccess = searchParams.get('signUp') === 'true';

  const handleLogin = (data: LoginModel) => login(data);

  const errorMessage = (error as unknown as any)?.response?.data?.error ?? error?.message;

  if (userToken) {
    return <Navigate to={ROUTES.PRIVATE.PROFILE} state={{ from: location }} replace />;
  }
  return (
    <section className="w-screen h-screen bg-dark-455 flex justify-center items-center max-md:h-[540px]">
      <div className="w-80">
        {isError ? <Alert message={errorMessage} type="error" /> : null}
        {isSignUpSuccess ? <Alert message="Usuário cadastrado com sucesso" type="success" /> : null}
        <Form
          form={form}
          onFinish={handleLogin}
          layout="vertical"
          className="w-full bg-dark-455 rounded-sm">
          <Form.Item name="email" rules={[rule]}>
            <Input
              className="text-white placeholder:text-white border-white"
              placeholder="seuemail@email.com"
              type="email"
            />
          </Form.Item>

          <Form.Item name="password" rules={[rule]}>
            <Input.Password
              className="text-white placeholder:text-white border-white"
              placeholder="senha"
            />
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
    </section>
  );
};
