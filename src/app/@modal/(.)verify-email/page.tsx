"use client"
import Modal from "@/components/ui/modal";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function VerifyEmail(){
    const app = useRouter()
    return(
        <Modal type="login">
            <div className="bg-white h-full flex">
                <div className="w-[40%] h-full relative flex-shrink-0">
                    <Image src={"/expedition.jpg"} fill alt="cover image" className="object-cover"/>
                </div>
                <div className="p-10 flex flex-col gap-10 flex-grow relative">
                    <div className="flex justify-between items-center">
                        <p className="font-light text-2xl w-full">Sign in</p>
                        {/* TODO: FIX "X" position */}
                        <X className="text-black w-6 h-6 stroke-[1px] cursor-pointer" onClick={()=>{app.push("/")}}/>
                    </div>
                    <div className="flex w-full">
                        <p>Your Registration has been done successfully.</p>
                        <p>Please check your mail to verify your account</p>
                        <p> Resend Verification email </p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}