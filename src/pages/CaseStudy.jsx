import React from "react";

const CaseStudy = () => {
  return (
    <div className="w-full h-[700px] bg-red-400">
      <div className="w-full h-full p-4">
        <div className="flex justify-between items-center mt-8">
          <h1 className="text-4xl font-clash text-white">Case studies</h1>
          <div className="flex flex-col gap-y-[0.1rem]">
            <p className="text-white text-sm font-clash uppercase">
              our projects
            </p>
            <div className="w-28 h-1 bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
