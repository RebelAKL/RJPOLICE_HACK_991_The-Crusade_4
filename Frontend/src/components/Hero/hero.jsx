 import React from "react";
import "./hero.css";


const Hero = () => {
  return (
    <>
      <div className="flex w-full h-full z-[20] items-center justify-center min-h-screen bg-transparent relative">
        {/* left */}
        <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-50">
          {/* <img /> */}
        </div>

        {/* Content Container */}
        <div className=" header absolute top-0 z-10 text-center p-8">
      <h1 className="head">Analysis of FIR using AI/ML for proper Act and Section</h1>
        <h1 className="head2">Lorem ipsum </h1>
        <p className="text-lg text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis delectus soluta facere vero possimus
        </p>

      </div>

        {/* right */}
        <div className="hidden sm:block absolute top-0 right-0 h-full w-1/4">
          {/* <img /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
