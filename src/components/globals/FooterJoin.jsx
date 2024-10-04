import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';
import { FaArrowCircleRight } from 'react-icons/fa';

const FooterJoin = () => {
  return (
    <div className="flex w-full h-full banner text-[#03194a] px-2 md:px-10 mx-auto">
      <div className="bg-[#ffffff] w-full">
        <div className="container py-[80px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 mt-5 items-center md:px-10">
          <div className="grid-cols-1 flex flex-col md:gap-2 mb-1 text-start rounded-xl">
            <div className="text-[27px] md:text-[35px] mb-3 font-extrabold text-center md:text-start">
              Get onboarded
            </div>
            <div className="text-[16px] mb-5 font-[500] text-center md:text-start">
              Register with us and get onboarded. Join us in our mission to create positive change!
            </div>
            <Link
              href="/contact"
              className="block w-[90%] md:w-[45%] me-auto ms-auto md:me-auto md:ms-0 mt-5"
            >
              <div className="py-3 rounded-xl secondaryBtnn text-md font-bold hover:border-b flex justify-center items-center">
                <span className="mr-2">Register</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="grid-cols-1 flex flex-col mb-1 text-start text-[#ffffff] updown">
            <img
              src="/images/footer-contact.svg"
              className="w-[55%] ms-auto me-auto md:ms-auto md:me-0"
            />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default FooterJoin;
