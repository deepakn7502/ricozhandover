import React from "react";

export default function WhyRicoz() {
  return (
    <div className="w-full h-[697px] bg-[#14121D] text-white grid  place-items-center">
      <h1 className=" font-semibold text-4xl">Why Choose Ricoz?</h1>
      <div className="w-[1220px] h-[550px] grid grid-cols-2">
        <div className="w-[500px] h-full">
          <img
            className="h-auto w-full"
            src={require("../images/unsplash_yTwXpLO5HAA.png")}
          />
        </div>
        <div className="w-[600px] h-full grid grid-cols-1 gap-4">
          <div className="w-full h-[100px] border-2 border-white flex justify-between">
            <div className="w-[70px] h-[70px] bg-white rounded-[50px] grid place-items-center">
              <img src={require("../images/image 89.png")} />
            </div>
            <div className="h-full w-[500px]">
              <h1 className="text-2xl font-medium grid gap-1">Vast Professional Network</h1>
              <p className="text-xl font-normal">
                Access a wide range of skilled tech professionals, all in one
                platform.
              </p>
            </div>
          </div>
          <div className="w-full h-[100px] border-2 border-white flex justify-between">
            <div className="w-[70px] h-[70px] bg-white rounded-[50px] grid place-items-center">
              <img src={require("../images/image 90.png")} />
            </div>
            <div className="h-full w-[500px]">
              <h1 className="text-2xl font-medium grid gap-1">Quality You Can Trust</h1>
              <p className="text-xl font-normal">
                Our stringent quality scoring system ensures that you receive
                exceptional services.
              </p>
            </div>
          </div>
          <div className="w-full h-[100px] border-2 border-white flex justify-between">
            <div className="w-[70px] h-[70px] bg-white rounded-[50px] grid place-items-center">
              <img src={require("../images/image 91.png")} />
            </div>
            <div className="h-full w-[500px]">
              <h1 className="text-2xl font-medium grid gap-1">Effortless Collaboration</h1>
              <p className="text-xl font-normal">
                Our integrated tools facilitate seamless communication and
                collaboration
              </p>
            </div>
          </div>
          <div className="w-full h-[100px] border-2 border-white flex justify-between">
            <div className="w-[70px] h-[70px] bg-white rounded-[50px] grid place-items-center">
              <img src={require("../images/image 288.png")} />
            </div>
            <div className="h-full w-[500px]">
              <h1 className="text-2xl font-medium grid gap-1">Save Time and Effort</h1>
              <p className="text-xl font-normal">
                With our platform, finding professionals and managing projects
                becomes effortless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
