
import VideoComponent from "@/components/VideoComponent";
import VideoLoadingState from "@/components/loadingStates/VideoLoadingState";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import { Search, Menu, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { Suspense, use } from "react";
import MidSection from "@/components/homePageSections/MidSection";
import InfoSection from "@/components/homePageSections/InfoSection";
import TreksCarousel from "@/components/homePageSections/TreksCarousel";
import ReviewsSection from "@/components/homePageSections/ReviewsSection";
import { popularTreks, trekMunkInfo } from "@/dummy";
import Link from "next/link";
import NavigationOption from "@/components/shared/NavigationOption";
import Footer from "@/components/shared/Footer";
import axios from "axios";
import { cookies } from "next/headers";


const oswald = Oswald({ weight: "300", subsets: ["latin"] });


async function getData() {
  const store = cookies()
  let token = store.get("token")?.value
  if(!token){
    return null
  }
  const user = await axios.get("http://localhost:5000/api/v1/user",{headers:{
    Cookie:`token=${token}`
  }})
  return {...user.data?.data}
}

export default async function Home() {
  const getUserCall = await getData()
  
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
                  className="object-contain"
                />
              </div>
              <NavigationOption data={getUserCall}/>
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
          <Footer/>
      </footer>
    </>
  );
}


