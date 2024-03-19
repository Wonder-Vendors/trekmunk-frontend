import { useAxios } from "./useAxios";

import axios from "axios";

import { useAppDispatch } from "@/redux/hooks";
import {
  signin_failure,
  signin_request,
  signin_success,
  signup_failure,
  signup_request,
  signup_success,
} from "@/redux/reducers/userRequestReducer";
import { useToast } from "@/components/ui/use-toast";
export const useAuth = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  const handleSignup = async ({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    nationality,
    dateOfBirth,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    phoneNumber: string;
    gender: string;
    nationality: string;
  }) => {
    const payload = {
      name: `${firstName} ${lastName}`,
      email,
      password,
      phoneNumber,
      dateOfBirth,
      gender,
      nationality,
    };

    dispatch(signup_request());

    try {
      const { postCall } = useAxios("auth/signup", payload);
      const response = await postCall();

      if (response.statusCode == 200) {
        if(window){
          window.localStorage.setItem("userId",JSON.stringify(response?.data?._id))
        }
        return dispatch(signup_success({ user:{...response?.data},route:response?.route }));
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return dispatch(signup_failure(error.response?.data.message));
        // return toast.error(error.response?.data.message);
      }

      toast({ title: error.message, description: "An error occured" });
      return dispatch(signin_failure(error.message));
    }
  };

  const handleSignin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const payload = {
      email,
      password,
      method: "email",
    };

    dispatch(signin_request());

    try {
      const { postCall } = useAxios("auth/signin", payload);
      const res = await postCall();
      const response = { ...res };
      if (response.statusCode == 200) {
        console.log("RRa", response);
        // toast.success(response.message);
        // router.push('/');
        if (typeof window !== "undefined") {
          window.localStorage.setItem("userId",JSON.stringify(response?.data?._id))
        }
        return dispatch(signin_success({ ...response?.data }));
      }
    } catch (error: any) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return dispatch(signin_failure(error.response?.data.message));
      }

      toast({ title: error.message, description: "An error occured" });
    }
  };

  return {
    handleSignup,
    handleSignin,
  };
};
