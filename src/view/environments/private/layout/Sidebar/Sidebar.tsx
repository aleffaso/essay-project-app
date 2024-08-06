import { Outlet } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { currentYear } from '@utils/formatDate';

export const Sidebar = () => {
  return (
    <div className="flex bg-gray-300">
      <Menu />
      <div className="flex-1 bg-gray-300">
        <div className="bg-white py-2 m-4 rounded-lg">
          <Outlet />
          <div className="flex flex-col items-center justify-center py-4">
            <p className="text-xs">Todos os direitos reservados</p>
            <p className="text-xs">© {currentYear()} Pontuando</p>
          </div>
        </div>
      </div>
    </div>
  );
};
