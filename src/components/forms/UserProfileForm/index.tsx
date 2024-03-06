"use client";
import ButtonAnimated from "@/components/ui/ButtonAnimated";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefinementCtx, z } from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  nationality = "",
}: defaultValueOfUser) {
  const onSubmit = () => {};
  const DATE_REQUIRED_ERROR = "Date is required.";
  const formSchema = z.object({
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
    gender: z.string().refine(
      (gender) => {
        // Check if the gender is one of the accepted values: "male", "female", "other"
        return ["Male", "Female", "Rather not to say"].includes(
          gender.toLowerCase()
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
      .min(5, { message: "Must be atleast 5 years old" })
      .max(120, { message: "Too old to travel sorry" }),
    profilePicture: z.string(),
    dateOfBirth: z
      .object(
        {
          from: z.date().optional(),
          to: z.date().optional(),
        },
        { required_error: DATE_REQUIRED_ERROR }
      )
      .refine((date) => {
        return !!date.from;
      }, DATE_REQUIRED_ERROR),
    nationality: z
      .string()
      .min(2, { message: "invalid" })
      .max(10, { message: "invalid" }),
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
      dateOfBirth: {
        from: undefined,
        to: undefined,
      },
    },
  });

  useEffect(() => {
    form.control._disableForm(!enableEdit);
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
                  type="text"
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
                <Popover >
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      disabled={field.disabled}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value.from && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "LLL dd, y")} -{" "}
                            {format(field.value.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value.from}
                      selected={{ from: field.value.from!, to: field.value.to }}
                      disabled={field.disabled}
                      onSelect={field.onChange}
                      numberOfMonths={1}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
            </FormItem>
          )}
        />
        {enableEdit&&<Button
          className="bg-orange-500 hover:bg-orange-300 rounded-none w-32 col-span-2"
          type="submit"
        >
          Save
        </Button>}
      </form>
    </Form>
  );
}
