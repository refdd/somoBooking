import React, { useState } from "react";
import CheckAvailability from "./CheckAvailability";
import Inquery from "./Inquery";
import { useTranslation } from "react-i18next";
import CallBack from "./CallBack";

function From({
  idPackage,
  image,
  title,
  tourCode,
  best_price,
  min,
  max,
  payMode,
}) {
  const [openFrom, setOpenFrom] = useState(true);
  const { t, i18n } = useTranslation();
  return (
    <div className="container mx-auto px-4 pb-8 h-full " id="InquireFrom">
      <div className=" bg-gray-50 rounded py-4 md:sticky md:top-14 ">
        <div className="flex items-center gap-2 py-2 px-4 border-b-2  ">
          <div
            onClick={() => {
              setOpenFrom(false);
            }}
            className={`flex items-center justify-center  py-2 px-5 rounded shadow-xl w-[50%]
             ${
               openFrom
                 ? " bg-white  text-textPurple"
                 : "text-white bg-mainColor "
             }`}
          >
            <button className="text-[16px]  font-sans font-medium capitalize">
              {/* {t("common:single.Inquiry")} */}
              contact wiht us
            </button>
          </div>
          <div
            onClick={() => {
              setOpenFrom(true);
            }}
            className={`flex items-center justify-center   py-2 px-5 rounded shadow-xl ${
              openFrom
                ? "bg-MainYeloow text-white"
                : "bg-white  text-textPurple"
            } `}
          >
            <button className="text-[16px]  font-sans font-medium capitalize">
              {t("common:single.check_availability")}
            </button>
          </div>
        </div>
        {openFrom ? (
          <CheckAvailability
            idPackage={idPackage}
            image={image}
            title={title}
            tourCode={tourCode}
            best_price={best_price}
            min={min}
            max={max}
            payMode={payMode}
          />
        ) : (
          // <Inquery idPackage={idPackage} min={min} />
          <CallBack />
        )}
      </div>
    </div>
  );
}

export default From;
