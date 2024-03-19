"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefinementCtx, z } from "zod";
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
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { selectSignUp } from "@/redux/reducers/userRequestReducer";
import { filterNationalities, nationalities } from "@/dummy";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";
import CustomDatePickerInput from "@/components/ui/CustomDatePickerInput";
import { useAppDispatch } from "@/redux/hooks";
import { useAuth } from "@/hooks/useAuth";
import { setUser } from "@/redux/reducers/userSlice";

export default function SignUpForm() {
  const app = useRouter();
  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\w\d\s]).{8,}$/;
  const formSchema = z
    .object({
      // TODO: correct messages
      firstName: z
        .string()
        .min(2, { message: "must be atleast 2" })
        .max(12, { message: "too long name" }),
      lastName: z
        .string()
        .min(2, { message: "must be atleast 2" })
        .max(12, { message: "too long name" })
        .optional()
        .default(""),
      phoneNumber: z.string().length(10, { message: "Invalid Phone Number" }),
      email: z.string().email("Invalid Email"),
      password: z
        .string()
        .regex(passwordPattern, { message: "Invalid password" }),
      nationality: z
        .string()
        .refine((val) => nationalities.includes(val), { message: "invalid" }),
      dateOfBirth:z
      .string(),
      gender: z
      .string()
      .refine(
        (gender) => {
          // Check if the gender is one of the accepted values: "male", "female", "other"
          return ["Male", "Female", "Rather not to say"].includes(
            gender.toString()
          );
        },
        {
          message: "Gender must be 'male', 'female', or 'other'",
        }
      ),
    })
    .required();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });


  // submission logic 
  
  const dispatch = useAppDispatch()
  const {loading,error,user} = useSelector(selectSignUp)
  const {handleSignup} = useAuth()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await handleSignup({...values})

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
  },[loading])




  const [searchNation, setSearchNation] = useState("");
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-full grid grid-cols-2 gap-4 place-items-center"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="rounded-none focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-xs px-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="rounded-none w-full focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-xs px-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full col-span-2">
              {/* <FormLabel className="font-light">Email</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  type={"email"}
                  className="rounded-none w-full focus-visible:ring-0 outline-none"
                />
              </FormControl>
              <FormMessage className="text-xs px-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel className="font-light">Email</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Phone Number"
                  type={"number"}
                  {...field}
                  className="rounded-none w-full focus-visible:ring-0 outline-none"
                />
              </FormControl>
              <FormMessage className="text-xs px-2" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type="password"
                    className="rounded-none w-full focus-visible:ring-0 outline-none"
                  />
                </FormControl>
                <FormMessage className="text-xs px-2" />
              </FormItem>
            );
          }}
        />
        <FormField
          name="nationality"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem className="relative col-span-1 w-full">
              <Popover open={isPopOverOpen} onOpenChange={setIsPopOverOpen}>
                <FormControl className="">
                  <div
                    className="flex border items-center pr-4"
                  >
                    <Input
                      {...field}
                      placeholder="Nationality"
                      className="rounded-none focus-visible:ring-0 outline-none border-none focus-visible:ring-offset-0"
                    />
                    <PopoverTrigger className="" asChild>
                    <ChevronDown className="w-4 h-4 text-black cursor-pointer" />
                    </PopoverTrigger>
                  </div>
                </FormControl>
                <PopoverContent
                  side={"bottom"}
                  avoidCollisions={false}
                  align="end"
                  inputMode="search"
                  className="z-[100] top-ful bottom-0 rounded-none"
                >
                  <Input
                    placeholder="search"
                    value={searchNation}
                    className="rounded-none h-8 focus-visible:ring-0 outline-none focus-visible:ring-offset-0 text-xs mb-2"
                    onChange={(e) => {
                      setSearchNation(e.target.value);
                    }}
                    onKeyDown={(e)=>{if(e.key=="Enter"){
                      // setSearchNation("")
                      form.setValue("nationality", filterNationalities(nationalities, searchNation)[0]);
                      setIsPopOverOpen(false)

                    }}}
                  />
                  <ScrollArea autoFocus className="relative overflow-hidden w-full h-36 flex flex-col cursor-pointer">
                    {filterNationalities(nationalities, searchNation).map(
                      (val) => (
                        // <PopoverClose className="flex flex-col">
                        <p
                          className="cursor-pointer mb-2 pl-2"
                          onClick={() => {
                            setIsPopOverOpen(false)
                            form.setValue("nationality", val);
                          }}
                        >
                          {val}
                        </p>
                        // </PopoverClose>
                      )
                    )}
                  </ScrollArea>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField name="dateOfBirth" control={form.control} render={({field})=>
        <FormItem className="w-full flex items-center">
          <span className="text-sm flex flex-shrink-0 w-fit">Date of birth</span>
          <FormControl>
            <Input type="date" {...field} className="rounded-none focus-visible:ring-0 outline-none border-none focus-visible:ring-offset-0"
            max={new Date().toISOString().split('T')[0]}
            />
          </FormControl>
        </FormItem>}/>
        
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  disabled={field.disabled}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="rounded-none w-full focus-visible:ring-0 outline-none">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Rather not to say">
                      Rather not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-xs px-2" />
            </FormItem>
          )}
        />




        {/* <div id="Datepicker"/> */}
        {/* <CustomDatePickerInput/> */}
        {/* submit */}
        <button type="submit" className="col-span-2" disabled={loading}>
          <ButtonAnimated title={loading?"Loading .":"SIGN UP"} className="w-32 text-sm" />
        </button>
        <FormDescription className="col-span-2">
          Already have an account ?{" "}
          <Link
            href={"/login"}
            className="text-orange-500 hover:text-orange-300"
          >
            Sign in
          </Link>
        </FormDescription>
      </form>
    </Form>
  );
}
