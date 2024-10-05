"use client";

import { menuItems } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from 'next/navigation';
import React from "react";

const Packaging = ({ params }) => {
  return (
    <div className="w-full py-10 md:py-[100px] px-5 md:px-0">
      <div className="container flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between">
          <div className="col-span-1 flex flex-col gap-2">
            <img
              src={`/images/services/packaging`}
              alt=""
              className="rounded-xl mb-3 w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <p className="text-[13px] mb-[-7px] uppercase text-[#666]">
              Packaging
            </p>
            <h2 className="text-[17px] font-medium leading-[1.8rem]">
              Packaging
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
                  product: "Packaging",
                },
              }}
              className="btnn primaryBtnn mx-auto md:mx-0"
              style={{ maxWidth: "max-content" }}
            >
              Get quote for this product
            </Link>
          </div>
          <Link
            href="/contact"
            className="col-span-1 flex flex-col items-center gap-2"
          >
            <img
              src={`/images/services/no-product.png`}
              alt=""
              className="rounded-xl mb-3 max-w-[230px] max-h-[350px]"
            />
            {/* <img
              src={`/images/services/request.webp`}
              alt=""
              className="rounded-xl mb-3 max-w-[150px]"
            /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packaging;
