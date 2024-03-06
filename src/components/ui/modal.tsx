"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useRef,
  MouseEventHandler,
} from "react";

const Modal = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "login" | "signUp";
}) => {
  const router = useRouter();
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);
  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return (
    <div
      ref={overlay}
      className="fixed z-[99] left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
    >
      <div className="w-full h-full flex relative items-center justify-center">
      <div
        ref={wrapper}
        className={cn("",
        type=="login"?"sm:w-10/12 md:w-8/12 h-[60%] lg:h-3/5 lg:w-1/2":"sm:w-10/12 md:w-8/12 h-[60%] lg:h-[70%] lg:w-1/2",
        )}
      >
        {children}
      </div>
      </div>
    </div>
  );
};
export default Modal;
