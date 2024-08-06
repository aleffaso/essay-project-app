import { UpdateEssayModel } from '@domain/models/essay';
import { useUpdateEssay } from '@queries/essay/useUpdateEssay';
import { Alert, Button, Form, Input, Select, Upload } from 'antd';
import { useEssayForm } from './useUpdateEssayForm';
import { FileArrowUp } from '@phosphor-icons/react';
import { DropDownTheme } from '@view/environments/private/layout/components/Essay/Theme/Theme';
import { DropDownField } from '@view/environments/private/layout/components/Essay/Tags/Tags';
import { useParams } from 'react-router-dom';
import { useLoadEssayById } from '@queries/essay/useLoadEssayById';
import { useEffect } from 'react';

export const UpdateEssayPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useLoadEssayById(id as string);

  const { updateEssay, isPending, isError, error, isSuccess } = useUpdateEssay();
  const { form, rule } = useEssayForm();

  useEffect(() => {
    //Verificar com o Wesley
    if (data?.essay) {
      form.setFieldsValue({
        specification: data.essay.specification,
        tag: data.essay.tag,
        title: data.essay.title,
        text: data.essay.text,
        uploadedLink: data.essay.uploadedLink
      });
    }
  }, [data, form]);

  const handleUpdateEssay = (data: UpdateEssayModel) => {
    if (id) {
      updateEssay(id, data);
    }
  };

  const errorMessage = (error as unknown as any)?.response?.data?.error ?? error?.message;

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      {isLoading ? <p>Carregando...</p> : null}
      <h1 className="text-xl py-4">Atualizar redação</h1>
      <hr className="bg-black w-full" />
      <div className="w-full p-4 items-center">
        {isError ? <Alert message={errorMessage} type="error" /> : null}
        {isSuccess ? <Alert message="redação atualizada com sucesso" type="success" /> : null}
        <Form
          form={form}
          onFinish={handleUpdateEssay}
          layout="horizontal"
          className="w-full flex flex-col rounded-sm">
          <Form.Item name="specification" rules={[rule]}>
            <Select placeholder="Selecione uma especificação">{DropDownTheme()}</Select>
          </Form.Item>

          <Form.Item name="tag" rules={[rule]}>
            <Select placeholder="Selecione uma área de conhecimento">{DropDownField()}</Select>
          </Form.Item>

          <Form.Item name="title" rules={[rule]}>
            <Input placeholder="Título da redação" />
          </Form.Item>

          <Form.Item name="text" rules={[rule]}>
            <Input placeholder="Comentário" />
          </Form.Item>

          <Form.Item name="uploadedLink" rules={[rule]}>
            <Upload action="/upload.do" listType="picture">
              <Button icon={<FileArrowUp size={16} />}>Substituir arquivo</Button>
            </Upload>
          </Form.Item>

          <div className="w-full flex flex-col gap-3 justify-center">
            <Button type="primary" htmlType="submit">
              {isPending ? 'Atualizando...' : 'Atualizar'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
