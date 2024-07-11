import { Route } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { PublicLayout } from './layout/Layout';
import { HomePage } from './pages/Home/Home';
import { LoginPage } from './pages/Login/Login';
import { SignUpPage } from './pages/SignUp/SignUp';

const PublicEnvironment = (
  <Route element={<PublicLayout />}>
    <Route path={ROUTES.PUBLIC.HOME} element={<HomePage />} />
    <Route path={ROUTES.PUBLIC.LOGIN} element={<LoginPage />} />
    <Route path={ROUTES.PUBLIC.SIGN_UP} element={<SignUpPage />} />
  </Route>
);

export default PublicEnvironment;
