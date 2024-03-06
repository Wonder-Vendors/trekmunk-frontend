import { Suspense } from "react";
import VideoLoadingState from "../loadingStates/VideoLoadingState";
import VideoComponent from "../VideoComponent";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { reviews } from "@/dummy";
import { Star } from "lucide-react";
import ButtonAnimated from "../ui/ButtonAnimated";
import Image from "next/image";

function ReviewsSection() {
  return (
    <div className="w-full my-8 flex flex-col gap-4">
      <p className="text-center text-2xl lg:text-[40px] tracking-wider font-thin">
        REVIEWS
      </p>
      <div className="flex flex-col items-center h-[500px] overflow-hidden">
        <Separator className="w-[95%] bg-black mb-4" />
        <div className="flex justify-between w-full relative px-10">
          {/* video left */}
          <div className="aspect-square w-[45%] relative overflow-hidden">
            <video
              className="object-contain w-full"
              autoPlay
              disableRemotePlayback
              disablePictureInPicture
              muted
              loop
              playsInline
              aria-label="video player"
            >
              <source
                src="https://trekmunk.b-cdn.net/review_panel_one.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {/* reviews carousel right */}
          <div className="flex w-[45%] h-[500px] flex-col items-center justify-center">
            <div
              className="shadow shadow-gray-300
           w-full p-10 flex flex-col gap-2 justify-between"
            >
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-grow">
                  <p className="leading-none">User Last</p>
                  <span className="text-xs text-gray-600">a month ago</span>
                </div>
                <div className="flex">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Star
                      key={index}
                      className="fill-yellow-400 stroke-transparent w-4"
                    />
                  ))}
                </div>
              </div>
              <p className="">
                Location :<span className="font-light"> Sandakphu</span>
              </p>
              <Separator />
              {/* review description */}
              <p className="line-clamp-6 mb-2 text-justify">
                {reviews[1].userDescription}
              </p>
              <ButtonAnimated title="READ MORE" className="w-32" />
            </div>
          </div>
        </div>
      </div>
      {/* awards and google ratings */}
      <div className="flex justify-between items-center px-10">
          {/* awards */}
          <div className="flex flex-grow">
              <div className="h-36 w-72 object-contain relative">
              <Image src={"/award1.png"} fill alt="trip advisor award"/>
              </div>
              <div className="h-36 w-32 object-contain relative">
                <Image src={"/award2.png"} fill alt="trip advisor award"/>
              </div>
          </div>
          <ButtonAnimated title="READ 700+ REVIEWS" className="w-52"/>
          {/* google rating */}
          <div className="flex flex-grow items-end justify-end">
          <div className="w-64 h-20 object-contain relative">
            <Image src={"/googleRating.png"} fill alt="google rating"/>
          </div>
          </div>
      </div>
    </div>
  );
}

export default ReviewsSection;
