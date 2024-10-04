"use client";

import Link from "next/link";
import React from "react";
import TrackVisibility from "react-on-screen";

const HomeServices = () => {
  return (
    <div className="container mx-auto py-[90px] md:py-[120px] px-5 md:px-0">
      <div className="w-full text-center mb-6 md:mb-[50px] flex gap-2 md:gap-[50px] items-center justify-between">
        <div className="bg-[#FFBA21] w-[20%] md:w-[36%] h-[4px]"></div>
        <p className="text-[#000] text-[20px] md:text-[24px] font-semibold">
          Featured Products
        </p>
        <div className="bg-[#0047AB] w-[20%] md:w-[36%] h-[4px]"></div>
        {/* <p className="w-[95%] md:w-[60%] mx-auto text-[15px]">
          Discover {process.env.APP_NAME}&apos;s range of high-quality products designed to meet all
          your promotional and branding needs.
        </p> */}
      </div>

      <div className="animate__slower animate__animated animate__zoomIn grid grid-cols-1 md:grid-cols-4 gap-9 animate__slower animate__animated animate__zoomIn">
        <Link
          href="/services/uv-direct/uv-direct-print"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/uv-direct.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Direct UV</h2>
        </Link>
        <Link
          href="/services/uv-direct/uv-dtf"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/uv-dtf.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">UV DTF (Sticker)</h2>
        </Link>
        <Link
          href="/services/gift-items/notepads"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/notepads.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">NotePads</h2>
        </Link>
        <Link
          href="/services/gift-items/mugs"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/mugs.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Mugs</h2>
        </Link>
        <Link
          href="/services/apparels"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/clocth-tags.png"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Cloth Tags</h2>
        </Link>
        <Link
          href="/services/stationary/business-card"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/business-card.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">
            Transparent Business Cards
          </h2>
        </Link>
        <Link
          href="/services/display-stands/rollup-stand"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/rollup-stand.png"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Rollup Stand</h2>
        </Link>
        <Link
          href="/services/gift-items/corporate-gift-set"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/carrier-bags.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Carrier Bags</h2>
        </Link>
        <Link
          href=""
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/tote-bags.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Tote Bags </h2>
        </Link>
        <Link
          href=""
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/hand-fan.png"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Hand fan</h2>
        </Link>
        <Link
          href="/services/apparels/t-shirt"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/t-shrit.png"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">T Shirts</h2>
        </Link>
        <Link
          href="/services/stationary/business-card"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/id-card.webp"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">ID Cards/Lanyards</h2>
        </Link>
        <Link
          href="/services/apparels/face-cap"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/face-cap.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Face Caps </h2>
        </Link>
        <Link
          href=""
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/home/services/mugs.webp"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Pop Socket</h2>
        </Link>
        <Link
          href="/services/apparels/hoodie"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/hoodie-2.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Hoodie</h2>
        </Link>
        <Link
          href="/services/signs-displays/vehicle-branding"
          className="col-span-1 flex flex-col gap-2 items-center text-center"
        >
          <img
            src="/images/services/vehicle-branding.jpg"
            alt=""
            className="rounded-xl mb-2 h-[250px] w-[250px]"
          />
          <h2 className="text-[18px] font-semibold">Vehicle Wrap</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
