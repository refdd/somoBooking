import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import bg from "../../public/assets/images/passport.jpg";
import CustomTextField from "../hleper/CustomTextField";
import { TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number-2";
import NationalityInput from "./NationalityInput";
const nationalityOptions = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  // Add more nationality options here
];
function FromPassportApp() {
  const methods = useForm();
  const [profilePicture, setProfilePicture] = useState();
  const [passportImage, setPassportImage] = useState();
  const [number, setnumber] = useState("+1");

  const handlePassportImage = (event) => {
    setPassportImage(event.target.files[0]);
  };
  const handlepPicture = (event) => {
    setProfilePicture(event.target.files[0]);
  };
  const handlePhoneNumber = (value) => {
    setnumber(value);
  };
  const [nationality, setNationality] = useState("");

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={
        " relative overflow-hidden  bg-center  w-full bg-no-repeat  bg-cover  py-20 mt-10"
      }
    >
      <div className={"container mx-auto px-4 md:w-[40%] "}>
        <FormProvider {...methods}>
          <form className="border rounded-md py-4 px-5 shadow-xl bg-white bg-opacity-[0.6]">
            <p className="text-lg font-sans font-medium text-mainColor">
              Passport Application
            </p>
            <div className="grid grid-cols-1 gap-5 ">
              {/* name  */}
              <div className="">
                <CustomTextField
                  required
                  name="name"
                  label="full Name"
                  type={"text"}
                />
              </div>
              {/* Email Address  */}
              <div className="">
                <CustomTextField
                  required
                  name="email"
                  label="username@email.com"
                  type={"text"}
                />
              </div>
              <div className="">
                <NationalityInput
                  value={nationality}
                  onChange={handleNationalityChange}
                  nationalityOptions={nationalityOptions}
                />
              </div>
              {/* phone number */}
              <div className=" ">
                <MuiPhoneNumber
                  sx={{ "& svg": { height: "0.7em" } }}
                  // slot={{}}
                  label="Persons Number"
                  value={number}
                  autoFormat={true}
                  fullWidth
                  required
                  variant="standard"
                  defaultCountry="us"
                  onChange={handlePhoneNumber}
                />
              </div>
              {/* Upload user Picture  */}
              <div className="">
                <p className="text-sm font-sans capitalize text-gray-700">
                  Upload user Picture
                </p>
                <TextField
                  id="outlined-basic"
                  variant="standard"
                  type="file"
                  fullWidth
                  inputProps={{
                    multiple: true,
                  }}
                  onChange={handlepPicture}
                />
              </div>
              {/*Upload passport Image*/}
              <div className="">
                <p className="text-sm font-sans capitalize text-gray-700">
                  Upload passport Image
                </p>
                <TextField
                  id="outlined-basic"
                  variant="standard"
                  fullWidth
                  type="file"
                  onChange={handlePassportImage}
                  inputProps={{
                    multiple: true,
                  }}
                />
              </div>
              {/* buttonsent */}
              <div className=" ">
                <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
                  <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                    send
                  </span>
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default FromPassportApp;
