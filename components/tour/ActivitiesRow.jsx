import React, { useState } from "react";

import CardTour from "../cards/CardTour";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const locationTour = [
  { id: 1, title: "Saudi" },
  { id: 2, title: "Dubai" },
  { id: 3, title: "Qatar" },
];
function ActivitiesRow({ Activities, destinations }) {
  const [activeId, setActiveId] = useState(null);
  const { t, i18n } = useTranslation();

  const handleClick = (id) => () => {
    const activeElement = locationTour.find((id) => id === id);
    activeElement && setActiveId(id);
  };
  // console.log(Activities[0]);

  return (
    <div className="container mx-auto px-4 mb-11 z-40">
      <ul className="flex pa justify-start items-start gap-2 mb-6 flex-wrap md:justify-center">
        {destinations?.map(({ id, title }) => (
          <li
            onClick={handleClick(id)}
            key={id}
            className={
              activeId == id
                ? "h-12  px-3 border flex items-center justify-center rounded-lg bg-mainColor text-white cursor-pointer"
                : "  h-12 px-3 border flex items-center justify-center rounded-lg bg-MainYeloow text-mainColor cursor-pointer"
            }
          >
            <span className="text-lg  font-sans font-semibold capitalize">
              {title}
            </span>
          </li>
        ))}
      </ul>
      <Swiper
        dir="ltr"
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280: {
            slidesPerView: 1.3,
            spaceBetween: 20,
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
        modules={[Pagination]}
        className="mySwiper"
      >
        {Activities?.map((activitie) => (
          <SwiperSlide key={activitie.id}>
            <CardTour
              image={activitie.images}
              location={activitie.city.desc}
              title={activitie.title}
              description={activitie.short_desc.substring(0, 90)}
              sigleImage={activitie.image}
              price={activitie.best_price}
              duration={activitie.duration}
              ratingNumber={4}
              activitiey
              typePackage={"activities"}
              slug={activitie.slug}
              tourType={activitie.type.title}
              tourId={activitie.id}
              is_requested={activitie?.immediate_booking}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href={"activities"}>
        <div className="  group flex items-center mx-auto  gap-2 w-fit rounded transition-all hover:md:bg-MainYeloow bg-mainColor h-16 px-5  mt-10 md:px-10 cursor-pointer  ">
          <button className=" font-medium font-sans text-[15px] text-white md:font-semibold md:text-lg">
            {t("common:home.See_More")}
          </button>
          <BsArrowUpRight className=" text-lg  text-white " />
        </div>
      </Link>
    </div>
  );
}

export default ActivitiesRow;
