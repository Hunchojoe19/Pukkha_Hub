import React from "react";
import Underline from "./../assets/Underline.svg";
import dobera from "./../assets/Dobera-img.png";

const Hero = () => {
  return (
    <section className="w-full bg-backGround relative">
      <div className="h-[100%] container mx-auto p-6 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center mt-[10vh] relative">
          <h2 className="text-white" id="optimizing">
            Optimizing <span id="idea">Local Ideation</span>
          </h2>
          <div className="underline">
            <img
              src={Underline}
              className="w-[93px] md:w-[160px] lg:w-[230px]"
            />
          </div>
          <h2 className="text-white text-center" id="global">
            for Global <span id="innovate">Innovation</span>
          </h2>
        </div>
        <div className="mt-6">
          <p id="paragraph" className="md:hidden">
            We help create brands, products & experiences that gains competitive
            advantage and engineer success.
          </p>
          <p id="paragraph" className="hidden md:block z-100 w-[450px]">
            We help create brands, products & experiences that gains competitive
            advantage and engineer success.
          </p>
        </div>
        <div className="flex justify-between items-center h-42 w-full  md:hidden">
          <div className="w-full h-full flex justify-center items-center">
            <img src={dobera} alt="dobera" className="h-full mt-[-4.5rem]" />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-between md:items-center md:h-42 md:w-full">
        <div className="px-8 flex">
          <div className="w-[25%] h-full flex flex-col gap-y-5 mt-[20rem] ml-[5rem]">
            <div className="flex justify-start items-end gap-x-8">
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
            </div>
            <div className="flex justify-start items-end gap-x-8">
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
            </div>
            <div className="flex justify-start items-end gap-x-8">
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
              <div
                className="bg-blue-500 h-[12px] w-[12px] rounded-full"
                id="circle"
              ></div>
            </div>
          </div>
          <div className="w-[60%] h-full flex justify-center items-center">
            <img
              src={dobera}
              alt="dobera"
              className="mt-[-5rem] w-1/2 h-1/2 flex justify-center items-center ml-[-8rem]"
            />
          </div>
        </div>
        <div className="bg-green h-32 w-[200px]"></div>
      </div>
    </section>
  );
};

export default Hero;
