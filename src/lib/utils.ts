import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isNotEmpty(obj:{}) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return true;
    }
  }

  return false;
}