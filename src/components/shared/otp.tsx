"use client"
import { Input } from "@/components/ui/input";
import { useState, Fragment, useRef, useEffect } from "react";

type OtpInputProps = {
  length: number;
  otp: number;
  onOtpChange: (otp: number) => void;
};

let currentOtpIndex: number = 0;

const Otp = ({ length, otp, onOtpChange }: OtpInputProps): JSX.Element => {
  const [tempOtp, setTempOtp] = useState<string[]>(
    new Array(length || 6).fill("")
  );
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnchange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOtp: string[] = [...tempOtp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) setActiveOtpIndex(currentOtpIndex - 1);
    else setActiveOtpIndex(currentOtpIndex + 1);

    setTempOtp(newOtp);
    onOtpChange(
      isNaN(parseInt(newOtp.join(""))) ? 0 : parseInt(newOtp.join(""))
    );
    otp = isNaN(parseInt(tempOtp.join(""))) ? 0 : parseInt(tempOtp.join(""));
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndex = index;
    if (key === "Backspace") {
      setActiveOtpIndex(currentOtpIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {tempOtp.map((_, index) => {
        return (
          <div key={index} className="col-span-1">
            <Input
              ref={index === activeOtpIndex ? inputRef : null}
              onChange={handleOnchange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              className="text-center text-orange-500 col-span-1 placeholder:text-gray-500 focus-visible:ring-0 border-0 shadow shadow-gray-300"
              placeholder={(index + 1).toString()}
              value={tempOtp[index]}
            />
            {index === tempOtp.length - 1 ? null : (
              <span className="w-2 py-[0.5px] bg-foreground" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Otp;
