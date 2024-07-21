import { EssayFormModel } from '@view/environments/private/pages/NewEssay/useNewEssayForm';
import { SignUpResponseModel } from './signUp';

export type Essay = {
  id: string;
  specification: string;
  title: string;
  text: string;
  uploadedLink: string;
  tag: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  updatesCount: number;
  updates: EssayUpdate[];
  author: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
  };
};

export type User = SignUpResponseModel['user'] & {
  essays: Essay[];
};

export type UserDataAndEssaysModel = {
  user: User;
};

export type EssayUpdate = {
  id: string;
  annotations: string;
  corrections: string;
  comments: string;
  grade: number | null;
  createdAt: string;
  updatedAt: string;
};

export type EssayDataAndModel = {
  essay: Essay;
};

export type NewEssayModel = EssayFormModel;
