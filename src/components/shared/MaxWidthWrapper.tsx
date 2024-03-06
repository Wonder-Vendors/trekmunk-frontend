import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function MaxWidthWrapper({
  className,
  children,
  noPaddingX,
}: {
  className?: string;
  noPaddingX?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-screen-xl",
        className,noPaddingX?"":"px-2.5 md:px-20 mx-auto"
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
