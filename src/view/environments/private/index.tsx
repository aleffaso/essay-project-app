import { LocationState, useLocationState } from '@hooks/useLocationState';
import { userAuth } from '@utils/user-auth';
import { Navigate, Route } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { PrivateLayout } from './layout/Layout';
import { ProfilePage } from './pages/Profile/Profile';

const PrivateEnvironment = () => {
  const userToken = userAuth.get.token();
  const location = useLocationState<LocationState>();

  if (!userToken) {
    return <Navigate to={ROUTES.PUBLIC.LOGIN} state={{ from: location }} replace />;
  }
  return (
    <Route element={<PrivateLayout />}>
      <Route path={ROUTES.PRIVATE.PROFILE} element={<ProfilePage />} />
    </Route>
  );
};

export default PrivateEnvironment;
