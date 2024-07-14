import { ROUTES } from '@constants/routes';
import { Link } from 'react-router-dom';

export const SignUpSection = () => (
  <section className="w-full bg-black">
    <div className="w-full flex flex-col items-center py-[100px] max-md:gap-5 max-md:py-10 max-md:px-5">
      <div className="flex flex-col items-center gap-10 max-md:gap-5">
        <span className="text-center font-normal text-white text-4xl max-md:text-4xl font-staatliches">
          MANDE AGORA SUA REDAÇÃO
        </span>
        <span className="text-center font-normal text-white w-[550px] text-2xl leading-[1.8] max-md:w-[280px] max-md:text-sm max-md:leading-[1.6]">
          Faça o login, nos envie sua redação e veja a mágica da correção acontecer!
        </span>
        <div className="w-full flex flex-row items-center justify-center gap-5 max-md:gap-2">
          <button className="w-[310px] h-[60px] rounded-xl cursor-pointer bg-dark-455 border-dark-455 max-md:w-[155px] max-md:h-[35px]">
            <Link to={ROUTES.PRIVATE.PROFILE}>
              <span className="text-white text-[22px] font-bold max-md:text-[12px]">
                Enviar minha redação
              </span>
            </Link>
          </button>
          <button className="w-[310px] h-[60px] rounded-xl cursor-pointer bg-white border-white max-md:w-[155px] max-md:h-[35px]">
            <span className="text-dark-455 text-[22px] font-bold max-md:text-xs">
              Entenda nossa correção
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
);
