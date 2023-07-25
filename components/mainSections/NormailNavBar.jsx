import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLogo from "../../public/assets/images/The-Logo.png";
import DarkLogo from "../../public/assets/images/logo-dark.svg";
import { BiUserCircle } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserNav from "../hleper/UserNav";
import SlectedLanguage from "../hleper/SlectedLanguage";
import ChangeCurrency from "../hleper/ChangeCurrency";
import { useTranslation } from "react-i18next";
function NormailNavBar({ InSinglePage }) {
  const [menuBar, setMenuBar] = useState(false);
  const handelMenubar = () => {
    setMenuBar(!menuBar);
  };
  const { data: session } = useSession();
  const { t, i18n } = useTranslation();
  return (
    <div className="fixed top-0 left-0  w-full z-[10000]">
      <div className="flex flex-col">
        <div
          className={`flex items-center justify-between transition-all px-3 py-4 md:py-2 bg-[#051036]  ${
            menuBar ? "bg-white" : ""
          }  `}
        >
          <div className=" flex items-center gap-5">
            {/* logo */}
            <Link href={"/"}>
              <div className=" relative w-[134px] h-[34px] md:h-[50px] md:w-[224px] flex items-center ">
                {menuBar ? (
                  <Image
                    src={NavLogo}
                    loading={"lazy"}
                    alt="logo"
                    fill
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                  />
                ) : (
                  <Image
                    src={NavLogo}
                    fill
                    loading={"lazy"}
                    alt="logo"
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                  />
                )}
              </div>
            </Link>
            {/* links desktop */}
            <ul className={` hidden  md:flex items-center  `}>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link legacyBehavior href={"/"}>
                  Home
                </Link>
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link href={"/packages"}>Packages</Link>
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link href={"/activities"}> Activities</Link>
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link href={"/umrah"}> Umrah Plus</Link>
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link href={"/LandMarks"}>
                  <span>Landmarks</span>
                </Link>
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link href={"tour_guides"}>
                  <span>Tour Guides</span>
                </Link>
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <Link href={"/Saudi-travel-blog"}>Saudi Travel Blog</Link>
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <SlectedLanguage isTop={false} />
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <ChangeCurrency InSinglePage isTop={false} />
              </li>
              <li className=" text-sm text-[#051036]  font-semibold font-sans hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
                <Link href={"/customize-your-trip"}>
                  <span className="py-1 px-1 rounded-lg flex items-center justify-center bg-white">
                    {t("common:home.Customize_trip")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* button distop */}
          <div className=" hidden md:flex items-center gap-3">
            {session ? (
              <UserNav />
            ) : (
              <div
                className={`group h-[50px] border transition-all  px-7 rounded-md flex items-center justify-cente 
                    
                hover:bg-white border-white
                `}
              >
                <Link href={"/Login"}>
                  <p
                    className={` transition-all   text-sm cursor-pointer 
                        
                       text-white group-hover:text-[#051036] 
                 `}
                  >
                    Sign In / Register
                  </p>
                </Link>
              </div>
            )}
          </div>
          {/* user and menu bar */}
          <div className="flex md:hidden items-center gap-2">
            {/* icon user */}
            {session ? (
              <UserNav />
            ) : (
              <Link href={"/Login"}>
                <BiUserCircle
                  size={30}
                  className={` transition-all hover:text-[#0a58ca] cursor-pointer ${
                    menuBar ? "text-gray-700 " : "text-white"
                  }`}
                />{" "}
              </Link>
            )}
            <CgMenuLeftAlt
              onClick={handelMenubar}
              size={30}
              className={` cursor-pointer transition-all ${
                menuBar ? "text-gray-700" : "text-white"
              }`}
            />
          </div>
        </div>
        {/* menu links  */}
        <ul
          className={` ${
            menuBar ? "flex" : "hidden"
          }  flex-col p-6 bg-white border-y`}
        >
          <li className=" text-sm text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link legacyBehavior href={"/"}>
              Home
            </Link>
          </li>
          <li className=" text-sm text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link href={"/packages"}>Packages</Link>
          </li>
          <li className=" text-sm text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link href={"/activities"}> Activities</Link>
          </li>
          <li className=" text-sm text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link href={"/umrah"}> Umrah Plus</Link>
          </li>
          <li className=" text-sm text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link href={"/LandMarks"}>
              <span>Landmarks</span>
            </Link>
          </li>
          <li className=" text-sm text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link href={"/Saudi-travel-blog"}>Saudi Travel Blog</Link>
          </li>
          {/* <li className=" text-sm text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
            <Link href={"/visa"}>
              <span>E-Visa</span>
            </Link>
          </li> */}
          <li className=" text-sm text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/customize-your-trip"}>
              <span className="py-1 px-1 rounded-lg flex items-center justify-center bg-white">
                {t("common:home.Customize_trip")}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NormailNavBar;
