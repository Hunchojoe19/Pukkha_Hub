import React from "react";
import speaker from "../assets/Speaker.png";
import { useSpeechSynthesis } from "react-speech-kit";

const puka = `"Pukha  [puh · kuh]
            /ˈpʌkə/"`;
const adjective = "Adjective";
const one = "Superior or of high quality; absolutely first class.";
const two =
  "Genuine or authentic; hence of behaviour: correct, socially acceptable or proper.";
const three = "(Britain, slang) Excellent, fantastic, great.";
const CTA = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <section className="relative bg-CtaBackground w-full">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 ml-[5rem] px-8">
          <div className="sm:hidden lg:flex lg:mt-[1rem] flex justify-start items-start gap-x-8">
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
        <div className="mt-16 flex justify-center items-center gap-6">
          <p className="text-white" id="puk">
            Pukha <span id="span_bracket"> [puh · kuh]</span> -{" "}
            <span id="span_bracket">/ˈpʌkə/</span>
          </p>
          <img
            src={speaker}
            alt="speech reader"
            className="cursor-pointer"
            onClick={() =>
              speak({
                text: `${puka} is an ${adjective} that means ${one} it also means ${two}, lastly it means ${three}`,
              })
            }
          />
        </div>
        <div className="mt-6" id="adjective">
          <p className="p-adjective">Adjective</p>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center">
          <div className="flex gap-x-2 justify-center items-center">
            <p className="one_span">1.</p>
            <p className="one">
              Superior <span className="one_span">or of</span> high quality;
              absolutely first class.
            </p>
          </div>
          <div className="flex gap-x-2 justify-center items-center mt-1 ml-2 md:hidden">
            <p className="one_span">2.</p>
            <p className="two">
              Genuine or authentic; hence of behaviour: correct, socially
              acceptable or proper.
            </p>
          </div>
          <div className="hidden md:flex gap-x-2 justify-center items-center ml-2">
            <p className="one_span">2.</p>
            <p className="two">
              Genuine or authentic; hence of behaviour: <br /> correct, socially
              acceptable or proper.
            </p>
          </div>
          <div className="flex gap-x-2 justify-center items-center ml-4">
            <p className="one_span mt-4">3.</p>
            <p className="three">
              <span className="one_span">(Britain, slang)</span> Excellent,
              fantastic, great.
            </p>
          </div>
          <div className="mt-8 flex justify-center items-center mb-24">
            <p className="p_origin">
              origin: <span className="ml-3">Pukka</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
