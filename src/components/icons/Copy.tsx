// React Imports
import React from "react";

export const Copy = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      {...props}
    >
      <path
        d="M921.6 819.2h-102.4v102.4c0 56.32-46.08 102.4-102.4 102.4H102.4c-56.32 0-102.4-46.08-102.4-102.4V307.2c0-56.32 46.08-102.4 102.4-102.4h102.4V102.4c0-56.32 46.08-102.4 102.4-102.4h614.4c56.32 0 102.4 46.08 102.4 102.4v614.4c0 56.32-46.08 102.4-102.4 102.4zM153.6 307.2c-30.72 0-51.2 20.48-51.2 51.2v512c0 30.72 20.48 51.2 51.2 51.2h512c30.72 0 51.2-20.48 51.2-51.2V358.4c0-30.72-20.48-51.2-51.2-51.2H153.6z m768-153.6c0-30.72-20.48-51.2-51.2-51.2H358.4c-30.72 0-51.2 20.48-51.2 51.2v51.2h409.6c56.32 0 102.4 46.08 102.4 102.4v409.6h51.2c30.72 0 51.2-20.48 51.2-51.2V153.6z"
        fill="currentColor"
      ></path>
    </svg>
  );
});
