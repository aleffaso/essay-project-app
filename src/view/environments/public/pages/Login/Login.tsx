import { useLogin } from '@authenticate/useLogin';
import { ROUTES } from '@constants/routes';
import { LoginModel } from '@domain/models/authenticate/login';
import { LocationState, useLocationState } from '@hooks/useLocationState';
import { userAuth } from '@utils/user-auth';
import { Alert, Button, Form, Input } from 'antd';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
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
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-80">
        {isError ? <Alert message={errorMessage} type="error" /> : null}
        {isSignUpSuccess ? <Alert message="Usuário cadastrado com sucesso" type="success" /> : null}
        <Form
          form={form}
          onFinish={handleLogin}
          layout="vertical"
          className="w-full bg-white rounded-sm">
          <Form.Item label="E-mail" name="email" rules={[rule]}>
            <Input placeholder="email@email.com" type="email" />
          </Form.Item>

          <Form.Item label="Senha" name="password" rules={[rule]}>
            <Input.Password />
          </Form.Item>
          <div className="w-full flex gap-3 justify-center">
            <Link to={ROUTES.PUBLIC.SIGN_UP}>Criar conta</Link>
            <Button type="primary" htmlType="submit">
              {isPending ? 'Entrando...' : 'Entrar'}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};
