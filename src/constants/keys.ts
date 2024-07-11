export const KEYS = {
  HOST: {
    API_URL: (process.env.VITE_PUBLIC_API_URL || '') as string
  },
  STORAGE: {
    USER: {
      DATA: process.env.VITE_API_STORAGE_USER_DATA || 'USER_DATA',
      TOKEN: process.env.VITE_API_STORAGE_USER_TOKEN || 'USER_TOKEN'
    }
  }
};
