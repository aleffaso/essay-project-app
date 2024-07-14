import TRIANGLE from '@assets/svg/triangle.svg';

export const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center py-24">
      <div className="w-full flex items-center justify-center gap-5 max-md:flex-col">
        <div className="w-fit flex flex-col justify-center items-center gap-3 py-12">
          <h1 className="uppercase text-5xl font-['Staatliches'] max-md:text-5xl">Bem vindo à</h1>
          <h2 className="text-4xl max-md:text-4xl">Redação sem trauma!</h2>
        </div>
        <img src={TRIANGLE} className="w-48" />
      </div>
    </section>
  );
};
