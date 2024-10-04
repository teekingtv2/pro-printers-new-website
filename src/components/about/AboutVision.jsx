'use client';
import React from 'react';
import TrackVisibility from 'react-on-screen';

const AboutVision = () => {
  return (
    <div className="container py-[80px] px-5 md:px-0 md:py-[120px] flex flex-col gap-10 md:gap-[70px]">
      <div className="animate__slower animate__animated animate__zoomIn w-full md:w-[70%] mx-auto flex flex-col items-center gap-4 md:gap-8">
        <p className="uppercase font-semibold text-[14px] text-[#0047AB]">Vision Statement</p>
        <h1 className="text-[#000] text-[30px] md:text-[38px] font-semibold mb-5 leading-[35px] md:leading-[45px] text-center">
          Here are the <span className="text-[#0047AB]">statements </span> of
          <span className="text-[#FFBA21]"> our visions </span> in servicing you
        </h1>
        <div className="flex flex-col gap-3">
          <p>
            To become the leading provider of innovative and high-quality custom gift item branding
            solutions in Nigeria.
          </p>
          <p>
            Empowering businesses and individuals to express their identity through creative,
            durable, and impactful designs.
          </p>
          <p>
            We aim to set the standard for excellence in personalized branding, driven by advanced
            technology, exceptional customer service, and a commitment to helping our clients make a
            lasting impression.
          </p>
        </div>
      </div>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__slower animate__animated animate__zoomIn ' : ''}>
            <img
              src="/images/about/banner-2.png"
              alt=""
              className="bg-[#ffb92159] rounded-[30px] p-10 w-full"
            />
          </div>
        )}
      </TrackVisibility>
    </div>
  );
};

export default AboutVision;
