import { ROUTES } from '@constants/routes';
import { userAuth } from '@utils/user-auth';
import PublicEnvironment from '@view/environments/public';
import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';
const Routes = () => {
  const userToken = userAuth.get.token();

  return (
    <BrowserRouter>
      <ReactRoutes>
        {PublicEnvironment}
        <Route
          path="*"
          element={<Navigate to={userToken ? ROUTES.PRIVATE.NOT_FOUND : ROUTES.PUBLIC.LOGIN} />}
        />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
