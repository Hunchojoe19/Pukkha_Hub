import React from "react";
import Carousel from "../component/Carousel";
import right from "../assets/arrow-right.png";
import left from "../assets/arrow-left.png";

const Testimonials = () => {
  return (
    <div className="bg-black mb-8">
      <div className="relative flex items-center p-8">
        <div className="hidden lg:flex justify-center cursor-pointer items-center h-[40px] absolute rounded-lg left-40 top-20 bg-cardBackground w-12">
          <img src={left} />
        </div>
        <Carousel />
        <div className="hidden lg:flex justify-center cursor-pointer items-center h-[40px] absolute rounded-lg right-40 bg-cardBackground top-20 w-12">
          <img src={right} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
