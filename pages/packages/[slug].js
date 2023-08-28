import BottonInquire from "@/components/hleper/BottonInquire";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import AdditionalInfo from "@/components/single/AdditionalInfo";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import CancellationPolicy from "@/components/single/CancellationPolicy";
import From from "@/components/single/From";
import HeaderSingle from "@/components/single/HeaderSingle";
import Itinerary from "@/components/single/Itinerary";
import LeaveReview from "@/components/single/LeaveReview";
import OverView from "@/components/single/OverView";
import RelatedTours from "@/components/single/RelatedTours";
import SingleGalleryContainer from "@/components/single/SingleGalleryContainer";
import TapsTour from "@/components/single/TapsTour";
import TermsAndConditions from "@/components/single/TermsAndConditions";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import { newFeatchApi, newbaseUrl } from "@/utils/newFeatchApi";
import Head from "next/head";
import React, { useEffect, useState } from "react";

function SingleTour({ singletour, newSingletour }) {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });
  }, []);
  const {
    best_price,
    title,
    package_rating,
    city,
    min,
    max,
    // duration,
    desc,
    days,
    note,
    includes,
    unincludes,
    board,
    policy,
    id,
    hotel_rate,
    // image,
    code,
    meta_desc,
    meta_title,
    immediate_booking,
    reviews_count,
    eligibles,
  } = singletour;
  const {
    name,
    place,
    price_of_single_room_by_person_by_night,
    image,
    accommodation,
    duration,
    stars,
    description,
    cancellation_policy,
    terms_and_conditions,
  } = newSingletour;
  console.log(newSingletour);
  return (
    <>
      <Head>
        <meta name="description" content={meta_desc} />
        <title>{meta_title} </title>
      </Head>
      <BottonInquire title={"inquire now"} />
      <div className="">
        {isTop ? <NormailNavBar InSinglePage /> : <TapsTour />}

        {/*  */}
        <div className="pt-28 bg-[#f5f5f5]"></div>
        <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
          <IconBreadcrumbs
            links={[
              { name: "Home", slug: "/" },
              {
                name: "List Popular Saudi Tours",
                slug: "/packages",
              },
            ]}
            currentLink={"Taif City Tour Cable Car Ride3"}
          />
        </div>
        <HeaderSingle
          title={name}
          reviews_count={reviews_count}
          location={place?.name}
          price={price_of_single_room_by_person_by_night}
          starNumber={package_rating}
        />
        <SingleGalleryContainer image={image} days={days} tourId={id} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-1">
          <div className="col-span-2 container mx-auto px-4">
            <OverView
              min={min}
              max={max}
              duration={duration}
              desc={description}
              includes={includes}
              unincludes={unincludes}
              board={accommodation}
              tourCode={code}
              hotel_rate={stars}
              eligibles={eligibles}
            />
            <Itinerary daysItinerary={days} />
            <AdditionalInfo noteContent={note} />
            <CancellationPolicy Cancellation_Policy={policy} />
            <TermsAndConditions terms_and_conditions={terms_and_conditions} />
            <LeaveReview />
          </div>
          <From
            idPackage={id}
            image={image}
            title={title}
            tourCode={code}
            best_price={best_price}
            min={min}
            max={max}
            payMode={immediate_booking}
          />
        </div>
        {/* <RelatedTours /> */}
        <Subscribe />
        {/* <DownLoadApp /> */}
        {/* <NotMember /> */}
        <Footer />
      </div>
    </>
  );
}

export default SingleTour;
export async function getServerSideProps({ params, locale, query, res }) {
  const currency = query.currency || "USD";
  const slug = params?.slug || "";
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const singletour = await fetchApi(
    `${baseUrl}/packages/${slug}?locale=${locale}&currency=${currency}`
  );
  const newSingletour = await newFeatchApi(
    `${newbaseUrl}/property/api/list/${slug}`
  );
  return {
    props: {
      singletour: singletour.data,
      newSingletour: newSingletour,
    }, // will be passed to the page component as props
  };
}
