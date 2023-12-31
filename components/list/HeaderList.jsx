import { useStateContext } from "@/contexts/ContextProvider";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineOrderedList } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TbArrowsUpDown } from "react-icons/tb";
import FilterDesktop from "./FilterDesktop";
function HeaderList({ numberOfPackage, regions }) {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const { ViewTours, setViewTours, setSortBy } = useStateContext();
  // console.log(openFilter);
  return (
    <div className=" container mx-auto px-4  pt-3 bg-white  ">
      <div className="flex flex-col space-y-3 border-b pb-7 md:flex-row md:items-center md:justify-between md:px-6 ">
        <p className="font-medium text-lg font-sans capitalize text-[#051036]">
          {numberOfPackage} tour In saudi
        </p>
        <div className="flex items-center gap-7">
          {/* sort */}
          <div
            onClick={() => {
              setOpenSort(!openSort);
            }}
            className=" relative group flex  h-10 px-5 rounded-full bg-MainYeloow  gap-2 items-center cursor-pointer transition-all hover:md:bg-mainColor "
          >
            <TbArrowsUpDown className="text-lg text-mainColor group-hover:md:text-white" />
            <button className="font-medium text-[15px] font-sans capitalize text-mainColor  group-hover:md:text-white">
              Sort
            </button>
            {openSort && (
              <ul className="absolute bottom-[-152px] -0 left-0 flex flex-col space-y-2 bg-white z-50 w-28 border rounded  shadow-lg py-4">
                <li
                  onClick={() => {
                    setSortBy("maxPrice");
                  }}
                  className="text-[16px] text-mainColor font-semibold font-sans capitalize hover:bg-blue-200 hover:text-white px-3 cursor-pointer"
                >
                  <span> min Price</span>
                </li>
                <li
                  onClick={() => {
                    setSortBy("minPrice");
                  }}
                  className="text-[16px] text-mainColor font-semibold font-sans capitalize hover:bg-blue-200 hover:text-white px-3 cursor-pointer"
                >
                  <span> max price</span>
                </li>
                <li
                  onClick={() => {
                    setSortBy("maxDay");
                  }}
                  className="text-[16px] text-mainColor font-semibold font-sans capitalize hover:bg-blue-200 hover:text-white px-3 cursor-pointer"
                >
                  <span> max day</span>
                </li>
                <li
                  onClick={() => {
                    setSortBy("minDay");
                  }}
                  className="text-[16px] text-mainColor font-semibold font-sans capitalize hover:bg-blue-200 hover:text-white px-3 cursor-pointer"
                >
                  <span> min Days</span>
                </li>
              </ul>
            )}
          </div>
          {/* view mode */}
          <div
            onClick={() => {
              setViewTours(!ViewTours);
            }}
            className=" group hidden md:flex  h-10 px-5 rounded-full bg-MainYeloow  gap-2 items-center cursor-pointer transition-all hover:md:bg-mainColor "
          >
            {ViewTours ? (
              <BsFillGrid3X3GapFill className="text-lg text-mainColor group-hover:text-white" />
            ) : (
              <AiOutlineOrderedList className="text-lg text-mainColor group-hover:text-white" />
            )}
            <button className="font-medium text-[15px] font-sans capitalize text-mainColor  group-hover:text-white">
              {ViewTours ? " grid View" : "  list View"}
            </button>
          </div>
          <div
            onClick={() => {
              setOpenFilter(true);
            }}
            className="   flex  md:hidden h-10 px-5 rounded-full bg-MainYeloow gap-2 items-center cursor-pointer "
          >
            <TbArrowsUpDown className="text-lg text-mainColor" />
            <button className="font-medium text-[15px] font-sans capitalize text-mainColor">
              Filter
            </button>
          </div>
        </div>
      </div>
      {openFilter ? (
        <div className=" md:hidden block  cursor-pointer fixed top-0 left-0 bg-white py-40 w-full z-50 overflow-y-scroll h-screen overflow-x-hidden">
          <div
            onClick={() => {
              setOpenFilter(false);
            }}
            className=" px-4 -mt-10 text-xl shadow-lg h-[50px] w-[50px] flex justify-center items-center rounded-full mx-4"
          >
            <AiOutlineClose />
          </div>
          <FilterDesktop regions={regions} />
        </div>
      ) : undefined}
    </div>
  );
}

export default HeaderList;
