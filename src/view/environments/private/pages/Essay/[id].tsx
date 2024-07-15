import { useLoadEssayById } from '@queries/essay/useLoadEssayById';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';

export const EssayPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useLoadEssayById(id as string);

  return (
    <div className="w-full flex flex-col justify-center items-center py-6">
      {isLoading ? <p>Carregando...</p> : null}
      {!isLoading && (
        <div className="">
          <Card>
            <h1 className="text-black">
              <b>Titulo: </b> {data?.essay.title}
            </h1>
          </Card>
          {!isLoading &&
            data?.essay.updates.map((update) => (
              <Card key={update.id} title={update.updatedAt}>
                <p>Annotations: {update.annotations}</p>
                <p>Corrections: {update.corrections}</p>
                <p>Comments: {update.comments}</p>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};
