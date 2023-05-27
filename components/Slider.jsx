"use client";

// import React, { useState } from "react";
// import { SliderData } from "./SliderData";
// import Image from "next/image";

// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// const Slider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <div className="max-w-[1240px] mx-auto" id="gallery">
//       <h1 className="text-2xl font-bold text-center">Project Gallery</h1>
//       <div className="relative flex justify-center p-4">
//         {SliderData.map((slide, index, index2) => {
//           return (
//             <div
//               key={index}
//               className={
//                 index === current
//                   ? "opacity-[1] ease-in duration-1000"
//                   : "opacity-0"
//               }
//             >
//               <FaArrowCircleLeft
//                 onClick={prevSlide}
//                 className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
//                 size={50}
//               />
//               {index === current && (
//                 <Image
//                   key={index2}
//                   src={slide.image}
//                   alt="/"
//                   height="600"
//                   width="1440"
//                   style={{ objectFit: "cover" }}
//                 />
//               )}
//               <FaArrowCircleRight
//                 onClick={nextSlide}
//                 className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
//                 size={50}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      id="gallery"
      className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"
    >
      <h1 className="text-2xl font-bold text-center p-4">Project Gallery</h1>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
