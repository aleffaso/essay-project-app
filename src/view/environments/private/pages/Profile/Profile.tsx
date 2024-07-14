import { useLoadEssayByUserId } from '@queries/essay/useLoadEssayByUserId';
import { utmToStandard } from '@utils/formatDate';
import { Card } from 'antd';

export const ProfilePage = () => {
  const { data, isLoading } = useLoadEssayByUserId();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-xl py-4">Minhas redações</h1>
      <div className="flex flex-col gap-4 py-2">
        {isLoading ? <p>Carregando...</p> : null}
        {!isLoading &&
          data?.user.essays.map((essay) => (
            <Card title={essay.title}>
              <p>Tipo: {essay.specification}</p>
              <p>Correção: {essay.status}</p>
              <p>Criada em: {utmToStandard(essay.createdAt)}</p>
            </Card>
          ))}
      </div>
    </div>
  );
};
