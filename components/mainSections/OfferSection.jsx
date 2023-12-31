import React from "react";
import bg from "../../public/assets/images/parallax.jpg";
import TimerDown from "../hleper/TimerDown";
import OfferSlider from "../parts/OfferSlider";

function OfferSection({ offers, settingsOffer }) {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + parseInt(settingsOffer?.discount_days));
  endDate.setHours(23, 9, 59, 0);
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div
          style={{ backgroundImage: `url(${bg.src})` }}
          className="relative bg-right-bottom bg-no-repeat py-20  md:order-2 md:py-48 z-0 "
        >
          <div className="flex flex-col  items-center justify-center gap-5 relative">
            {/*  */}
            <div className="flex flex-col space-y-2 z-40">
              <p className=" relative text-center text-7xl text-white font-sans capitalize">
                {settingsOffer?.discount_title}
              </p>
              <p className="text-center text-white text-2xl font-semibold capitalize">
                {settingsOffer?.discount_desc}
              </p>
            </div>
            {/*  */}
            <div className="flex gap-1 z-40 justify-center items-center">
              <span className="text-8xl font-semibold font-sans text-MainYeloow">
                {settingsOffer?.discount_number}
              </span>
              <div className="flex flex-col justify-center ">
                <span className=" leading-[40px] text-MainYeloow text-[55px] font-semibold ">
                  %
                </span>
                <span className=" leading-[40px] text-MainYeloow text-[55px] font-semibold">
                  off
                </span>
              </div>
            </div>
            {/*  */}
            <p className="w-[80px] border border-[#ffffff4d] mx-auto my-7 z-40"></p>
            {/*  */}
            <p className=" text-white text-xs font-semibold uppercase  z-40">
              IT’S LIMITED SEATING! HURRY UP
            </p>
            {/* timer */}
            <TimerDown date={endDate} />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#0000009c] z-10"></div>
        </div>
        <div className="md:col-span-2 md:order-1 md:-mr-10">
          <OfferSlider offers={offers} />
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
