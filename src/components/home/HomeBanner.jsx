import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';

const HomeBanner = () => {
  return (
    <div className="bg-[#FFBA21]">
      <div className="max-w-[1300px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="col-span-1 flex flex-col items-center justify-center py-[80px] md:py-5 h-full">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__slower animate__animated animate__fadeInLeft ' : ''
                  }
                >
                  <h1 className="w-[85%] mb-[25px] mx-auto text-[#222] leading-[35px] md:leading-[45px] text-[30px] md:text-[37px] font-extrabold text-center">
                    The leader in quality UV print, printing and branding solutions in Nigeria
                  </h1>
                  <p className="w-[75%] md:w-[65%] mx-auto text-[#222] fz-[17px] font-bold mb-[30px]">
                    Welcome to your go-to destination for premium custom gift item branding in
                    Ilorin and Lagos.
                  </p>
                  <Link
                    href=""
                    className="btnn primaryBtnn font-bold flex gap-2 justify-center items-center w-[80%] md:w-[50%] mx-auto"
                  >
                    <span>Check our works</span>
                    <FaArrowUp />
                  </Link>
                </div>
              )}
            </TrackVisibility>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center bg-[#0047AB]">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? 'animate__slower animate__animated animate__zoomIn ' : ''}
                >
                  <img src="/images/home/mock2.png" alt="" className="w-[1500px]" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
