'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaTwitter, FaFacebook, FaInstagram, FaArrowCircleRight, FaSearch } from 'react-icons/fa';

const Logobar = () => {
  const [nav, setNav] = useState(false);
  const [linkColor, setLinkColor] = useState('#000');
  const [activeLink, setActiveLink] = useState('home');

  const router = useRouter();

  const handleNavToggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.asPath !== '/') {
      setLinkColor('#000');
    } else {
      setLinkColor('#000');
    }
  }, [router]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div className="w-full shadow-md z-[100] px-5 md:px-0 bg-[#0005ca]">
      <div className="container flex flex-col justify-start items-start gap-4 md:gap-[30px] h-full py-[2vh] md:py-6 px-0">
        <div className="w-full flex justify-between md:justify-start items-center md:gap-[100px]">
          <Link href="/" className="">
            <img
              src="/images/logo.png"
              alt={process.env.APP_NAME}
              className="w-[130px] md:w-[130px]"
            />
          </Link>
          <div className="w-[200px] md:w-[350px] px-2 bg-[#89c9fd] rounded-[50px] flex justify-between items-center">
            <input
              type="text"
              className="bg-transparent search p-1 rounded-[50px] w-[93%]"
              placeholder="search product here"
            />
            <FaSearch />
          </div>
        </div>
        <div className="w-full flex justify-between text-white font-medium md:gap-3 text-[13px] md:text-[16px]">
          <Link href="" className="hidden md:block">
            Blog
          </Link>
          <span className="hidden md:block">| </span>
          <span className="hidden md:block">Lagos Office</span>
          <span className="hidden md:block">| </span>
          <span className="hidden md:block"> Ilorin Office</span>
          <span className="hidden md:block">| </span>
          <Link href="mailto:info@proprintersagency.com">info@proprintersagency.com</Link>
          <span>| </span>
          <Link href="tel:+234 808 312 4442">+234 808 312 4442</Link>
          <span className="hidden md:block">| </span>
          <Link href="tel:+234 806 059 1636" className="hidden md:block">
            +234 806 059 1636
          </Link>
          <span className="hidden md:block">| </span>
          <Link href="tel:+234 903 612 5643" className="hidden md:block">
            +234 903 612 5643
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logobar;
