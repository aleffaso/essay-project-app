import { userAuth } from '@utils/user-auth';

export const logOut = async (redirect = true, to?: string) => {
  userAuth.remove.token();
  userAuth.remove.user();
  let defaultTo = 'login';
  if (redirect) {
    if (typeof to !== 'undefined') defaultTo = to;
    window.location.pathname = `/${defaultTo}`;
  }
};
