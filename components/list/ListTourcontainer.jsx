import React from "react";
import CardListTour from "../cards/CardListTour";

import { useStateContext } from "@/contexts/ContextProvider";
import SeeMore from "../hleper/SeeMore";
function ListTourcontainer({ tours, pageType }) {
  const { ViewTours, setViewTours, loadMore, setLoadMore } = useStateContext();
  return (
    <div className="container mx-auto px-4 mt-6">
      <div
        className={
          ViewTours
            ? "grid grid-cols-3 gap-5 md:gap-3"
            : "grid grid-cols-1 gap-5 md:gap-7"
        }
      >
        {tours?.slice(0, loadMore)?.map((tour) => (
          <>
            {tour.is_active && (
              <div key={tour.id}>
                <CardListTour
                  image={tour?.images}
                  location={tour?.city?.title}
                  title={tour.title}
                  description={tour?.short_desc?.substring(0, 90)}
                  price={tour?.best_price}
                  slug={tour.slug}
                  sigleImage={tour?.image}
                  duration={tour?.duration}
                  reatingNumber={tour?.package_rating}
                  pageType={pageType}
                />
              </div>
            )}
          </>
        ))}
      </div>
      {tours.length == 0 ? "" : <SeeMore />}
    </div>
  );
}

export default ListTourcontainer;
