import { SignUpFormModel } from '@view/environments/public/pages/SignUp/useSignUpForm';

export type SignUpModel = SignUpFormModel;

export type SignUpResponseModel = {
  user: Omit<SignUpFormModel, 'permissions'> & {
    id: string;
    permissions: {
      id: string;
      type: string;
    }[];
  };
};
