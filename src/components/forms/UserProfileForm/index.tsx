"use client";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import Datepicker from "react-tailwindcss-datepicker";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefinementCtx, ZodDate, any, z } from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
interface defaultValueOfUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  isEmailValid: boolean;
  isPhoneNumberValid: boolean;
  gender: string;
  age: number;
  enableEdit: boolean;
  nationality?: string;
  dateOfBirth?: string;
}

export default function UserProfileForm({
  firstName,
  lastName,
  email,
  phoneNumber,
  isEmailValid,
  isPhoneNumberValid,
  gender,
  age,
  enableEdit,
  dateOfBirth = "",
  nationality="",
}: // nationality = "",
defaultValueOfUser) {
  const formSchema = z.object({
    // TODO: correct messages
    firstName: z
      .string()
      .min(2, { message: "must be atleast 2" })
      .max(12, { message: "too long name" })
      ,
    lastName: z
      .string()
      .min(2, { message: "must be atleast 2" })
      .max(12, { message: "too long name" })
      .default(""),
    phoneNumber: z
      .string()
      .length(10, { message: "Invalid Phone Number" })
      ,
    email: z.string().email("Invalid Email"),
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
    age: z
      .number()
      .int()
      .positive()
      .min(0, { message: "Must be atleast 5 years old" })
      .max(120, { message: "Too old to travel sorry" }),
    profilePicture: z.string(),
    nationality:z.string(),
    dateOfBirth: z.date(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    disabled: false,
    defaultValues: {
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      gender,
      nationality,
      dateOfBirth: new Date ("2003/10/07"),
    },
  });
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log("update", value);
  };
  useEffect(() => {
    // form.control._disableForm(!enableEdit);
  }, [enableEdit]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-full grid grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="First Name"
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
          name="lastName"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Last Name</FormLabel>
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
            <FormItem className="w-full ">
              <FormLabel>Email</FormLabel>
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
            <FormItem className="w-full ">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Phone Number"
                  type="number"
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
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  placeholder="Phone Number"
                  type="number"
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
          name="profilePicture"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>Profile Picture</FormLabel>
              <FormControl>
                <Input
                  id="picture"
                  {...field}
                  type="file"
                  className="rounded-none cursor-pointer"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>Nationality</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Nationality"
                  className="rounded-none cursor-pointer"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>Date of birth</FormLabel>
              <FormControl>
                <Datepicker useRange={false} asSingle value={field.value} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        {enableEdit && (
          <Button
            className="bg-orange-500 hover:bg-orange-300 rounded-none w-32 col-span-2"
            type="submit"
          >
            Save
          </Button>
        )}
      </form>
    </Form>
    
  );
}
