import AlertSuccess from "@/components/hleper/AlertSuccess";
import CustomTextField from "@/components/hleper/CustomTextField";
import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaAngleRight } from "react-icons/fa";

function FormEditePearsonInfo({
  idBooking,
  allBookingPersons,
  traveler,
  bookingPeople,
  dataEditePerson,
  handleCloseEditeBooking,
}) {
  const [showForm, setShowForm] = useState(false);
  const [namePerson, setNamePerson] = useState(dataEditePerson?.name);
  const [emailPerson, setEmailperson] = useState(dataEditePerson?.email);
  const [idNumberPerson, setIdNumberPerson] = useState(
    dataEditePerson?.id_number
  );
  const [passportPerson, setPassportPerson] = useState(
    dataEditePerson?.passport
  );
  const [open, setOpen] = useState(false);
  const methods = useForm();
  const { reset } = methods;
  const handleClickAlert = () => {
    setOpen(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = async (data) => {
    await axios
      .post(
        `https://new.tourzable.com/api/people/${dataEditePerson?.id}`,
        {
          name: namePerson,
          email: emailPerson,
          id_number: idNumberPerson,
          passport: passportPerson,
          booking_id: idBooking,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        reset();
        allBookingPersons();
        handleCloseEditeBooking();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <div className=" flex items-center justify-between">
        <div className="flex justify-center items-center my-5 py-2 px-5 bg-mainColor cursor-pointer rounded-lg  md:w-fit md:hover:scale-105">
          <button
            onClick={() => {
              setShowForm(!showForm);
            }}
            className="text-[16px] font-sans font-semibold capitalize text-white"
          >
            edite Traveler Info
          </button>
        </div>
        <div className="flex justify-center items-center my-5 py-2 px-5 bg-mainColor cursor-pointer rounded-lg  md:w-fit md:hover:scale-105">
          <button
            onClick={() => {
              handleCloseEditeBooking(!showForm);
            }}
            className="text-[16px] font-sans font-semibold capitalize text-white"
          >
            back
          </button>
          <FaAngleRight className="text-xl  text-white ml-3" />
        </div>
      </div>
      {/* from add P */}

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className=" grid grid-cols-1 gap-5"
        >
          <div className="">
            <TextField
              value={namePerson}
              placeholder="Mohamed"
              required
              fullWidth
              variant="standard"
              name="name"
              label="Name"
              type="text"
              onChange={(e) => {
                setNamePerson(e.target.value);
              }}
            />
          </div>
          <div className="">
            <TextField
              value={emailPerson}
              required
              fullWidth
              variant="standard"
              name="email"
              label="Email"
              type="email"
              onChange={(e) => {
                setEmailperson(e.target.value);
              }}
            />
          </div>
          {/* <div className="">
            <TextField
              value={idNumberPerson}
              required
              fullWidth
              variant="standard"
              name="id_number"
              label="Id Number"
              type="number"
              onChange={(e) => {
                setIdNumberPerson(e.target.value);
              }}
            />
          </div> */}
          <div className="">
            <TextField
              value={passportPerson}
              fullWidth
              variant="standard"
              name="passport"
              label="Passport Number"
              type="number"
              onChange={(e) => {
                setPassportPerson(e.target.value);
              }}
            />
          </div>
          {/* buttonsent */}
          <div className=" mt-4  ">
            <button className="flex justify-center items-center py-4 bg-mainColor rounded-md cursor-pointer w-full">
              <span className="text-[16px] font-medium text-white font-sans capitalize text-center">
                send
              </span>
            </button>
          </div>
        </form>
      </FormProvider>

      <AlertSuccess
        open={open}
        handleClick={handleClickAlert}
        handleClose={handleCloseAlert}
        message={"no traveler to add "}
      />
    </div>
  );
}

export default FormEditePearsonInfo;
