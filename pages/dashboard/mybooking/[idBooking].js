import FormAddPearsonInfo from "@/components/dashbord/booking/FormAddPearsonInfo";
import FormEditePearsonInfo from "@/components/dashbord/booking/FormEditePearsonInfo";
import ListPersonBooking from "@/components/dashbord/booking/ListPersonBooking";
import DashbordNavBar from "@/components/dashbord/homeDashbord/DashbordNavBar";
import SideBArDashbord from "@/components/hleper/SideBarDashbord";
import Footer from "@/components/mainSections/Footer";
import NotMember from "@/components/mainSections/NotMember";
import Subscribe from "@/components/mainSections/Subscribe";
import HeaderPages from "@/components/parts/HeaderPages";
import IconBreadcrumbs from "@/components/single/Breadcrumbs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function SingelBooking() {
  const [bookingPeople, setBookingpeople] = useState([]);
  const [showEditeForm, setShowEditeForm] = useState(false);
  const [dataEditePerson, setDataEditePerson] = useState();
  const router = useRouter();
  const { idBooking, traveler } = router.query;
  const handleOpenEditeBooking = () => {
    setShowEditeForm(true);
  };
  const handleCloseEditeBooking = () => {
    setShowEditeForm(false);
  };
  const handleEditeBooking = (dataPerson) => {
    setDataEditePerson(dataPerson);
  };
  const allBookingPersons = async () => {
    try {
      const response = await fetch(
        `https://new.tourzable.com/api/people?booking_id=${idBooking}`
      );
      const data = await response.json();
      // console.log(data);
      setBookingpeople(data?.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  useEffect(() => {
    if (!idBooking) return;

    allBookingPersons();
  }, [idBooking]);
  // console.log(dataEditePerson);
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
        title={"Add travelers Information"}
        desc={"Lorem ipsum dolor sit amet, consectetur."}
      />
      <div className=" container m-auto px-4 md:px-10 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-1">
        <div className="">
          {!showEditeForm ? (
            <FormAddPearsonInfo
              idBooking={idBooking}
              allBookingPersons={allBookingPersons}
              traveler={traveler}
              bookingPeople={bookingPeople}
            />
          ) : (
            <FormEditePearsonInfo
              idBooking={idBooking}
              allBookingPersons={allBookingPersons}
              traveler={traveler}
              bookingPeople={bookingPeople}
              dataEditePerson={dataEditePerson}
              handleCloseEditeBooking={handleCloseEditeBooking}
            />
          )}
        </div>
        <div className="">
          <ListPersonBooking
            bookingPeople={bookingPeople}
            traveler={traveler}
            handleOpenEditeBooking={handleOpenEditeBooking}
            handleEditeBooking={handleEditeBooking}
          />
        </div>
      </div>
      <Subscribe />
      {/* <DownLoadApp /> */}
      {/* <NotMember /> */}
      <Footer />
    </div>
  );
}

export default SingelBooking;
