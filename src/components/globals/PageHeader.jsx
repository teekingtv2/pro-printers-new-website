import Link from 'next/link';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';

const PageHeader = ({ title, subheader, header }) => {
  return (
    <>
      <div className="flex items-center gap-2 bg-[#222222] py-3 px-7 rounded-lg">
        <Link href="/" className="text-white">
          Home
        </Link>
        <BiRightArrow />
        <p>{title}</p>
      </div>
      <div className="my-4 md:my-7 w-full">
        <h2 className="text-[#FC5B56] text-[25px] leading-6 my-4">
          <span className="textBlueGradient">{subheader}</span>{' '}
          <span className="text-[#fff]">{header}</span>
        </h2>
        <div
          style={{ borderBottom: '1px dashed #444', height: '4px', background: '' }}
          className="w-full mt-2 mb-6"
        ></div>
      </div>
    </>
  );
};

export default PageHeader;
