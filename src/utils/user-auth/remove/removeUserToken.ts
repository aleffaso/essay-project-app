import { KEYS } from '@constants/keys';

export const removeUserToken = async () => window.localStorage.removeItem(KEYS.STORAGE.USER.TOKEN);
