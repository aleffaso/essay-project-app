import { ROUTES } from '@constants/routes';
import { LocationState, useLocationState } from '@hooks/useLocationState';
import { userAuth } from '@utils/user-auth';
import { Alert, Button, Form, Input } from 'antd';
import { Navigate } from 'react-router-dom';
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
    return <Navigate to={ROUTES.PRIVATE.PANEL} state={{ from: location }} replace />;
  }
  return (
    <section className="w-screen h-screen bg-dark-455 flex justify-center items-center">
      <div className="w-80">
        {isError ? <Alert message={errorMessage} type="error" /> : null}
        {isSuccess ? <Alert message="Cadastro realizado com sucesso!" type="success" /> : null}
        <Form
          form={form}
          onFinish={handleSignUp}
          layout="vertical"
          className="w-full bg-dark-455 rounded-sm">
          <Form.Item name="firstName" rules={[rule]}>
            <Input
              className="text-white placeholder:text-white border-white"
              placeholder="Nome"
              type="text"
            />
          </Form.Item>

          <Form.Item name="lastName" rules={[rule]}>
            <Input
              className="text-white placeholder:text-white border-white"
              placeholder="Sobrenome"
              type="text"
            />
          </Form.Item>

          <Form.Item name="email" rules={[rule]}>
            <Input
              className="text-white placeholder:text-white border-white"
              placeholder="email@email.com"
              type="email"
            />
          </Form.Item>

          <Form.Item name="password" rules={[rule]}>
            <Input.Password
              className="text-white placeholder:text-white border-white"
              placeholder="password"
            />
          </Form.Item>
          <div className="w-full flex flex-col gap-2 justify-center">
            <Button type="primary" htmlType="submit">
              {isPending ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
            <Button type="default" href={ROUTES.PUBLIC.LOGIN}>
              Já possuo uma conta
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};
