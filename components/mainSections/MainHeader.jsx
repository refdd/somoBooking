import React from "react";
import DestinationsBox from "../hleper/DestinationsBox";
import HeaderVideo from "../parts/HeaderVideo";
import MainSearch from "../parts/MainSearch";
import MainNavBar from "./MainNavBar";
import { useTranslation } from "react-i18next";

function MainHeader({ regions }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative ">
      <HeaderVideo />
      <MainNavBar />

      {/* header contnet */}
      <div className="absolute top-[97%] md:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  ">
        <p className="text-center text-xl text-white font-sans font-semibold md:text-5xl">
          {t("common:home.HeaderHome")}
        </p>
        <p className=" text-sm text-center text-white font-sans mt-2 md:mt-5 md:text-xl mb-10 md:mb-0">
          {t("common:home.homeDesc")}
        </p>
        <MainSearch regions={regions} />
      </div>
    </div>
  );
}

export default MainHeader;
