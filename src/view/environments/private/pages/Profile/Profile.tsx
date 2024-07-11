import { useLoadEssayByUserId } from '@queries/essay/useLoadEssayByUserId';
import { userAuth } from '@utils/user-auth';

export const ProfilePage = () => {
  const { data, isLoading } = useLoadEssayByUserId();
  const userData = userAuth.get.user();
  return (
    <div>
      <span>Hello World</span>
      <span>ID: {userData.id}</span>
      <span>
        Nome completo: {userData.firstName} {userData.lastName}
      </span>
      <span>Email: {userData.email}</span>
      {isLoading ? <p>Carregando...</p> : null}
      {!isLoading &&
        data?.user.essays.map((essay) => (
          <div>
            <p>{essay.title}</p>
            <p>{essay.status}</p>
          </div>
        ))}
    </div>
  );
};
