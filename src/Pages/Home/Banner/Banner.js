import React from "react";
import banner from "../../../images/bannerbackground.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})`, height: "85vh" }}
      className="w-full px-8 bg-no-repeat bg-cover flex justify-center items-center bg-center small-device"
    >
      <div>
        <h1 className=" md:text-4xl sm:text-2xl mb-3 tracking-widest font-semibold">
          Best food waiting for your belly
        </h1>
        <div className="flex items-center justify-center">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="rounded-full bg-white shadow flex md:w-7/12 sm:w-full mx-auto my-3">
              <input
                type="text"
                placeholder="Search Food Items"
                className="w-full rounded-full py-2 px-4 outline-none"
              />
              <button className="bg-red-600 rounded-full hover:bg-red-400 py-2 px-4">
                <p className="font-semibold text-base text-white uppercase">
                  Search
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
