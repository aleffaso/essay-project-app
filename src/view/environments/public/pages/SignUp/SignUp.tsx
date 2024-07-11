import { ROUTES } from '@constants/routes';
import { LocationState, useLocationState } from '@hooks/useLocationState';
import { userAuth } from '@utils/user-auth';
import { Alert, Button, Form, Input } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import { useSignUpForm } from './useSignUpForm';
import { useAddNewSignUp } from '@queries/signUp/useAddNewSignUp';
import { SignUpModel } from '@domain/models/signUp';
import { KEYS } from '@constants/keys';

export const SignUpPage = () => {
  const userToken = userAuth.get.token();
  const location = useLocationState<LocationState>();

  const { signUp, isPending, isError, error, isSuccess } = useAddNewSignUp();
  const { form, rule } = useSignUpForm();

  const handleSignUp = (data: SignUpModel) => {
    const formattedData = {
      ...data,
      isActive: true,
      permissions: [KEYS.PERMISSIONS.CUSTOMER]
    };
    signUp(formattedData);
  };

  const errorMessage = (error as unknown as any)?.response?.data?.error ?? error?.message;

  if (userToken) {
    return <Navigate to={ROUTES.PRIVATE.PROFILE} state={{ from: location }} replace />;
  }
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-80">
        {isError ? <Alert message={errorMessage} type="error" /> : null}
        {isSuccess ? <Alert message="Cadastro realizado com sucesso!" type="success" /> : null}
        <Form
          form={form}
          onFinish={handleSignUp}
          layout="vertical"
          className="w-full bg-white rounded-sm">
          <Form.Item label="Nome" name="firstName" rules={[rule]}>
            <Input placeholder="Nome" type="text" />
          </Form.Item>

          <Form.Item label="Sobrenome" name="lastName" rules={[rule]}>
            <Input placeholder="Sobrenome" type="text" />
          </Form.Item>

          <Form.Item label="E-mail" name="email" rules={[rule]}>
            <Input placeholder="email@email.com" type="email" />
          </Form.Item>

          <Form.Item label="Senha" name="password" rules={[rule]}>
            <Input.Password />
          </Form.Item>
          <div className="w-full flex gap-3 justify-center">
            <Link to={ROUTES.PUBLIC.LOGIN}>Entrar</Link>
            <Button type="primary" htmlType="submit">
              {isPending ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};
