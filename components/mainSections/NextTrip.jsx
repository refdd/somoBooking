import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HeaderSections from "../parts/HeaderSections";
import { BsArrowUpRight } from "react-icons/bs";
import { format } from "date-fns";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function NextTrip({ posts, blog }) {
  const { t, i18n } = useTranslation();
  const formatDate = (dateCurrenity) => {
    const dateString = dateCurrenity;
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM dd, yyyy");
    return formattedDate;
  };
  // console.log(posts[0]);
  return (
    <div className="container mx-auto px-4">
      <HeaderSections
        titel={t("common:home.Blogheader")}
        desc={t("common:home.blogDesc")}
      />
      <div className="">
        <Swiper
          dir="ltr"
          modules={[Pagination]}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {blog?.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="flex flex-col space-y-4">
                {/* image */}
                <div className=" group relative w-full h-[290px] md:h-[320px] overflow-hidden rounded-lg  shadow-lg shadow-[#445cdc40] ">
                  <Image
                    loader={() => {
                      return `${post.image}`;
                    }}
                    unoptimized={true}
                    src={post.image}
                    fill
                    loading="lazy"
                    alt=""
                    className="rounded group-hover:scale-110 transition-all ease-in-out  object-fill"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <Link href={`/Saudi-travel-blog/${post.id}`}>
                    <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
                      {post.title}
                    </p>
                  </Link>
                  <p className="text-gray-500 text-sm md:text-lg font-sans capitalize font-normal">
                    {post.description}
                  </p>
                  <span className="text-MainYeloow text-[15px] font-sans capitalize">
                    {formatDate(post.created_at)}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link href={"Saudi-travel-blog"}>
        <div className=" group flex items-center mx-auto  gap-2 w-fit rounded transition-all hover:md:bg-MainYeloow bg-mainColor h-16 px-5 md:px-10 cursor-pointer  ">
          <button className=" font-medium font-sans text-[15px] text-white md:font-semibold md:text-lg">
            {t("common:home.See_More")}
          </button>
          <BsArrowUpRight className=" text-lg  text-white " />
        </div>
      </Link>
    </div>
  );
}

export default NextTrip;
