import { AboutSection } from './sections/About';
import { HeroSection } from './sections/Hero';
import { QuestionsSection } from './sections/Questions';
import { SignUpSection } from './sections/SignUp';
import { SubscribeSection } from './sections/Subscribe';
import { TeamSection } from './sections/Team';

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <HeroSection />
      <AboutSection />
      <SignUpSection />
      <TeamSection />
      <QuestionsSection />
      <SubscribeSection />
    </div>
  );
};
