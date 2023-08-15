import { Button, Modal } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillClockCircle, AiFillQuestionCircle } from "react-icons/ai";
import CancelForm from "./CancelForm";
import HaveQuestion from "./HaveQuestion";
import Link from "next/link";

function BookingContainer({ dataBooking }) {
  const [cancel, setCancel] = useState(false);
  const [idBooking, setIdBooking] = useState();
  const [question, setQuestion] = useState(false);
  const handleOpenQuestion = () => setQuestion(true);
  const handleCloseQuestion = () => setQuestion(false);
  const handleOpen = () => setCancel(true);
  const handleClose = () => setCancel(false);
  const router = useRouter();
  const handlePayment = (dataBooking) => {
    // console.log({ ...dataBooking });
    router.push({
      pathname: "/Payment",
      query: {
        ...dataBooking,
      },
    });
  };
  // console.log(parseInt(dataBooking[4].status?.color));
  return (
    <div>
      <div className=" bg-white shadow-lg rounded-lg p-7">
        <p className="text-lg text-mainColor font-sans font-semibold capitalize">
          My Bookings
        </p>
        <div className="grid grid-cols-1 gap-5">
          {dataBooking?.map((item) => (
            <div
              key={item.id}
              className=" grid grid-cols-1  gap-5 md:grid-cols-3 p-4 bg-slate-100 rounded-lg"
            >
              {/* image */}
              <div className="relative w-full h-[200px]">
                <Image
                  loader={() => {
                    return `${item?.package?.image}`;
                  }}
                  unoptimized={true}
                  src={item?.package?.image}
                  fill
                  sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
                  loading="lazy"
                  alt="bokking"
                  className=" rounded-lg object-cover"
                />
                {/* status */}
                <div
                  style={{ background: `${item?.status?.color}` }}
                  className={`absolute -bottom-3 right-3  py-2 px-4 rounded-lg `}
                >
                  <span className="text-mainColor text-sm  font-sans font-medium capitalize">
                    {" "}
                    {item.status?.title}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:justify-evenly md:col-span-2">
                {/* titel */}
                <p className="text-lg font-sans font-medium text-gray-900 capitalize">
                  {item.title}
                </p>
                {/* info */}
                <div className="flex  items-center gap-2">
                  <div className="flex items-center">
                    <AiFillClockCircle className="text-mainColor" />
                    <span className="ml-1 font-sans text-sm text-gray-500 capitalize">
                      {item?.package.duration}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <AiFillClockCircle className="text-mainColor" />
                    <span className="ml-1 font-sans text-sm text-gray-500 capitalize">
                      {item?.adult + item?.infant + item?.kid} person
                    </span>
                  </div>
                  <div className="flex items-center">
                    <AiFillClockCircle className="text-mainColor" />
                    <span className="ml-1 font-sans text-sm text-gray-500 capitalize">
                      Price {item?.package.best_price} {item.currency}
                    </span>
                  </div>
                </div>
                {/* buttons */}
                <div className=" flex flex-wrap items-center gap-2">
                  <div className="py-2  cursor-pointer rounded-lg">
                    <Button
                      onClick={() => {
                        handlePayment({
                          start_date: item.start_date,
                          end_date: item.end_date,
                          idPackage: item?.package.id,
                          image: item?.package?.image,
                          title: item.title,
                          tourCode: item.package.code,
                          best_price: item?.package.best_price,
                          min: item?.package.min,
                          max: item?.package.max,
                          aduits: item?.adult,
                          childs: item?.kid,
                        });
                      }}
                      variant="contained"
                      fullWidth
                      className="px-6"
                      disabled={!item?.pay_now}
                    >
                      pay
                    </Button>
                  </div>

                  <div className="py-2 px-6 cursor-pointer bg-MainYeloow rounded-lg">
                    <Link
                      href={`/dashboard/mybooking/${item.id}/?traveler=${
                        item?.adult + item?.kid
                      }`}
                    >
                      <button className="text-gray-900 text-sm font-semibold capitalize font-sans">
                        add Persons info
                      </button>
                    </Link>
                  </div>
                  <div
                    onClick={() => {
                      handleOpen();
                      setIdBooking(item.id);
                    }}
                    className="py-2 px-6 cursor-pointer border border-red-700 rounded-lg"
                  >
                    <button className="text-red-400 text-sm font-semibold capitalize font-sans">
                      cancel
                    </button>
                  </div>
                </div>
              </div>
              <Modal
                open={cancel}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <CancelForm handleClose={handleClose} bookingId={idBooking} />
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingContainer;
