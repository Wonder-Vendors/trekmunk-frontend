"use client"
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"

export type Departures = {
    id: string;
    days:string;
    available:boolean;
  }
   
  export const columns: ColumnDef<Departures>[] = [
    {
      accessorKey: "days",
      header: ({})=>(
        <div>
            <p className="text-black">Days</p>
        </div>
      ),
    },
    {
      accessorKey: "available",
      header: ({column})=>(
        <div>
            <p className="text-black">Available</p>
        </div>
      ),
      cell:({row,renderValue})=>{
        return(
        <div className="flex flex-col items-center">
            <p className={cn("uppercase text-white px-2 py-1",row.getValue("available")?"bg-green-600":"bg-red-500")}>available</p>
        </div>
      )}
    },
  ]