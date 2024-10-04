import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const HomeBlog = () => {
  return (
    <div className="container px-5 md:px-0 mx-auto pt-5 md:pt-[0px] pb-[90px] md:pb-[120px]">
      <div className="text-center mb-6 md:mb-[50px]">
        <p className="uppercase font-semibold text-[14px] text-[#0047AB] mb-3">Most Recent News</p>
        <h1 className="text-[#000] text-[30px] md:text-[37px] font-semibold mb-5">
          Read our latest blog posts
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 animate__slower animate__animated animate__zoomIn">
        <div href="" className="col-span-1 flex flex-col gap-3">
          <img src="/images/home/mock3.png" alt="" className="rounded-[30px] mb-3" />
          <div className="px-6 flex flex-col gap-3">
            <p className="uppercase font-semibold text-[14px] text-[#FFBA21] mb-0">
              Most Recent News
            </p>
            <Link href="" className="text-[19px] font-semibold leading-[25px] mb-3">
              Top 10 etsy print on demand partners to kickstart your business
            </Link>
            <Link
              href=""
              className="flex gap-[8px] items-center text-[14px] font-semibold leading-[25px]"
            >
              <span>Read more</span>
              <FaArrowUp />
            </Link>
          </div>
        </div>
        <div href="" className="col-span-1 flex flex-col gap-3">
          <img src="/images/home/mock4.png" alt="" className="rounded-[30px] mb-3" />
          <div className="px-6 flex flex-col gap-3">
            <p className="uppercase font-semibold text-[14px] text-[#FFBA21] mb-0">
              Most Recent News
            </p>
            <Link href="" className="text-[19px] font-semibold leading-[25px] mb-3">
              Top 10 etsy print on demand partners to kickstart your business
            </Link>
            <Link
              href=""
              className="flex gap-[8px] items-center text-[14px] font-semibold leading-[25px]"
            >
              <span>Read more</span>
              <FaArrowUp />
            </Link>
          </div>
        </div>
        <div href="" className="col-span-1 flex flex-col gap-3">
          <img src="/images/home/mock5.png" alt="" className="rounded-[30px] mb-3" />
          <div className="px-6 flex flex-col gap-3">
            <p className="uppercase font-semibold text-[14px] text-[#FFBA21] mb-0">
              Most Recent News
            </p>
            <Link href="" className="text-[19px] font-semibold leading-[25px] mb-3">
              Top 10 etsy print on demand partners to kickstart your business
            </Link>
            <Link
              href=""
              className="flex gap-[8px] items-center text-[14px] font-semibold leading-[25px]"
            >
              <span>Read more</span>
              <FaArrowUp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
