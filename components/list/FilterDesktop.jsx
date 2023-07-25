import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Rating,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { BiSearch } from "react-icons/bi";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function FilterDesktop({ regions }) {
  const [priceRang, setpriceRang] = useState([10, 6666790]);
  const [location, setLocation] = useState([]);
  const [search, setSearch] = useState();
  const [daysCounter, setDaysCounter] = useState();
  const [nameOfpackage, setnameOfpackage] = useState();
  const [starNumber, setstarNumber] = React.useState(4);
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const path = router.pathname;
  const { query } = router;
  const methods = useForm();
  const handleDestination = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChange = (event, newValue) => {
    setpriceRang(newValue);
  };
  const handlePlace = (e) => {
    setnameOfpackage(e.target.value);
  };

  const onSubmit = (data) => {
    router.push({
      pathname: path,
      query: {
        search: search,
        days_count: daysCounter,
        location: location,
        price_range_from: priceRang[0],
        price_range_to: priceRang[1],
      },
    });
    // console.log({
    //   ...data,
    //   location,
    //   minPrice: priceRang[0],
    //   maxPrice: priceRang[1],
    //   starNumber,
    // });
  };
  // console.log(location);
  return (
    <div className="container mx-auto px-4 pt-7">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col space-y-5"
        >
          {/* search */}
          <div className="">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              {t("common:list.searchList")}
            </p>
            <div className=" py-6 border-b">
              <TextField
                value={search}
                placeholder=""
                required
                fullWidth
                variant="standard"
                name="search"
                label={t("common:list.SearchEx")}
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          {/* deals */}
          <div className=" flex flex-col space-y-3">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              {t("common:list.Start_Point")}
            </p>
            <div className="">
              <FormControl variant="standard" fullWidth sx={{}}>
                <InputLabel id="demo-multiple-checkbox-label">
                  {t("common:home.Location")}
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={location}
                  onChange={handleDestination}
                  renderValue={(selected) => {
                    const result = [];

                    for (let i = 0; i < selected.length; i++) {
                      for (let j = 0; j < regions.length; j++) {
                        if (selected[i] === regions[j].id) {
                          result.push(regions[i].title);
                        }
                      }
                    }
                    // console.log(result?.join(", "));
                    return result?.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  {regions.map((des) => (
                    <MenuItem key={des.id} value={des.id}>
                      <Checkbox checked={location.indexOf(des.id) > -1} />
                      <ListItemText primary={des.title} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          {/* Popular Filters */}
          <div className="">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              {t("common:list.Number_Days")}
            </p>
            <ul className=" flex flex-col space-y-1  py-5  border-b">
              <li className="flex items-center justify-between">
                <div className="">
                  {/* <TextField
                    label="Days number"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "25ch" }}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {" "}
                          ex: 6 days
                        </InputAdornment>
                      ),
                    }}
                  /> */}

                  <TextField
                    value={daysCounter}
                    placeholder=""
                    required
                    fullWidth
                    variant="standard"
                    name="days"
                    label={t("common:list.days_Number")}
                    type="number"
                    onChange={(e) => {
                      setDaysCounter(e.target.value);
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
          {/* Nightly Price */}
          <div className="">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              {t("common:list.Price_Range")}
            </p>
            <div className="flex flex-col space-y-1  py-5  border-b">
              <Typography id="range-slider" gutterBottom>
                ${priceRang[0]} - ${priceRang[1]}
              </Typography>
              <Slider
                value={priceRang}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={840}
                sx={{
                  "& .MuiSlider-thumb": {
                    color: "#445cdc",
                  },
                  "& .MuiSlider-track": {
                    color: "#FFD440",
                  },
                  "& .MuiSlider-rail": {
                    color: "#acc4e4",
                  },
                  "& .MuiSlider-active": {
                    color: "green",
                  },
                }}
              />
            </div>
          </div>
          {/*  */}
          {/* Nightly Price */}
          {/* <div className=" flex flex-col space-y-3">
            <p className=" font-medium text-lg text-mainColor font-sans capitalize ">
              {t("common:list.Star_Rating")}
            </p>

            <Rating
              name="simple-controlled"
              value={starNumber}
              onChange={(event, newValue) => {
                setstarNumber(newValue);
              }}
            />
          </div> */}
          {/* button Search */}
          <div
            className="flex justify-center items-center gap-1
         bg-mainColor rounded py-3 text-white text-lg transition-all hover:bg-[#051036] hover:text-white"
          >
            <BiSearch className="" />
            <button>{t("common:home.Search")}</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default FilterDesktop;
