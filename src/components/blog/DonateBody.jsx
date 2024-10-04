/* eslint-disable @next/next/no-img-element */

import CustomFormik from '@/utils/CustomFormik';
import { donateValues } from '@/utils/initialValues';
import { validateDonate } from '@/utils/validate';
import Link from 'next/link';
import React from 'react';
import InputField from '../globals/forms/InputField';
import SubmitButton from '../globals/forms/SubmitButton';
import { useRouter } from 'next/navigation';
import { donate } from '@/api';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { errorNotification, successNotification } from '@/utils/helpers';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//   useClassNames: true,
//   initClassName: false,
//   animatedClassName: 'animated',
// });

const DonateBody = () => {
  const router = useRouter();
  const initialValues = donateValues();
  const validationSchema = validateDonate();

  const handleSubmit = async (values, { resetForm }) => {
    console.log('values:', values);
    const res = await donate(values);
    if (res.status === 200) {
      successNotification(res.data.message);
      resetForm();
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } else {
      errorNotification(res.data.error);
    }
  };

  return (
    <div className="flex w-full h-full bg-[#ffffff] text-[#060F3A]">
      <div className="py-[70px] md:pt-[100px] md:pb-[100px] container">
        <div className="text-[28px] font-[800] mb-7 md:mb-10 text-center">Support the cause</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0 items-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? 'animate__animated animate__zoomInLeft col-span-1 py-10 px-7 md:px-10 rounded-lg banner boxShadow-sm text-[#ffffff]'
                    : 'col-span-1 py-10 px-7 md:px-10 rounded-lg banner boxShadow-sm text-[#ffffff]'
                }
              >
                <div className="text-[15px] font-medium">
                  Join us in our mission to create positive change! You can. Donate using any of
                  these payment methods: Bank transfer, Credit Card, Zelle, CashApp, Paypal
                </div>
                <div className="mt-7 w-full">
                  <CustomFormik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="col-span-1">
                        <div className="mb-1 text-[14px] font-semibold">First Name</div>
                        <InputField name="first_name" placeholder="First name" />
                      </div>
                      <div className="col-span-1">
                        <div className="mb-1 text-[14px] font-semibold">Last Name</div>
                        <InputField name="last_name" placeholder="Last name" />
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <div className="mb-1 text-[14px] font-semibold">Address</div>
                        <InputField name="address" placeholder="Address" />
                      </div>
                      <div className="col-span-1">
                        <div className="mb-1 text-[14px] font-semibold">Email Address</div>
                        <InputField name="email" placeholder="Email Address" />
                      </div>
                      <div className="col-span-1">
                        <div className="mb-1 text-[14px] font-semibold">Phone Number</div>
                        <InputField name="phone" placeholder="Phone Number" />
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <div className="mb-1 text-[14px] font-semibold">Amount ($)</div>
                        <InputField type="number" name="amount" placeholder="Amount" />
                      </div>
                      <div className="col-span-1 md:col-span-2 flex justify-center">
                        <SubmitButton
                          className="mt-10 py-3 rounded-xl primaryBtnn w-[60%] text-sm flex justify-center items-center"
                          title="Donate to us"
                        />
                      </div>
                    </div>
                  </CustomFormik>
                </div>
              </div>
            )}
          </TrackVisibility>
          <div className="col-span-1 p-5 rounded-lg ">
            <img
              src="/images/vectors/donate.gif"
              className="w-[80%] text-center dancingSlide"
              alt={process.env.APP_NAME}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBody;
