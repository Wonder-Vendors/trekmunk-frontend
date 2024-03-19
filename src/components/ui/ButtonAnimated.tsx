import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: "400", subsets: ["latin"] });
function ButtonAnimated({
  title,
  className = "",
  type = "primary",
  disabled=false,
  onClick,
}: {
  title: string;
  className?: string;
  disabled?:boolean
  type?: "primary" | "secondary" | "ghostedWhiteOswald" | "orangePrimary";
  onClick?:()=>void
}) {
  return (
    <div
      className={cn(
        "px-3.5 py-2 overflow-hidden relative group/buttonAnimated cursor-pointer text-center",
        className,
        type == "ghostedWhiteOswald" && "border-white border",
        type == "primary" && "border-black border bg-white",
        type == "orangePrimary" && "bg-transparent bg-orange-500"
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "absolute w-[1000px] h-0 transition-all duration-500 origin-center -translate-x-20 top-1/2 group-hover/buttonAnimated:h-64 group-hover/buttonAnimated:-translate-y-32 ease-in-out px-3.5",
          type == "ghostedWhiteOswald" && "bg-white",
          type == "primary" && "bg-black",
          type == "orangePrimary" && "bg-white",
          disabled&&"h-64"
        )}
      />
      <span
        className={cn(
          "relative text-white tracking-wide transition duration-500 group-hover/buttonAnimated:text-black ease-in-out",
          type == "ghostedWhiteOswald" && cn("text-white group-hover/buttonAnimated:text-black",oswald.className),
          type == "primary" && "text-black group-hover/buttonAnimated:text-white",
          type == "orangePrimary" && "text-white group-hover/buttonAnimated:text-black",
          disabled&&"text-white"
        )}
      >
        {title}
      </span>
    </div>
  );
}

export default ButtonAnimated;
