import Head from "next/head";
import React from "react";
import HeaderList from "@/components/list/HeaderList";
import ListTourcontainer from "@/components/list/ListTourcontainer";
import FilterDesktop from "@/components/list/FilterDesktop";
import Subscribe from "@/components/mainSections/Subscribe";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import NotMember from "@/components/mainSections/NotMember";
import Footer from "@/components/mainSections/Footer";
import FaQSection from "@/components/mainSections/FaQSection";
import MainHeaderList from "@/components/list/MainHeaderList";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import From from "@/components/single/From";
import FormCustomizeTour from "@/components/customizeTour/FormCustomizeTour";

function Results({ tours, regions, cities }) {
  // console.log(tours);
  return (
    <>
      <Head>
        <title>list Popular Saudi Tours </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"SAUDI ARABIA TOURS"} />

      <div className="py-2 bg-[#f5f5f5]"> </div>
      <div className=" grid grid-cols-1 gap-5  md:grid-cols-3">
        <div className=" col-span-1 mt-5">
          <FormCustomizeTour blog cities={cities} />
          {/* <FilterDesktop regions={regions} /> */}
        </div>
        <div className="col-span-2">
          <HeaderList numberOfPackage={tours?.length} regions={regions} />
          <ListTourcontainer pageType={"packages"} tours={tours} />
        </div>
      </div>
      {/* <FaQSection /> */}
      <Subscribe />
      {/* <DownLoadApp /> */}
      {/* <NotMember /> */}
      <Footer />
    </>
  );
}
export async function getServerSideProps({ query, locale }) {
  const type_id = query.type_id || "2";
  const region_id = query.region_id || "1";
  const date = query.date || "";

  const tours = await fetchApi(
    `${baseUrl}/packages?locale=${locale}&type_id=${type_id}&region_id=${region_id}&date=${date}`
  );
  const regions = await fetchApi(`${baseUrl}/regions`);
  const cities = await fetchApi(`${baseUrl}/cities?locale=${locale}`);
  return {
    props: {
      tours: tours.data,
      regions: regions.data,
      cities: cities.data,
    },
  };
}

export default Results;
