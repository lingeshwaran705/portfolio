import React from "react";
import Profile from "./Profile";
import LogoAnimation from "./LogoAnimation";

function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Profile />
      <div className="w-full hidden  sm:w-3/4 shadow-lg sm:flex justify-center items-center h-screen overflow-auto">
        <LogoAnimation />
      </div>
    </div>
  );
}

export default Home;
