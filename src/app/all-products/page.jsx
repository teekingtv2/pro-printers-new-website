import { menuItems } from "@/data/data";
import Link from "next/link";
import React from "react";
import "animate.css";

const page = () => {
  // const selectedCat = menuItems.map((item) => item.link === link)
  // console.log('selectedCat', selectedCat)

  let arr = new Array();

  menuItems.forEach((item) => {
    item.children.map((it) => {
      arr.push({ ...it, parentTitle: item.title, parentLink: item.link });
    });
  });

  return (
    <div className="container mx-auto py-[90px] md:py-[120px] px-5 md:px-0">
      <div className="w-full text-center mb-6 md:mb-[50px] flex gap-2 md:gap-[20px] items-center justify-between">
        <div className="bg-[#FFBA21] w-[20%] md:w-[36%] h-[4px]"></div>
        <p className="text-[#000] text-[20px] md:text-[24px] font-semibold">
          All Products
        </p>
        <div className="bg-[#0047AB] w-[20%] md:w-[36%] h-[4px]"></div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-9 animate__slower animate__animated animate__zoomIn justify-center">
        {arr &&
          arr.map((item, i) => {
            return (
              <Link
                href={`/services/${item.parentLink}/${item.link}`}
                className="animate__slower animate__animated animate__zoomIn col-span-1 flex flex-col gap-2 items-center text-center"
                key={i}
              >
                <img
                  src={`/images/services/${item.img}`}
                  alt=""
                  className="rounded-xl mb-3 h-[250px] w-[250px] hover:scale-110 ease-in duration-300"
                />
                <p className="text-[13px] mb-[-7px] uppercase text-[#666]">
                  {item.parentTitle}
                </p>
                <h2 className="text-[17px] font-medium leading-[1.8rem]">
                  {item.name}
                </h2>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default page;
