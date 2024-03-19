import React from "react";

const Keep = () => {
  const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(
      ".slider-wrapper .slide-button"
    );
    const sliderScrollbar = document.querySelector(
      ".container .slider-scrollbar"
    );
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition =
        sliderScrollbar.getBoundingClientRect().width -
        scrollbarThumb.offsetWidth;

      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;

        // Ensure the scrollbar thumb stays within bounds
        const boundedPosition = Math.max(
          0,
          Math.min(maxThumbPosition, newThumbPosition)
        );
        const scrollPosition =
          (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });
  };

  window.addEventListener("resize", initSlider);
  window.addEventListener("load", initSlider);
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
