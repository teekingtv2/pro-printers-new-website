'use client';

import React from 'react';
import TrackVisibility from 'react-on-screen';

const ProjectsBody = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className=" container py-[80px] px-5 md:px-0 md:py-[120px] flex flex-col gap-10 md:gap-[70px]">
        <div className="animate__slower animate__animated animate__zoomIn mx-auto flex flex-col items-center gap-4 md:gap-3">
          <p className="uppercase font-semibold text-[14px] text-[#0047AB]">Our Projects</p>
          <h1 className="w-full md:w-[50%] text-[#000] text-[30px] md:text-[38px] font-semibold mb-5 leading-[35px] md:leading-[45px] text-center">
            Some of the <span className="text-[#0047AB]"> special projects </span> we have
            <span className="text-[#FFBA21]"> delivered </span> recently
          </h1>
          <p className="w-full md:w-[70%] text-center text-13px">
            We have all the equipment, know-how and every thing you will need to receive fast,
            reliable printing services with high quality results. Chat live with us today to get
            things moving.
          </p>
        </div>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? 'animate__slower animate__animated animate__zoomIn ' : ''}>
              <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-[50px] md:gap-[50px]">
                <div className="col-span-1 bg-white rounded-[50px] py-6 px-5 flex flex-col gap-4 relative hover:scale-105 hover:bg-transparent hover:border hover:border-[#FFBA21] ease-in duration-300">
                  <div
                    className="absolute top-0 left-0 z-0 h-[80px] w-[80px] bg-gradient-to-r from-[#7302d081] to-[#0299fd8f]"
                    style={{
                      borderTopLeftRadius: '50px',
                      borderTopRightRadius: '50%',
                      borderBottomRightRadius: '50%',
                    }}
                  ></div>
                  <img
                    src="/images/home/mock-1.png"
                    alt=""
                    className="z-30 max-h-[300px] mx-auto mb-1"
                  />
                  <h1 className="text-[23px] text-center pb-1 textBlueGradient">
                    Project Light Up Lagos
                  </h1>
                  <p>
                    Get speed and consistency—our global in-house and partner facilities offer
                    competitive shipping rates and consistent quality.
                  </p>
                </div>
                <div className="col-span-1 bg-white rounded-[50px] py-6 px-5 flex flex-col gap-4 relative hover:scale-105 hover:bg-transparent hover:border hover:border-[#FFBA21] ease-in duration-300">
                  <div
                    className="absolute top-0 left-0 z-0 h-[80px] w-[80px] bg-gradient-to-r from-[#7302d081] to-[#0299fd8f]"
                    style={{
                      borderTopLeftRadius: '50px',
                      borderTopRightRadius: '50%',
                      borderBottomRightRadius: '50%',
                    }}
                  ></div>
                  <img
                    src="/images/home/mock-1.png"
                    alt=""
                    className="z-30 max-h-[300px] mx-auto mb-1"
                  />
                  <h1 className="text-[23px] text-center pb-1 textBlueGradient">
                    Project Light Up Lagos
                  </h1>
                  <p>
                    Get speed and consistency—our global in-house and partner facilities offer
                    competitive shipping rates and consistent quality.
                  </p>
                </div>
                <div className="col-span-1 bg-white rounded-[50px] py-6 px-5 flex flex-col gap-4 relative hover:scale-105 hover:bg-transparent hover:border hover:border-[#FFBA21] ease-in duration-300">
                  <div
                    className="absolute top-0 left-0 z-0 h-[80px] w-[80px] bg-gradient-to-r from-[#7302d081] to-[#0299fd8f]"
                    style={{
                      borderTopLeftRadius: '50px',
                      borderTopRightRadius: '50%',
                      borderBottomRightRadius: '50%',
                    }}
                  ></div>
                  <img
                    src="/images/home/mock-1.png"
                    alt=""
                    className="z-30 max-h-[300px] mx-auto mb-1"
                  />
                  <h1 className="text-[23px] text-center pb-1 textBlueGradient">
                    Project Light Up Lagos
                  </h1>
                  <p>
                    Get speed and consistency—our global in-house and partner facilities offer
                    competitive shipping rates and consistent quality.
                  </p>
                </div>
                <div className="col-span-1 bg-white rounded-[50px] py-6 px-5 flex flex-col gap-4 relative hover:scale-105 hover:bg-transparent hover:border hover:border-[#FFBA21] ease-in duration-300">
                  <div
                    className="absolute top-0 left-0 z-0 h-[80px] w-[80px] bg-gradient-to-r from-[#7302d081] to-[#0299fd8f]"
                    style={{
                      borderTopLeftRadius: '50px',
                      borderTopRightRadius: '50%',
                      borderBottomRightRadius: '50%',
                    }}
                  ></div>
                  <img
                    src="/images/home/mock-1.png"
                    alt=""
                    className="z-30 max-h-[300px] mx-auto mb-1"
                  />
                  <h1 className="text-[23px] text-center pb-1 textBlueGradient">
                    Project Light Up Lagos
                  </h1>
                  <p>
                    Get speed and consistency—our global in-house and partner facilities offer
                    competitive shipping rates and consistent quality.
                  </p>
                </div>
                <div className="col-span-1 bg-white rounded-[50px] py-6 px-5 flex flex-col gap-4 relative hover:scale-105 hover:bg-transparent hover:border hover:border-[#FFBA21] ease-in duration-300">
                  <div
                    className="absolute top-0 left-0 z-0 h-[80px] w-[80px] bg-gradient-to-r from-[#7302d081] to-[#0299fd8f]"
                    style={{
                      borderTopLeftRadius: '50px',
                      borderTopRightRadius: '50%',
                      borderBottomRightRadius: '50%',
                    }}
                  ></div>
                  <img
                    src="/images/home/mock-1.png"
                    alt=""
                    className="z-30 max-h-[300px] mx-auto mb-1"
                  />
                  <h1 className="text-[23px] text-center pb-1 textBlueGradient">
                    Project Light Up Lagos
                  </h1>
                  <p>
                    Get speed and consistency—our global in-house and partner facilities offer
                    competitive shipping rates and consistent quality.
                  </p>
                </div>
                <div className="col-span-1 bg-white rounded-[50px] py-6 px-5 flex flex-col gap-4 relative hover:scale-105 hover:bg-transparent hover:border hover:border-[#FFBA21] ease-in duration-300">
                  <div
                    className="absolute top-0 left-0 z-0 h-[80px] w-[80px] bg-gradient-to-r from-[#7302d081] to-[#0299fd8f]"
                    style={{
                      borderTopLeftRadius: '50px',
                      borderTopRightRadius: '50%',
                      borderBottomRightRadius: '50%',
                    }}
                  ></div>
                  <img
                    src="/images/home/mock-1.png"
                    alt=""
                    className="z-30 max-h-[300px] mx-auto mb-1"
                  />
                  <h1 className="text-[23px] text-center pb-1 textBlueGradient">
                    Project Light Up Lagos
                  </h1>
                  <p>
                    Get speed and consistency—our global in-house and partner facilities offer
                    competitive shipping rates and consistent quality.
                  </p>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};

export default ProjectsBody;
