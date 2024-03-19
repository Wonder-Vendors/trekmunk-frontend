"use client"
import SignUpForm from "@/components/forms/SignUpForm";
import Modal from "@/components/ui/modal";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
    const app = useRouter()
  return (
    <Modal type="signUp">
      <div className="bg-white w-full h-full flex">
        {/* <div className="w-[40%] h-full relative flex-shrink-0">
          <Image
            src={"/expedition.jpg"}
            fill
            alt="cover image"
            className="object-cover"
          />
        </div> */}
        <div className="p-10 flex flex-col gap-5 flex-grow relative">
          <div className="flex justify-between items-center">
            <p className="font-light text-2xl w-full">Sign Up</p>
            {/* TODO: FIX "X" position */}
            <X
              className="text-black w-6 h-6 stroke-[1px] cursor-pointer"
              onClick={() => {
                app.back();
              }}
            />
          </div>
          <div className="flex w-full">
            <SignUpForm />
          </div>
        </div>
      </div>
    </Modal>
  );
}
