import React from "react";

export default function Features() {
  return (
    <div className="w-full h-[628px]">
      <div className="w-[1374px] h-[496px] relative top-16 left-36 flex flex-col justify-between">
        <div className="w-full h-fit flex justify-between">
          <p className="text-4xl">Explore Our Platform's Unique Features</p>
          <div className="grid grid-cols-2 gap-7">
            <div className="h-10 w-10 bg-[#14121E] rounded-[50px]">
              <img
                className="h-full w-full"
                src={require("../images/chevron-right.png")}
              />
            </div>
            <div className="h-10 w-10 bg-[#14121E] rounded-[50px]">
              <img
                className="h-full w-full rotate-180"
                src={require("../images/chevron-right.png")}
              />
            </div>
          </div>
        </div>
        <div className="h-[400px] w-[1240px] flex justify-between">
          <div className="h-full w-[400px] bg-[#17245B] text-white rounded-[36px] grid pt-12">
            <img
              className=" relative left-10"
              src={require("../images/div.icon-1.png")}
            />
            <h1 className="w-80 text-3xl relative left-10">
              Wide Range of Services
            </h1>
            <p className="w-80 text-xl font-light row-span-2  relative left-10">
              Find everything from web development to marketing under one roof.
              Our platform offers a diverse array of tech services
            </p>
          </div>
          <div className="h-full w-[400px] bg-[#17245B] text-white rounded-[36px] grid pt-12">
            <img
              className=" relative left-10"
              src={require("../images/div.icon-2.png")}
            />
            <h1 className="w-80 text-3xl relative left-10">Instant Search</h1>
            <p className="w-80 text-xl font-light row-span-2  relative left-10">
              Get connected to top tech professionals within moments. Our
              intuitive search function ensures quick access.
            </p>
          </div>
          <div className="h-full w-[400px] bg-[#17245B] text-white rounded-[36px] grid pt-12">
            <img
              className=" relative left-10"
              src={require("../images/div.icon-3.png")}
            />
            <h1 className="w-80 text-3xl relative left-10">Quality Scoring</h1>
            <p className="w-80 text-xl font-light row-span-2  relative left-10">
              We maintain high service standards. Our unique scoring system
              ensures you receive top-notch quality from professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
