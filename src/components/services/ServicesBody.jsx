/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import TrackVisibility from 'react-on-screen';

const ServicesBody = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className=" container py-[80px] px-5 md:px-0 md:py-[120px] flex flex-col gap-10 md:gap-[70px]">
        <div className="animate__slower animate__animated animate__zoomIn mx-auto flex flex-col items-center gap-4 md:gap-3">
          <p className="uppercase font-semibold text-[14px] text-[#0047AB]">Our Services</p>
          <h1 className="w-full md:w-[50%] text-[#000] text-[30px] md:text-[38px] font-semibold mb-5 leading-[35px] md:leading-[45px] text-center">
            Special stunning<span className="text-[#0047AB]"> Services </span> for your
            <span className="text-[#FFBA21]"> Business </span>
          </h1>
          <p className="w-full md:w-[70%] text-center text-13px">
            We have all the equipment, knowhow and every thing you will need to receive fast and
            reliable printing services with high quality results. Get in touch with us today to get
            things moving.
          </p>
        </div>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? 'animate__slower animate__animated animate__zoomIn ' : ''}>
              <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-[50px] md:gap-[50px]">
                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <img src="/images/services/direct-uv.png" alt="" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">Direct UV</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it is
                    worth investing in a quality graphic designer.
                  </p>
                </div>
                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <img src="/images/services/uv-dtf.png" alt="" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">UV DTF</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it is
                    worth investing in a quality graphic designer.
                  </p>
                </div>

                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <img src="/images/services/fabric-dtf.png" alt="" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">Fabric DTF</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it is
                    worth investing in a quality graphic designer.
                  </p>
                </div>

                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <img src="/images/services/large-format.png" alt="" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">Large Format</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it is
                    worth investing in a quality graphic designer.
                  </p>
                </div>

                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <img src="/images/services/posm.png" alt="" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">
                    Display Stand & PoSM
                  </h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it is
                    worth investing in a quality graphic designer.
                  </p>
                </div>

                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[100px] w-[100px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <img src="/images/services/gifts.png" alt="" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1 textBlueGradient">Gift Items</h3>
                  <p className="text-center">
                    If you need print design concepts that will make your project shine, then it is
                    worth investing in a quality graphic designer.
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

export default ServicesBody;
