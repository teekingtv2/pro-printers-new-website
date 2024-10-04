import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const AboutMission = () => {
  return (
    <div className="container px-5 md:px-0 pt-5 md:pt-0 pb-[70px] md:pb-[250px] flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-[50px] container py-10 md:py-[50px]">
        <div className="col-span-1 self-center items-center justify-center relative">
          <img
            src="/images/about/mission-bg.png"
            alt={process.env.APP_NAME}
            className="pb-[130px] leftRight"
          />
          <img
            src="/images/about/circle.png"
            alt={process.env.APP_NAME}
            className="absolute top-[-5%] left-[10%] w-[80%]"
          />
          <img
            src="/images/about/mockup-2.jpg"
            alt={process.env.APP_NAME}
            className="absolute top-[35%] left-[-5%] w-[45%] rounded-[30px]"
          />
          <img
            src="/images/about/mockup-4.jpg"
            alt={process.env.APP_NAME}
            className="absolute bottom-[-15%] left-[30%] w-[25%] rounded-[30px] z-30 updown"
          />
          <img
            src="/images/about/mockup-1.png"
            alt={process.env.APP_NAME}
            className="absolute top-[22%] right-[10%] w-[45%] rounded-[30px] z-20"
          />
          <img
            src="/images/about/mockup-3.jpg"
            alt={process.env.APP_NAME}
            className="absolute top-[5%] right-[0%] w-[25%] rounded-[30px] z-10 updown"
          />
        </div>
        <div className="col-span-1 flex flex-col items-start justify-end gap-5 self-end animate__slower animate__animated animate__zoomIn animate__delay-2s">
          <p className="uppercase font-semibold text-[14px] text-[#0047AB]">Vision Statement</p>
          <h1 className="text-[#000] text-[38px] font-semibold leading-[45px]">
            <span className="text-[#0047AB]">Mission </span> statements
          </h1>
          <div className="flex flex-col gap-3 text-[14px]">
            <p>
              To become the leading provider of innovative and high-quality custom gift item
              branding solutions in Nigeria.
            </p>
            <p>
              Empowering businesses and individuals to express their identity through creative,
              durable, and impactful designs.
            </p>
            <p>
              We aim to set the standard for excellence in personalized branding, driven by advanced
              technology, exceptional customer service, and a commitment to helping our clients make
              a lasting impression.
            </p>
          </div>
          <Link
            href=""
            className="btnn primaryBtnn font-bold flex gap-2 justify-center items-center w-[max-content]"
          >
            <span>Check Our Projects</span>
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
