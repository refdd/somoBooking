import { Grid, InputLabel, makeStyles, MenuItem, Select } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import DateRangePicker from "./DateRangePicker";
import { useStateContext } from "../../contexts/ContextProvider";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
function SearcHome({ regions }) {
  const { dateRange, setDateRange } = useStateContext();
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter();
  const { isClicked } = useStateContext();
  const { t, i18n } = useTranslation();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const dateFormated = selectedDate
    ? selectedDate.format("DD-MM-YYYY")
    : selectedDate;
  // console.log(isClicked.typeTour);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log({ ...data, location });

    router.push({
      pathname: "results",
      query: {
        type_id: !isClicked.typeTour ? 1 : isClicked.typeTour,
        region_id: location,
        date: dateFormated,
      },
    });
  };

  return (
    <div className="w-[90%] md:w-[70%] bg-white rounded-md mt-10 mx-auto  md:rounded-[100px] shadow-lg border md:border-0  md:py-3 md:shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row
                  md:divide-x space-y-4 py-5 px-6 md:py-0
                  md:space-y-0 md:items-center md:gap-2"
      >
        <div className=" md:w-[35%] md:px-3">
          <div className="felx flex-col justify-center md:mt-2">
            <InputLabel>{t("common:home.Location")}</InputLabel>
            <Select
              variant="standard"
              value={location}
              fullWidth
              onChange={(e) => setLocation(e.target.value)}
              renderValue={(selected) => {
                if (selected?.length === 0) {
                  return (
                    <em className="text-gray-500 my-4 capitalize">
                      {t("common:home.Location")}
                    </em>
                  );
                }
                const reasit = regions.filter((item) => item.id == selected);
                // console.log(reasit[0].title);
                return reasit[0].title;
              }}
              displayEmpty
            >
              <MenuItem disabled value="">
                <em>{t("common:home.Location")}</em>
              </MenuItem>
              {regions?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="md:w-[35%] md:px-3">
          <div className="  md:col-span-2">
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      variant: "standard",
                      fullWidth: true,
                      label: t("common:list.Choose_Date"),
                    },
                  }}
                />
              </LocalizationProvider>
            </ThemeProvider>
          </div>
        </div>
        <div
          className="  group flex gap-1 justify-center transition-all items-center bg-secondColor
         hover:md:bg-mainLightColor rounded py-5   md:flex-1  md:px-3 md:h-12 md:rounded-[100px] "
        >
          <BiSearch className="text-white text-lg" />
          <button className="text-lg text-white font-sans  font-medium">
            {t("common:home.Search")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearcHome;
