"use client";

import { motion } from "framer-motion";
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
import LoaderButton from "../Buttons/LoaderButton";

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

export default function SideEnquire({ message }: { message: string }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
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
    <div className={`  text-sm text-white  font-semibold relative z-[999]`}>
      <div
        className={` visible fixed bottom-0 left-0 right-0 w-full sm:hidden  `}
      >
        <div
          className="flex justify-center items-center gap-1 bg-[#E92226] text-white p-4 py-2 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`  text-sm text-white  font-semibold grid place-content-center font-sans `}
          >
            {message}
          </span>
        </div>
      </div>

      <div
        className="fixed  right-[-90px] top-[250px]  transform rotate-[-90deg]
         bg-red-600 py-[11px] px-[19px]   cursor-pointer hidden sm:flex"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {message}
      </div>

      <div
        className={`fixed ${
          open ? "right-0 sm:right-[0px]" : "right-[-100vw] sm:right-[-300px]"
        } top-0 sm:top-[130px] w-[100vw] h-[100vh]  border border-gray-200 border-t-0   sm:h-auto sm:w-[300px] sm:flex transition-all ease-in-out duration-700 z-[999]  bg-white shadow`}
      >
        <div className="relative bg-white w-full flex flex-col p-[25px]">
          <div className="gap-2 flex flex-col ">
            <div
              className="absolute top-0 right-0 bg-[#E92226] text-white w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              X
            </div>
            <h1 className="text-lg text-center text-gray-900 font-semibold">
              Enquire With Us
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="text-gray-900">
              {" "}
              <motion.div
                variants={tweenAnimateFromRight10}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0 }}
              >
                {" "}
                <FormControl isInvalid={!!errors.name} mb={2} isRequired>
                  {" "}
                  <Input
                    type="text"
                    placeholder="Name*"
                    size="md"
                    className="!rounded !font-medium !text-[13px]  "
                    borderColor="yellow.800"
                    // _hover={{ borderColor: "blue.800" }}
                    // focusBorderColor="gray.800"
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
                  <FormErrorMessage className="!text-[12px] !font-medium">
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
                    size="md"
                    className="!rounded !font-medium !text-[13px]"
                    borderColor="yellow.800"
                    // focusBorderColor="gray.500"
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
                  <FormErrorMessage className="!text-[12px] !font-medium">
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
                    size="md"
                    className="!rounded !font-medium !text-[13px]"
                    borderColor="yellow.800"
                    // focusBorderColor="gray.500"
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
                  <FormErrorMessage className="!text-[12px] !font-medium">
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
                    size="md"
                    className="!rounded !font-medium !text-[13px]"
                    borderColor="yellow.800"
                    // focusBorderColor="gray.500"
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
                  <FormErrorMessage className="!text-[12px] !font-medium">
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
    </div>
  );
}
