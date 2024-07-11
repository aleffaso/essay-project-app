import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';

export const PrivateLayout = () => (
  <div className="flex flex-col w-full pt-10">
    <Navbar />
    <Outlet />
  </div>
);
