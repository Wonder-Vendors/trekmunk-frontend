import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Otp from "@/components/shared/otp";

const PhoneVerifyForm = () => {
  const [otp, setOtp] = useState<number>(0);

  const handleOtpChange = (value: number) => {
    setOtp(value);
  };

  return (
    <div>
      <Otp length={4} otp={otp} onOtpChange={handleOtpChange} />
    </div>
  );
};

export default PhoneVerifyForm;
