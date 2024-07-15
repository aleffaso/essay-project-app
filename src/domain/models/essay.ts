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
  updates: EssayUpdates;
};

export type User = SignUpResponseModel['user'] & {
  essays: Essay[];
};

export type UserDataAndEssaysModel = {
  user: User;
};

export type EssayUpdates = {
  updatesCount: number;
  updates: {
    id: string;
    annotations: string;
    corrections: string;
    comments: string;
    grade: number | null;
    createdAt: string;
    updatedAt: string;
  }[];
};

export type EssayDataAndModel = {
  essay: Essay;
  updates: EssayUpdates;
};
