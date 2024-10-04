'use client';

import { FaTruck } from 'react-icons/fa';
import { MdOutlineHighQuality, MdSupportAgent } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';

const HomeBannerBottom = () => {
  return (
    <div className="flex bg-[#585858] w-full h-full">
      <div className="animate__slower animate__animated animate__zoomIn py-8 md:py-[50px] container mx-auto uppercase text-[#fff] font-normal md:font-medium text-[13px] md:text-[15px] text-center px-2 md:px-0 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-[20px] items-center">
        <div className="col-span-1 flex flex-col justify-center items-center gap-1 md:gap-2">
          <img src="/images/home/banner-bottom/img1.webp" alt="" className="h-[80px] w-[80px]" />
          <div className="">Thousands of Promotional Products</div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center gap-1 md:gap-2">
          <img src="/images/home/banner-bottom/img2.webp" alt="" className="h-[80px] w-[80px]" />
          <div className="">Hundreds of Signs & Displays</div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center gap-1 md:gap-2">
          <img src="/images/home/banner-bottom/img3.webp" alt="" className="h-[80px] w-[80px]" />
          <div className="">Hundreds of Bespoke Apparels</div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center gap-1 md:gap-2">
          <img src="/images/home/banner-bottom/img4.webp" alt="" className="h-[80px] w-[80px]" />
          <div className="">HUNDREDS OF PRINT & DESIGN PACKAGES</div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center gap-1 md:gap-2">
          <img src="/images/home/banner-bottom/img5.webp" alt="" className="h-[80px] w-[80px]" />
          <div className="">24/7 ONLINE CUSTOMER CARE</div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center gap-1 md:gap-2">
          <img src="/images/home/banner-bottom/img6.webp" alt="" className="h-[80px] w-[80px]" />
          <div className="">WORLDWIDE DELIVERY</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerBottom;
