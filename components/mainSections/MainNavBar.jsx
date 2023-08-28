import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLogo from "../../public/assets/images/newlogo.png";
import { BiUserCircle } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import Link from "next/link";
import DestinationsBox from "../hleper/DestinationsBox";
import DestinationsTree from "../hleper/DestinationsTree";
import { useTranslation, useSSR } from "react-i18next";
import { useStateContext } from "@/contexts/ContextProvider";
import SlectedLanguage from "../hleper/SlectedLanguage";
import { useSession } from "next-auth/react";
import UserNav from "../hleper/UserNav";
import ChangeCurrency from "../hleper/ChangeCurrency";

function MainNavBar() {
  const [menuBar, setMenuBar] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const { setDirection } = useStateContext();
  const { t, i18n } = useTranslation();
  const { data: session } = useSession();
  function toggleScroll() {
    const body = document.querySelector("body");

    if (disableScroll) {
      body.classList.remove("overflow-hidden");
    } else {
      body.classList.add("overflow-hidden");
    }

    setDisableScroll(!disableScroll);
  }
  const handelMenubar = () => {
    setMenuBar(!menuBar);
    toggleScroll();
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });
  }, []);

  return (
    <div className="fixed top-0 left-0  w-full z-[10000]">
      <div className="flex flex-col">
        <div
          className={`grid grid-cols-2 md:grid-cols-7 items-center justify-between transition-all px-3 py-4 md:py-2  ${
            menuBar ? "bg-white" : ""
          } ${!isTop ? "bg-[#FFF]" : " bg-white  md:bg-transparent"} `}
        >
          <div className=" flex items-center gap-5 md:col-span-6">
            {/* logo */}
            <div className="">
              <Link href={"/"}>
                <div className=" relative  sm:h-[50px] w-[224px] md:w-[150px] md:h-[80px] flex items-center ">
                  {menuBar ? (
                    ""
                  ) : (
                    <Image
                      src={NavLogo}
                      width={135}
                      height={40}
                      loading={"lazy"}
                      alt="logo"
                      sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                      className="object-contain"
                    />
                  )}
                </div>
              </Link>
            </div>
            {/* <MyComponent /> */}
            {/* links desktop */}
            <ul className={` hidden  lg:flex items-center  `}>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link legacyBehavior href={"/"}>
                  {t("common:home.home")}
                </Link>
              </li>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/packages"}>{t("common:home.package")}</Link>
              </li>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/activities"}> {t("common:home.actives")}</Link>
              </li>
              {/* <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/umrah"}>{t("common:home.umrah")}</Link>
              </li> */}
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/LandMarks"}>
                  <span>{t("common:home.landMarks")}</span>
                </Link>
              </li>
              <li
                className={`  group/des  text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <span>{t("common:home.destinations")}</span>
                <DestinationsBox />
              </li>
              <li
                className={`  group/des  text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"tour_guides"}>tour guides</Link>

                <DestinationsBox />
              </li>
              <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"Saudi-travel-blog"}>{t("common:home.blog")}</Link>
              </li>
              {/* <li
                className={` text-sm   font-semibold font-sans py-4  hover:bg-[#3554d10d] px-2  ${
                  !isTop ? "text-[#051036]" : "text-[#fff]"
                } `}
              >
                <Link href={"/visa"}>
                  <span>E-Visa</span>
                </Link>
              </li> */}
              <li className=" text-sm   font-semibold font-sans   hover:bg-[#3554d10d] px-2">
                <Link href={"/customize-your-trip"}>
                  <span className="py-1 px-1 rounded-lg flex items-center justify-center bg-white">
                    {t("common:home.Customize_trip")}{" "}
                  </span>
                </Link>
              </li>
              <li className=" text-sm   font-semibold font-sans   hover:bg-[#3554d10d] px-2">
                <SlectedLanguage isTop={isTop} />
              </li>
              <li className=" text-sm text-[#fff]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2">
                <ChangeCurrency isTop={isTop} />
              </li>
            </ul>
          </div>
          {/* button distop */}
          <div className=" hidden lg:flex items-center gap-3 md:col-span-1">
            {session ? (
              <UserNav />
            ) : (
              <div
                className={`group h-[50px] border transition-all  px-7 rounded-md flex items-center justify-cente ${
                  !isTop
                    ? " border-[#051036] hover:bg-[#3554d1] "
                    : "hover:bg-white border-white"
                }  `}
              >
                <Link href={"/Login"}>
                  <p
                    className={` transition-all   text-sm cursor-pointer ${
                      !isTop
                        ? "text-[#051036] group-hover:text-[#FFFF]  "
                        : "text-white group-hover:text-[#051036] "
                    } `}
                  >
                    Sign In / Register
                  </p>
                </Link>
              </div>
            )}
          </div>
          {/* user and menu bar */}
          <div className="flex lg:hidden items-center gap-2 justify-end">
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
                menuBar || !isTop
                  ? "text-gray-700"
                  : "  text-gray-700 md:text-white"
              }`}
            />
          </div>
        </div>
        {/* menu links  */}
        <ul
          className={` ${
            menuBar ? "flex" : "hidden"
          }  lg:hidden flex-col p-6 bg-white border-y overflow-y-auto h-screen pb-40 `}
        >
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link legacyBehavior href={"/"}>
              Home
            </Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/packages"}>Packages</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/activities"}> Activities</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/umrah"}> Umrah Plus</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/LandMarks"}>
              <span>Landmarks</span>
            </Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <DestinationsTree />
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/Saudi-travel-blog"}>Saudi Travel Blog</Link>
          </li>
          {/* <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/visa"}>
              <span>E-Visa</span>
            </Link>
          </li> */}

          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
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

export default MainNavBar;
