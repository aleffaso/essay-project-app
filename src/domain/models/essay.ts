import { SignUpResponseModel } from './signUp';

export type Essay = {
  specification: string;
  title: string;
  text: string;
  uploadedLink: string;
  id: string;
  tag: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type User = SignUpResponseModel['user'] & {
  essays: Essay[];
};

export type UserDataAndEssaysModel = {
  user: User;
};
