import { useSearchParams } from 'react-router-dom';
import { AboutSection } from './sections/About';
import { HeroSection } from './sections/Hero';
import { QuestionsSection } from './sections/Questions';
import { SignUpSection } from './sections/SignUp';
import { SubscribeSection } from './sections/Subscribe';
import { TeamSection } from './sections/Team';

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const isNavBarOpen = Boolean(searchParams.get('navBarOpen'));

  return (
    <div className="w-full flex flex-col items-start justify-start">
      {isNavBarOpen ? (
        <nav className="w-full fixed top-0 left-0 bg-dark-455 text-white h-10">
          Oi, eu sou o menu
        </nav>
      ) : null}
      <HeroSection />
      <AboutSection />
      <SignUpSection />
      <TeamSection />
      <QuestionsSection />
      <SubscribeSection />
    </div>
  );
};
