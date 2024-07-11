import { useLocation, useNavigate } from 'react-router-dom';

export type UpdateParamsType = [string, string | undefined] | [string, string];
export const useUpdateParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (...params: UpdateParamsType[]) => {
    const searchParams = new URLSearchParams(location.search);
    params.forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
      else searchParams.delete(key);
    });
    navigate({
      search: searchParams.toString()
    });
  };
};
