/* eslint-disable @next/next/no-img-element */
"use client";

import CustomFormik from "@/utils/CustomFormik";
import { contactValues } from "@/utils/initialValues";
import { validateContact } from "@/utils/validate";
import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";
import InputField from "../globals/forms/InputField";
import SubmitButton from "../globals/forms/SubmitButton";
import { useRouter } from "next/navigation";
import { contact } from "@/api";
import { errorNotification, successNotification } from "@/utils/helpers";
import TrackVisibility from "react-on-screen";

const ContactBody = () => {
  const router = useRouter();
  const initialValues = contactValues();
  const validationSchema = validateContact();

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values:", values);
    console.log(process.env.API_ENDPOINT);
    const res = await contact(values);
    console.log("res:", res);
    if (res.status === 200) {
      successNotification(res.data.message);
      // resetForm();
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } else {
      errorNotification(res.data.error);
    }
  };

  return (
    <div className="flex w-full h-full bg-[#F5F7FA]">
      <div className="py-[70px] md:pt-[100px] md:pb-[100px] container">
        <div className="animate__slower animate__animated animate__zoomIn mx-auto flex flex-col items-center gap-3 mb-10">
          <h1 className="w-full md:w-[50%] text-[#000] text-[30px] md:text-[38px] font-semibold mb-5 leading-[35px] md:leading-[45px] text-center">
            <span className="text-[#0047AB]">Get in touch </span> with us
          </h1>
          <p className="px-5 md:px-0 w-full md:w-[70%] text-center text-13px">
            Get in touch to discuss your employee wellbeing needs today. Please
            give us a call, drop us an email or fill out the contact form and we
            will get back to you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0 items-center">
          <div
            className="col-span-1 py-10 px-7 md:px-10 rounded-lg "
            style={{ boxShadow: "0px 0px 10px #00000017" }}
          >
            <div className=" w-full">
              <CustomFormik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="col-span-1">
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="col-span-1">
                    <InputField name="last_name" placeholder="Last name" />
                  </div>
                  <div className="col-span-1">
                    <InputField name="email" placeholder="Email Address" />
                  </div>
                  <div className="col-span-1">
                    <InputField name="phone" placeholder="Phone Number" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <InputField
                      type="textarea"
                      name="message"
                      placeholder="Your message"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2 flex justify-center">
                    <SubmitButton
                      className="mt-5 py-3 rounded-xl primaryBtnn w-[100%] md:w-[60%] text-sm flex justify-center items-center"
                      title="Contact us"
                    />
                  </div>
                </div>
              </CustomFormik>
            </div>
          </div>
          <div className="col-span-1 p-5 rounded-lg ">
            <img
              src="/images/contact2.png"
              className="w-[80%] text-center dancingSlide"
              alt={process.env.APP_NAME}
            />
          </div>
        </div>

        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__slower animate__animated animate__zoomIn "
                  : ""
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-[30px] md:gap-[80px] mt-10 md:mt-[100px]">
                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-3 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[90px] w-[90px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <FaHome size={45} color="#0047AB" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1">Address</h3>
                  <p className="text-[14px] text-center">
                    Proprinters Agency, 51A Dabira Street, <br /> by Akeju
                    Street off Oguntolu Street,
                    <br /> Onipanu, Lagos.
                  </p>
                </div>
                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[90px] w-[90px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <FaPhoneAlt size={45} color="#0047AB" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1">Get in Touch</h3>
                  <div className="text-[14px] text-center">
                    <div className="flex gap-2 justify-center mb-2">
                      <FaMailBulk size={18} color="#0047AB" />
                      <a
                        href="mailto:info@proprintersagency.com"
                        className="text-[#0047AB]"
                      >
                        info@proprintersagency.com
                      </a>
                    </div>
                    <div className="flex gap-2 justify-center mb-2">
                      <FaPhone size={18} color="#0047AB" />
                      <a
                        href="tel:+234 808 312 4442"
                        className="text-[#0047AB]"
                      >
                        08083124442
                      </a>
                      ,
                      <a
                        href="tel:+234 808 312 4442"
                        className="text-[#0047AB]"
                      >
                        08083124442
                      </a>
                    </div>
                    <div className="flex gap-2 justify-center mb-2">
                      <FaWhatsapp size={18} color="#0047AB" />
                      <a
                        href="https://wa.me/2348083124442"
                        className="text-[#0047AB]"
                      >
                        +234 808 312 4442
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group col-span-1 bg-transparent rounded-[50px] py-6 px-6 flex flex-col gap-4 hover:scale-105 hover:bg-white cardHoverShadow ease-in duration-300">
                  <div className="h-[90px] w-[90px] p-5 rounded-[50%] mx-auto bg-white mb-1 group-hover:bg-[#f3f7fd] flex justify-center items-center">
                    <FaTools size={45} color="#0047AB" />
                  </div>
                  <h3 className="text-[19px] text-center pb-1">
                    Hour of operation
                  </h3>
                  <p className="text-[14px] text-center">
                    Monday-Friday: 8am-5pm <br /> Saturday: 9am-Midday <br />{" "}
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};

export default ContactBody;
