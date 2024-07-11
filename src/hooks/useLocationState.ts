import { useLocation } from 'react-router-dom';

export type LocationState = {
  from: Location;
};

export const useLocationState = <T>() => {
  const location = useLocation();
  return (location.state as T) || null;
};
