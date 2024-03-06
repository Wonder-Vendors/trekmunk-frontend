"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Image from "next/image";
import { CircleDollarSign } from "lucide-react";
import ButtonAnimated from "../ui/ButtonAnimated";
import React from "react";
import { cn } from "@/lib/utils";
function TreksCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      console.log("current")
      setCurrent(api.selectedScrollSnap() + 1)
    })
    
  }, [api])
  const handlePaginationSelect = (index:number) =>{
    api?.scrollTo(index)
  }
  return (
    <MaxWidthWrapper className="py-10 flex flex-col items-center gap-y-8">
      <p className="text-center text-2xl lg:text-[40px] tracking-wider font-thin">Fixed Departures 2024</p>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
              <div className="p-1">
              <div className=" shadow-gray-400 shadow h-[400px] lg:h-[450px] w-full cursor-pointer group hover:shadow-gray-400 transition-all transform duration-500">
                <div className="w-full relative h-[45%] group-hover:opacity-80 transition-opacity transform duration-500">
                  <Image
                    src={"/tarsarTrek.jpeg"}
                    fill
                    alt="tarsarTrek"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 h-[55%] flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-600">7 Days & 6 Nights</p>
                    <p className="">Tarsar Masar Trek</p>
                    <div className="flex items-center gap-x-2">
                      <p className="text-lg font-semibold">INR 13,600</p>
                      <CircleDollarSign className="w-5 h-5 text-black stroke-[1px]" />
                    </div>
                  </div>

                  <div className="mb-4 w-full">
                    <div className="flex">
                      <p className="w-[70px]">Location</p>
                      <span className="px-2">:</span>
                      <span className="font-light"> Kashmir</span>
                    </div>
                    <div className="flex">
                      <p className="w-[70px]">Difficulty</p>
                      <span className="px-2">:</span>
                      <span className="font-light"> Moderate</span>
                    </div>
                    <div className="flex">
                      <p className="w-[70px]">Best time</p>
                      <span className="px-2">:</span>
                      <span className="font-light"> July-Oct</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <ButtonAnimated
                      title="MORE INFO"
                      className="w-32 text-xs"
                    />
                  </div>
                </div>
              </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      {/* pagination */}
      <div className="flex gap-2">
        {Array.from({length:count}).map((_,index)=>
        <div key={index} className={cn("w-2 h-2 bg-gray-500 rounded-full cursor-pointer",(index+1)==current&&"bg-[#FE9706]")}
        onClick={()=>handlePaginationSelect(index)}
        />)}
      </div>
    </MaxWidthWrapper>
  );
}

export default TreksCarousel;
