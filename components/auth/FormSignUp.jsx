import Link from "next/link";
import React, { useState } from "react";
import CustomTextField from "../hleper/CustomTextField";
import { useForm, FormProvider, Controller } from "react-hook-form";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import SignInBY from "./SignInBY";
import axios from "axios";
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
const resolver = yupResolver(schema);
function FormSignUp() {
  const [number, setnumber] = useState("+1");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();
  const { query } = router;
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const methods = useForm({ resolver });
  const { handleSubmit, control } = methods;
  const handleOnChange = (value) => {
    setnumber(value);
  };
  const onSubmit = (data) => {
    axios
      .post(
        "https://andrewromany.pythonanywhere.com/accounts/register/",
        {
          ...data,
          phone_number: number,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setError(false);
        // router.push("/Login", { query: { email: data.email } });
        router.push({
          pathname: "/Login",
          query: {
            email: data.email,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
      });
  };
  return (
    <div className="bg-[#e5f0fd] py-11 ">
      <div className="container mx-auto px-4 md:w-[40%] bg-white shadow-lg rounded-md">
        <div className="py-4 px-3 ">
          {/* header form  */}
          <div className="flex flex-col space-y-4 ">
            <p className="text-[22px] font-medium capitalize font-sans text-mainColor ">
              Sign in or create an account
            </p>
            <p className="text-[16px] text-[#697488] font-sans capitalize">
              Already have an account?{" "}
              <Link href={"/Login"}>
                <span className="text-mainColor font-medium cursor-pointer underline">
                  Log in
                </span>
              </Link>
            </p>
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6 mt-7 md:grid-cols-2 md:gap-10"
            >
              {/* frist name  */}
              <div className="">
                <CustomTextField
                  required
                  name="first_name"
                  label="Frist Name "
                  type={"text"}
                />
              </div>
              {/* last name */}
              <div className="">
                <CustomTextField
                  required
                  name="last_name"
                  label="Last Name "
                  type={"text"}
                />
              </div>
              {/*email address */}
              <div className=" ">
                <CustomTextField
                  erroStatus={error?.email ? true : false}
                  textErroe={error?.email ? error?.email[0] : ""}
                  required
                  name="email"
                  label="Email Address"
                  type="email"
                />
                {/* {error?.email[0]} */}
              </div>
              {/*code andnumber */}
              <div className=" mt-2 ">
                <MuiPhoneNumber
                  sx={{ "& svg": { height: "16px" } }}
                  // slot={{}}
                  label="Country Code & Phone Num"
                  value={number}
                  autoFormat={true}
                  fullWidth
                  required
                  variant="standard"
                  defaultCountry="us"
                  onChange={handleOnChange}
                  error={error?.phone ? true : false}
                  helperText={error?.phone ? error?.phone[0] : ""}
                />
                {/* {error?.phone[0]} */}
              </div>
              {/* password */}
              <div className="">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      type={showPassword ? "text" : "password"}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <div onClick={handleTogglePasswordVisibility}>
                              {showPassword ? (
                                <VisibilityIcon className="cursor-pointer" />
                              ) : (
                                <VisibilityOffIcon className="cursor-pointer" />
                              )}
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </div>
              {/* confirm password */}
              <div className="">
                <Controller
                  name="password_confirmation"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Confirm Password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      type={showPassword ? "text" : "password"}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : ""}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <div onClick={handleTogglePasswordVisibility}>
                              {showPassword ? (
                                <VisibilityIcon className="cursor-pointer" />
                              ) : (
                                <VisibilityOffIcon className="cursor-pointer" />
                              )}
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </div>
              {/* buttonsent */}
              <div className=" md:col-span-2 ">
                <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
                  <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                    Register
                  </span>
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
        <SignInBY />
      </div>
    </div>
  );
}

export default FormSignUp;
