import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { BsPersonAdd } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { ImMan } from "react-icons/im";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          direction: "ltr",
        },
      },
    },
  },
});
function CheckAvailability({
  idPackage,
  image,
  title,
  tourCode,
  best_price,
  min,
  max,
  payMode,
}) {
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [aduits, setAduits] = useState(min);
  const [childs, setChilds] = useState(0);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const handleAddCounter = (type) => {
    if (type == "adults") {
      setAduits(aduits + 1);
    }
    if (type == "childs") {
      setChilds(childs + 1);
    }
  };
  const startDayFormate = startDay ? startDay.format("DD-MM-YYYY") : startDay;
  const endDayFormate = endDay ? endDay.format("DD-MM-YYYY") : endDay;
  const handleremoveCounter = (type) => {
    if (type == "adults" && aduits > 0) {
      setAduits(aduits - 1);
    }
    if (type == "childs" && childs > 0) {
      setChilds(childs - 1);
    }
  };
  const onSubmit = (data) => {
    // console.log({
    //   ...data,
    //   aduits,
    //   childs,
    //   startDay: startDayFormate,
    //   endDay: endDayFormate,
    // });
    router.push({
      pathname: "/Checkout",
      query: {
        startDay: startDayFormate,
        endDay: endDayFormate,
        aduits,
        childs,
        idPackage,
        image,
        title,
        tourCode,
        best_price,
        min,
        max,
        payMode,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-2 px-3 ">
      <div className="grid grid-cols-2 gap-4 ">
        {/*date*/}
        <div className=" mt-5 ">
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={startDay}
                onChange={(date) => {
                  setStartDay(date);
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    fullWidth: true,
                    label: t("common:single.start_ate"),
                    required: true,
                  },
                }}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        <div className=" mt-5 ">
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={endDay}
                onChange={(date) => {
                  setEndDay(date);
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    fullWidth: true,
                    label: t("common:single.end_Date"),
                    required: true,
                  },
                }}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        {/* counter */}
        <div className=" col-span-2 border-y-2 py-4">
          <div className=" grid grid-cols-2 gap-3 mt-5">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <ImMan className="text-2xl text-MainYeloow" />
                <span className="text-sm text-[#555] font-sans capitalize font-medium">
                  {" "}
                  {t("common:single.num_adults")}
                </span>
              </div>
              <div className="flex items-center px-5">
                <div
                  onClick={() => {
                    handleAddCounter("adults");
                  }}
                  className="text-mainColor text-xl cursor-pointer"
                >
                  <BsPersonAdd />{" "}
                </div>
                <TextField
                  required
                  type="tel"
                  variant="standard"
                  value={aduits}
                  inputProps={{ style: { textAlign: "center" } }}
                />
                <div
                  onClick={() => {
                    handleremoveCounter("adults");
                  }}
                  className="text-mainColor text-xl cursor-pointer"
                >
                  <MdOutlinePersonRemoveAlt1 />{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <FaChild className="text-2xl text-MainYeloow" />
                <span className="text-sm text-[#555] font-sans capitalize font-medium">
                  {" "}
                  {t("common:single.num_childs")}
                </span>
              </div>
              <div className="flex items-center px-5">
                <div
                  onClick={() => {
                    handleAddCounter("childs");
                  }}
                  className="text-mainColor text-xl cursor-pointer"
                >
                  <BsPersonAdd />{" "}
                </div>
                <TextField
                  required
                  type="tel"
                  variant="standard"
                  value={childs}
                  inputProps={{ style: { textAlign: "center" } }}
                />
                <div
                  onClick={() => {
                    handleremoveCounter("childs");
                  }}
                  className="text-mainColor text-xl cursor-pointer"
                >
                  <MdOutlinePersonRemoveAlt1 />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* buttonsent */}
        <div className=" col-span-2 ">
          <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
            <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
              {t("common:single.check_availability")}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default CheckAvailability;
