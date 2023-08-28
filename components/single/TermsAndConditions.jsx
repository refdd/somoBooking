import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";

function TermsAndConditions({ terms_and_conditions }) {
  const [openTaC, setOpenTaC] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div id="Terms" className="container mx-auto px-4 mt-5 ">
      <div
        onClick={() => {
          setOpenTaC(!openTaC);
        }}
        className=" flex items-center gap-4 cursor-pointer"
      >
        <p className="text-[22px] text-mainColor font-medium font-sans capitalize">
          {t("common:single.term_conditions")}
        </p>
        <FaAngleDown
          className={`text-lg text-mainColor transition-transform  
            `}
        />
      </div>
      <div
        className={`border rounded-md p-4 shadow-lg mt-4 ${
          openTaC ? " block" : "hidden "
        }`}
      >
        <p className="text-[16px] leading-[28px] md:text-lg font-sans text-textPurple capitalize  ">
          {terms_and_conditions}
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
