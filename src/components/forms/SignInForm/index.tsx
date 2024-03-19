"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { setUser } from "@/redux/reducers/userSlice";
import { useSelector } from "react-redux";
import { useAuth } from "@/hooks/useAuth";
import { selectSignIn } from "@/redux/reducers/userRequestReducer";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";

export default function SignInForm() {
  const app = useRouter()
  const {handleSignin} = useAuth()
  const dispatch = useAppDispatch()
  const {loading,error,user} = useSelector(selectSignIn)
  const formSchema = z.object({
    email: z.string().email("Invalid Email"),
    password:z.string().min(8,{message:"must be atleast 8"}).max(12,{message:"password too long"})
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await handleSignin({...values})

  };
  useEffect(()=>{
    if(error && !loading){
      console.log("errorSub",error)
      return;
    }
    if(user && !loading){
      dispatch(setUser(user))
      app.replace("/")
      app.refresh()
      console.log("@@",user,loading)
      return
    }
  },[loading,form.formState.isSubmitted])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full grid grid-cols-1 gap-5 place-items-center">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel className="font-light">Email</FormLabel> */}
              <FormControl>
                <Input placeholder="Email" {...field} className="rounded-none w-full focus-visible:ring-offset-0 focus-visible:ring-0" />
              </FormControl>
              <FormMessage  className="text-xs px-2"/>
            </FormItem>
          )}
        />
        <FormField
        control={form.control}
        name="password"
        render={({field})=>{
            return(
                <FormItem className="w-full">
                    <FormControl>
                        <Input placeholder="Password" {...field} className="rounded-none w-full
                        focus-visible:ring-offset-0 focus-visible:ring-0
                        "/>
                    </FormControl>
                    <FormMessage  className="text-xs px-2"/>
                </FormItem>
            )
        }}
        />
        <button type="submit" disabled={loading}>
          <ButtonAnimated title={loading?"Loading .":"SIGN IN"} className="w-32 text-sm"/>
        </button>
        <FormDescription>
            Don't have account ? 
            <Link href={"/sign-up"} className="text-orange-500 hover:text-orange-300 cursor-pointer">Create one</Link>
        </FormDescription>
        <FormDescription>
          {error && !loading && error}
        </FormDescription>
      </form>
    </Form>
  );
}
