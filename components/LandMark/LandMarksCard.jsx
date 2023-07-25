import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import ImageSlider from "../tour/ImageSlider";
import ImageLandMarkSlider from "../hleper/ImageLandMarkSlider";
function LandMarksCard({ image, title, destination, slug }) {
  return (
    <div className="flex flex-col space-y-4 ">
      {/* image */}
      <div className=" group relative w-full h-[220px] md:h-[280px] overflow-hidden rounded-lg  shadow-lg shadow-[#445cdc40] ">
        <ImageLandMarkSlider arrayOfImages={image} />
      </div>
      <div className="flex flex-col space-y-1">
        <Link href={`/LandMarks/${slug}`}>
          <p className="text-[#051036] text-lg font-medium font-sans capitalize cursor-pointer">
            {title}
          </p>
        </Link>
        <div className=" flex items-center gap-3">
          <ImLocation2 className="text-lg text-mainColor" />
          <span className="text-MainYeloow text-[15px] font-sans capitalize">
            {destination}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LandMarksCard;
