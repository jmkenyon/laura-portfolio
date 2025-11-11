"use client";

import React from "react";
import { cn } from "../lib/utils";

interface TranslateProps {
    mode: "light" | "dark";
    }

export const Translate = ({mode}: TranslateProps) => {
  const [isActive, setIsActive] = React.useState("port");

  return (
    <div className="flex justify-end pb-6 pt-3 text-xs space-x-2">
      <div
        className={cn(
            "cursor-pointer",
            isActive === "port" && mode === "dark" && "text-white" ,
            isActive === "port" && mode === "light" && "text-black",
            isActive !== "port" && "text-gray-500"
          )}
        onClick={() => setIsActive("port")}
      >
        port
      </div >
      <div 
        className={cn(
            mode === "dark" && "text-white",
            mode === "light" && "text-black"
        )}>  {" / "}
    </div>
    
      <div
        className={cn(
            "cursor-pointer",
            isActive === "eng" && mode === "dark" && "text-white" ,
            isActive === "eng" && mode === "light" && "text-black",
            isActive !== "eng" && "text-gray-500"
          )}
        onClick={() => setIsActive("eng")}
      >
        eng
      </div>
    </div>
  );
};
