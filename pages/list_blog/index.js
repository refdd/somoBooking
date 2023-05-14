import MainHeaderList from "@/components/list/MainHeaderList";
import ListBlogContainer from "@/components/listPlog/ListBlogContainer";
import ReactPost from "@/components/listPlog/ReactPost";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import Footer from "@/components/mainSections/Footer";
import NormailNavBar from "@/components/mainSections/NormailNavBar";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import HeaderPages from "@/components/parts/HeaderPages";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import From from "@/components/single/From";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import Head from "next/head";
import React from "react";

function listBlog({posts}) {
  console.log(posts);
  return (
    <>
    <Head>
      <title>list Popular Saudi Tours </title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainHeaderList title={"all blog"} />

    <div className="py-2 bg-[#f5f5f5]"> </div>
    <div className=" grid grid-cols-1 gap-5  md:grid-cols-3">
      
      <div className="col-span-2">
        <ListBlogContainer posts={posts}/>
      </div>
      <div className=" col-span-1">
        <ReactPost/>
        <From/>
      </div>
    </div>
    {/* <FaQSection /> */}
    <Subscribe />
    <DownLoadApp />
    <NotMember />
    <Footer />
  </>
  );
}

export default listBlog;
export async function getStaticProps() {
  const posts = await fetchApi(`${baseUrl}/posts?limit=20`);
  

  return {
    props: {
      posts: posts.data,
    
    },
    revalidate: 10,
  };
}
