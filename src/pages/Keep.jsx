// import React from "react";

// const Keep = () => {
//   const initSlider = () => {
//     const imageList = document.querySelector(".slider-wrapper .image-list");
//     const slideButtons = document.querySelectorAll(
//       ".slider-wrapper .slide-button"
//     );
//     const sliderScrollbar = document.querySelector(
//       ".container .slider-scrollbar"
//     );
//     const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

//     // Handle scrollbar thumb drag
//     scrollbarThumb.addEventListener("mousedown", (e) => {
//       const startX = e.clientX;
//       const thumbPosition = scrollbarThumb.offsetLeft;
//       const maxThumbPosition =
//         sliderScrollbar.getBoundingClientRect().width -
//         scrollbarThumb.offsetWidth;

//       // Update thumb position on mouse move
//       const handleMouseMove = (e) => {
//         const deltaX = e.clientX - startX;
//         const newThumbPosition = thumbPosition + deltaX;

//         // Ensure the scrollbar thumb stays within bounds
//         const boundedPosition = Math.max(
//           0,
//           Math.min(maxThumbPosition, newThumbPosition)
//         );
//         const scrollPosition =
//           (boundedPosition / maxThumbPosition) * maxScrollLeft;

//         scrollbarThumb.style.left = `${boundedPosition}px`;
//         imageList.scrollLeft = scrollPosition;
//       };

//       // Remove event listeners on mouse up
//       const handleMouseUp = () => {
//         document.removeEventListener("mousemove", handleMouseMove);
//         document.removeEventListener("mouseup", handleMouseUp);
//       };

//       // Add event listeners for drag interaction
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleMouseUp);
//     });

//     // Slide images according to the slide button clicks
//     slideButtons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const direction = button.id === "prev-slide" ? -1 : 1;
//         const scrollAmount = imageList.clientWidth * direction;
//         imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       });
//     });

//     // Show or hide slide buttons based on scroll position
//     const handleSlideButtons = () => {
//       slideButtons[0].style.display =
//         imageList.scrollLeft <= 0 ? "none" : "flex";
//       slideButtons[1].style.display =
//         imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
//     };

//     // Update scrollbar thumb position based on image scroll
//     const updateScrollThumbPosition = () => {
//       const scrollPosition = imageList.scrollLeft;
//       const thumbPosition =
//         (scrollPosition / maxScrollLeft) *
//         (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
//       scrollbarThumb.style.left = `${thumbPosition}px`;
//     };

//     // Call these two functions when image list scrolls
//     imageList.addEventListener("scroll", () => {
//       updateScrollThumbPosition();
//       handleSlideButtons();
//     });
//   };

//   window.addEventListener("resize", initSlider);
//   window.addEventListener("load", initSlider);
//   return (
//     <div>
//       <div className="h-[100%] container mx-auto p-6 flex flex-col justify-center items-center">
//         <div className="flex justify-between items-center h-42 w-full  md:hidden">
//           <div className="w-full h-full flex justify-center items-center">
//             <img src={dobera} alt="dobera" className="h-full z-0" />
//           </div>
//         </div>
//       </div>
//       <div className="hidden md:flex md:justify-between md:items-center md:h-42 md:w-full">
//         <div className="px-8 flex">
//           <div className="absolute w-[25%] top-60 h-full flex flex-col gap-y-5 mt-[10rem] ml-[5rem]"></div>
//           <div className="absolute left-80 top-36 h-full flex justify-center items-center">
//             <img
//               src={dobera}
//               alt="dobera"
//               className="h-[60%] ml-24 z-[0] flex justify-center items-center"
//             />
//           </div>
//         </div>
//         <div className="mt-9 underline flex justify-end items-center">
//           <img src={Underline} className="" />
//         </div>
//         <div className="bg-green h-32 w-[200px]"></div>
//       </div>
//     </div>
//   );
// };

// export default Keep;
import React from "react";
import styled, { keyframes, css } from "styled-components";

function App() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>With Great Outcomes.</Text>
        <Note>Our customers have gotten offers from awesome companies.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
