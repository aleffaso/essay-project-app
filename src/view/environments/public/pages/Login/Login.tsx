import { useLogin } from '@authenticate/useLogin';
import { ROUTES } from '@constants/routes';
import { LoginModel } from '@domain/models/authenticate/login';
import { LocationState, useLocationState } from '@hooks/useLocationState';
import { userAuth } from '@utils/user-auth';
import { Alert, Button, Form, Input } from 'antd';
import { Navigate } from 'react-router-dom';
import { useLoginForm } from './useLoginForm';

export const LoginPage = () => {
  const userToken = userAuth.get.token();
  const location = useLocationState<LocationState>();

  const { login, isPending, isError, error } = useLogin();
  const { form, rule } = useLoginForm();

  const handleLogin = (data: LoginModel) => login(data);

  const errorMessage = (error as unknown as any)?.response?.data?.error ?? error?.message;

  if (userToken) {
    return <Navigate to={ROUTES.PRIVATE.PROFILE} state={{ from: location }} replace />;
  }
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-80">
        {isError ? <Alert message={errorMessage} type="error" /> : null}
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

          <Button type="primary" htmlType="submit">
            {isPending ? 'Entrando...' : 'Entrar'}
          </Button>
        </Form>
      </div>
    </section>
  );
};
