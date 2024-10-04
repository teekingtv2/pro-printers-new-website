"use client";

import { menuItems } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from 'next/navigation';
import React from "react";

const ServiceSingle = ({ params }) => {
  const link = params.single;
  const pathname = usePathname();
  const parentLink = pathname.split("/")[2];
  const parentItem = menuItems.filter((item) => item.link === parentLink)[0];
  const mainItem = parentItem?.children.filter((item) => item.link === link)[0];

  console.log("parentLink", parentLink);
  console.log("parentItem", parentItem);
  console.log("mainItem", mainItem);

  return (
    <div className="w-full py-10 md:py-[100px] px-5 md:px-0">
      <div className="container flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between">
          <div className="col-span-1 flex flex-col gap-2">
            <img
              src={`/images/services/${mainItem.img}`}
              alt=""
              className="rounded-xl mb-3 w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <p className="text-[13px] mb-[-7px] uppercase text-[#666]">
              {parentItem.title}
            </p>
            <h2 className="text-[17px] font-medium leading-[1.8rem]">
              {mainItem.name}
            </h2>
            <p className="text-[13px] mb-[20px] text-[#666]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae et
              adipisci consectetur unde fugit quos voluptates placeat odit?
              Nisi, voluptate dolorum dolor laboriosam recusandae voluptatem
              error perferendis non quisquam sit?
            </p>
            <Link
              href={{
                pathname: `/request-a-quote`,
                query: {
                  product: mainItem.name,
                },
              }}
              className="btnn primaryBtnn mx-auto md:mx-0"
              style={{ maxWidth: "max-content" }}
            >
              Get quote for this product
            </Link>
          </div>
          <div className="col-span-1 flex flex-col items-center gap-2">
            <img
              src={`/images/services/main.webp`}
              alt=""
              className="rounded-xl mb-3 max-w-[230px] max-h-[350px]"
            />
            <img
              src={`/images/services/request.webp`}
              alt=""
              className="rounded-xl mb-3 max-w-[150px]"
            />
          </div>
        </div>

        <h3 className="text-[22px] uppercase">Related Products</h3>

        {parentItem && (
          <div
            className="grid grid-cols-1 md:grid-cols-5 items-center gap-8 p-4 bg-white"
            style={{ border: "1px solid #ddd" }}
          >
            {parentItem.children.map((it, i) => {
              return (
                <Link
                  href={`/services/${parentLink}/${it.link}`}
                  className={`flex flex-col items-center gap-2 bg-[#eee] p-5`}
                  key={i}
                >
                  <div className="h-full w-full">
                    <img
                      src={`/images/services/${it.img}`}
                      alt=""
                      className="h-full w-full hover:scale-110 ease-in duration-300"
                    />
                  </div>
                  <p className="leading-4 text-[14px] text-center">
                    {parentItem.title}
                  </p>
                  <p className="text-[17px] font-medium leading-[1.5rem]">
                    {it.name}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSingle;
