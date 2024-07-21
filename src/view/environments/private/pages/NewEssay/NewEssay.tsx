import { NewEssayModel } from '@domain/models/essay';
import { useAddNewEssay } from '@queries/essay/useAddNewEssay';
import { Alert, Button, Form, Input, Select, Upload } from 'antd';
import { useEssayForm } from './useNewEssayForm';
import { DropDownTheme } from '../../layout/components/Essay/Theme/Theme';
import { FileArrowUp } from '@phosphor-icons/react';
import { DropDownField } from '../../layout/components/Essay/Tags/Tags';

export const NewEssayPage = () => {
  const { newEssay, isPending, isError, error, isSuccess } = useAddNewEssay();
  const { form, rule } = useEssayForm();

  const handleNewEssay = (data: NewEssayModel) => {
    const formattedData = {
      ...data
    };
    newEssay(formattedData);
  };

  const errorMessage = (error as unknown as any)?.response?.data?.error ?? error?.message;

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <h1 className="text-xl py-4">Enviar nova redação</h1>
      <hr className="bg-black w-full" />
      <div className="w-full p-4 items-center">
        {isError ? <Alert message={errorMessage} type="error" /> : null}
        {isSuccess ? <Alert message="Usuário cadastrado com sucesso" type="success" /> : null}
        <Form
          form={form}
          onFinish={handleNewEssay}
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
              <Button icon={<FileArrowUp size={16} />}>Enviar arquivo</Button>
            </Upload>
          </Form.Item>

          <div className="w-full flex flex-col gap-3 justify-center">
            <Button type="primary" htmlType="submit">
              {isPending ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
