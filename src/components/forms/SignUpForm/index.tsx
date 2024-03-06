"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { selectSignUp } from "@/redux/reducers/userRequestReducer";


export default function SignUpForm() {
  const app = useRouter();
  const {loading,user,error} = useSelector(selectSignUp)
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
    })
    .required({
      firstName: true,
      email: true,
      password: true,
    });
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-full grid grid-cols-2 gap-5 place-items-center"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="">
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
            <FormItem className="w-full col-span-2">
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
              <FormItem className="w-full col-span-2">
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
        <button type="submit" className="col-span-2" disabled={loading}>
          <ButtonAnimated title="SIGN UP" className="w-32 text-sm" />
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
