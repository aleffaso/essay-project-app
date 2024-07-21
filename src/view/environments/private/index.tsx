import { Route } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { PrivateLayout } from './layout/Layout';
import { ProfilePage } from './pages/Profile/Profile';
import { EssayPage } from './pages/Essay/[id]';
import { NewEssayPage } from './pages/NewEssay/NewEssay';

const PrivateEnvironment = (
  <Route element={<PrivateLayout />}>
    <Route path={ROUTES.PRIVATE.PROFILE} element={<ProfilePage />} />
    <Route path={ROUTES.PRIVATE.ESSAY_BY_ID + ':id'} element={<EssayPage />} />
    <Route path={ROUTES.PRIVATE.NEW_ESSAY} element={<NewEssayPage />} />
  </Route>
);

export default PrivateEnvironment;
