import React from "react";

export default function Home() {
  return (
    <div className="w-full h-[697px] bg-gradient-to-r from-[#181623] to-[#172458] relative">
      <div className="text-white w-[689px] h-[340px] relative top-44 left-36 grid grid-cols-1 gap-[34px]">
        <div className="w-full h-fit grid grid-cols-1 gap-5">
          <h1 className="text-6xl">
            Discover Top Tech Professionals In Minutes
          </h1>
          <p className="w-[632px] text-2xl">
            Streamline Your Business Needs with Ricoz's All-in-One Tech Service
            Hub.
          </p>
        </div>
        <button className="w-44 h-16 text-xl bg-[#0030FF] py-4 px-8 rounded-[500px]">
          Get Started
        </button>
      </div>
      <img src={require("../images/unsplash_1.png")} className="absolute top-[60px] left-[1090px] rotate-[1deg]" />
      <img src={require("../images/unsplash_2.png")} className="absolute top-[402px] left-[827px] -rotate-[1deg]"/>
    </div>
  );
}
