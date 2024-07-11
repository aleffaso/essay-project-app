import { LoginFormModel } from '@view/environments/public/pages/Login/useLoginForm';

export type LoginModel = LoginFormModel;

export type UserModel = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    permissions: string[];
  };
  token: string;
};
