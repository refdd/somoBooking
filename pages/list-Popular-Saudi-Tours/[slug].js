import NormailNavBar from "@/components/mainSections/NormailNavBar";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import From from "@/components/single/From";
import HeaderSingle from "@/components/single/HeaderSingle";
import Itinerary from "@/components/single/Itinerary";
import OverView from "@/components/single/OverView";
import SingleGalleryContainer from "@/components/single/SingleGalleryContainer";
import React from "react";

function SingleTour() {
  return (
    <div className="">
      <NormailNavBar />
      {/*  */}
      <div className="pt-28 bg-[#f5f5f5]"></div>
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
        <IconBreadcrumbs />
        <p className="text-[#3554d1] text-[14px] font-sans capitalize underline">
          All Tour in Riyadh{" "}
        </p>
      </div>
      <HeaderSingle />
      <SingleGalleryContainer />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-2 container mx-auto px-4">
          <OverView />
          <Itinerary />
        </div>
        <From />
      </div>
    </div>
  );
}

export default SingleTour;
