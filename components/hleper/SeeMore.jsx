import { useStateContext } from "@/contexts/ContextProvider";
import React from "react";

function SeeMore() {
  const { loadMore, setLoadMore } = useStateContext();

  return (
    <div className="container mx-auto px-4 ">
      <div className=" flex justify-center items-center py-9">
        <div
          onClick={() => {
            setLoadMore(loadMore + 9);
          }}
          className="py-2 px-8 bg-mainColor rounded-lg md:hover:scale-95 ease-in-out duration-300 cursor-pointer "
        >
          <button className="text-[17px] font-sans text-white font-medium capitalize">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeeMore;
