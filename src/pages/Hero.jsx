import React from "react";
import underline from "./../assets/Underline.svg";
import dobera from "./../assets/Dobera-img.png";
import circle from "./../assets/circle.jpg";

const Hero = () => {
  return (
    <section className="w-full h-full bg-backGround">
      <div className="flex justify-between">
        <div className="hidden md:hidden lg:flex relative w-[20%] min-h-96">
          <div className="absolute w-full h-full left-12 flex flex-col gap-y-4 justify-end items-start">
            <div className="flex gap-x-8">
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
        </div>
        <div className="w-full md:w-[100%] lg:w-[60%] h-full">
          <div className="relative flex flex-col justify-center items-center max-w-full mt-[20vh]">
            <h2 className="text-white mt-8" id="optimizing">
              Optimizing{" "}
              <span className="mt-8" id="idea">
                Local Ideation
              </span>
            </h2>
            <div className="w-[76%] md:w-[64%] lg:w-[60%] mt-0 md:-mt-4 flex justify-end items-center">
              <img
                src={underline}
                className="w-[93px] md:w-[160px] lg:w-[230px]"
              />
            </div>
            <h2 className="text-white text-center flex gap-2" id="global">
              <p className="lg:mt-4 for">for</p> Global{" "}
              <span id="innovate">Innovation</span>
            </h2>
            <div className="z-20">
              <p id="paragraph" className="md:hidden mb-8">
                We help create brands, products & experiences that gains
                competitive advantage and engineer success.
              </p>
              <p id="paragraph" className="hidden md:flex w-[450px] text-lg">
                We help create brands, products & experiences that gains
                competitive advantage and engineer success.
              </p>
            </div>
            <div className="hidden md:flex justify-center items-center h-[386px] w-[386px] image_overlay -mt-16">
              <img src={dobera} alt="dobera" />
            </div>
          </div>
        </div>
        <div className="relative hidden md:hidden lg:flex w-[20%] min-h-full">
          <div className="absolute -bottom-36 w-full flex justify-end items-end">
            <img src={circle} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
