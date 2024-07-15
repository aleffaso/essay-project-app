import { Route } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { PrivateLayout } from './layout/Layout';
import { ProfilePage } from './pages/Profile/Profile';
import { EssayPage } from './pages/Essay/[id]';

const PrivateEnvironment = (
  <Route element={<PrivateLayout />}>
    <Route path={ROUTES.PRIVATE.PROFILE} element={<ProfilePage />} />
    <Route path={ROUTES.PRIVATE.ESSAY_ID} element={<EssayPage />} />
  </Route>
);

export default PrivateEnvironment;
