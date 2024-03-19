"use client"
import { RefObject,useState,useMemo,useEffect } from "react"
export default function useOnScreen(ref: RefObject<HTMLElement>) {

    const [isIntersecting, setIntersecting] = useState(false)

    // const observer = useMemo(() => obs , [ref])
  
  
    useEffect(() => {
    const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),{threshold:0.8}
    )
      if(ref.current)
      observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])
  
    return isIntersecting

  }