import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const HomeTopCategories = () => {
  return (
    <div className="animate__slower animate__animated animate__zoomIn bg-[#F5F7FA] grid grid-cols-1 md:grid-cols-2 gap-[100px] md:gap-9 ps-5 md:ps-[50px] lg:ps-[150px] xl:ps-[200px] pe-5 md:pe-0 pt-[70px] md:pt-[100px] pb-[400px] md:pb-[100px]">
      <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-5 items-center relative">
        <div className="absolute h-6 w-6 rounded-[50%] bg-[#FFBA21] top-[5%] left-[25%] updown"></div>
        <div className="absolute h-6 w-6 rounded-[50%] bg-[#0047AB] bottom-[5%] left-[45%]"></div>
        <div className="flex justify-center">
          <img
            src="/images/home/cat1.png"
            alt=""
            className="h-[450px] w-[350px] rounded-3xl leftRight"
          />
        </div>
        <div className="flex flex-col items-start gap-8">
          <img src="/images/home/cat2.png" alt="" className="h-[350px] w-[350px] rounded-3xl" />
          <img src="/images/home/cat3.png" alt="" className="h-[350px] w-[350px] rounded-3xl" />
        </div>
      </div>
      <div
        className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center "
        style={{ overFlowX: 'hidden !important' }}
      >
        <div className="col-span-1 flex flex-col gap-3 md:gap-8 justify-center ">
          <p className="uppercase font-semibold text-[14px] text-[#0047AB]">Top Categories</p>
          <h1 className="text-[#000] text-[30px] md:text-[38px] font-semibold mb-5 leading-[37px]">
            Premium product <span className="text-[#FFBA21]">categories </span> you can customize
          </h1>
          <p>Ideal for creators and online businesses who hate complexity but want results.</p>
          <Link
            href=""
            className="btnn primaryBtnn font-bold flex gap-2 justify-center items-center w-[max-content] leftRight"
          >
            <span>All Services</span>
            <FaArrowUp />
          </Link>
        </div>
        <div className="col-span-1 relative" style={{ overFlowX: 'hidden !important' }}>
          <div className="absolute h-4 w-4 rounded-[50%] bg-[#AA7AFB] bottom-[25%] left-[-5%]"></div>
          <img
            src="/images/home/cat-banner.png"
            alt=""
            className="rounded-3xl absolute bottom-[-300px] md:bottom-0 right-[0px] updown"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTopCategories;
