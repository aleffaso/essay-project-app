import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react';
import { currentYear } from '@utils/currentYear';
import { Link } from 'react-router-dom';
import { sections } from './mapped';

export const Footer = () => {
  return (
    <footer className="w-full bg-black py-24 max-md:py-20 max-md:px-6 flex flex-col items-center justify-start">
      <div className="w-full flex items-center justify-evenly">
        {sections.map((item) => (
          <div className="flex flex-col gap-3" key={item.title}>
            <h3 className="text-4xl text-white">{item.title}</h3>
            {item.items.map((item, index) => (
              <Link key={index} to={item.link} className="text-white text-xl hover:underline">
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 pt-20 max-md:flex-col">
        <InstagramLogo size={64} weight="fill" className="text-white" />
        <TwitterLogo size={64} weight="fill" className="text-white" />
        <FacebookLogo size={64} weight="fill" className="text-white" />
        <YoutubeLogo size={64} weight="fill" className="text-white" />
      </div>
      <h4 className="text-white mt-3">
        © {currentYear()} Redação sem trauma. Todos os direitos reservados.
      </h4>
    </footer>
  );
};
