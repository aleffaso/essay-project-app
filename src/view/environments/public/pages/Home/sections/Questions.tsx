export const QuestionsSection = () => {
  return (
    <section className="w-full bg-dark-455">
      <div className="w-full flex flex-col items-center py-24 max-md:py-10 max-md:px-5">
        <span className="text-4xl text-white font-normal max-md:w-[280px] max-md:text-center max-md:text-3xl font-staatliches">
          Alguma dúvida sobre nossos serviços?
        </span>
        <div className="flex flex-row items-center gap-14 pt-5 max-md:flex-col max-md:pt-10">
          <div className="flex flex-col gap-5">
            <span className="text-[20px] text-white font-bold max-md:text-center max-md:text-xl">
              Quanto tempo leva para correção?
            </span>
            <p className="w-[320px] text-xl text-white max-md:text-center max-md:text-base">
              Nossos especialistas levam em média até 3 dias úteis para correção e devolutiva da sua
              produção textual.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[20px] text-white font-bold max-md:text-center max-md:text-xl">
              Preciso pagar para enviar a redação?
            </span>
            <p className="w-[320px] text-xl text-white max-md:text-center max-md:text-base">
              Não! Você pode enviar quantas redações achar necessário. Somente na correção há
              cobranças.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
