import React from "react";
import { AiOutlineClose, AiOutlineStar } from "react-icons/ai";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FcCheckmark } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";
function OverView({
  min,
  max,
  duration,
  desc,
  includes,
  unincludes,
  board,
  hotel_rate,
  tourCode,
  eligibles,
}) {
  const { t, i18n } = useTranslation();
  return (
    <div id="overview" className="">
      <div className=" border-b pb-4">
        <div className="flex items-center justify-between">
          <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
            {t("common:single.Overview")}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-lg font-sans capitalize text-mainColor font-medium">
              code tour:
            </span>
            <span className="text-sm text-gray-800 ">{tourCode}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 py-4">
          <div className=" flex justify-center  items-center flex-col">
            <HiOutlineUserGroup className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              Group Size
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
              {min}-{max}
            </span>
          </div>
          {hotel_rate && (
            <div className=" flex justify-center items-center flex-col">
              <AiOutlineStar className="text-3xl text-MainYeloow " />
              <span className="text-lg text-mainColor font-sans font-medium capitalize">
                Hotel Rate
              </span>
              <span className="text-[15px] text-gray-500 font-sans capitalize">
                {hotel_rate}
              </span>
            </div>
          )}
          {board && (
            <div className=" flex justify-center items-center flex-col">
              <GiMeal className="text-3xl text-MainYeloow " />
              <span className="text-lg text-mainColor font-sans font-medium capitalize">
                Meals
              </span>
              <span className="text-[15px] text-gray-500 font-sans capitalize">
                {/* {board?.title} */}
                {board}
              </span>
            </div>
          )}

          <div className=" flex justify-center items-center flex-col">
            <BsFillCalendar2WeekFill className="text-3xl text-MainYeloow " />
            <span className="text-lg text-mainColor font-sans font-medium capitalize">
              duration
            </span>
            <span className="text-[15px] text-gray-500 font-sans capitalize">
              {duration}
            </span>
          </div>
        </div>
        {/* overview  */}
        <div className="py-4 border-y flex flex-col space-y-4">
          <div dangerouslySetInnerHTML={{ __html: desc }} className=""></div>
        </div>
        {/* eligibles */}
        {!eligibles?.length == 0 && (
          <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
            <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
              Suitable For
            </p>
            <ul className="flex items-center gap-3 flex-wrap mt-5">
              {eligibles?.map((item) => (
                <li
                  key={item?.id}
                  className="text-sm font-medium font-sans text-gray-600 capitalize hover:text-mainColor transition-all cursor-pointer"
                >
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* price includes  */}
        <div className="flex flex-col gap-4 pt-4 md:flex-row">
          <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
            <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
              {t("common:single.Includes")}
            </p>
            <ul className="flex flex-col space-y-3 py-4">
              {includes?.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <FcCheckmark />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          {!unincludes?.length == 0 && (
            <div className="p-3 bg-gray-50 rounded shadow-md md:flex-1">
              <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
                {t("common:single.excludes")}
              </p>
              <ul className="flex flex-col space-y-3 py-4">
                {unincludes?.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <AiOutlineClose className="text-lg text-red-600" />
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OverView;
