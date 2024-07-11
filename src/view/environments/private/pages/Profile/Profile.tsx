import { userAuth } from '@utils/user-auth';

export const ProfilePage = () => {
  const userData = userAuth.get.user();
  return (
    <div>
      <span>Hello World</span>
      <span>ID: {userData.id}</span>
      <span>
        Nome completo: {userData.firstName} {userData.lastName}
      </span>
      <span>Email: {userData.email}</span>
    </div>
  );
};
