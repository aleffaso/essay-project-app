import { useLoadEssayByUserId } from '@queries/essay/useLoadEssayByUserId';
import { Options } from './components/Options/Options';
import { Badges } from '../../layout/Sidebar/components/Badges/Badges';
import { Tags } from '../../layout/Sidebar/components/Tags/Tags';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

export const ProfilePage = () => {
  const { data, isLoading } = useLoadEssayByUserId();

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <h1 className="text-xl py-4">Minhas redações</h1>
      <hr className="bg-black w-full" />
      <div className="flex flex-col w-full gap-4 py-2 px-2 items-center">
        {isLoading ? <p>Carregando...</p> : null}
        <div className="flex flex-col w-full py-2 px-2 gap-4">
          {data?.user.essays.map((essay, index) => (
            <div
              key={index}
              className="flex flex-col h-full max-h-40 p-4 border rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-full">
                  <Link
                    className="text-sm max-md:text-xs font-semibold text-dark hover:text-gray-500"
                    to={ROUTES.PRIVATE.ESSAY_BY_ID + essay.id}>
                    {essay.title}
                  </Link>
                  <Tags tagsType={essay.tag} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badges className="flex gap-1 " statusType={essay.status} />
                <Options className="flex gap-1" essayId={essay.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
