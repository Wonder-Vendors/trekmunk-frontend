"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";


export default function SecurityUserProfile() {
  const [isFormShowing, setIsFormShowing] = useState(true);
  
  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\w\d\s]).{8,}$/;
  const formSchema = z
    .object({
      oldPassword: z
        .string()
        .regex(passwordPattern, { message: "Invalid Password" }),
      newPassword: z
        .string()
        .regex(passwordPattern, { message: "Invalid Password" }),
      confirmNewPassword: z.string(),
    })
    .required({
      oldPassword: true,
      newPassword: true,
      confirmNewPassword: true,
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const NewPassword=form.watch("newPassword")
  const onSubmit = () => {};
  return (
    <div className="w-full">
      <div className="w-full py-8 flex items-center justify-center">
        {!isFormShowing && (
          <Button
            onClick={() => {
              setIsFormShowing(true);
            }}
            className="bg-orange-500 hover:bg-orange-300"
          >
            Change Passowrd
          </Button>
        )}
        {isFormShowing && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full p-5 h-full grid grid-cols-2 gap-5 place-items-center"
            >
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field,fieldState }) => (
                  <FormItem className="w-full">
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Current Password"
                        {...field}
                        
                        className="rounded-none w-full focus-visible:ring-offset-0 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage  className="text-xs px-2"/>
                    
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => {
                  return (
                    <FormItem className="w-full">
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="New Password"
                          {...field}
                          className="rounded-none w-full
                        focus-visible:ring-offset-0 focus-visible:ring-0
                        "
                        />
                      </FormControl>
                      <FormMessage className="text-xs px-2" />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="confirmNewPassword"
                disabled={NewPassword==""}
                render={({ field,fieldState }) => {
                  return (
                    <FormItem className="w-full">
                        <FormLabel>
                            Confirm Password
                        </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          {...field}
                          className="rounded-none w-full
                        focus-visible:ring-offset-0 focus-visible:ring-0
                        "
                        />
                      </FormControl>
                      <FormMessage className="text-xs px-2" >
                      {fieldState.isTouched&&field.value!=NewPassword&&"Does not match"}
                      </FormMessage>
                    </FormItem>
                  );
                }}
              />
              <Button type="submit" className="col-span-full bg-orange-500 hover:bg-orange-300">submit</Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
