import { useState } from 'react';
import { Menu, Layout } from 'antd';
import { OptionList } from './mapped';
import './style.css';

const { Sider } = Layout;

export const MenuOptions = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      width={160}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}>
      <Menu theme="dark" className="custom-menu" defaultSelectedKeys={['1']} mode="inline">
        {OptionList.map((item) => (
          <Menu.Item
            className="text-xs"
            key={item.key}
            icon={item.icon}
            onClick={() => {
              if (item.onClick) {
                item.onClick();
              } else if (item.path) {
                window.location.href = item.path;
              }
            }}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
