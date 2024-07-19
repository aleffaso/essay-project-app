import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { MenuOptions } from './components/Options/MenuOptions';

const { Content } = Layout;

export const Sidebar = () => {
  return (
    <Layout>
      <MenuOptions />
      <Layout className="bg-gray-300">
        <Content className="bg-white py-2 m-4 rounded-lg">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
