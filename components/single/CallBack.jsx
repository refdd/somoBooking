import { Button, TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number-2";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function CallBack() {
  const [fullName, setFullName] = useState("");
  const [Nationality, setNationality] = useState("");
  const [number, setnumber] = useState("+966");
  const { t, i18n } = useTranslation();
  const handleChangeNumber = (value) => {
    setnumber(value);
  };
  const methods = useForm();
  return (
    <div>
      <FormProvider {...methods}>
        <form>
          <div className="grid grid-cols-1 gap-4  md:gap-y-4 md:gap-x-4 px-4 py-3">
            {/* frist name  */}
            <div className="">
              <p className="text-lg font-medium capitalize text-gray-800 font-sans text-center">
                Fill out the following steps and we will contact you immediately
              </p>
            </div>
            <div className="">
              <TextField
                value={fullName}
                required
                fullWidth
                variant="outlined"
                name="firstName"
                label="fullName"
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className="">
              <TextField
                value={Nationality}
                required
                fullWidth
                variant="outlined"
                name="firstName"
                label="Nationality"
                type="text"
                onChange={(e) => {
                  setNationality(e.target.value);
                }}
              />
            </div>
            {/*code andnumber */}
            <div className=" md:mt-2 ">
              <MuiPhoneNumber
                sx={{ "& svg": { height: "0.7em" } }}
                // slot={{}}
                label={t("common:single.code_number")}
                value={number}
                autoFormat={true}
                fullWidth
                required
                variant="outlined"
                defaultCountry="us"
                onChange={handleChangeNumber}
              />
            </div>
            <div className="">
              <Button
                variant="contained"
                className="text-mainColor"
                color="warning"
                fullWidth
              >
                Contact now
              </Button>
            </div>
            <div className="">
              <Button variant="contained" className="text-mainColor" fullWidth>
                Contact a trip advisor
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default CallBack;
