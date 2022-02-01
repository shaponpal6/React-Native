import * as React from "react";
import { SVGProps } from "react";

const SvgAnalytic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 6.3h4.5V21H0V6.3ZM8.4 0h4.2v21H8.4V0Zm8.4 12H21v9h-4.2v-9Z"
      fill="#F8F8F8"
    />
  </svg>
);

export default SvgAnalytic;
