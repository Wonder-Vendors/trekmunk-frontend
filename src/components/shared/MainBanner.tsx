import { Footprints, Link, Search, MapPin, CalendarDays, Signal, Mountain, IndianRupee } from "lucide-react";
import Image from "next/image";
import NavigationOption from "./NavigationOption";
import ButtonAnimated from "../ui/ButtonAnimated";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";


const oswald = Oswald({ weight: "200", subsets: ["latin"] });

const trekDetails = {
  title: "GANGABAL LAKE TREK -LARGEST ALPINE LAKE OF KASHMIR",
  perks:[{id:"Location",icon:MapPin,title:"kashmir"},{id:"Days",icon:CalendarDays,title:"4 Days"},{id:"Distance",icon:Footprints,title:"30 KM"},{id:"height",icon:Mountain,title:"12,000FT"},{id:"difficulty",icon:Signal,title:"Easy to moderate"},
{id:"rate",icon:IndianRupee,title:"Rs. 9840"}
]
};

const MainBanner = () => {
  return (
    <div className="flex flex-col items-center md:justify-around">
      <div className="w-screen bg-[#333] flex flex-col gap-y-10 pb-9 overflow-hidden md:h-screen items-center bg-cover relative">

        <div className="z-10 flex items-center flex-col md:justify-around h-full">
        {/* logo */}
        <div className="relative w-52 md:w-72 h-24 cursor-pointer">
                <Image
                  src={"/trekmunkLogo.png"}
                  alt="logo"
                  fill
                  className="object-contain"
                />
        </div>
        <div className="flex flex-col items-center gap-y-7"> 
          <p
            className={cn(
              "text-white font-extralight md:text-md tracking-[8px] text-xs"
            )}
          >
            27°59'17.0"N 86°55'29.9"E
          </p>

          <p
            className={cn(
              "text-white text-4xl lg:text-[42px] md:text-2xl tracking-widest text-center font-light lg:w-[85%] lg:leading-tight"
            )}
          >
            {trekDetails.title}
          </p>
          <p className="text-white hidden md:block md:text-lg lg:text-xl">This trek is an astonishing high-elevation trail and considered as a most wonderful trek in Kashmir</p>
          </div>
          {/* perks of trek */}
          <div className="grid md:grid-cols-6 grid-cols-3 gap-y-4">
            {trekDetails.perks.map((perk)=>
            <div key={perk.id} className="flex gap-1 last:border-r-0 w-32 lg:w-36 flex-col items-center border-r border-r-white">
                <p className="text-white md:text-lg w-[80%] h-10 text-sm md:h-14 text-center uppercase">{perk.title}</p>
                <perk.icon className="text-white w-6 h-6 stroke-[1px] md:w-10 md:h-10"/>
            </div>)}
          </div>
           {/* book now */}
           <div>
            <ButtonAnimated title="BOOK NOW" type={"orangePrimary"} className="w-32"/>
          </div>
        </div>



        {/* bg image */}
        <div className="w-full h-full absolute bg-white">
          
          <Image
            src={
              "https://www.trekmunk.com/uploads/systemuploads/watermarked-PANO_20170815_161025.jpg"
            }
            alt="background image"
            fill
            className="object-center object-cover brightness-50"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
