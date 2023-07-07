import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";
import ImageSlider from "../tour/ImageSlider";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
function CardOffer({
  image,
  location,
  title,
  description,
  price,
  sigleImage,
  discount,
  ratingNumber,
}) {
  const router = useRouter();
  const { currency } = router.query;
  const { t, i18n } = useTranslation();

  return (
    <div
      dir={i18n.dir()}
      className=" tourcard group flex flex-col space-y-3 p-2 border bg-white z-40 rounded-md "
    >
      {/* image card */}
      <div className=" w-full h-[180px] relative overflow-hidden rounded">
        {/* <Image src={image} fill className="rounded" alt="tour" /> */}
        {image?.length == 0 ? (
          <div className=" hoverArrows relative w-full h-[180px] group/imagcard overflow-hidden">
            <Image
              loader={() => {
                return `${sigleImage}`;
              }}
              unoptimized={true}
              src={sigleImage}
              fill
              sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
              loading="lazy"
              className="rounded group-hover/imagcard:scale-105 transition-all"
              alt="tour"
            />
          </div>
        ) : (
          <ImageSlider arrayOfImages={image} />
        )}

        {/* typs tour will add from backend */}
        <div className="absolute top-3 left-2   flex flex-col space-y-2  z-10">
          {/* <p className="text-white font-sans capitalize py-1 px-3 rounded   bg-[#051036]">
            Breakfast included
          </p> */}
          <p className="text-mainColor font-sans capitalize bg-MainYeloow py-1 px-3 rounded  font-semibold ">
            {discount}% off
          </p>
        </div>
        {/* heart icon */}
        <div
          className="group/item absolute top-3 right-2 shadow-md h-[30px] w-[30px]  bg-white flex items-center justify-center 
        rounded-full transition-all hover:bg-[#3554d1]
     "
        >
          <BiHeart className="text-sm text-black transition-all group-hover/item:text-white" />
        </div>
      </div>

      {/* title */}
      <div className="">
        {/* location */}
        <p className="text-[#697488] text-sm font-sans font-normal capitalize mb-1">
          {location}
        </p>
        <p className="hover-underline-animation text-lg text-[#051036] font-medium font-serif capitalize">
          {title}
        </p>
      </div>
      <p className="text-gray-500 text-sm md:text-lg font-sans capitalize font-normal">
        {description}
      </p>
      {/* rating*/}
      <div className=" flex items-center space-x-2">
        <span className="h-[30px] w-[30px] bg-MainYeloow font-semibold  text-mainColor rounded flex justify-center items-center">
          {ratingNumber}
        </span>
        <span className="text-mainColor font-medium font-sans text-sm ">
          {t("common:home.Exceptional")}
        </span>
        <span className="text-[#697488] text-sm font-sans font-medium ">
          {Math.floor(price) - 15} {t("common:list.reviews")}
        </span>
      </div>
      {/* price */}
      <div className=" flex items-center space-x-1 text-lg font-sans font-medium ">
        <span className=" group-hover:text-mainColor text-[16px] transition-all text-[#051036]">
          {t("common:home.Starting_from")}
        </span>
        <span className="text-mainColor ">
          {currency ? (currency == "SAR" ? "SAR" : "$") : "$"}{" "}
          {Math.floor(Math.floor(price) - (discount / 100) * Math.floor(price))}
        </span>
        <span className="text-gray-500  line-through text-sm">
          {currency ? (currency == "SAR" ? "SAR" : "$") : "$"}{" "}
          {Math.floor(price)}
        </span>
      </div>
    </div>
  );
}

export default CardOffer;
