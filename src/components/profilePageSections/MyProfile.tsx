"use client"
import { useEffect, useState } from "react";
import UserProfileForm from "../forms/UserProfileForm";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const user = {
  firstName: "sdsd",
  lastName: "sds",
  email: "ciyame1586@hidelux.com",
  password: "7ac37455cceb865a898f8ff42b340b97f0474b1a81596a267b02f456645a5436",
  phoneNumber: "7678336946",
  isEmailValid: false,
  isPhoneNumberValid: false,
  image: "/user.png",
  gender: "Male",
  age: 17,
  rewardPoints: 0,
  role: "user",
};

const MyProfile = () => {
  const [isEnableEdit,setIsEnableEdit] = useState(false)
  console.log("@@",isEnableEdit)
  const capatilizeString = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleContinueAction = () => {
    setIsEnableEdit(true)
  };
  return (
    <div className="p-10 w-full h-fit">
      {/* avtar, name , points */}
      <div className="flex items-center justify-between w-full mb-8">
        <div className="flex items-center gap-2">
          {/* avatar */}
          <Avatar className="w-20 h-20">
            <AvatarImage src={user.image} />
            <AvatarFallback>
              {user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {/* Name */}
          <p>
            {capatilizeString(user.firstName) +
              " " +
              capatilizeString(user.lastName)}
          </p>
        </div>
        {/* rewards */}
        <p>Rewards :{` ${user.rewardPoints}`}</p>
      </div>

      {/* user details */}
     {!isEnableEdit&&<AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-20 bg-orange-500 hover:bg-orange-300 mb-4 rounded-none">
            Edit
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to update your details ?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will permanently update your existing information.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="">Cancel</AlertDialogCancel>
            <AlertDialogAction className="hover:bg-orange-300 bg-orange-500" onClick={handleContinueAction}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>}

      <UserProfileForm
        enableEdit = {isEnableEdit}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        phoneNumber={user.phoneNumber}
        isEmailValid={user.isEmailValid}
        isPhoneNumberValid={user.isPhoneNumberValid}
        gender={user.gender}
        age={user.age}
      />
    </div>
  );
};

export default MyProfile;
