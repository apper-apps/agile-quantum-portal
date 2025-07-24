import React from "react";
import { cn } from "@/utils/cn";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full px-4 py-3 bg-transparent border-b-2 border-white/20 text-white placeholder-gray-400 focus:border-electric focus:outline-none transition-all duration-300 font-inter",
        "focus:shadow-[0_2px_10px_rgba(255,0,102,0.3)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;