import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#FFBA21] pt-[40px] md:pt-7">
      <div
        className="px-10 md:px-0 grid grid-cols-1 md:grid-cols-3 footer py-[40px] md:py-7 container text-[#000] gap-5 md:gap-[100px] items-center justify-center"
        style={{ borderBottom: "1px solid #22222247" }}
      >
        <div className="col-span-1 flex justify-center md:justify-start text-center">
          <img src="/images/logo.png" alt="" className="w-[160px] " />
        </div>
        <div className="col-span-1 flex flex-col text-[14px]">
          <Link
            href="/about"
            className="py-2 mb-2 text-[#222]"
            style={{ borderBottom: "1px solid #22222236" }}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="py-2 mb-2 text-[#222]"
            style={{ borderBottom: "1px solid #22222236" }}
          >
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="py-2 mb-2 text-[#222]"
            style={{ borderBottom: "1px solid #22222236" }}
          >
            News & Articles
          </Link>
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
      <div className="bg-black px-10 md:px-0 col-span-1 text-[14px] text-center py-[40px] md:py-7 text-[#FFBA21]">
        <p>
          Copyright &copy; 2024,{" "}
          <span className="text-white font-semibold">
            {process.env.APP_NAME}
          </span>
          . All rights reserved
        </p>
        <p>
          Website cooked by{" "}
          <Link
            href="https://jaflah.com.ng"
            className="text-white font-semibold"
          >
            Jaflah!👨‍🍳
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
