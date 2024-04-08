import React from "react";

const logoList = [
  "Worldie",
  "Functionility",
  "Tutum",
  "Tuido",
  "Nyska inc",
  "Nike",
];

const Client = () => {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  return (
    <div className="w-full h-[377px] bg-black text-white p-8">
      <div className="flex justify-center items-center w-full h-24">
        <p className="text-4xl font-clash text-left md:text-center">
          We’ve earned the trust of these organizations
        </p>
      </div>
      <div className="flex h-60">
        {/* <div className="marquee">
          <div className="marquee-group">
            {logoList.map((item, i) => (
              <div className="image-group" key={i}>
                <p className="logo text-2xl flex items-center">{item}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:flex marquee-group" id="marquees">
            {logoList.map((item, i) => (
              <div className="image-group" key={i}>
                <p className="logo text-2xl flex items-center">{item}</p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="scroller mt-6" data-speed="slow">
          <ul className="tag-list scroller__inner">
            {logoList.map((item, i) => (
              <li key={i} className="text-xl font-clash">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Client;
