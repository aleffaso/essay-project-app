import { Button, Form, Input } from 'antd';

export const SubscribeSection = () => {
  return (
    <section className="w-full bg-white flex flex-col gap-10 items-center py-24 max-md:py-10 max-md:px-5">
      <h1 className="w-[600px] text-center font-normal text-4xl text-black max-md:w-[400px] max-md:text-2xl font-staatliches">
        Saiba o que mais está sendo cobrado em provas de vestibular e concurso{' '}
      </h1>
      <Form layout="vertical" className="w-[380px]">
        <Form.Item name="email">
          <Input
            placeholder="email@gmail.com"
            type="email"
            className="h-[60px] text-[22px] border-neutrals-300"
          />
        </Form.Item>
        <Button htmlType="submit" className="bg-black h-[60px] text-[22px] text-white w-full">
          Me Inscrever
        </Button>
      </Form>
    </section>
  );
};
