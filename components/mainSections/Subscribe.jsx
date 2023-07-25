import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { BsEnvelopePaper } from "react-icons/bs";
import subsribe from "../../public/assets/images/subsribe.png";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "../hleper/CustomTextField";
import AlertSuccess from "../hleper/AlertSuccess";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Subscribe() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const methods = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        "https://new.tourzable.com/api/mails",
        {
          ...data,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        setOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
    // router.push("/Thank_you");
  };
  return (
    <div className="container mx-auto px-4 mt-10 md:px-10 pb-6">
      <AlertSuccess
        handleClose={handleClose}
        handleClick={handleClick}
        open={open}
        message={"This is a success message!"}
      />
      <div className="flex flex-col md:flex-row">
        {/* image */}
        <div className=" group relative w-full h-[200px] rounded-t-md  md:h-[390px] overflow-hidden md:w-[500px] ">
          <Image
            src={subsribe}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
            alt=""
            className="t"
          />
        </div>
        {/* contnet */}
        <div className="flex flex-col space-y-4 p-8 bg-[#f5f5f5] md:flex-1 md:px-10 md:space-y-14">
          {/* icon */}
          <BsEnvelopePaper className="text-[#051036] text-5xl" />
          <div className="flex flex-col space-y-2 md:space-y-8">
            <p className="text-[24px] text-[#051036] font-semibold font-sans capitalize">
              {t("common:home.supScribtheader")}
            </p>
            <p className="font-sans text-[#051036] capitalize ">
              {t("common:home.supScribtDesc")}
            </p>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col space-y-3 md:space-y-9"
              >
                <CustomTextField
                  required
                  name="email"
                  label="your Mail"
                  type={"text"}
                />
                <div className=" group flex justify-start items-center transition-all py-3 px-7 hover:md:bg-[#3554d1] bg-MainYeloow rounded">
                  <button className="text-[15px] font-medium  transition-all group-hover:md:text-[#051036] font-sans text-white  ">
                    {t("common:home.Subscribe")}
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
