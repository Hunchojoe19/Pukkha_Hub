import React from "react";
import logo from "./../assets/Pukha-Logo.png";

const NavBar = () => {
  const [open, setOpen] = React.useState("");

  return (
    <nav className="relative w-full p-4 bg-navbarBcg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="pt-2 w-32 h-[100%]">
            <img src={logo} alt="logo" className="border-none w-1/2 h-full" />
            <p className="pukka mt-2">Pukha Hub</p>
            <p className="innovation">Innovations</p>
          </div>
          <div className="hidden md:flex space-x-10">
            <a
              href=""
              className="hover:text-darkGrayishBlue text-white font-clash lg:text-xl"
            >
              About
            </a>
            <a
              href=""
              className="hover:text-darkGrayishBlue text-white font-clash lg:text-xl"
            >
              Our Approach
            </a>
            <a
              href=""
              className="hover:text-darkGrayishBlue text-white font-clash lg:text-xl"
            >
              Our Portfolio
            </a>
            <a
              href=""
              className="hover:text-darkGrayishBlue text-white font-clash lg:text-xl"
            >
              Careers
            </a>
          </div>
          <a
            href=""
            className="hidden md:block p-3 px-8 pt-2 font-clash font-medium text-black bg-buttonBackground rounded-full baseline md:h-12 md:flex md:items-center md:justify-center"
          >
            Get in Touch
          </a>
          <button
            id="menu-btn"
            className={`block hamburger md:hidden focus:outline-none ${
              open ? "open" : !open
            }`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="md:hidden">
          <div
            id="menu"
            className={`${
              open ? "" : "hidden"
            } absolute z-10 flex flex-col items-center self-end py-16 mt-4 space-y-10 font-bold bg-navbarBcg sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-gold`}
          >
            <a href="" className="hover:text-darkGrayishBlue">
              About
            </a>
            <a href="" className="hover:text-darkGrayishBlue">
              Our Approach
            </a>
            <a href="" className="hover:text-darkGrayishBlue">
              Our Portfolio
            </a>
            <a href="" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a
              href=""
              className="md:hidden block p-3 px-6 h-12 flex justify-center items-center pt-2 bg-buttonBackground text-black font-clash font-medium bg-brightRed rounded-full baseline"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
