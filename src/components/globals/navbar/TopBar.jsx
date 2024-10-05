import Head from "next/head";
import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const TopBar = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Printing Press Company in Lagos" />
        <meta
          name="description"
          content="Welcome to Pro Printers Agency Limited - your go-to destination for premium custom gift item branding in Ilorin and Lagos. Specializing in UV printing, DTF printing, Large Format Printing (Flex Banner, Stickers), Office Branding, Custom Wall Papers, Vehicle branding, Display Stand, POSM, Product Labels and custom gift and promotional Items"
        />
        <meta
          name="keywords"
          content="Pro Printers, Pro Printers Agency Limited, Printing Press in Lagos, Printing Press in Nigeria, Best Printing Services in Lagos, Best Printing Services in Nigeria, premium custom gift item branding in Ilorin and Lagos, Specializing in UV printing, DTF printing, Large Format Printing (Flex Banner, Stickers), Office Branding, Custom Wall Papers, Vehicle branding, Display Stand, POSM, Product Labels and custom gift and promotional Item"
        />
      </Head>
      <div className="w-full bg-[#FFBA21]">
        <div className="container py-2 px-3 md:px-0 flex justify-between items-center text-[#fff] font-semibold md:font-semibold text-[12px] md:text-[14px]">
          <p className="font-semibold ">Announcement</p>
          <marquee behavior="" direction="" className="w-[70%] p-0 m-0">
            Huge discount of as high as 20% off your first order!
          </marquee>
        </div>
      </div>
    </>
  );
};

export default TopBar;
