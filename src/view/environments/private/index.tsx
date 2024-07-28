import { Route } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { PrivateLayout } from './layout/Layout';
import { PanelPage } from './pages/Panel/Panel';
import { EssayPage } from './pages/Essay/[id]';
import { NewEssayPage } from './pages/NewEssay/NewEssay';
import { UpdateEssayPage } from './pages/Essay/components/UpdateEssay/UpdateEssay';

const PrivateEnvironment = (
  <Route element={<PrivateLayout />}>
    <Route path={ROUTES.PRIVATE.PANEL} element={<PanelPage />} />
    <Route path={ROUTES.PRIVATE.ESSAY_BY_ID + ':id'} element={<EssayPage />} />
    <Route path={ROUTES.PRIVATE.NEW_ESSAY} element={<NewEssayPage />} />
    <Route path={ROUTES.PRIVATE.UPDATE_ESSAY_BY_ID + ':id'} element={<UpdateEssayPage />} />
  </Route>
);

export default PrivateEnvironment;
