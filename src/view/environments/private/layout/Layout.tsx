import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { userAuth } from '@utils/user-auth';
import { LocationState, useLocationState } from '@hooks/useLocationState';
import { ROUTES } from '@constants/routes';

export const PrivateLayout = () => {
  const userToken = userAuth.get.token();
  const location = useLocationState<LocationState>();

  if (!userToken) {
    return <Navigate to={ROUTES.PUBLIC.LOGIN} state={{ from: location }} replace />;
  }
  return (
    <div className="flex flex-col w-full pt-10">
      <Navbar />
      <Outlet />
    </div>
  );
};
