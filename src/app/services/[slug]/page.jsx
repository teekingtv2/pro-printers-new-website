'use client';

import Link from 'next/link';
import React from 'react';
import TrackVisibility from 'react-on-screen';
import { menuItems } from '../../../data/data';

const ServiceCategory = ({params}) => {
    const link = params.slug

    const selectedCat = menuItems.filter((item) => item.link === link)[0]
    console.log('selectedCat', selectedCat)

  return (
    <div className="container mx-auto py-[90px] md:py-[120px] px-5 md:px-0">
      <div className="w-full text-center mb-6 md:mb-[50px] flex gap-2 md:gap-[20px] items-center justify-between">
        <div className="bg-[#FFBA21] w-[10%] md:w-[33%] h-[4px]"></div>
        <p className="text-[#000] text-[20px] md:text-[20px] font-semibold">Shop for {selectedCat.title} Products</p>
        <div className="bg-[#0047AB] w-[10%] md:w-[33%] h-[4px]"></div>
      </div>

      <div className="w-full animate__slower animate__animated animate__zoomIn grid grid-cols-1 md:grid-cols-4 gap-9 animate__slower animate__animated animate__zoomIn justify-center">
        { selectedCat && selectedCat.children.map((item, i) => (
            <Link href={`/services/${selectedCat.link}/${item.link}`} className="col-span-1 flex flex-col gap-2 items-center text-center" key={i}>
                <img
                    src={`/images/services/${item.img}`}
                    alt=""
                    className="rounded-xl mb-3 h-[250px] w-[250px]"
                />
                <p className="text-[13px] mb-[-7px] uppercase text-[#666]">{selectedCat.title}</p>
                <h2 className="text-[17px] font-medium leading-[1.8rem]">{item.name}</h2>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;