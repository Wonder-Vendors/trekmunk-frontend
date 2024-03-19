"use client"
// TODO: try to fix useSelector in server
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Image from "next/image";
import { cn, isNotEmpty } from "@/lib/utils";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "@/redux/reducers/userSlice";
import { useEffect } from "react";

const navOptions = [
    {id:0,title:"Home",selected:true},
    {id:1,title:"Departures 2024",selected:false},
    {id:2,title:"Reviews",selected:false},
    {id:3,title:"About us",selected:false},
    {id:4,title:"All treks",selected:false},
    {id:5,title:"Treks by category",selected:false},
    {id:6,title:"Work with us",selected:false},
    {id:7,title:"Blog",selected:false},
    {id:8,title:"Contact",selected:false},
]

export default function NavigationOption  ({data}:{data:any}) {
  const dispatch = useDispatch();
  const {user} = useSelector(selectUser)
  useEffect(()=>{
    dispatch(setUser(data))
  },[])
  return (
    <Drawer modal={false}>
      <DrawerTrigger>
        <Menu size={20} className="text-white cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent className="bg-[url(https://trekmunk.b-cdn.net/menu.webp)] bg-cover h-screen w-full">
        <DrawerHeader className="flex items-center justify-between px-14">
          <p>back</p>
          <DrawerTitle>
            <div className="relative w-36 md:w-60 h-20 cursor-pointer">
                <Image src={"/trekmunkLogo_black.png"} className="object-contain" fill alt="trekmunk Logo"/>
            </div>
          </DrawerTitle>
        
          <Link href={user?`/profile/${user?._id}`:"/login"}>
            <p>{user?`${user?.name}`:"Sign In"}</p>
          </Link>
          
        </DrawerHeader>
        <div className="flex flex-col font-light text-[30px] w-full h-full p-20 tracking-wide">
        {navOptions.map((option)=>
        <p key={option.title} className={cn("cursor-pointer w-fit border-b-2 border-b-transparent transition-all transform duration-500 ease-in-out",option.selected?"border-b-orange-500 border-b-2":"hover:border-b-orange-400")}>
            {option.title}
        </p>)}
        </div>
        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};
