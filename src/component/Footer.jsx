import React from "react";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import twitter from "../assets/twitter.svg";
import astra from "../assets/astra.png";

const Footer = () => {
  return (
    <div className="w-full  h-full bg-black px-8">
      <div className="w-full h-full md:hidden">
        <div className="flex items-center justify-between gap-x-12 w-full">
          <div className="flex flex-col gap-y-2 w-1/2">
            <h4 className="text-white/50 uppercase font-clash">legal</h4>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              terms of use
            </p>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              privacy policy
            </p>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              case study
            </p>
          </div>
          <div className="flex flex-col gap-y-2 w-1/2">
            <h4 className="text-white/50 uppercase font-clash mt-8">site</h4>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              about
            </p>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              services
            </p>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              case studies
            </p>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              blog
            </p>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              testimonials
            </p>
            <p className="text-white uppercase text-sm font-clash font-semibold-[14]">
              career
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center items-center flex-col gap-y-4">
          <p className="text-md text-white/80 uppercase font-clash font-[12px]">
            socials
          </p>
          <div className="flex gap-x-4 items-center">
            <img src={fb} alt="facebook icon" />
            <img src={ig} alt="instagram icon" />
            <img src={twitter} alt="twitter icon" />
          </div>
        </div>
        <div className="mt-6 flex justify-center flex-col gap-y-4">
          <img
            src={astra}
            alt="logo"
            className="cursor-pointer w-[108px] h-[30px]"
          />
          <p className="text-white/50 text-sm font-eudoxus">
            Copyright © Pukha Hub Innovations. All rights reserved.
          </p>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center h-full"></div>
    </div>
  );
};

export default Footer;
