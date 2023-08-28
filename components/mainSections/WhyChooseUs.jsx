import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HeaderSections from "../parts/HeaderSections";
import FraturedIcon1 from "../../public/assets/images/1.svg";
import { useTranslation } from "react-i18next";
function WhyChooseUs({ homepage, snippets }) {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={
        homepage
          ? "container mx-auto  px-4  mt-[250px] md:mt-4"
          : "container mx-auto  px-4  mt-4"
      }
    >
      <HeaderSections titel={t("common:home.Why_Choose")} desc={""} />
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
          {snippets?.map((snippet) => (
            <SwiperSlide key={snippet.id}>
              <div className="flex flex-col space-y-3  ">
                <div className=" flex max-w-full w-full  justify-center items-center">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-[100px] h-[90px]"
                    loader={() => {
                      return `${snippet.icon}`;
                    }}
                    unoptimized={true}
                    src={snippet.icon}
                    static
                    alt="features"
                    loading="lazy"
                  />
                </div>
                {/* content */}
                <div className="flex flex-col space-y-2  ">
                  <p className="text-lg font-medium  text-[#051036] font-sans capitalize text-center ">
                    {snippet?.title}
                  </p>
                  <p className="text-sm text-gray-600 font-normal font-sans capitalize text-center">
                    {snippet?.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WhyChooseUs;
