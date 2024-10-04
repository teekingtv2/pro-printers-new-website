import AboutBanner from '@/components/about/AboutBanner';
import AboutMission from '@/components/about/AboutMission';
import AboutVision from '@/components/about/AboutVision';
import 'animate.css';

export const metadata = {
  title: 'About Us',
};

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <AboutVision />
      <AboutMission />
    </>
  );
};

export default AboutPage;
