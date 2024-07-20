import { Outlet } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';

export const Sidebar = () => {
  return (
    <div className="flex bg-gray-300">
      <Menu />
      <div className="flex-1 bg-gray-300">
        <div className="bg-white py-2 m-4 rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
