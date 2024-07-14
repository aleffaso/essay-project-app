import { People } from './components/People/People';

export const TeamSection = () => (
  <section className="w-full bg-white py-24 max-md:py-10 max-md:px-5">
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5">
        <span className="text-center font-normal text-4xl text-dark-455 max-md:text-3xl font-staatliches">
          Conheça nossos especialistas
        </span>
        <span className="text-center font-normal w-[520px] text-xl text-black leading-[1.8] max-md:w-full max-md:text-sm max-md:leading-[1.6]">
          Nosso time está preparado para trazer todos os detalhes na correção da sua redação!
        </span>
      </div>
    </div>
    <People />
  </section>
);
