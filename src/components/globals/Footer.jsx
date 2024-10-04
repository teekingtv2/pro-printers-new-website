import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#FFBA21]">
      <div
        className="grid grid-cols-1 md:grid-cols-3 footer py-[40px] md:py-7 container text-[#222] gap-5 items-center justify-center"
        style={{ borderTop: '1px solid #ccc' }}
      >
        <div className="col-span-1 flex justify-center md:justify-start text-center">
          <img src="/images/logo.png" alt="" className="w-[130px] " />
        </div>
        <div className="col-span-1 text-[14px] text-center">
          Copyright &copy; 2024, {process.env.APP_NAME}. All rights reserved
        </div>
        <div className="col-span-1 social-icon flex gap-2 justify-center md:justify-end">
          <Link href="https://www.twitter.com/globaltriumphng">
            <span>
              <FaTwitter />
            </span>
          </Link>
          <Link href="https://www.youtube.com/@globaltriumphng">
            <span>
              <FaYoutube />
            </span>
          </Link>
          <Link href="https://www.facebook.com/globaltriumphng">
            <span>
              <FaFacebook />
            </span>
          </Link>
          <Link href="https://www.instagram.com/globaltriumphng">
            <span>
              <FaInstagram />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
