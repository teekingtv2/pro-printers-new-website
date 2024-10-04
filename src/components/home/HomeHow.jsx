import React from 'react';

const HomeHow = () => {
  return (
    <div className="container px-5 md:px-0 mx-auto pt-5 md:pt-[70px] pb-5 md:pb-[120px]">
      <div className="animate__slower animate__animated animate__zoomIn text-center mb-6 md:mb-[50px]">
        <h1 className="text-[#000] text-[25px] md:text-[30px] font-semibold mb-5">
          How you can fulfill <span className="text-[#FFBA21]">your ideas</span> with
          <span className="text-[#0047AB] font-bold"> {process.env.APP_NAME}</span>
        </h1>
        <p className="text-[14px]">
          Ideal for creators and online businesses who hate complexity but want results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/mock3.png" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">Pick your product</h2>
          <p className="text-[14px]">
            From t-shirts to totes, select from our large range of high-quality clothing and
            accessories to print your design on.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/mock4.png" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">Create your design</h2>
          <p className="text-[14px]">
            Our free online design tool makes creating simple. Choose from hundreds of fonts,
            premade designs, upload your or import photos
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-2 items-center text-center">
          <img src="/images/home/mock5.png" alt="" className="rounded-3xl mb-2" />
          <h2 className="text-[18px] font-semibold">Leave the rest to us</h2>
          <p className="text-[14px]">
            Once your masterpiece is complete, simply place your order. Your expertly printed item
            will arrive so quickly you will wonder how we do i
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHow;
