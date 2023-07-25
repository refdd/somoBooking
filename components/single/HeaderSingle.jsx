import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsArrowUpRight, BsStarFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

function HeaderSingle({ title, location, price, starNumber, reviews_count }) {
  const { t, i18n } = useTranslation();
  // may useing array from
  const stars = Array.from({ length: starNumber }, (_, i) => (
    <BsStarFill key={i} />
  ));
  const router = useRouter();
  const { currency } = router.query;
  // __ this way using map function
  // const stars = new Array(numStars).fill().map((_, i) => (
  //   <BsStarFill key={i} />
  // ));
  return (
    <div className="container mx-auto px-4 mt-9">
      {/* titel and rating */}
      <div className="flex items-center gap-4 flex-wrap">
        <p className="text-2xl text[#051036] font-sans font-semibold capitalize ">
          {title}
        </p>
        <div className="flex  gap-2 text-MainYeloow text-sm">{stars}</div>
        {/* rating*/}
        <div className=" flex items-center gap-2">
          <span className="h-[30px] w-[30px] bg-MainYeloow font-semibold  text-white rounded flex justify-center items-center">
            {starNumber}
          </span>
          <span className="text-[#051036] font-medium font-sans text-sm ">
            {t("common:home.Exceptional")}
          </span>
          <span className="text-[#697488] text-sm font-sans font-medium ">
            {reviews_count} {t("common:list.reviews")}
          </span>
        </div>
      </div>
      {/* location */}
      <div className="flex flex-col gap-3  mt-3 md:flex-row md:justify-between">
        <div className="flex items-center gap-2  flex-wrap ">
          <div className="flex items-start gap-1 ">
            <ImLocation2 className=" text-[#697488] text-[16px] " />
            <p className="text-[#697488] text-[16px] font-sans capitalize">
              {location}
            </p>
          </div>
        </div>
        {/* price */}
        <div className="flex items-center gap-4 ">
          <p className="text-sm text-[#051036] font-sans uppercase ">
            From{" "}
            <span className="font-medium text-[22px] ">
              {" "}
              {currency ? (currency == "SAR" ? "SAR" : "$") : "$"}{" "}
              {Math.floor(price)}
            </span>
          </p>
          {/* <div className="flex justify-start items-center gap-2 font-medium text-[15px] rounded bg-mainColor text-white h-14 px-6 ">
            <button>Select Room </button>
            <BsArrowUpRight />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeaderSingle;
