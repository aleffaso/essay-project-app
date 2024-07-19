import { ROUTES } from '@constants/routes';
import { useLoadEssayByUserId } from '@queries/essay/useLoadEssayByUserId';
import { Link } from 'react-router-dom';
import { ChatCircleDots, FileArrowDown, NotePencil } from '@phosphor-icons/react';
import { Badge } from 'antd';

export const ProfilePage = () => {
  const { data, isLoading } = useLoadEssayByUserId();

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <h1 className="text-xl py-4">Minhas redações</h1>
      <hr className="bg-black w-full" />
      <div className="flex flex-col  gap-4 py-2 px-2 items-center">
        {isLoading ? <p>Carregando...</p> : null}
        <div className="flex flex-col w-full py-2 px-2 gap-4">
          {data?.user.essays.map((essay) => (
            <div
              key={essay.title}
              className="flex flex-col h-full max-h-40 p-4 border rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div>
                  <p className="text-sm max-md:text-xs font-semibold text-dark hover:text-gray-500">
                    {essay.title}
                  </p>
                  <p className="text-xs text-gray-500">{essay.tag}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1 ">
                  <Badge status="warning" text="Pendente de revisão" />
                </div>
                <div className="flex gap-1">
                  <Link to={ROUTES.PRIVATE.ESSAY_BY_ID + `${essay.id}`}>
                    <ChatCircleDots size={16} className="hover:text-gray-400" />
                  </Link>
                  <Link to={ROUTES.PRIVATE.ESSAY_BY_ID + `${essay.id}`}>
                    <FileArrowDown size={16} className="hover:text-gray-400" />
                  </Link>
                  <Link to={ROUTES.PRIVATE.ESSAY_BY_ID + `${essay.id}`}>
                    <NotePencil size={16} className="hover:text-gray-400" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
