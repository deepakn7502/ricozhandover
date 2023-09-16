import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-28 bg-[#14121D] grid grid-cols-3 place-items-center">
      <div>
        <img src={require("../images/ricoz 4.png")} />
      </div>
      <div className="w-full h-full grid grid-cols-4 place-items-center">
        <p className="text-white text-xl">About Us</p>
        <p className="text-white text-xl">Services</p>
        <p className="text-white text-xl">Courses</p>
        <p className="text-white text-xl">Contact</p>
      </div>
      <div>
        <button className="h-14 w-[137px] px-[30px] py-[13px] bg-[#0030FF] rounded-[50px] text-white text-xl">
          Sign Up
        </button>
      </div>
    </div>
  );
}
