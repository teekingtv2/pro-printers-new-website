"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { menuItems } from "../../../data/data";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [linkColor, setLinkColor] = useState("#000");
  const [activeLink, setActiveLink] = useState("home");
  const router = useRouter();

  const [itemTitle, setItemTitle] = useState("");
  const [itemLink, setItemLink] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.asPath !== "/") {
      setLinkColor("#000");
    } else {
      setLinkColor("#000");
    }
  }, [router]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const updateLinkItem = (title) => {
    setItemTitle(title);
    const selectedIt = menuItems.filter((item) => item.title === title);
    setSelectedItem(selectedIt[0]);
    setItemLink(selectedIt[0].link);
  };

  return (
    // <div className="fixed top-[35px] w-full shadow-md z-[100] px-5 md:px-0 bg-[#fff] ">
    <div className="w-full relative">
      <div className=" w-full shadow-md z-[100] px-5 md:px-0 bg-[#FFBA21] ">
        <div className=" container py-2 px-0 md:px-[0px]">
          <div className="w-full">
            <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:flex justify-between items-center text-[13px] font-medium"
            >
              <Link
                href="/all-products"
                className={activeLink === "All Products" ? "active" : ""}
                onClick={() => onUpdateActiveLink("All Products")}
              >
                <li className="navLink">All Products</li>
              </Link>

              {menuItems
                .filter((ele) => ele.title !== "Others")
                .map((item, i) => (
                  <li
                    key={i}
                    onMouseEnter={() => updateLinkItem(item.title)}
                    className="navLink flex justify-center items-center gap-[2px]"
                  >
                    <span>{item.title}</span>
                    <IoMdArrowDropdown size={20} />
                  </li>
                ))}
              <Link
                href="/packaging"
                className={activeLink === "packaging" ? "active" : ""}
                onClick={() => onUpdateActiveLink("projects")}
              >
                <li className="navLink">Packaging</li>
              </Link>
            </ul>
            <div onClick={handleNavToggle} className="md:hidden">
              <AiOutlineMenu className="text-[#0005ca]" size={25} />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 "
              : ""
          }
          style={{ zIndex: "11111" }}
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 ease-in duration-500 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fff] px-10 py-5"
                : "fixed left-[-120%] top-0 ease-in duration-500 p-10"
            }
          >
            <div>
              <div className="flex w-full justify-between items-center">
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    alt={`${process.env.APP_NAME}`}
                    width="100"
                    height="35"
                  />
                </Link>
                <div
                  onClick={handleNavToggle}
                  className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer text-gray-300"
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b border-gray-300 my-6">
                <p className=" py-2 text-[#0047ab] leading-3 font-semibold">
                  Pro Printers Agency LTD
                </p>
              </div>
            </div>
            <div className="py-1 flex flex-col g-0">
              <ul className="uppercase">
                {menuItems.map((item, i) => (
                  <Link
                    onClick={() => setNav(false)}
                    href={`/services/${item.link}`}
                    className={
                      activeLink === item.link ? "active" : "text-gray-900"
                    }
                    key={i}
                  >
                    <li className="py-2 text-sm">{item.title}</li>
                  </Link>
                ))}
                <Link
                  onClick={() => setNav(false)}
                  href="/about"
                  className={
                    activeLink === "about" ? "active" : "text-gray-900"
                  }
                >
                  <li className="py-2 text-sm">About</li>
                </Link>

                <Link
                  onClick={() => setNav(false)}
                  href="/contact"
                  className={
                    activeLink === "contact" ? "active" : "text-gray-900"
                  }
                >
                  <li className="py-2 text-sm">Contact</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  href="/blog"
                  className={activeLink === "blog" ? "active" : "text-gray-900"}
                >
                  <li className="py-2 text-sm">News & Articles</li>
                </Link>
              </ul>
              <div className="pt-3">
                <div className="flex items-center justify-center gap-5 my-4 w-full sm:w-[80%] text-gray-900">
                  <Link
                    href="https://x.com/"
                    className="rounded-full shadow-md shadow-gray-900 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="https://instagram.com/"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://facebook.com/"
                    className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedItem && (
        <div className="absolute w-[100vw] flex z-40 bg-transparent ease-in duration-300">
          <div
            className=" container flex items-center justify-center gap-8 px-4 pt-5 pb-10 bg-white hover "
            style={{ border: "1px solid #bbb" }}
            onMouseLeave={() => {
              setSelectedItem(false);
            }}
          >
            {selectedItem &&
              selectedItem.children.map((it, i) => {
                console.log("image", `/images/services/${it.img}`);
                return (
                  <Link
                    href={`/services/${itemLink}/${it.link}`}
                    className={`flex flex-col items-center gap-3 px-7`}
                    style={{ borderRight: "1px solid #bbb" }}
                    key={i}
                  >
                    <div className="h-[100px] w-[100px]">
                      <img
                        src={`/images/services/${it.img}`}
                        alt=""
                        className="h-[100px] w-[100px] hover:scale-110 ease-in duration-300"
                      />
                    </div>
                    <p className="leading-4 text-[14px] text-center">
                      {it.name}
                    </p>
                  </Link>
                );
              })}
            <Link
              href={`/services/${itemLink}`}
              className="btnn readMoreBtnn flex items-center font-medium uppercase"
            >
              Read More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
