import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryCache = new QueryCache();

export const globalQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: false,
      staleTime: Infinity,
      retry: false
    }
  },
  queryCache
});
