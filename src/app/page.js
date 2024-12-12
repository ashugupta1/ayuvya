"use client";
import React from "react";
import "./globals.css";

const Page = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Container for the images */}
      <div className="h-96 w-3/4  bg-slate-900 rounded-3xl flex justify-between items-center group relative overflow-hidden">
        {/* Image 1 */}
        <div className=" h-full w-1/3 transition-all duration-500 ease-in-out hover:w-[200%]">
          <div
            className="h-full w-full bg-cover bg-center rounded-l-3xl brightness-90"
            style={{ backgroundImage: "url('/strength.jpg')" }}
          >
            <span className="flex items-between justify-between  ml-4 text-white text-[20px]  mr-4">
              {" "}
              STRENGTH{" "}
              <svg
                className="h-10 w-10 text-slate-500 cursor-pointer rounded-full mt-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="white"
                radius="50%"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
            {/* <div className="text-white text-[20px] ml-2">STRENGTH</div>
            <div className="flex items-end justify-end mr-3 mt-1">
              
            </div> */}
          </div>
        </div>

        {/* Image 2 */}
        <div className=" h-full w-1/3 transition-all duration-500 ease-in-out  hover:w-[200%] opacity-100 text-sm">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/mobility.jpg')" }}
          >
            <span className="flex items-between justify-between  ml-4 text-white text-[20px]  mr-4">
              
              MPBILITY
              <svg
                className="h-10 w-10 text-slate-500 cursor-pointer rounded-full mt-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="white"
                radius="50%"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </div>
        </div>

        {/* Image 3 */}
        <div className=" h-full w-1/3 transition-all duration-500 ease-in-out  hover:w-[200%]  text-white">
          <div
            className="h-full w-full bg-cover bg-center rounded-r-3xl brightness-90"
            style={{ backgroundImage: "url('/drills.jpeg')" }}
          >
            <span className="flex items-between justify-between  ml-4 text-white text-[20px]  mr-4">
              DRILLS
              <svg
                className="h-10 w-10 text-slate-500 cursor-pointer rounded-full mt-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="white"
                radius="50%"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
