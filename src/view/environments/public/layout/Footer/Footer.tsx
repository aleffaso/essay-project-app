import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { sections } from './mapped';
import { currentYear } from '@utils/formatDate';

export const Footer = () => {
  const shapeSize = 32;
  return (
    <footer className="w-full bg-black pt-24 flex flex-col items-center justify-evenly">
      <div className="w-full flex items-center justify-evenly">
        {sections.map((item) => (
          <div className="flex flex-col gap-3" key={item.title}>
            <h3 className="text-2xl text-white">{item.title}</h3>
            {item.items.map((item, index) => (
              <Link key={index} to={item.link} className="text-white text-xl hover:underline">
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 pt-20">
        <InstagramLogo size={shapeSize} weight="fill" className="text-white" />
        <TwitterLogo size={shapeSize} weight="fill" className="text-white" />
        <FacebookLogo size={shapeSize} weight="fill" className="text-white" />
        <YoutubeLogo size={shapeSize} weight="fill" className="text-white" />
      </div>
      <h4 className="text-white py-4">
        © {currentYear()} Redação sem trauma. Todos os direitos reservados.
      </h4>
    </footer>
  );
};
