import { Shapes } from './components/Shapes/Shapes';

export const AboutSection = () => (
  <section className="w-full bg-dark-455 flex flex-col items-center py-24 max-md:gap-5 max-md:py-10 max-md:px-5">
    <div className="flex flex-col gap-10 max-md:gap-5">
      <h1 className="font-['Staatliches'] text-white text-5xl">
        Revolucione sua escrita agora mesmo!
      </h1>
      <div className="flex flex-col items-start justify-start text-2xl text-white">
        <p>
          Com nosso grupo de especialistas,{' '}
          <strong className="inline-block px-[0.15em] bg-orange-400 text-dark-900 leading-[1.8]">
            obtenha excelentes notas em suas redações!
          </strong>
        </p>
        <p>Saiba agora mesmo como aumentar sua pontuação e saia na frente dos concorrentes</p>
      </div>
      <Shapes />
    </div>
  </section>
);
