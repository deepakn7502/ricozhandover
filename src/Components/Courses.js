import React from "react";

export default function Courses() {
  return (
    <div className="w-full h-[865px] bg-white grid place-items-center">
      <div className="h-[681px] w-[1231px]">
        <div className="h-24 w-full flex justify-between">
          <div className="h-full w-[772px]">
            <h1 className="text-[46px] font-semibold">
              Unlock New Skills with Our Courses
            </h1>
            <p className="text-xl font-normal">
              Learn and Grow at Your Own Pace.
            </p>
          </div>
          <button className="w-48 h-16 bg-[#0030FF] text-white py-4 px-7 text-xl font-semibold rounded-[50px]">
            Explore More
          </button>
        </div>
        <div className="w-full h-[516px] grid grid-cols-3">
          <div></div>
          <div></div>
          <div></div>
          
        </div>
      </div>
    </div>
  );
}
