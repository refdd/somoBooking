import Image from "next/image";
import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";

import ImageSlider from "../tour/ImageSlider";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function CardTour({
  image,
  location,
  title,
  description,
  price,
  duration,
  activitiey,
  blog,
  ratingNumber,
  sigleImage,
  homepage,
  typePackage,
  slug,
  tourType,
  tourId,
  is_requested,
}) {
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const { data: session } = useSession();
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { currency } = router.query;
  // console.log(session.user.accessToken);
  const addToFavorite = async () => {
    await axios
      .post(
        "https://new.tourzable.com/api/addToFav",
        {
          type: "package",
          id: tourId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.user.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(tourType);
  return (
    <div
      dir={i18n.dir()}
      className=" relative tourcard group flex flex-col space-y-3 border p-2 rounded-md shadow-lg shadow-[#9e6eae5e] md:h-[490px] "
    >
      {/* image card */}
      <div className=" overflow-hidden rounded">
        {/* <Image src={image} fill className="rounded" alt="tour" /> */}
        {image?.length == 0 ? (
          <div className=" hoverArrows relative w-full h-[221px] group/imagcard overflow-hidden">
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
              className="rounded group-hover/imagcard:scale-105 transition-all"
              alt="tour"
            />
          </div>
        ) : (
          <ImageSlider arrayOfImages={image} homepage />
        )}

        {/* heart icon */}
        {session ? (
          <div
            onClick={() => {
              addToFavorite();
              setFavoriteIcon(!favoriteIcon);
            }}
            className={`group/item absolute top-3 right-2 shadow-md h-[30px] w-[30px] ${
              favoriteIcon ? "bg-mainColor" : "bg-white "
            } flex items-center justify-center  cursor-pointer
            rounded-full transition-all hover:bg-[#3554d1] z-10`}
          >
            <BiHeart
              className={`text-sm  transition-all ${
                favoriteIcon ? "text-white" : "  text-black"
              }  group-hover/item:text-white`}
            />
          </div>
        ) : (
          <Link href={"/Login"}>
            <div
              className="group/item absolute top-3 right-2 shadow-md h-[30px] w-[30px]  bg-white flex items-center justify-center  cursor-pointer
          rounded-full transition-all hover:bg-[#3554d1] z-10
       "
            >
              <BiHeart className="text-sm text-black transition-all group-hover/item:text-white" />
            </div>
          </Link>
        )}
      </div>
      {/*duration */}
      {!blog && (
        <div className="absolute top-40 right-5 rounded bg-MainYeloow py-1 px-3 z-10  ">
          <p className="text-white font-sans capitalize">{duration} ايام</p>
        </div>
      )}
      {/* title */}
      <Link href={`/${typePackage}/${slug}`}>
        <div className="">
          {/* location */}
          <p className="text-[#697488] text-sm font-sans font-normal capitalize mb-1">
            {location}
          </p>
          <p className="hover-underline-animation text-lg text-[#051036] font-medium font-serif capitalize ">
            {title}
          </p>
          <p className=" bg-mainColor rounded-lg w-fit px-2 mt-3">
            <span className="text-[12px] text-white font-medium font-serif capitalize">
              {is_requested ? "Immediate Booking" : ""}
            </span>
          </p>
        </div>
      </Link>

      <p className="text-gray-500 text-sm  font-sans capitalize font-normal">
        {description}
      </p>
      {/* rating*/}
      <div className=" flex items-center gap-2">
        <span className="h-[30px] w-[30px] bg-MainYeloow font-semibold  text-white rounded flex justify-center items-center">
          {ratingNumber}
        </span>
        <span className="text-[#051036] font-medium font-sans text-sm ">
          {t("common:home.Exceptional")}
        </span>
        <span className="text-[#697488] text-sm font-sans font-medium ">
          {Math.floor(price) - 15} {t("common:list.reviews")}
        </span>
      </div>
      {/* price */}
      <div className=" flex items-center gap-1 text-lg font-sans font-medium ">
        <span className=" group-hover:text-mainColor text-[16px] transition-all text-[#051036]">
          {t("common:home.Starting_from")}
        </span>
        <span className="text-mainColor">
          {currency ? (currency == "SAR" ? "SAR" : "$") : "$"}{" "}
          {Math.floor(price)}
        </span>
      </div>
    </div>
  );
}

export default CardTour;
