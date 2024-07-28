import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <Outlet />
    </div>
  );
};
