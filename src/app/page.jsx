'use client';

import HomeBannerBottom from '@/components/home/HomeBannerBottom';
import HomeServices from '@/components/home/HomeServices';
import 'animate.css';
import HomeSlider from '@/components/home/HomeSlider';

const HomePage = () => {
  return (
    <>
      <HomeSlider />
      <HomeBannerBottom />
      <HomeServices />
    </>
  );
};

export default HomePage;
