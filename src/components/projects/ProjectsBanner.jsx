/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

const ProjectsBanner = () => {
  return (
    <div className="flex w-full h-full banner text-[#03194a] px-2 md:px-10 mx-auto">
      <div className="bg-[#ffffff] w-full">
        <div className="py-[70px] md:pt-[100px] md:pb-[0px] container px-3 md:px-[70px] animate__slower animate__animated animate__zoomIn">
          <div className="md:w-[60%] mx-auto text-[24px] font-bold text-center">
            Learn About Our Projects
          </div>
          <div className="grid grid-cols- md:grid-cols-3 gap-8 items-center">
            <div
              className="col-span-1 flex flex-col gap-7"
              style={{ border: '1px dashed #ffffff' }}
            >
              <div
                className="h-[15px] md:h-[100px]"
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderBottom: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderBottomLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                }}
              ></div>
              <div
                className="p-7 flex flex-col gap-3 banner updown text-[#ffffff]"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[18px] font-bold">Health Service</div>
                <div className="text-[14px]">
                  We provide support in delivering preventive, care, and treatment services to
                  individuals affected by diseases of significant public health concern.
                </div>
                <img
                  src="/images/vectors/health.png"
                  alt="Vengo Development & Cultural Association"
                  className="w-full"
                />
              </div>
              <div
                className="h-[15px] md:h-[100px]"
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderTop: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              ></div>
            </div>
            <div
              className="col-span-1 flex flex-col gap-7"
              style={{ border: '1px dashed #ffffff' }}
            >
              <div
                className="h-[15px] md:h-[30px]"
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderBottom: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderBottomLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                }}
              ></div>
              <div
                className="p-7 rounded-xl flex flex-col gap-3 leftRight"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[18px] font-bold">Community Center Renovation</div>
                <div className="text-[14px]">
                  We are renovating a community center in [location] to create a safe space for
                  local youth and families.
                </div>
                <img
                  src="/images/vectors/community.png"
                  alt="Vengo Development & Cultural Association"
                  className="w-[90%] mx-auto"
                />
              </div>
              <div
                className="p-7 h-[120px] rounded-xl flex flex-col gap-3 bg-[#03194a] text-[#ffffff] relative"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <img
                  src="/images/vectors/about-card.png"
                  alt="Vengo Development & Cultural Association"
                  className="w-[30%] absolute left-[35%] bottom-3 about-card-1"
                />
              </div>
              <div
                className="p-7 rounded-xl flex flex-col gap-3 updown"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[18px] font-bold">Scholarship Program</div>
                <div className="text-[14px]">
                  We are providing scholarships to [number] students from marginalized communities
                  to pursue higher education.
                </div>
                <img
                  src="/images/vectors/scholarship.png"
                  alt="Vengo Development & Cultural Association"
                  className="w-full"
                />
              </div>
              <div
                className="h-[15px] md:h-[30px] "
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderTop: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}
              ></div>
            </div>
            <div
              className="col-span-1 flex flex-col gap-7"
              style={{ border: '1px dashed #ffffff' }}
            >
              <div
                className="h-[15px] md:h-[100px] "
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderBottom: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderBottomLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                }}
              ></div>
              <div
                className="p-7 flex flex-col gap-3 leftRight banner text-[#ffffff]"
                style={{
                  border: '1px solid #5f5f5f63',
                  borderRadius: '15px',
                }}
              >
                <div className="text-[18px] font-bold">Environmental Conservation</div>
                <div className="text-[14px]">
                  We are working with local communities to plant [number] trees and promote
                  sustainable agriculture practices.
                </div>
                <img
                  src="/images/vectors/environmental.png"
                  alt="Vengo Development & Cultural Association"
                  className="w-full"
                />
              </div>
              <div
                className="h-[15px] md:h-[100px]"
                style={{
                  borderLeft: '1px dashed #5f5f5f63',
                  borderTop: '1px dashed #5f5f5f63',
                  borderRight: '1px dashed #5f5f5f63',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBanner;
