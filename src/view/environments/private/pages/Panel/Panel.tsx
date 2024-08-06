import { useLoadEssayByUserId } from '@queries/essay/useLoadEssayByUserId';
import { Options } from '../../layout/Sidebar/components/Options/Options';
import { Badges } from '../../layout/components/Essay/Badges/Badges';
import { Tags } from '../../layout/components/Essay/Tags/Tags';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { OptionList } from './components/Options/mapped';
import { ModalAlert } from '../../layout/components/ModalAlert/ModalAlert';

export const PanelPage = () => {
  const { data, isLoading } = useLoadEssayByUserId();

  const [searchParams] = useSearchParams();
  const isEssayCreated = searchParams.get('newEssay') === 'true';
  const isEssayUpdated = searchParams.get('essayUpdated') === 'true';

  return (
    <div className="w-full flex flex-col justify-start items-center">
      {searchParams.size > 0 && (
        <>
          <ModalAlert
            className="mt-6"
            alertType="success"
            text="Redação criada com sucesso"
            condition={isEssayCreated !== undefined && isEssayCreated}
          />
          <ModalAlert
            className="mt-6"
            alertType="error"
            text="Erro ao criar redação"
            condition={isEssayCreated !== undefined && !isEssayCreated}
          />
          <ModalAlert
            className="mt-6"
            alertType="success"
            text="Redação atualizada com sucesso"
            condition={isEssayUpdated !== undefined && isEssayUpdated}
          />
          <ModalAlert
            className="mt-6"
            alertType="error"
            text="Erro ao atualizar redação"
            condition={isEssayUpdated !== undefined && !isEssayUpdated}
          />
        </>
      )}
      <h1 className="text-xl font-bold py-4">Minhas redações</h1>
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
                <Badges className="flex gap-1" statusType={essay.status} />
                <Options className="flex gap-1" essayId={essay.id} mapped={OptionList} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
