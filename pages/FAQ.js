import MainHeaderList from "@/components/list/MainHeaderList";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import FandQcontainer from "@/components/mainSections/FandQcontainer";
import FandQList from "@/components/mainSections/FandQList";
import Footer from "@/components/mainSections/Footer";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import Head from "next/head";
import React from "react";

function FAQ() {
  return (
    <>
      <Head>
        <title>list Popular Saudi Tours </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeaderList title={"FAQ "} />
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"FAQ"}
        />
      </div>
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-9 md:gap-2">
        <FandQList />
        <FandQcontainer />
      </div>
      <Subscribe />
      <DownLoadApp />
      <NotMember />
      <Footer />
    </>
  );
}

export default FAQ;
