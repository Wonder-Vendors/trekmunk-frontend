"use client"

import useOnScreen from "@/hooks/useOnScreen"
import { cn } from "@/lib/utils"
import { RefObject} from "react"


const SideBarNavigation = ({overviewRef,itineraryRef,howToReachRef,departuresRef,inclusionRef,galleryRef,faqsRef}:{
    overviewRef:RefObject<HTMLDivElement>
    itineraryRef:RefObject<HTMLDivElement>
    howToReachRef:RefObject<HTMLDivElement>
    departuresRef:RefObject<HTMLDivElement>
    inclusionRef:RefObject<HTMLDivElement>
    galleryRef:RefObject<HTMLDivElement>
    faqsRef:RefObject<HTMLDivElement>
}) => {
    const sections = [
        {id:0,title:"Overview",ref:overviewRef,active:useOnScreen(overviewRef)},
        {id:1,title:"itinerary",ref:itineraryRef,active:useOnScreen(itineraryRef)},
        {id:2,title:"How To Reach",ref:howToReachRef,active:useOnScreen(howToReachRef)},
        {id:3,title:"Dates & Price",ref:departuresRef,active:useOnScreen(departuresRef)},
        {id:4,title:"Inclusions",ref:inclusionRef,active:useOnScreen(inclusionRef)},
        {id:5,title:"Gallery",ref:galleryRef,active:useOnScreen(galleryRef)},
        {id:6,title:"FAQs",ref:faqsRef,active:useOnScreen(faqsRef)},
    ]
    
    const onClickHandler = (index:number) =>{
        sections[index].ref.current?.scrollIntoView({behavior:"smooth"})
    }
   
    console.log(sections)
  return (
    <div className="md:flex flex-col fixed z-50 left-8 h-screen justify-center hidden">
        <div className="w-full">
        {sections.map((e,i)=>
            <p key={i} className={cn("border-l border-l-gray-200 brightness-75 p-2 mb-2 lg:text-base text-sm cursor-pointer hover:text-black transition-colors duration-300 hover:border-l-black ease-in-out",e.active?"text-black":"text-gray-200"
            )} onClick={()=>{onClickHandler(i)}}>
                {e.title}
            </p>
        )}
        </div>
    </div>
  )
}

export default SideBarNavigation