import { KEYS } from '@constants/keys';

export const getUserToken = () => window.localStorage.getItem(KEYS.STORAGE.USER.TOKEN);
