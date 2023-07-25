import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HeaderSections from "../parts/HeaderSections";
import trip1 from "../../public/assets/images/trip1.png";
import trip2 from "../../public/assets/images/trip2.png";
import trip3 from "../../public/assets/images/trip3.png";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { format } from "date-fns";

function ReadAlso({ packages, titel }) {
  // console.log(readAlsoBlog);
  const formatDate = (dateCurrenity) => {
    const dateString = dateCurrenity;
    const date = new Date(dateString);
    const formattedDate = format(date, "MMMM dd, yyyy");
    return formattedDate;
  };
  return (
    <div className="container mx-auto px-4">
      <HeaderSections titel={titel} />
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {packages?.map((post) => (
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
                  <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
                    {post.title}
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
    </div>
  );
}

export default ReadAlso;
