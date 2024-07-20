import { useLoadEssayById } from '@queries/essay/useLoadEssayById';
import { utmToStandard } from '@utils/formatDate';
import { useParams } from 'react-router-dom';
import { Tags } from '../../layout/Sidebar/components/Tags/Tags';

export const EssayPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useLoadEssayById(id as string);

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      {isLoading ? <p>Carregando...</p> : null}
      <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
        <h1 className="text-xl text-center">{data?.essay.title}</h1>
        {data && <Tags tagsType={data?.essay.tag} />}
      </div>
      <hr className="bg-black w-full" />
      <h2 className="text-base py-4">Histórico de Atualizações</h2>
      <div className="flex flex-col w-full gap-4 items-center">
        <div className="flex flex-col w-full py-2 px-2 gap-4">
          {data?.essay.updates
            .map((updates, index) => (
              <div key={index} className="flex flex-col border rounded-lg">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="w-full p-4">
                      <div className="flex gap-1">
                        <p className="text-xs font-bold">Nota:</p>
                        <p className="text-xs"> {updates.grade}</p>
                      </div>
                      <div className="flex gap-1">
                        <p className="text-xs font-bold">Anotações:</p>
                        <p className="text-xs"> {updates.annotations}</p>
                      </div>
                      <div className="flex gap-1">
                        <p className="text-xs font-bold">Correções:</p>
                        <p className="text-xs"> {updates.corrections}</p>
                      </div>
                      <div className="flex gap-1">
                        <p className="text-xs font-bold">Comentários:</p>
                        <p className="text-xs"> {updates.comments}</p>
                      </div>
                    </div>
                    <hr className="w-full bg-black" />
                    <div className="flex justify-end p-2 max-md:justify-center">
                      <p className="text-xs max-md:text-[8px] text-gray-500">
                        Atualização nº: {index + 1} realizada dia {utmToStandard(updates.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};
