import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

function SingleFandQ({ questions }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-12">
      {questions.map((q, index) => (
        <div key={q.id} className=" border mb-8 rounded shadow-lg py-5 px-3 ">
          <button
            className="flex  w-full items-center text-left   gap-2  "
            onClick={() => handleClick(index)}
          >
            <div className="w-[20%] md:w-[10%] flex items-center justify-center">
              <div
                className={` flex items-center justify-center w-10 h-10 rounded-full   text-2xl 
             ${
               activeIndex === index
                 ? "bg-[#051036] text-white "
                 : "bg-MainYeloow text-white"
             }
          `}
              >
                <BiPlus className={activeIndex === index ? "rotate-45 " : ""} />
              </div>
            </div>
            <h2 className=" text-textColor text-[15px] md:text-lg font-medium font-sans capitalize">
              {q.question}
            </h2>
          </button>
          {activeIndex === index && (
            <p className="mt-4 text-base text-gray-500">{q.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default SingleFandQ;
