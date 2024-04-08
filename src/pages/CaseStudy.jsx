import React from "react";
import image1 from "./../assets/case1.png";
import image2 from "./../assets/case2.jpg";

const imageData = [
  {
    id: 1,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image1}`,
  },
  {
    id: 2,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image2}`,
  },
  {
    id: 3,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image1}`,
  },
  {
    id: 4,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image2}`,
  },
  {
    id: 5,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image1}`,
  },
  {
    id: 6,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image2}`,
  },
  {
    id: 7,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image1}`,
  },
  {
    id: 8,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image2}`,
  },
  {
    id: 9,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image1}`,
  },
  {
    id: 10,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image2}`,
  },
  {
    id: 11,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
    image: `${image1}`,
  },
  {
    id: 12,
    title: "Woldie",
    description:
      "Amet vel amet elit dui blandit quis duis bibendum. Elit massa, leo risus pellentesque integer ornare faucibus est eu.",
  },
];

const CaseStudy = () => {
  return (
    <div className="w-full h-[700px] bg-red-400">
      <div className="w-full h-full ">
        <div className="flex justify-between items-center p-6 md:p-8">
          <h1 className="text-4xl font-clash text-white mt-8">Case studies</h1>
          <div className="flex flex-col gap-y-[0.1rem]">
            <p className="text-white text-sm font-clash uppercase mt-8">
              our projects
            </p>
            <div className="w-28 h-1 bg-white" />
          </div>
        </div>
        <div className="bg-green-500 max-w-screen h-96 flex overflow-x-auto scroll whitespace-nowrap"></div>
      </div>
      {/* <div className="flex w-full h-[500px] items-center rounded-lg"> */}
      {/* <div */}
      {/* id="slider" */}
      {/* className="relative w-full h-full flex items-center overflow-x-scroll scroll whitespace-nowrap gap-x-4" */}
      {/* > */}
      {/* {imageData.map((item) => ( */}
      {/* <div className="inline-block w-[617px] h-[415px]"> */}
      {/* <img */}
      {/* key={item.id} */}
      {/* src={item.image} */}
      {/* alt={item.title} */}
      {/* className="w-full h-full p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" */}
      {/* /> */}
      {/* </div> */}
      {/* ))} */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default CaseStudy;
