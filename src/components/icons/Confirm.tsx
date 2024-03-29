// React Imports
import React from "react";

export const Confirm = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      {...props}
    >
      <path
        d="M159.405 462.713l218.634 218.634L859.54 196.055l94.784 94.151-580.076 583.236L69.676 568.87l89.729-106.157z"
        fill="currentColor"
      ></path>
    </svg>
  );
});
