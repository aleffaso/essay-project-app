import { ROUTES } from '@constants/routes';
import { useLoadEssayByUserId } from '@queries/essay/useLoadEssayByUserId';
import { utmToStandard } from '@utils/formatDate';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
  const { data, isLoading } = useLoadEssayByUserId();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-xl py-4">Minhas redações</h1>
      <div className="flex flex-col gap-4 py-2">
        {isLoading ? <p>Carregando...</p> : null}
        {!isLoading &&
          data?.user.essays.map((essay) => (
            <Card key={essay.id} title={essay.title}>
              <p>Tipo: {essay.specification}</p>
              <p>Correção: {essay.status}</p>
              <p>Criada em: {utmToStandard(essay.createdAt)}</p>
              <p>id: {essay.id}</p>
              <Link to={ROUTES.PRIVATE.ESSAY_ID + `${essay.id}`}>
                <Button type="primary">Ver Redação</Button>
              </Link>
            </Card>
          ))}
      </div>
    </div>
  );
};
