"use client"
import MyProfile from "@/components/profilePageSections/MyProfile";
import SecurityUserProfile from "@/components/profilePageSections/SecurityUserProfile";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { CircleUser, KeyRound, Sailboat, Power } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function ProfilePage({
    params: { id },
  }: {
    params: { id: string };
  }){
    const app = useRouter()
    // const initialProfileOptions = [
    //     {id:0,title:"My Profile",icon:CircleUser,active:false},
    //     {id:1,title:"Security",icon:KeyRound,active:false},
    //     {id:2,title:"My bookings",icon:Sailboat,active:false},
    //     {id:3,title:"Logout",icon:Power,active:false},
    //   ]
    const [profileOptions,setProfileOptions] = useState([
        {id:0,title:"My Profile",icon:CircleUser,active:true},
        {id:1,title:"Security",icon:KeyRound,active:false},
        {id:2,title:"My bookings",icon:Sailboat,active:false},
        {id:3,title:"Logout",icon:Power,active:false},
      ])
    const handleOptionClick = (index:number) =>{
        const newArr = profileOptions.map((e,i)=>{
            if(i===index){
                return(
                  {...e,active:true}
                )
              }
              return(
                {...e,active:false}
              )
        })
        setProfileOptions(newArr)
    }
    return(
        <div>
            <MaxWidthWrapper className="">
                <div className="flex w-full items-center justify-between px-12">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={()=>app.back()} >
                        <ArrowLeft className="stroke-[1px] h-4 w-4"/>
                        <p>back</p>
                    </div>
                    <div className="relative w-52 md:w-72 h-24 cursor-pointer">
                        <Image src={"/trekmunkLogo_black.png"} alt="trekmunk logo" fill className="object-contain"/>
                    </div>
                    <p className="text-transparent">nothing</p>
                </div>

                <div className="flex shadow shadow-slate-300 p-5">

                    {/* left */}
                    <div className="shadow shadow-gray-300 h-fit flex flex-col">
                        {profileOptions.map((option,index)=>
                        <div key={option.title} onClick={()=>handleOptionClick(index)} className="w-52 px-4 h-16 cursor-pointer hover:text-orange-500 flex items-center justify-start gap-2">
                            <option.icon className="w-6 h-6 stroke-[1px]"/>
                                <p aria-label={option.title}>{option.title}</p>
                        </div>)}

                    </div>
                    {/* right */}
                    {profileOptions[0].active&&<MyProfile/>}
                    {profileOptions[1].active&&<SecurityUserProfile/>}
                </div>
            </MaxWidthWrapper>
        </div>
    )
}