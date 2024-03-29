// React Imports
import React from "react";

export const Cancel = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      {...props}
    >
      <path
        d="M896 812.9 594.2 511.1l301.2-301.2-82.3-82.3L511.9 428.8l-301-301L128.6 210.1l301 301L128 812.7l82.3 82.3 301.6-301.6 301.8 301.8L896 812.9zM896 812.9"
        fill="currentColor"
      ></path>
    </svg>
  );
});
