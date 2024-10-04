import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const HomeReadAboutUs = () => {
  return (
    <div className="homeReadAboutBg py-[60px] md:py-[100px] flex flex-col items-center gap-3 md:gap-8 text-[#fff]">
      <p className="font-semibold text-[14px] md:text-[16px]">Printed and shipped on demand!</p>
      <h1 className="w-[90%] md:w-[30%] mx-auto text-[27px] md:text-[42px] text-center font-semibold mb-5 leading-[35px] md:leading-[45px]">
        Ready to design or print in bulk & save up to 30%?
      </h1>
      <Link
        href="/about"
        className="btnn secondaryBtnn font-normal md:font-semibold flex gap-2 justify-center items-center w-[max-content]"
      >
        <span>Learn About Us</span>
        <FaArrowUp />
      </Link>
    </div>
  );
};

export default HomeReadAboutUs;
