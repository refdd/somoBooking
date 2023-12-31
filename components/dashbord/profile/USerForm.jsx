import CustomTextField from "@/components/hleper/CustomTextField";
import { TextField } from "@mui/material";
import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

function USerForm({ selectedImag }) {
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("+966");
  const { data: session, update } = useSession();
  const router = useRouter();
  const { query } = router;
  const handleOnChange = (value) => {
    setnumber(value);
  };
  const methods = useForm();
  // console.log(session.user);
  useEffect(() => {
    if (session) {
      setFristName(session.user.first_name);
      setLastName(session.user.last_name);
      setEmail(session.user.email);
      setnumber(session.user.phone);
    }
  }, [session]);
  // console.log(session?.user?.accessToken);
  async function updataSession(first_name, last_name, email, phone) {
    await update({
      ...session,
      user: {
        ...session.user,
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
      },
    });
  }
  const onSubmit = async (data) => {
    await axios
      .post(
        "https://new.tourzable.com/api/update_profile",
        {
          first_name: fristName,
          last_name: lastName,
          email: email,
          phone: number,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session?.user?.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        updataSession(
          res.data?.data?.first_name,
          res.data?.data?.last_name,
          res.data?.data?.email,
          res.data?.data?.phone
        );
        // signOut({
        //   callbackUrl: `${window.location.origin}/Login`,
        // });
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log({ ...data, number, aduits, childs, data: dateFormated });
    // router.push("/Thank_you");

    // router.push("/Thank_you");
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className=" grid grid-cols-1 md:grid-cols-2 gap-7 py-3"
        >
          {/* frist name  */}
          <div className="">
            <TextField
              value={fristName}
              placeholder="Mohamed "
              required
              fullWidth
              variant="standard"
              name="firstName"
              label="Frist Name "
              type="text"
              onChange={(e) => {
                setFristName(e.target.value);
              }}
            />
          </div>
          {/* last name   */}
          <div className="">
            <TextField
              value={lastName}
              required
              fullWidth
              variant="standard"
              name="firstName"
              label="last Name "
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          {/* email address  */}
          <div className="">
            <TextField
              value={email}
              required
              fullWidth
              variant="standard"
              name="EmailAddress "
              label="Email Address "
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* Address */}
          <div className="">
            <CustomTextField name="address " label="Address" type={"text"} />
          </div>
          {/*code andnumber */}
          <div className=" mt-2 ">
            <MuiPhoneNumber
              sx={{ "& svg": { height: "20px" } }}
              // slot={{}}
              label="Country Code & Phone Num"
              value={number}
              autoFormat={true}
              fullWidth
              required
              variant="standard"
              defaultCountry="us"
              onChange={handleOnChange}
            />
          </div>
          {/* buttonsent */}
          <div className=" md:col-span-2 ">
            <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
              <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                Edit Information
              </span>
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default USerForm;
