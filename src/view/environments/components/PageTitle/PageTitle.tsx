import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = { title: string };

export const PageTitle = ({ title }: Props) => {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
  }, [location, title]);
  return null;
};
