import GuideOrdersSection from "@/components/dashbord/guide/GuideOrdersSection";
import DashboarNumbers from "@/components/dashbord/homeDashbord/DashboarNumbers";
import DashbordNavBar from "@/components/dashbord/homeDashbord/DashbordNavBar";
import RcommandedTour from "@/components/dashbord/homeDashbord/RcommandedTour";
import SideBArDashbord from "@/components/hleper/SideBarDashbord";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import Footer from "@/components/mainSections/Footer";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import HeaderPages from "@/components/parts/HeaderPages";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import { useStateContext } from "@/contexts/ContextProvider";
import { baseUrl, fetchApi } from "@/utils/ferchApi";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function GuideOrders({ profileData }) {
  const { sideBar } = useStateContext();
  const { data: session } = useSession();
  const router = useRouter();
  const { query, pathname } = router;
  //   console.log(query.token);
  useEffect(() => {
    if (session) {
      router.push({
        pathname: pathname,
        query: {
          token: session.user.accessToken,
        },
      });
    }
  }, [session]);

  const { tour_orders_requests } = profileData;
  // console.log(tour_orders_requests[0]);
  return (
    <div className="bg-[#f5f5f5]">
      <DashbordNavBar />
      <div className="pt-14 bg-[#f5f5f5]"></div>
      <div className="flex flex-wrap items-center justify-between py-4 bg-[#f5f5f5] container mx-auto px-4 ">
        <IconBreadcrumbs
          links={[{ name: "Home", slug: "/" }]}
          currentLink={"dashboard"}
        />
      </div>
      <HeaderPages
        title={"Dashboard"}
        desc={"Lorem ipsum dolor sit amet, consectetur."}
      />
      <div className=" grid grid-cols-1 gap-7 md:grid-cols-8 md:gap-1">
        <div
          className={
            !sideBar
              ? " sm:hidden  block col-span-2"
              : "sm:hidden md:block  hidden col-span-2"
          }
        >
          <SideBArDashbord />
        </div>
        <div className={sideBar ? "md:col-span-6 " : "md:col-span-8  "}>
          {/* <DashboarNumbers profileData={profileData} /> */}
          {/* <RcommandedTour
            packages={tours}
            activitys={activitys}
            umrah={umrah}
            landmarks={landmarks}
          /> */}
          <GuideOrdersSection tourOrdersRequests={tour_orders_requests} />
        </div>
      </div>
      <Subscribe />
      {/* <DownLoadApp /> */}
      {/* <NotMember /> */}
      <Footer />
    </div>
  );
}

export default GuideOrders;
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const locale = context.locale || "ar";

  let token = "";
  if (session) {
    token = session?.user?.accessToken || "";
  }
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OGViOTc5Ny0xZTFiLTRmZDctYWM5Mi03Yjg1ZWNiOGVmZmIiLCJqdGkiOiJlNzFlZjRlN2E1ZjBhYTVmNzMyYzc1MWY4YThmZmVkYTM1ZTNjYmQyODU0ZjJjNDQwYmMwNmQxNjVjODFlMjQyYmViYmJkYzQ4N2JmZjM0ZSIsImlhdCI6MTY4NjgyNTY4Ny42MjQ0NTgwNzQ1Njk3MDIxNDg0Mzc1LCJuYmYiOjE2ODY4MjU2ODcuNjI0NDU5MDI4MjQ0MDE4NTU0Njg3NSwiZXhwIjoxNzAyNjM2ODg3LjYyMTYzOTAxMzI5MDQwNTI3MzQzNzUsInN1YiI6IjEwIiwic2NvcGVzIjpbXX0.dqRHk8S5f6cbBbXAstpznp78BII2opIG_fZQB4F4y7gEyWoD0WmFyhMjKZ4llVygx5nTSY8FLKC3fD_t1lVk79puUJdjfufV4ZCll-kCCK9P_X-NpRz27YEOFK8wbVSrXIewo7Wu0dnX9KqY9TSZj3WUcEIC1lS-XVmYGIqMhdKkssMtrpUjvbBLUt8Tipg72Yqotg-Os0F1aEfPfq630J4mrOhrWTKHUwe3hTqqjOnADRNOHEcg5VPZdj3YQSrUTRPvljfq6qAqbeUI__9RFDBKCOZUF-mXNAoCu8MqGr-sqwVmK9VpUHuYKIGjOGyfmJ1RtThSPk-0_sKeujVWQCrS93OuhCj21OJS9NjHQvArxTVmZE7gyheqT8AucHq5BXe5Q1yXCLGItL5Py09jAXpgTqlwLWJxnVyLtkno-5DsvATvLinhEeVqU-t31RW1WlPMhxyzfxwPge0GXGXyE2SPloub0glrIRR3ZD4Df6Eh2R5KloqQ8f-oUrxeJgbfBoGTUvn1E6cJ_WdkP0K0zRCR3e-S6B6jp9l3HkIclcdOf449eRVKh7EhQPNwbfXTpdAHDkMwdr2zXeDjw2FM8WFuwyTeUaK8e9Xj3nvap5tuap7GMvC7yTEq9vrhgHw6Jg5fec8HsfeKRQDS4FpDvSz8jhtoqryzrxioPlzdguM" ||
  //   "";
  const profileData = await fetchApi(`${baseUrl}/tour_guide_profile`, token);

  return {
    props: {
      profileData: profileData.data,
    },
  };
}
