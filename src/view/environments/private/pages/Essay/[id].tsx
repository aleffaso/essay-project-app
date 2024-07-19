import { useLoadEssayById } from '@queries/essay/useLoadEssayById';
import { useParams } from 'react-router-dom';

export const EssayPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useLoadEssayById(id as string);

  return (
    <div className="w-full h-screen">
      {isLoading ? <p>Carregando...</p> : null}
      {!isLoading && (
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold max-md:text-sm text-center py-4 px-2">
            {data?.essay.title}
          </h1>
          <hr className="bg-black w-full" />
          <div className="flex flex-col w-full items-center py-2 px-2 gap-2">
            {!isLoading &&
              data?.essay.updates.map((update, index) => (
                <div
                  key={update.id}
                  className="flex flex-col h-full w-full max-h-40 py-2 px-4 border rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-full">
                      <p className="text-sm max-md:text-xs font-semibold text-dark-600">
                        Atualização - {index + 1}
                      </p>
                      <hr className="bg-black w-full" />
                      <div className="py-2">
                        <p className="text-xs text-gray-500 ">{update.comments}</p>
                        <p className="text-xs text-gray-500 ">{update.annotations}</p>
                        <p className="text-xs text-gray-500 ">{update.corrections}</p>
                        <p className="text-xs text-gray-500 ">{update.grade}</p>
                        <p className="text-xs text-gray-500 ">{update.createdAt}</p>
                        <p className="text-xs text-gray-500 ">{update.updatedAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
