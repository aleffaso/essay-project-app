import TRIANGLE from '@assets/svg/triangle.svg';
import { useUpdateParams } from '@hooks/useUpdateParams';
import { Button } from 'antd';
import { useSearchParams } from 'react-router-dom';

export const HeroSection = () => {
  const [searchParams] = useSearchParams();
  const isNavBarOpen = Boolean(searchParams.get('navBarOpen'));
  const updateParams = useUpdateParams();

  const toggleNavBarOpen = () =>
    isNavBarOpen ? updateParams(['navBarOpen', undefined]) : updateParams(['navBarOpen', 'true']);

  return (
    <section className="flex items-center justify-center py-6 w-full">
      <div className="w-fit flex justify-center items-center gap-3 py-12 max-md:flex-col max-md:gap-12 flex-col">
        <h1 className="uppercase text-8xl max-md:text-5xl font-['Staatliches']">Bem vindo à</h1>
        <h2 className="text-4xl max-md:text-xl">Redação sem trauma!</h2>
      </div>
      <img src={TRIANGLE} className="w-80" />
      <Button type="primary" onClick={toggleNavBarOpen}>
        {isNavBarOpen ? 'Ocultar' : 'Mostrar'} Navbar
      </Button>
    </section>
  );
};
