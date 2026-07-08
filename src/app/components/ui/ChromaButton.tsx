import React from "react";

export interface ChromaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  containerClassName?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: {
    container: "h-9",
    text: "text-xs",
    padding: "px-5",
  },
  md: {
    container: "h-11",
    text: "text-sm",
    padding: "px-6",
  },
  lg: {
    container: "h-14",
    text: "text-base",
    padding: "px-8",
  },
};

export const ChromaButton = ({
  children,
  className = "",
  containerClassName = "",
  variant = "primary",
  size = "md",
  ...props
}: ChromaButtonProps) => {
  const config = sizeConfig[size];

  if (variant === "secondary") {
    return (
      <div className={`inline-flex items-center justify-center relative p-[2px] rounded-full overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform hover:scale-105 active:scale-95 ${config.container} ${containerClassName}`}>
        {/* Chroma Metallic Ring Gradient (Border) */}
        <div className="absolute inset-0 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,#d1d5db_0%,#ffffff_15%,#9ca3af_30%,#ffffff_40%,#d1d5db_50%,#ff3366_52%,#33ccff_55%,#ffffff_60%,#9ca3af_70%,#ffffff_80%,#d1d5db_100%)] animate-[spin_4s_linear_infinite]" />
        
        {/* Transparent / Glass Inner Surface */}
        <button
          className={`relative flex items-center justify-center w-full h-full ${config.padding} bg-neutral-950/90 backdrop-blur-xl rounded-full text-white font-semibold tracking-wide transition-all duration-300 group ${config.text} ${className}`}
          {...props}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center p-[6px] rounded-full bg-[#f8f9fa] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(255,255,255,1)] backdrop-blur-md transition-transform hover:scale-105 active:scale-95 ${config.container} ${containerClassName}`}
    >
      <div className="relative p-[1.5px] rounded-full flex flex-col justify-center overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-full h-full">
        {/* Chroma Metallic Ring Gradient */}
        <div className="absolute inset-0 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,#d1d5db_0%,#ffffff_15%,#9ca3af_30%,#ffffff_40%,#d1d5db_50%,#ff3366_52%,#33ccff_55%,#ffffff_60%,#9ca3af_70%,#ffffff_80%,#d1d5db_100%)] animate-[spin_4s_linear_infinite]" />
        
        {/* Glossy White/Glass Surface */}
        <button
          className={`relative flex items-center justify-center ${config.padding} w-full h-full bg-gradient-to-b from-white to-[#f3f4f6] rounded-full text-neutral-600 font-semibold tracking-wide shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 group ${config.text} ${className}`}
          {...props}
        >
          {/* Inner Text with Soft Blur Overlay Trick */}
          <span className="relative z-10 text-neutral-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] mix-blend-multiply flex items-center justify-center gap-2">
            {children}
          </span>
        </button>
      </div>
    </div>
  );
};
