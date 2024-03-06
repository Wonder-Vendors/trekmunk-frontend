"use client";
import PhoneVerifyForm from "@/components/forms/PhoneVerifyForm";
import Modal from "@/components/ui/modal";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RegistrationSuccessPage = () => {
  const app = useRouter();
  return (
    <Modal type="login">
      <div className="bg-white w-full h-full flex">
        <div className="w-[40%] h-full relative flex-shrink-0">
          <Image
            src={"/expedition.jpg"}
            fill
            alt="cover image"
            className="object-cover"
          />
        </div>
        <div className="p-10 flex flex-col items-center gap-10 flex-grow relative">
          {/* email verification on register */}
          <div className="flex flex-col justify-between items-center">
            <p className="font-light text-2xl w-full text-center">
              Registration Success 🎉
            </p>
            {/* TODO: FIX Font of registration */}
            <p> Check your email for verification</p>
            <span className="text-orange-500 hover:text-orange-300 cursor-pointer">
              Resent
            </span>
          </div>
          {/* phone verification on register */}
          <div className="flex flex-col w-[80%] items-center gap-4">
            <PhoneVerifyForm />
            <p className="text-center text-sm leading-tight">
              Please enter 4 digit Verification code sent on you mobile
              <span className="text-orange-500 hover:text-orange-300 cursor-pointer pl-1">
                Resent
              </span>
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                app.replace("/");
                app.refresh()
              }}
            >
              Skip for now
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegistrationSuccessPage;
