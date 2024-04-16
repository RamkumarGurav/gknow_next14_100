"use client";

import { Poppins } from "next/font/google";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import AnimatedDiv from "@/components/FmContainers/AnimatedDiv";
import {
  springAnimate70pxFromBelow10,
  tweenAnimateFromLeft10,
  tweenAnimateFromLeft13,
  tweenAnimateFromLeft16,
} from "@/utils/variants";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {
  tweenAnimateFromRight10,
  tweenAnimateFromRight13,
  tweenAnimateFromRight16,
  tweenAnimateFromRight19,
} from "@/utils/variants";
import LoaderButton from "@/components/Buttons/LoaderButton";
import { motion } from "framer-motion";
import Bedcrumb from "@/components/Bedcrumb/Bedcrumb";

const font = Poppins({ weight: "400", subsets: ["latin"] });

const sendData = async (data: any) => {
  const res = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return await res.json();
};

export default function CUPageName() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data: any) => {
    setIsSubmitted(true);
    try {
      const responseKey = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();
      if (responseKey) {
        data.subject = "Regarding Contact message";
        data.responseKey = responseKey;
        const response = await sendData(data);
        if (response.success) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
        setIsSubmitted(false);
        reset();
      } else {
        toast.error("Please verify that you are not a robot.");
      }
    } catch (error) {
      toast.error("Error validating reCAPTCHA.");
      console.error("Error validating reCAPTCHA:", error);
    }
  };
  return (
    <div className={`${font.className} bg-[#F9F9F9] overflow-hidden`}>
      <Bedcrumb heading="Contact Us" pageName1="Contact Us" />

      <section
        id="contactUsSection "
        className={`contactUsSection py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <div className={`grid lg:grid-cols-2`}>
            <div className="left ">
              <div className="headingContainer mb-6">
                <AnimatedDiv
                  className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                  variants={springAnimate70pxFromBelow10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Contact &nbsp;
                  <span className="text-secondary-red1">Us</span>
                </AnimatedDiv>
                <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
              </div>
              <AnimatedDiv
                variants={tweenAnimateFromLeft10}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4 rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <IoLocationSharp size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    APPOLO PUBLIC SCHOOL
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    #320,5TH CROSS,5th BLOCK ,3RD PHASE BSK III STAGE
                    Bangalore-560085
                  </p>
                </div>
              </AnimatedDiv>

              <AnimatedDiv
                variants={tweenAnimateFromLeft13}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4  rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <MdEmail size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    Email Address
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    appolopublicsch@gmail.com
                  </p>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                variants={tweenAnimateFromLeft16}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4  rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <FaPhone size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    Phone Number
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    +91 80-26698908/9 / +91 8792539589
                  </p>
                </div>
              </AnimatedDiv>
            </div>

            <div className="right">
              <div className="headingContainer mb-6">
                <AnimatedDiv
                  className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                  variants={springAnimate70pxFromBelow10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Enquire &nbsp;
                  <span className="text-secondary-red1">Here</span>
                </AnimatedDiv>
                <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="text-gray-900">
                {" "}
                <motion.div
                  variants={tweenAnimateFromRight10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0 }}
                >
                  {" "}
                  <FormControl isInvalid={!!errors.name} mb={4} isRequired>
                    {" "}
                    <Input
                      type="text"
                      placeholder="Name*"
                      size="lg"
                      textColor="gray.800"
                      className="!rounded-none !font-medium !text-[14px]  !py-2  ||| 
                         "
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                      }}
                      errorBorderColor="red.300"
                      _placeholder={{ color: "gray.900" }}
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />{" "}
                    <FormErrorMessage>
                      {" "}
                      {errors.name && String(errors.name.message)}{" "}
                    </FormErrorMessage>{" "}
                  </FormControl>{" "}
                </motion.div>{" "}
                <motion.div
                  variants={tweenAnimateFromRight13}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0 }}
                >
                  {" "}
                  <FormControl isInvalid={!!errors.email} mb={2} isRequired>
                    {" "}
                    <Input
                      type="email"
                      placeholder="Email*"
                      size="lg"
                      textColor="gray.800"
                      className="!rounded-none !font-medium !text-[14px]  !py-2  ||| 
                         "
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                      }}
                      errorBorderColor="red.300"
                      _placeholder={{ color: "gray.900" }}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />{" "}
                    <FormErrorMessage>
                      {" "}
                      {errors.email && String(errors.email.message)}{" "}
                    </FormErrorMessage>{" "}
                  </FormControl>{" "}
                </motion.div>{" "}
                <motion.div
                  variants={tweenAnimateFromRight16}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0 }}
                >
                  {" "}
                  <FormControl
                    isInvalid={!!errors.contactNumber}
                    mb={2}
                    isRequired
                  >
                    {" "}
                    <Input
                      type="tel"
                      placeholder="Contact Number*"
                      size="lg"
                      textColor="gray.800"
                      className="!rounded-none !font-medium !text-[14px]  !py-2  ||| 
                         "
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                      }}
                      errorBorderColor="red.300"
                      _placeholder={{ color: "gray.900" }}
                      {...register("contactNumber", {
                        required: "Contact Number is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Contact Number must be exactly 10 digits",
                        },
                      })}
                    />{" "}
                    <FormErrorMessage>
                      {" "}
                      {errors.contactNumber &&
                        String(errors.contactNumber.message)}{" "}
                    </FormErrorMessage>{" "}
                  </FormControl>{" "}
                </motion.div>{" "}
                <motion.div
                  variants={tweenAnimateFromRight19}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0 }}
                >
                  {" "}
                  <FormControl isInvalid={!!errors.message} mb={2} isRequired>
                    {" "}
                    <Textarea
                      rows={4}
                      placeholder="Message*"
                      size="lg"
                      textColor="gray.800"
                      className="!rounded-none !font-medium !text-[14px]  !py-2  ||| 
                         "
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                      }}
                      errorBorderColor="red.300"
                      _placeholder={{ color: "gray.900" }}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                        maxLength: {
                          value: 250,
                          message: "Message must be less than 250 characters",
                        },
                      })}
                    />{" "}
                    <FormErrorMessage>
                      {" "}
                      {errors.message && String(errors.message.message)}{" "}
                    </FormErrorMessage>{" "}
                  </FormControl>{" "}
                </motion.div>{" "}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={String(
                    process.env.NEXT_PUBLIC_RECAPTCHA2_IV_SITE_KEY!
                  )}
                  size="invisible"
                />{" "}
                <motion.div
                  variants={tweenAnimateFromRight10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0 }}
                >
                  {" "}
                  <LoaderButton
                    className="!min-w-[100px]"
                    type="submit"
                    bg="#E6272D"
                    textColor="white"
                    fontWeight="500"
                    _hover={{ bg: "black" }}
                    isLoading={isSubmitted}
                    loadingText="sending.."
                    // isDisabled={!isDirty || !isValid}
                  >
                    Send{" "}
                  </LoaderButton>{" "}
                </motion.div>{" "}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
