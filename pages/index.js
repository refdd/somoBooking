import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainHeader from "@/components/mainSections/MainHeader";
import WhyChooseUs from "@/components/mainSections/WhyChooseUs";
import TourRow from "@/components/tour/TourRow ";
import Reviews from "@/components/mainSections/Reviews";
import NextTrip from "@/components/mainSections/NextTrip";
import Subscribe from "@/components/mainSections/Subscribe";
import DownLoadApp from "@/components/mainSections/DownLoadApp";
import NotMember from "@/components/mainSections/NotMember";
import Footer from "@/components/mainSections/Footer";
import HeaderSections from "@/components/parts/HeaderSections";
import OfferSection from "@/components/mainSections/OfferSection";
import ActivitiesRow from "@/components/tour/ActivitiesRow";
import FaQSection from "@/components/mainSections/FaQSection";
import LandMarkSection from "@/components/mainSections/LandMarkSection";
import { baseUrl, fetchApi } from "@/utils/ferchApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  posts,
  tours,
  Activities,
  reviews,
  faqs,
  offers,
  partners,
}) {
  return (
    <>
      <Head>
        <title>Tourzable Saudi Arabia </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <WhyChooseUs homepage />
      <HeaderSections
        titel={"Most Popular Saudi Tours"}
        desc={
          "Best Offers Of Package Programs In Kingdom Of Saudi Arabia. Save Your Time And Effort. Book Your Booking And Enjoy."
        }
      />
      <TourRow tours={tours} />
      <HeaderSections
        titel={"Most Popular Activities"}
        desc={
          "Best Offers Of Activity Programs In Kingdom Of Saudi Arabia. Save Your Time And Effort. Book Your Activity And Enjoy."
        }
      />
      <ActivitiesRow Activities={Activities} />
      <LandMarkSection />
      <Reviews reviews={reviews} allPartners={partners} />
      <OfferSection offers={offers} />
      {/* <NextTrip posts={posts} /> */}
      <FaQSection faqs={faqs} />
      <Subscribe />
      <DownLoadApp />
      <NotMember />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // const posts = await fetchApi(`${baseUrl}/posts&limit=12`);
  const tours = await fetchApi(`${baseUrl}/packages?type_id=1&limit=12`);
  const Activities = await fetchApi(`${baseUrl}/packages?type_id=2&limit=12`);
  const reviews = await fetchApi(`${baseUrl}/reviews?limit=6`);
  const faqs = await fetchApi(`${baseUrl}/faqs?limit=4`);
  const offers = await fetchApi(`${baseUrl}/offers?limit=1`);
  const partners = await fetchApi(`${baseUrl}/partners`);

  return {
    props: {
      // posts: posts.data,
      tours: tours.data,
      Activities: Activities.data,
      reviews: reviews.data,
      faqs: faqs.data,
      offers: offers.data,
      partners: partners.data,
    },
    revalidate: 10,
  };
}
