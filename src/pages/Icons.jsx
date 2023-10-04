import React from "react";
import rocket from "../assets/Rocket.png";
import item from "../assets/IconItem.png";

const dets = [
  {
    header: "Design",
    content:
      "Elit eu odio interdum facilisis curabitur mauris phasellus vitae. Pretium fames vel tortor et arcu, faucibus semper egestas amet. Venenatis arcu viverra feugiat vel libero",
    end: "READ MORE",
  },
  {
    header: "Technology",
    content:
      "Elit eu odio interdum facilisis curabitur mauris phasellus vitae. Pretium fames vel tortor et arcu, faucibus semper egestas amet. Venenatis arcu viverra feugiat vel libero",
    end: "READ MORE",
  },
  {
    header: "People",
    content:
      "Elit eu odio interdum facilisis curabitur mauris phasellus vitae. Pretium fames vel tortor et arcu, faucibus semper egestas amet. Venenatis arcu viverra feugiat vel libero",
    end: "READ MORE",
  },
];

const Icons = () => {
  return (
    <section className="bg-iconBcg flex flex-col w-full">
      <div className="container mx-auto">
        <div className="mt-12 flex flex-col justify-center items-start">
          <p className="text-white font-bold text-3xl font-clash md:ml-[13rem] md:mt-8 lg:ml-[2rem] lg:mt-[4rem]">
            Innovation That Works
          </p>
        </div>
        <div className="mt-12 flex flex-col justify-center items-center gap-y-6 mb-20 lg:flex-row lg:gap-x-20">
          {dets.map((item, i) => (
            <div
              className="bg-cardBackground w-[350px] h-[400px] rounded-[20px] lg:w-[405px]"
              key={i}
            >
              <div
                className="flex items-center justify-center w-[42px] h-[42px] mt-10 ml-6 bg-white-600"
                id="rocket_background"
              >
                <img src={rocket} alt="rocket" />
              </div>
              <div className="mt-4 ml-6 w-[314px]">
                <p className="text-white font-clash font-bold text-3xl mb-4">
                  {item.header}
                </p>
                <p className="text-left text-gray-300 font-eudoxus">
                  {item.content}
                </p>
                <p className="mt-16 text-white font-clash font-bold">
                  {item.end}
                </p>
                <div className="empty" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Icons;
