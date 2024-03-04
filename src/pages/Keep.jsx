import React from "react";

const Keep = () => {
  return (
    <div>
      <div className="h-[100%] container mx-auto p-6 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center h-42 w-full  md:hidden">
          <div className="w-full h-full flex justify-center items-center">
            <img src={dobera} alt="dobera" className="h-full z-0" />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-between md:items-center md:h-42 md:w-full">
        <div className="px-8 flex">
          <div className="absolute w-[25%] top-60 h-full flex flex-col gap-y-5 mt-[10rem] ml-[5rem]"></div>
          <div className="absolute left-80 top-36 h-full flex justify-center items-center">
            <img
              src={dobera}
              alt="dobera"
              className="h-[60%] ml-24 z-[0] flex justify-center items-center"
            />
          </div>
        </div>
        <div className="mt-9 underline flex justify-end items-center">
          <img src={Underline} className="" />
        </div>
        <div className="bg-green h-32 w-[200px]"></div>
      </div>
    </div>
  );
};

export default Keep;
