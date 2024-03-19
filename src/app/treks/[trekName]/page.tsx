"use client"
import MainBanner from "@/components/shared/MainBanner";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import "../../embla.css"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EmblaOptionsType } from 'embla-carousel'
import { cancellationPolicies, trekPromises } from "@/dummy";
import { Dot, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { Departures, columns } from "./departures/columns";
import { DataTable } from "./departures/data-table";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EmblaCarousel from "@/components/shared/ParallaxCarousel";
import ReviewsSection from "@/components/homePageSections/ReviewsSection";
import SideBarNavigation from "@/components/shared/SideBarNavigation";
import { useEffect, useRef } from "react";
import axios from "axios";

const TrekBentoInfo = [
  { id: "Best Time", data: "May-July, Sept-Nov" },
  { id: "Base Camp", data: "Naranag, Kashmir" },
  { id: "Pickup Point", data: "Toruist Reception Center, Srinagar" },
  { id: "Minimum Age", data: "8" },
];
const hightlights = [
  "Twin Lakes: Gangabal Lake and Nundkol Lake",
  "Gangbal Lake is the most beautiful lake in Kashmir Great Lakes Trek.",
  "Harmukh is part of the Himalaya Range and is located between Nallah Sindh in the south and Kishanganga River in the north, rising above Gangabal Lake in the vicinity of Kashmir valley.",
];

const FAQS = [
  {id:"1",title:"What things are needed to be carried?",description:"Rucksack, high ankle trekking shoes, one fleece jacket, one down feather / hollofil jacket, 3 pairs of quick-dry T-shirts and trek pants, 5-6 pairs of socks, balaclava, a daypack, sunscreen SPF 50+, scarf, towel, lip balm, headlamp/torch, 2 water bottles of 1 litre, and personal medicines. "}
]
const itinerary = [
  {
    id: "Day 1",
    title: "Drive from Srinagar to Naranag",
    description:
      "We drive to the Naranag base camp and have an acclimatization stroll around the vestiges of an old sanctuary and interact with the village locale. Overnight stay in Naranag.",
    impPoints: [
      { id: "Meals", data: "Dinner only" },
      { id: "Accommodation", data: "Tents/Homestay" },
      { id: "Time Taken", data: "2.5 hours drive" },
      { id: "Altitude", data: "6.982Ft" },
      { id: "Distance", data: "50 KM" },
    ],
  },
  { id: "Day 2", title: "Trek from Naranag to trunkhol" },
  {
    id: "Day 3",
    title: "Trek from Trunkhol to Gangabal and camp at Nandansar Lake",
  },
  { id: "Day 4", title: "Trek to Naranag and Drive to Srinagar" },
];

// type Departures = {
//   id:string;
//   month:string;
//   available:string;
// }

const impLinks = [
  {id:"0",title:"GET YOURSELF FIT"},
  {id:"1",title:"NUTRITION TIPS"},
  {id:"2",title:"THINGS TO TAKE"},
  {id:"3",title:"HEALTH & SAFETY"},
]


export default function Trek({
  params: { trekName },
}: {
  params: { trekName: string };
}) {
  const data: Departures[] = [
    { id: "sdsd", days: "04 May 2024 - 10 May 2024", available: true },
    { id: "sdsd", days: "04 May 2024 - 10 May 2024", available: false },
    { id: "sdsd", days: "04 May 2024 - 10 May 2024", available: true },
  ];

  
  const OPTIONS: EmblaOptionsType = {align:"center",dragFree: true, loop: true }
  const SLIDES = [
    {id:0,img:"https://www.trekmunk.com/uploads/systemuploads/Harmukh-Valley-trek-in-kashmir.jpg"},
    {id:1,img:"https://www.trekmunk.com/uploads/systemuploads/watermarked-PANO_20170815_161025.jpg"},
    {id:2,img:"https://www.trekmunk.com/uploads/systemuploads/Harmukh-Valley-trek-and-gangbal-lake-in-kashmir.jpg"},
    {id:3,img:"https://www.trekmunk.com/uploads/systemuploads/Harmukh-Valley-and-Gangbal-Trek.jpg"},
    {id:4,img:"https://www.trekmunk.com/uploads/systemuploads/Harmukh-valley-trek.jpg"},
  ]

  const overviewRef = useRef<HTMLDivElement>(null)
  const itineraryRef = useRef<HTMLDivElement>(null)
  const howToReachRef = useRef<HTMLDivElement>(null)
  const departuresRef = useRef<HTMLDivElement>(null)
  const inclusionRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)
  // async function getData() {
  //   const data = await axios.get("http://localhost:5000/api/v1/user",{withCredentials:true})
  //   console.log(data)
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
  return (
    <>

      
      <div className="relative overflow-hidden">
        {/* banner */}
        <SideBarNavigation overviewRef={overviewRef} itineraryRef={itineraryRef} howToReachRef={howToReachRef} departuresRef={departuresRef} inclusionRef={inclusionRef} galleryRef={galleryRef} faqsRef={faqsRef}/>

        <MainBanner />
        {/* <SideBarNavigation/> */}
        {/* bento no video for mobile devices*/}
        <div className="w-full flex flex-col items-center relative">
          <div className="grid grid-cols-2 z-10 gap-4 px-8 py-8 md:grid-cols-4 place-items-center md:w-2/3">
            {TrekBentoInfo.map((element) => (
              <div
                key={element.id}
                className="w-full md:text-white md:w-40 h-40 flex flex-col items-center gap-2 text-center border border-gray-300 md:border-white rounded"
              >
                <p className="underline text-lg font-medium pt-10">
                  {element.id}
                </p>
                <p className="font-light">{element.data}</p>
              </div>
            ))}
          </div>
          <div className="absolute hidden md:block bg-slate-800 brightness-50 overflow-hidden w-full h-full">
            <video
              className="object-cover w-full h-full"
              autoPlay
              disableRemotePlayback
              disablePictureInPicture
              muted
              loop
              playsInline
              aria-label="video player"
            >
              <source src="https://trekmunk.b-cdn.net/productpage.mp4" />
            </video>
          </div>
        </div>

        {/* page body and sections */}
        <div className="w-full max-w-screen-xl px-8 md:px-24 mx-auto my-5">
          {/* hightlight sections not focusable through sidebar*/}
          <div className="flex flex-col gap-4">
            <p className="capitalize">Home / Treks / {trekName}</p>
            <div className="flex flex-col">
              <div className="flex flex-col gap-4 items-center md:items-start md:flex-row">
                {/* highlights map array */}
                <div>
                  <p className="w-full text-center text-3xl font-light tracking-wider mb-4">
                    HIGHLIGHTS
                  </p>

                  {hightlights.map((para) => (
                    <div key={para} className="flex mb-2 text-lg text-pretty">
                      <p>
                        <span className="text-[#CCCCCC]">&#10687; </span>
                        {para}
                      </p>
                    </div>
                  ))}
                </div>
                {/* location image map view */}
                <div className="flex flex-col items-center gap-6">
                  <div className="h-[400px] w-[300px] flex-shrink-0 relative">
                    <Image
                      src={
                        "https://www.trekmunk.com/uploads/systemuploads/harmukh_valley_Trek_map_1611142421510.jpg"
                      }
                      alt={`${trekName} map view`}
                      fill
                    />
                  </div>
                  <ButtonAnimated
                    title="PRINT ITENARY"
                    type="primary"
                    className="w-44 text-sm"
                  />
                  {/* socials */}
                  <div className="flex gap-3">
                    <Facebook className="fill-orange-500 stroke-none w-[28px] h-[28px] cursor-pointer hover:fill-orange-300" />
                    <Instagram className="stroke-orange-500 w-[28px] h-[28px] cursor-pointer hover:stroke-orange-300" />
                    <Twitter className="fill-orange-500 stroke-none w-[28px] h-[28px] cursor-pointer hover:fill-orange-300" />
                    <Youtube className="stroke-orange-500  w-[28px] h-[28px] cursor-pointer hover:stroke-orange-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* overview section */}
          <div className="flex flex-col gap-4 items-center my-6" ref={overviewRef}>
            <p className="heading">OVERVIEW</p>
            <p className="text-left">
              Gangabal lake trek is an astonishing high-elevation trail and
              considered as a most wonderful trek in Kashmir. Harmukh is the 4th
              highest peak in that valley is set with a picturesque foreground
              of the magnificent Gangbal lake. Known as the Eiger of Kashmir, it
              was from Mount Harmukh that Thomas Montgomery, an incredible
              trigonometric surveyor, first found K1 and K2 Mountains in 1865.
              The Gangbal Lake is said to be the Ganges of Shivism.
            </p>
            <iframe
              className="w-full md:w-3/5 aspect-video"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
          </div>

          {/* ITINERARY section*/}
          <div ref={itineraryRef}>
            <p className="heading">BRIEF ITINERARY</p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue={itinerary[0].id}
            >
              {itinerary.map((item) => (
                <AccordionItem
                  value={item.id}
                  key={item.id}
                  className="odd:bg-gray-100 mb-4"
                >
                  <AccordionTrigger
                    className="border border-gray-200 p-4 font-thin md:text-lg md:p-6 hover:text-orange-500 transition-all transform duration-500 ease-in-out lg:text-xl
                  text-left text-black
                  "
                  >
                    {item.id} : {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white text-left p-4 md:p-6 font-thin border border-gray-100">
                    <div className="flex flex-col gap-2 md:text-lg lg:text-lg">
                      <p className="text-left">{item.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        {item.impPoints?.map((val) => (
                          <p key={val.id} className="md:text-lg lg:text-lg">
                            <span className="font-semibold">{val.id} :</span>
                            <span className="font-light"> {val.data}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* How to reach section */}
          <div ref={howToReachRef} className="flex flex-col">
            <p className="heading">HOW TO REACH ?</p>
            <p className="subheading">
              We will arrange a cab for you from the pickup point in Srinagar.
              For communications purposes, we will create a Whatsapp Group
              before the departure date of the trek and will share the details
              regarding the transportation. The drop at Srinagar after the trek
              will be arranged in a similar way.
            </p>
          </div>

          {/* why us not focusable */}
          <div className="flex flex-col items-center w-full my-6">
            <p className="heading">Why us ?</p>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-5 items-center mb-8">
              {trekPromises.map((val) => (
                <div key={val.id} className="flex flex-col items-center">
                  <div className="relative h-32 w-full">
                    <Image
                      src={val.image}
                      alt={val.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-semibold lg:text-lg">{val.title}</p>
                </div>
              ))}
            </div>
            <ButtonAnimated title="READ MORE" className="w-32" />
          </div>

          {/* dates and price */}
          <div ref={departuresRef} className="my-4">
            <p className="heading">FIXED DEPARTURES</p>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
              <div className="relative w-5/6 h-96 hidden md:flex">
                <Image src={"/trek1.jpg"} alt="trekimage" fill className="object-cover"/>
              </div>

              {/* table of departures */}
              <div className="flex flex-col">
                {/* header for filters */}
                <div className="flex gap-4 mb-5 mt-2">
                  <Input placeholder="Filter Dates"/>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="" asChild>
                      <Button variant={"outline"} className="text-gray-500 font-normal">Select Month</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            January
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <DataTable data={data} columns={columns} />
              </div>
            </div>

            <Separator/>
            {/* imp links  */}
            <div className="my-10 grid grid-cols-1 place-items-center px-12 md:px-5 lg:px-10 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-9">
              {impLinks.map((val)=><ButtonAnimated title={val.title} key={val.id} className="w-full"/>)}
            </div>
            <Separator/>



          </div>

          {/* inclusions and exclusions */}
          <div ref={inclusionRef} className="w-full flex flex-col items-center my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 my-6 md:my-8">
            {/* inclusion */}
            <div className="md:border-r w-full flex flex-col border-r-gray-300">
                <p className="w-full text-center md:text-left heading">Inclusions</p>
                <p className="mb-2"> <span className="text-gray-300">&#10687; </span> <span className="font-medium text-black">Accommodations at Trek: </span>All accommodations on the trek will be on twin sharing basis in Tents or Homestays. Any accommodation in a hotel/guest house/hostel will be in a budget hotel.
                </p>
                <p className=""> <span className="text-gray-300">&#10687; </span> <span className="font-medium text-black">Trek Leader and Guides:</span> An experienced and <span className="underline">certified Trek</span>
                </p>
            </div>
            {/* exclusion */}
            <div>
              <p className="w-full text-center md:text-left heading">Exclusions</p>
              <p className="mb-2"> <span className="text-gray-300">&#10687; </span> <span className="font-medium text-black">GST and Other Taxes: </span>The goods and services tax is not included in the price mentioned with the trek. They are subjected to change according to the government rules of India.
                </p>
                <p className=""> <span className="text-gray-300">&#10687; </span> <span className="font-medium text-black">Trek Leader and Guides:</span> An experienced and <span className="underline">certified Trek</span>
                </p>
            </div>
            </div>
                <ButtonAnimated title="READ MORE" className="w-32"/>
          </div>


            {/* cancellation policy */}
            <div className="w-full flex flex-col items-center">
                <p className="heading">Cancellation Policy And More Information</p>
                
                {/* policies map */}
                <div className="h-[400px] overflow-hidden flex flex-col gap-4">
                {cancellationPolicies.map((policy)=>
                <div className="flex flex-col w-full text-left gap-2" key={policy.id}>
                    <p className="font-bold">{policy.id}</p>
                    <p>{policy?.Note}</p>
                    {/* body */}
                    {policy.body.map((notes,i)=>
                    <div className="mb-4" key={i}>
                      <p className="font-semibold">{notes.subheading}</p>
                      {notes.description.map((main,i)=>
                      <p className="" key={i}>
                        <span className="font-semibold mb-2">{main.inLineheading}</span> {main.descriptionString}
                      </p>)}
                    </div>
                    )}
                </div>)}
                </div>

            <div className="w-full flex flex-col items-center my-6">
                <ButtonAnimated title="READ MORE" className="w-32"/>
            </div>
            </div>
          

          {/* Gallery  */}
          <div ref={galleryRef} className="flex flex-col w-full my-6 items-center overflow-hidden">
            <p className="heading">Gallery</p>
            {/* <div className="w-1/2 aspect-video relative">
              <Image alt="Gallery image" fill src={"https://www.trekmunk.com/uploads/systemuploads/watermarked-PANO_20170815_161025.jpg"}/>
            </div> */}
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
          </div>
          </div>
          {/* Reviews not focusable */}
          <div>
            <ReviewsSection/>
          </div>
          <div className="w-full max-w-screen-xl px-8 md:px-24 mx-auto my-5" >
          {/* FAQS */}
          <div ref={faqsRef} className="flex flex-col my-6">
            <p className="heading">FAQ'S</p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {FAQS.map((item) => (
                <AccordionItem
                  value={item.id}
                  key={item.id}
                  className="mb-4"
                >
                  <AccordionTrigger
                    className="border border-gray-200 p-4 font-thin md:text-lg md:p-6 hover:text-orange-500 transition-all transform duration-500 ease-in-out lg:text-xl
                  text-left text-black
                  "
                  >
                    {item.id} : {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white text-left p-4 md:p-6 font-thin border border-gray-100">
                    <div className="flex flex-col gap-2 md:text-lg lg:text-lg">
                      <p className="text-left">{item.description}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>

          {/* related posts and blogs carousel */}

          {/* page body div end here */}
          </div>

        {/* <------main div end here -----> */}
      </div>
      
    </>
  );
}
