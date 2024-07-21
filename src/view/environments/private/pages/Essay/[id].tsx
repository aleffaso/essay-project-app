import { useLoadEssayById } from '@queries/essay/useLoadEssayById';
import { utmToStandard } from '@utils/formatDate';
import { useParams } from 'react-router-dom';
import { Tags } from '../../layout/Sidebar/components/Tags/Tags';
import { Options } from '../../layout/Sidebar/components/Options/Options';
import { OptionList } from './components/mapped';
import { FileModal } from './components/Modal/Modal';

export const EssayPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useLoadEssayById(id as string);
  const url =
    'https://storage.estuda.com.br/redacao/0_13851d3258e53ac4c715f2640f7e17d2_redacao_471741_59d2a261869c89b8a49d1d3c3055720f.jpg';

  return (
    <div className="w-full h-full p-2 flex flex-col justify-start items-center max-md:h-screen">
      {isLoading ? <p>Carregando...</p> : null}
      <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
        <h1 className="text-xl text-center">{data?.essay.title}</h1>
        {data && <Tags tagsType={data?.essay.tag} />}
      </div>
      <hr className="bg-black w-full" />
      <h2 className="text-base py-4">Histórico de Atualizações</h2>
      <div className="flex flex-col w-full gap-4 items-center">
        <div className="flex flex-col w-full px-2 gap-4">
          {data?.essay.updates
            .map((updates, index) => (
              <div key={index} className="flex flex-col border rounded-lg">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="w-full p-4 flex items-center justify-between">
                      <div>
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
                      <div>
                        <FileModal fileUrl={url} fileType="image" />
                      </div>
                    </div>
                    <hr className="w-full bg-black" />
                    <div className="flex justify-around p-2 max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-2">
                      <Options
                        className="flex gap-2 "
                        essayId={data?.essay.id}
                        mapped={OptionList}
                      />
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
