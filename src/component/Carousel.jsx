import React from "react";
import mike from "../assets/mike.svg";

const Carousel = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center md:items-center  h-full px-4 pt-4">
        <p className="text-center text-eudoxus text-white pb-2 lg:w-[50%] md:text-xl md:mb-4">
          Working with Micky is a pleasure. We are impressed by the way how
          their teamwork. It’s professional, at a good pace with great
          communication about our business needs. They were prepared extremely
          well to work with our company.
        </p>
        <div className="flex justify-center w-full">
          <img src={mike} alt="mike" className="w-[57px] h-[60px]" />
        </div>
        <p className="text-white font-clash text-center text-lg mt-2 mb-2">
          Mike Moore
        </p>
        <p className="uppercase text-sm text-gray-300 font-clash text-center">
          ceo, woldie
        </p>
      </div>
    </div>
  );
};

export default Carousel;
