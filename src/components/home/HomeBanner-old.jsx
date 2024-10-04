import Link from 'next/link';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const HomeBannerOld = () => {
  const isVisible = true;
  return (
    <div className="flex bg-[#dee3fa] text-[#03194a] w-full h-full">
      <div className="py-10 md:py-[130px] container pb-[50px] grid grid-cols-1 md:grid-cols-10 gap-0 md:gap-0 px-5">
        {/* <TrackVisibility>
          {({ isVisible }) => ( */}
        <div className="col-span-3 pt-[60px] md:me-[-100px]">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? 'w-full h-full animate__slower animate__animated animate__zoomIn'
                    : 'w-full h-full'
                }
              >
                <div className="font-extrabold text-[30px] md:text-[40px] mb-5 md:mb-10 leading-[2.5rem] md:leading-[3rem] z-30">
                  Vengo Development and Cultural Association USA
                </div>
                <div className="text-[16px] md:text-[19px] mb-10 z-30">
                  ...a non-profit organization founded on the principles of social justice, cultural
                  diversity, and community engagement
                </div>
                <Link href="/donate">
                  <div className="mt-10 py-[0.85rem] rounded-xl primaryBtnn w-[60%] mx-auto md:ms-0 text-md font-medium flex justify-center items-center">
                    <span className="mr-2">Donate to us</span>
                  </div>
                </Link>
                <div className="w-[250px] mx-auto md:ms-0 h-[150px] text-center relative mt-9">
                  <img
                    src="/images/events/12.jpg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-[50px] border-[1px] border-[#fff] absolute top-0 left-0 z-10 updown"
                  />
                  <img
                    src="/images/events/2.jpg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-[50px] border-[1px] border-[#fff] absolute bottom-0 left-[27%] z-20 updown"
                  />
                  <img
                    src="/images/events/16.jpg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-[50px] border-[1px] border-[#fff] absolute top-1 right-5 z-30 updown"
                  />
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
        {/* )}
        </TrackVisibility> */}
        <div className="me-[-20px] col-span-5 flex justify-center items-center relative dancingSlide">
          <img
            src="/images/vectors/bgs/circle-blue.png"
            alt="Vengo Development & Cultural Association"
            className="absolute top-0 w-full h-full z-10"
            style={{ borderRadius: '50px' }}
          />
          <img
            // src="/images/vectors/home-banner.png"
            src="/images/home/africans.png"
            alt="Vengo Development & Cultural Association"
            className="h-full z-20"
            style={{ borderRadius: '50px' }}
          />
        </div>

        <div className="animate__slower animate__animated animate__zoomInRight col-span-2 flex md:flex-col justify-center md:ms-10 mt-5 md:mt-0 gap-5 md:gap-10">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="h-[75px] w-[65px] bg-[#03194a] rounded-xl p-2">
              <img
                src="/images/vectors/home-small/growth.png"
                alt="Vengo Development & Cultural Association"
                className="h-full"
              />
            </div>
            <div className="flex flex-col text-center md:text-start">
              <div className="text-[16px] font-bold">Sustainable</div>
              <div className="text-[11px]">Development</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:leftRight">
            <div className="h-[75px] w-[65px] bg-[#03194a] rounded-xl p-2">
              <img
                src="/images/vectors/home-small/education.png"
                alt="Vengo Development & Cultural Association"
                className="h-full"
              />
            </div>
            <div className="flex flex-col text-center md:text-start">
              <div className="text-[16px] font-bold">Education</div>
              <div className="text-[11px]">& skills</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="h-[75px] w-[65px] bg-[#03194a] rounded-xl p-2">
              <img
                src="/images/vectors/home-small/renovation.png"
                alt="Vengo Development & Cultural Association"
                className="w-full"
              />
            </div>
            <div className="flex flex-col text-center md:text-start">
              <div className="text-[16px] font-bold">Comminuty</div>
              <div className="text-[11px]">Renovation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerOld;
