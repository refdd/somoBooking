import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import {
  BsApple,
  BsFacebook,
  BsFillEnvelopeFill,
  BsGooglePlay,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { useForm, FormProvider } from "react-hook-form";
import { MdLocationPin } from "react-icons/md";
import footerLoge from "../../public/assets/images/The-Logo.png";
import mada from "../../public/assets/images/mada.webp";
import visa from "../../public/assets/images/master.png";
import master from "../../public/assets/images/visa.png";
import ma3rof from "../../public/assets/images/ma3rof.png";
import min from "../../public/assets/images/min.png";
import Link from "next/link";
import axios from "axios";
import AlertSuccess from "../hleper/AlertSuccess";
function Footer() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
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
    <div className="container mx-auto px-4 md:px-10 bg-mainColor">
      <AlertSuccess
        handleClose={handleClose}
        handleClick={handleClick}
        open={open}
        message={"This is a success message!"}
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pt-6 pb-4 md:pt-11">
        <div className=" md:col-span-1">
          <div className=" flex flex-col space-y-16 py-7">
            {/*  */}
            <div className=" flex flex-col space-y-7">
              {/* logo footer */}
              <div className="relative  w-[256px] h-[53px] md:w-[373px]  md:h-[90px]   bg-white p-73 rounded ">
                {/* <Image
                  src={footerLoge}
                  fill
                  loading="lazy"
                  alt="footer loge "
                  className=""
                  sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                /> */}
              </div>
              <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-10">
                {/* coll and support */}
                <div className="flex flex-col space-y-1 ">
                  <span className="text-white text-[14px] capitalize font-sans">
                    call us
                  </span>
                  <span className="text-lg text-white font-medium  ">
                    2050129551
                  </span>
                  <span className="text-lg text-white font-medium  ">
                    310584566400003
                  </span>
                </div>
                {/* coll and support */}
                <div className="flex flex-col space-y-1">
                  <span className="text-white text-[14px] capitalize font-sans">
                    Need live support?
                  </span>
                  <span className="text-lg text-white font-medium  ">
                    Sales@Tourzable.Coms
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-white text-[16px] font-sans font-medium capitalize">
                Your all-in-one travel app
              </p>
              <div className="flex items-center gap-5 text-white text-lg">
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/tourzable"}
                >
                  <BsFacebook />
                </Link>
                <Link target="_blank" href={"https://twitter.com/tourzableksa"}>
                  <BsTwitter />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/tourzable/"}
                >
                  <BsInstagram />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/tourzable-ksa-13b4a7201/"}
                >
                  <BsLinkedin />
                </Link>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 ">
            {/* Tourzable */}
            <div className="pt-5">
              <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
                Tourzable
              </p>
              <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/AboutUs"}>
                    <span>About Us</span>
                  </Link>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/visa"}>
                    <span>E-Visa</span>
                  </Link>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/Privacy"}>
                    <span>Privacy</span>
                  </Link>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/Terms-conditions"}>
                    <span>Terms & Conditions</span>
                  </Link>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/cancellation-policy"}>
                    <span>Cancellation Policy</span>
                  </Link>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/contact-us"}>
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/FAQ"}>
                    <span>FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* support */}
            <div className=" pt-5">
              <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
                Dashboard
              </p>
              <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/tour_guides_register"}>
                    <span>Tour Guide Registration</span>
                  </Link>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <Link href={"/Passport_application"}>
                    <span>Passport application</span>
                  </Link>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <span>Agency</span>
                </li>
                <li className=" hover:text-gray-800 transition-all">
                  <span>DMC</span>
                </li>
                <li className=" hover:text-gray-800 transition-all ">
                  <p className="text-[16px] text-white font-medium capitalize font-sans">
                    Ways You Can Pay
                  </p>
                </li>
                <li className=" hover:text-gray-800 transition-all ">
                  <div className="flex flex-row gap-3 ">
                    <Image
                      src={mada}
                      width={90}
                      height={90}
                      alt="mada"
                      className=""
                    />
                    <Image
                      src={visa}
                      width={50}
                      height={50}
                      alt="mada"
                      className=""
                    />
                    <Image
                      src={master}
                      width={50}
                      height={50}
                      alt="mada"
                      className=""
                    />
                  </div>
                </li>
              </ul>
            </div>
            {/* support */}
            <div className=" pt-5">
              <p className="text-white text-[16px] font-sans font-medium capitalize border-white">
                Contact Us
              </p>
              <ul className="flex flex-col space-y-7 pt-2 text-white text-[16px] font-sans capitalize">
                <Link href="tel:0564445507">
                  <li className=" hover:text-gray-800 transition-all flex items-center gap-3">
                    <AiFillPhone className="text-lg text-white" />
                    <span>0564445507</span>
                  </li>
                </Link>

                <li className=" hover:text-gray-800 transition-all flex items-center gap-3">
                  <MdLocationPin className="text-lg text-white" />
                  <span>Eastern Province</span>
                </li>
                <Link href="mailto:Sales@Tourzable.Com">
                  <li className=" hover:text-gray-800 transition-all flex items-center gap-3">
                    <BsFillEnvelopeFill className="text-lg text-textPurple" />
                    <span> Sales@Tourzable.Com</span>
                  </li>
                </Link>
                <li className=" hover:text-gray-800 transition-all flex items-center gap-3">
                  <div className="flex flex-col ">
                    <Link href={"https://maroof.sa/businesses/details/126288"}>
                      <Image
                        src={ma3rof}
                        width={90}
                        height={90}
                        alt="mada"
                        className=""
                      />
                    </Link>

                    <Image
                      src={min}
                      width={100}
                      height={90}
                      alt="mada"
                      className=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
