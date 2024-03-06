import VideoComponent from "@/components/VideoComponent";
import VideoLoadingState from "@/components/loadingStates/VideoLoadingState";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import { Search, Menu, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { Suspense } from "react";
import MidSection from "@/components/homePageSections/MidSection";
import InfoSection from "@/components/homePageSections/InfoSection";
import TreksCarousel from "@/components/homePageSections/TreksCarousel";
import ReviewsSection from "@/components/homePageSections/ReviewsSection";
import { popularTreks, trekMunkInfo } from "@/dummy";
import Link from "next/link";
import NavigationOption from "@/components/shared/NavigationOption";

const oswald = Oswald({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div>
        <div className="flex flex-col items-center">
          <div className="absolute w-screen flex flex-col gap-y-10 h-[550px] md:h-screen items-center justify-center md:justify-between">
            <div className="flex items-center w-full justify-between md:px-10 lg:px-20 px-6">
              <Link href={"/registration-success"}>
              <Search size={20} className="text-white cursor-pointer" />
              </Link>
              <div className="relative w-52 md:w-72 h-24 cursor-pointer">
                <Image
                  src={"/trekmunkLogo.png"}
                  alt="logo"
                  fill
                  objectFit="contain"
                />
              </div>
              <NavigationOption/>
              {/* <Link href={"/login"} passHref>
                <Menu size={20} className="text-white cursor-pointer" />
              </Link> */}
            </div>

            <div className="text-center space-y-8 lg:space-y-6">
              <p
                className={cn(
                  "text-white font-extralight md:text-md tracking-[8px] text-xs"
                )}
              >
                27°59'17.0"N 86°55'29.9"E
              </p>
              <p
                className={cn(
                  "text-white text-4xl lg:text-7xl xl:text-[80px] tracking-widest md:tracking-wider",
                  oswald.className
                )}
              >
                WELCOME TO HIMALAYAS
              </p>
              <div className="flex items-center flex-col justify-center md:flex-row gap-2">
                <ButtonAnimated
                  title="FIXED DEPARTURES"
                  className="w-40"
                  type="ghostedWhiteOswald"
                />
                <ButtonAnimated
                  title="ADVENTURES"
                  className="w-40"
                  type="ghostedWhiteOswald"
                />
                <ButtonAnimated
                  title="CONTACT US"
                  className="w-40"
                  type="ghostedWhiteOswald"
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="opacity-75 flex flex-col justify-between items-center"
            >
              <p className="text-white -rotate-90 mb-6">Scroll</p>
              <div className="w-[1px] h-8 bg-white" />
            </div>
          </div>
        </div>
        <Suspense fallback={<VideoLoadingState />}>
          <VideoComponent />
        </Suspense>
      </div>

      {/* mid section */}
      <MidSection />
      <InfoSection />
      <TreksCarousel />
      <ReviewsSection />
      <div className="w-full h-[400px] relative my-8">
        <Image
          src={"https://trekmunk.b-cdn.net/desktop_media_one.png"}
          fill
          alt="media_articles"
          className="object-center object-cover"
        />
      </div>
      {/* info */}
      <div className="flex flex-col gap-4 my-8">
        <div className="flex flex-col gap-2">
          <p className="text-center px-[15%] text-sm font-light">
            {trekMunkInfo.line1}
          </p>
          <p className="text-center px-[15%] text-sm font-light">
            {trekMunkInfo.line2}
          </p>
        </div>
        <p className="text-center px-[15%] text-sm font-light">
          {popularTreks.title}
          <span className="text-orange-500 cursor-pointer">
            {popularTreks.content}
          </span>
        </p>
      </div>
      <footer>
        <div className="w-full h-[550px] relative flex flex-col items-center justify-around">
          <div className="w-full h-full brightness-[30%] absolute -z-10">
            <Image
              src={"https://trekmunk.b-cdn.net/Footer.webp"}
              alt="footerImage"
              fill
              className="object-bottom object-cover"
            />
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <div className="flex gap-14 items-center">
              <Image
                src={"/atoai.png"}
                alt="atoai"
                height={"100"}
                width={"100"}
                className="w-36 h-36 object-contain"
              />
              <Image
                src={"/iato.png"}
                alt="iato"
                height={"100"}
                width={"100"}
                className="w-36 h-36 object-contain"
              />
              <Image
                src={"/rtsoi.png"}
                alt="rtsoi"
                height={"100"}
                width={"100"}
                className="w-36 h-36 object-contain"
              />
              <Image
                src={"/ukHeaven.png"}
                alt="ukHeaven"
                height={"100"}
                width={"100"}
                className="w-36 h-36 object-contain"
              />
              <Image
                src={"/imf.png"}
                alt="imf"
                height={"100"}
                width={"100"}
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* options */}
            <div className="w-[95%] flex items-center justify-between border-y py-2 px-2 border-y-white text-2xl text-white">
              <p className="cursor-pointer">Company</p>
              <p className="cursor-pointer">Legals</p>
              <p className="cursor-pointer">Destinations</p>
              <p className="cursor-pointer">Treks by Month</p>
              <p className="cursor-pointer">Treks by Difficulty</p>
              <p className="cursor-pointer">Contact</p>
            </div>
            {/* socials */}
            <div className="flex items-center w-full justify-end px-20 gap-6">
              <Facebook className="fill-gray-200 stroke-none w-[28px] h-[28px] cursor-pointer hover:fill-white"/>
              <Instagram className="stroke-gray-200 w-[28px] h-[28px] cursor-pointer hover:stroke-white"/>
              <Twitter className="fill-gray-200 stroke-none w-[28px] h-[28px] cursor-pointer hover:fill-white"/>
              <Youtube className="stroke-gray-200  w-[28px] h-[28px] cursor-pointer hover:stroke-white"/>
              {/* trip advisor svg */}
              <svg
                className="fill-gray-200 hover:fill-white cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 50 50"
              >
                <path d="M 25 11 C 19.167969 11 13.84375 12.511719 9.789063 15 L 2 15 C 2 15 3.753906 17.152344 4.578125 19.578125 C 2.96875 21.621094 2 24.195313 2 27 C 2 33.628906 7.371094 39 14 39 C 17.496094 39 20.636719 37.492188 22.828125 35.105469 L 25 38 L 27.171875 35.105469 C 29.363281 37.492188 32.503906 39 36 39 C 42.628906 39 48 33.628906 48 27 C 48 24.195313 47.03125 21.621094 45.421875 19.578125 C 46.246094 17.152344 48 15 48 15 L 40.203125 15 C 36.148438 12.511719 30.828125 11 25 11 Z M 25 13 C 28.882813 13 32.585938 13.707031 35.800781 15.011719 C 30.964844 15.089844 26.824219 18.027344 25 22.214844 C 23.171875 18.019531 19.023438 15.078125 14.171875 15.011719 L 14.242188 14.988281 C 17.453125 13.699219 21.144531 13 25 13 Z M 14 17 C 19.523438 17 24 21.476563 24 27 C 24 32.523438 19.523438 37 14 37 C 8.476563 37 4 32.523438 4 27 C 4 21.476563 8.476563 17 14 17 Z M 36 17 C 41.523438 17 46 21.476563 46 27 C 46 32.523438 41.523438 37 36 37 C 30.476563 37 26 32.523438 26 27 C 26 21.476563 30.476563 17 36 17 Z M 14 21 C 10.6875 21 8 23.6875 8 27 C 8 30.3125 10.6875 33 14 33 C 17.3125 33 20 30.3125 20 27 C 20 23.6875 17.3125 21 14 21 Z M 36 21 C 32.6875 21 30 23.6875 30 27 C 30 30.3125 32.6875 33 36 33 C 39.3125 33 42 30.3125 42 27 C 42 23.6875 39.3125 21 36 21 Z M 14 23 C 16.210938 23 18 24.789063 18 27 C 18 29.210938 16.210938 31 14 31 C 11.789063 31 10 29.210938 10 27 C 10 24.789063 11.789063 23 14 23 Z M 36 23 C 38.210938 23 40 24.789063 40 27 C 40 29.210938 38.210938 31 36 31 C 33.789063 31 32 29.210938 32 27 C 32 24.789063 33.789063 23 36 23 Z M 14 25 C 12.894531 25 12 25.894531 12 27 C 12 28.105469 12.894531 29 14 29 C 15.105469 29 16 28.105469 16 27 C 16 25.894531 15.105469 25 14 25 Z M 36 25 C 34.894531 25 34 25.894531 34 27 C 34 28.105469 34.894531 29 36 29 C 37.105469 29 38 28.105469 38 27 C 38 25.894531 37.105469 25 36 25 Z"></path>
              </svg>
            </div>
          </div>
          <p className="text-2xl text-white font-thin tracking-wide">
            Trekmunk Pvt Ltd. All Right Reserved. Developed and maintained by
            Wonder Vanders Pvt Ltd
          </p>
        </div>
      </footer>
    </>
  );
}
