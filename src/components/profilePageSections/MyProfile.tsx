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
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/reducers/userSlice";
import { redirect } from "next/navigation";


const MyProfile = () => {
  const [isEnableEdit,setIsEnableEdit] = useState(false)
  const {user} = useSelector(selectUser)
  const capatilizeString = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleContinueAction = () => {
    setIsEnableEdit(true)
  };
  if(user){
    return(
      <div className="p-10 w-full h-fit">
      {/* avtar, name , points */}
      <div className="flex items-center justify-between w-full mb-8">
        <div className="flex items-center gap-2">
          {/* avatar */}
          <Avatar className="w-20 h-20">
            <AvatarImage src={user.image} />
            <AvatarFallback>
              {user.name.toUpperCase() + "".toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {/* Name */}
          <p>
            {capatilizeString(user.name) +
              " " +
              capatilizeString("")}
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
        firstName={user.name}
        lastName={""}
        email={user.email}
        phoneNumber={user.phoneNumber}
        isEmailValid={user.isEmailValid}
        isPhoneNumberValid={user.isPhoneNumberValid}
        gender={user.gender}
        age={user.age}
      />
    </div>
    )
  }
};

export default MyProfile;
