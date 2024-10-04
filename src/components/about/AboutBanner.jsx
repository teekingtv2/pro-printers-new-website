/* eslint-disable @next/next/no-img-element */
'use client';

import TrackVisibility from 'react-on-screen';

const AboutBanner = () => {
  return (
    <div className="w-full bg-[#ffb92136]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-[50px] px-5 md:px-0 container py-10 md:py-[100px]">
        <div className="col-span-2 self-center items-center justify-center ">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? 'animate__slower animate__animated animate__zoomIn ' : ''}
              >
                <img
                  src="/images/about/banner.webp"
                  alt={process.env.APP_NAME}
                  className="leftRight"
                />
              </div>
            )}
          </TrackVisibility>
        </div>
        <div className="col-span-3 md:gap-[0px] ps-8 md:ps-0 flex flex-col items-start justify-between gap-8">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? 'animate__animated animate__slideInRight ' : ''}>
                <div className="text-[#222222] text-[28px] md:text-[38px] font-semibold text-center mb-0 md:mb-6 mt-[60px] md:mt-0">
                  About Us
                </div>
                <div
                  className="text-[#000] rounded-[25px] p-3 md:p-8"
                  style={{ border: '2px dashed #0047AB' }}
                >
                  <p className="mb-3">
                    Proprinters Agency Limited is your go-to destination for premium custom gift
                    item branding in Ilorin and Lagos. Specializing in UV printing, DTF printing,
                    Large Format Printing (Flex Banner, Stickers), Office Branding, Custom Wall
                    Papers, Vehicle branding, Display Stand, POSM, Product Labels and custom gift
                    and promotional Items.
                  </p>
                  <p className="mb-3">
                    We provide top-notch branding solutions that make your promotional items stand
                    out. Whether you need to print on pens, notepads, water bottles, phone pouches,
                    T-shirts, or any other gift item, our cutting-edge technology ensures vibrant,
                    long-lasting prints. Perfect for businesses, events, or personal use, our
                    services are tailored to meet your branding needs with precision and creativity.
                  </p>
                  <p>
                    If you are searching for expert gift item branding in Ilorin, Lagos and Nigeria
                    in general, look no further—Proprinters Agency Limited is here to bring your
                    brand to life on any item of your choice.
                  </p>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
