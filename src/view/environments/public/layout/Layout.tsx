import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';

export const PublicLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <Outlet />
      <Footer />
    </div>
  );
};
