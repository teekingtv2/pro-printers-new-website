"use client";

import { requestQuote } from "@/api";
import InputField from "@/components/globals/forms/InputField";
import SubmitButton from "@/components/globals/forms/SubmitButton";
import CustomFormik from "@/utils/CustomFormik";
import { errorNotification, successNotification } from "@/utils/helpers";
import { requestQuoteValues } from "@/utils/initialValues";
import { validateRequestQuote } from "@/utils/validate";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const RequestQuote = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const product = searchParam.get("product");
  console.log("product", product);

  const [doc, setDoc] = useState();
  const handleUploadDoc = (e) => {
    setDoc(e.target.files[0]);
  };

  const initialValues = requestQuoteValues(product);
  const validationSchema = validateRequestQuote();

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values:", values);
    const formData = new FormData();
    formData.append("doc", doc);
    formData.append("product", product);
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("company", values.company);
    formData.append("address", values.address);
    formData.append("city", values.city);
    formData.append("country", values.country);
    formData.append("product_description", values.product_description);
    formData.append("quantity", values.quantity);
    formData.append("delivery_date", values.delivery_date);
    console.log("formData:", ...formData);
    const res = await requestQuote(formData);
    console.log("res:", res);
    if (res.status === 200) {
      successNotification(res.data.message);
      // resetForm();
      // setTimeout(() => {
      //   router.push("/");
      // }, 3000);
    } else {
      errorNotification(res.data.error);
    }
  };

  return (
    <div className="flex w-full h-full bg-[#F5F7FA]">
      <div className="py-[70px] md:pt-[100px] md:pb-[100px] container">
        <div className="animate__slower animate__animated animate__zoomIn mx-auto flex flex-col items-center gap-3 mb-10">
          <h1 className="w-full md:w-[50%] text-[#000] text-[20px] md:text-[38px] font-semibold mb-5 leading-[35px] md:leading-[45px] text-center">
            Requesting for <span className="text-[#0047AB]"> {product} </span>
          </h1>
          <p className="px-5 md:px-0 w-full md:w-[70%] text-center text-13px">
            Fill the form below to request for{" "}
            <span className="font-bold">{product}</span>. You will hear from us
            soon.
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
                    <InputField name="name" placeholder="Full name" />
                  </div>
                  <div className="col-span-1">
                    <InputField name="phone" placeholder="Phone Number" />
                  </div>
                  <div className="col-span-1">
                    <InputField name="email" placeholder="Email Address" />
                  </div>
                  <div className="col-span-1">
                    <InputField name="company" placeholder="Company name" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <InputField name="address" placeholder="Company address" />
                  </div>
                  <div className="col-span-1">
                    <InputField name="city" placeholder="City" />
                  </div>
                  <div className="col-span-1">
                    <InputField name="country" placeholder="Country" />
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <InputField
                      name="product_description"
                      placeholder="Product description"
                      type="textarea"
                    />
                  </div>
                  <div className="col-span-1">
                    <InputField
                      name="quantity"
                      placeholder="Quantity"
                      type="number"
                    />
                  </div>
                  <div className="col-span-1">
                    <InputField
                      name="delivery_date"
                      placeholder="Delivery date"
                      type="date"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <input
                      name="doc"
                      placeholder="Document"
                      onChange={handleUploadDoc}
                      type="file"
                      className="contact-input leftRight request-file"
                      accept="image/*"
                      style={{
                        border: "1px dashed #ffffff",
                      }}
                    />
                    {/* <InputField name="doc" placeholder="Document" type="file" /> */}
                  </div>

                  <div className="col-span-1 md:col-span-2 flex justify-center">
                    <SubmitButton
                      className="mt-5 py-3 rounded-xl primaryBtnn w-[100%] md:w-[60%] text-sm flex justify-center items-center"
                      title="Send Quotation Request"
                    />
                  </div>
                </div>
              </CustomFormik>
            </div>
          </div>
          <div className="col-span-1 p-5 rounded-lg ">
            <img
              src="/images/vectors/support-2.png"
              className="w-[80%] text-center dancingSlide"
              alt={process.env.APP_NAME}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
