import { useStateContext } from "@/contexts/ContextProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { BsArrowUpRight, BsFillStarFill, BsStarFill } from "react-icons/bs";

import ImageSlider from "../tour/ImageSlider";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";

function CardListTour({
  slug,
  image,
  location,
  title,
  description,
  price,
  sigleImage,
  duration,
  reatingNumber,
  pageType,
  visitedLocations,
  reviewsCount,
  tourId,
  tourType,
}) {
  const { ViewTours } = useStateContext();
  const { data: session } = useSession();
  const [reviewNumbers, setReviewNumbers] = useState(null);
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { currency } = router.query;
  // may useing array from
  const stars = Array.from({ length: reatingNumber }, (_, i) => (
    <BsStarFill key={i} />
  ));
  console.log(pageType);
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
            Authorization: "Bearer " + session?.user?.accessToken,
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
  // console.log(session.user.accessToken);
  return (
    <div
      className={
        ViewTours
          ? " relative  tourcard group flex flex-col space-y-2 border-b pb-3 border p-2 rounded-md shadow-lg shadow-[#9e6eae5e] "
          : " relative tourcard group flex flex-col space-y-2 border-b pb-3 border p-2 rounded-md shadow-lg shadow-[#9e6eae5e] md:flex-row  md:space-y-0 md:gap-3"
      }
    >
      {/* image card */}
      <div
        className={
          ViewTours
            ? " w-full h-[250px] relative overflow-hidden rounded "
            : " w-full h-[250px] relative overflow-hidden rounded md:w-[300px]  "
        }
      >
        {/* <Image src={image} fill className="rounded" alt="tour" /> */}
        {image?.length == 0 ? (
          <div className=" hoverArrows relative w-full h-[250px] md:h-[320px]  group/imagcard overflow-hidden">
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
      <div
        className={
          ViewTours
            ? "absolute top-[208px] right-5 rounded bg-MainYeloow py-1 px-5 z-10  "
            : "hidden  "
        }
      >
        <p className="text-white font-sans capitalize">{duration}</p>
      </div>
      {/* crnter */}
      <div
        className={
          ViewTours
            ? "flex flex-col space-y-2 "
            : "flex flex-col space-y-2 md:w-[50%] md:space-y-3"
        }
      >
        <Link href={`/${pageType}/${slug}`}>
          {/* title */}
          <div className="">
            {/* location */}
            <p className=" text-lg md:text-[20px] text-[#051036] font-medium font-serif capitalize">
              {title}
            </p>
          </div>
        </Link>
        {/* location and rating */}
        <div className="flex items-center gap-4 pr-2">
          {/* location */}
          <div className="flex gap-3 items-center ">
            <span className="text-lg text-[#051036] font-medium font-serif capitalize underline">
              {location}
            </span>
          </div>
          {/* duration  */}
          <div
            className={
              ViewTours ? "hidden   " : " rounded bg-MainYeloow py-1 px-5 z-10 "
            }
          >
            <p className="text-white font-sans capitalize"> {duration}</p>
          </div>
        </div>
        <div className="text-gray-500 text-lg font-sans capitalize font-normal md:text-[16px]">
          <div
            dangerouslySetInnerHTML={{
              __html: description?.substring(0, 90),
            }}
          ></div>
        </div>

        {/* free cancellation */}
        {!visitedLocations?.length == 0 && (
          <div className={ViewTours ? " flex-col hidden  " : "flex flex-col  "}>
            <span className="text-textPurple font-medium text-sm capitalize font-sans">
              {t("common:list.visited_Locations")}
            </span>
          </div>
        )}

        {/* featured */}
        <ul
          className={
            ViewTours
              ? "hidden gap-3 items-center flex-wrap "
              : "flex gap-3 items-center flex-wrap "
          }
        >
          {visitedLocations?.map((item, index) => (
            <li
              key={index}
              className="border border-[#dddddd] rounded-full px-5  "
            >
              <span className="text-sm text-[#051036] font-sans capitalize py-1  ">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* right side */}
      <div
        className={`  flex flex-col space-y-2 ${
          ViewTours ? "md:flex-1" : "md:flex-1"
        } `}
      >
        {/* rating*/}
        <div
          className={
            ViewTours
              ? " flex items-center gap-2 "
              : " flex items-center gap-2 md:flex-col md:gap-0 md:space-y-1"
          }
        >
          {/* <span className="h-[30px] w-[30px] bg-mainColor font-semibold  text-white rounded flex justify-center items-center">
              {reatingNumber}
            </span> */}
          <span className="text-[#051036] font-medium font-sans text-sm ">
            {t("common:home.Exceptional")}
          </span>
          <span className="text-[#697488] text-sm font-sans font-medium ">
            {reviewsCount} {t("common:list.reviews")}
          </span>
          <div className="flex items-start gap-1 justify-center text-MainYeloow">
            {stars}
          </div>
        </div>
        {/* price */}
        <div
          className={
            ViewTours
              ? " flex items-center gap-1 text-lg font-sans font-medium   "
              : " flex items-center gap-1 text-lg font-sans font-medium  md:flex-col "
          }
        >
          <span className=" group-hover:text-mainColor text-[16px] transition-all text-[#051036]">
            {t("common:home.Starting_from")}
          </span>
          <span className="text-mainColor">
            {" "}
            {currency ? (currency == "SAR" ? "SAR" : "$") : "$"}{" "}
            {Math.floor(price)}
          </span>
        </div>
        {/* button */}
        <div className="flex items-center justify-center py-3 gap-3 bg-mainColor rounded transition-all hover:md:bg-[#051036]">
          <Link href={`/${pageType}/${slug}`}>
            <button className="text-[15px] text-white font-sans font-medium capitalize">
              {t("common:list.View_Details")}
            </button>
          </Link>
          <BsArrowUpRight className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
}

export default CardListTour;
