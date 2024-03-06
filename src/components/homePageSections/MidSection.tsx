"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import ButtonAnimated from "../ui/ButtonAnimated";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const images = [
  {
    id: 0,
    coverImage: "bg-[url('/treks.jpg')]",
    hoverImage: "bg-[url('/treks-hover.jpg')]",
    imageOrigin: "bg-left",
    title: "Treks",
    description:
      "Are you looking for High Altitude Himalayan Treks? We have got the best Himalayan treks for you.",
  },
  {
    id: 1,
    coverImage: "bg-[url('/expedition.jpg')]",
    hoverImage: "bg-[url('/expedition-hover.jpg')]",
    imageOrigin: "bg-center",
    title: "Expedition",
    description:
      "Are you looking for Mountaineering Expeditions in the Himalayas? We have got a few of the best expeditions for you.",
  },
  {
    id: 2,
    coverImage: "bg-[url('/backpacking.jpg')]",
    hoverImage: "bg-[url('/backpacking-hover.jpg')]",
    imageOrigin: "bg-right",
    title: "Backpacking Trips",
    description:
      "Are you looking for backpacking trips in India with likeminded people? Here are the best options for you.",
  },
];

function MidSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isDisableHoverImage, setisDisableHoverImage] = useState<boolean>(true);
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setisDisableHoverImage(false);
  };

  const handleMouseLeave = () => {
    setisDisableHoverImage(true);
  };
  return (
    <MaxWidthWrapper className="gap-4 md:gap-6 lg:gap-y-8 flex flex-col lg:py-8 py-4 md:py-6 items-center">
      
        <p className="text-center text-2xl lg:text-[40px] tracking-wider font-thin">
          LIVE BY ADVENTURE
        </p>
        <div className="w-full flex flex-col lg:flex-row lg:h-[472px] lg:justify-center gap-6 lg:gap-4">
          {images.map((e, index) => {
            return (
              <div
                key={e.id}
                className="lg:w-96 w-full flex relative h-[472px]"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={cn(
                    "h-full z-10 absolute transition-all brightness-50 transform duration-500 ease-in-out origin-left",
                    images[hoveredIndex].hoverImage,
                    isDisableHoverImage ? "w-0" : cn("w-full", e.imageOrigin)
                  )}
                />
                <div
                  key={e.id}
                  className={cn(
                    "w-full bg-cover transition-all duration-500 brightness-75",
                    e.coverImage
                  )}
                />
                <div
                  className="w-full h-full bg-transparent absolute z-20 flex flex-col items-center gap-y-4 justify-center
                px-6 py-10
                "
                >
                  <p
                    className={cn(
                      "relative lg:text-3xl text-xl lg:font-light text-white tracking-widest text-center",
                      hoveredIndex != index &&
                        !isDisableHoverImage &&
                        "opacity-45"
                    )}
                  >
                    {e.title.toUpperCase()}
                  </p>
                  <div
                    className={cn(
                      "transition-all flex flex-col items-center justify-between transform duration-1000 opacity-0 origin-bottom ease-in-out h-0 overflow-hidden",
                      hoveredIndex == index &&
                        !isDisableHoverImage &&
                        "h-full opacity-100"
                    )}
                  >
                    <p
                      className={cn(
                        "text-center lg:text-[19px] font-extralight text-white tracking-wide overflow-hidden"
                      )}
                    >
                      {e.description}
                    </p>
                    <ButtonAnimated
                      title="MORE INFO"
                      className="w-36 flex-col items-center font-light tracking-wider"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      
      <ButtonAnimated title="SHOW ALL ADVENTURES" className="w-60"/>
    </MaxWidthWrapper>
  );
}

export default MidSection;
