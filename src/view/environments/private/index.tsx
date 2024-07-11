import { Route } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { PrivateLayout } from './layout/Layout';
import { ProfilePage } from './pages/Profile/Profile';

const PrivateEnvironment = (
  <Route element={<PrivateLayout />}>
    <Route path={ROUTES.PRIVATE.PROFILE} element={<ProfilePage />} />
  </Route>
);

export default PrivateEnvironment;
