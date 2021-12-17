import React from "react";
import profile from "../img/Profile2.jpg";
import Skills from "./Skills";

function Profile() {
  return (
    <div className="w-full md:w-1/2 text-center sm:p-4 shadow-0xl">
      <Avatar />
      <Dev />
      <Skills />
    </div>
  );
}

function Dev() {
  return (
    <div>
      <div className="p-4 w-full group text-center">
        <h1 className="font-bold text-gray-800 sm:tracking-wider text-3xl sm:text-4xl  py-2 text-center w-full">
          Langesh
        </h1>
        <h1 className="font-bold text-gray-700 sm:tracking-wider text-3xl sm:text-4xl  py-2 text-center w-full">
          Frontend Dev
        </h1>
        <span className="w-10 animate-ping  sm:animate-none sm:w-16 sm:h-16 font-serif h-10 mx-auto my-10 bg-gradient-to-tr rounded-full text-2xl text-white font-bold flex items-center justify-center from-green-400 to-blue-500">
          L
        </span>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <>
      <div
        className="bg-gradient-to-r  from-green-400
      to-blue-500 w-full rounded  mx-auto p-4 "
      >
        <div
          style={{ backgroundImage: `url(${profile})` }}
          className="bg-cover  bg-center h-40 w-40 mx-auto  rounded flex items-center justify-center relative"
        ></div>
      </div>
    </>
  );
}

export default Profile;
