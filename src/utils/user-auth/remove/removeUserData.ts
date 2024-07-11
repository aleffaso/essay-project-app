import { KEYS } from '@constants/keys';

export const removeUserData = async () => window.localStorage.removeItem(KEYS.STORAGE.USER.DATA);
