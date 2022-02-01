import * as React from "react";
import { SVGProps } from "react";

const SvgTasks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 23 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.444 2.6h-5.34C14.566 1.092 13.16 0 11.5 0S8.433 1.092 7.897 2.6H2.556C1.15 2.6 0 3.77 0 5.2v18.2C0 24.83 1.15 26 2.556 26h17.888C21.85 26 23 24.83 23 23.4V5.2c0-1.43-1.15-2.6-2.556-2.6Zm-8.944 0c.703 0 1.278.585 1.278 1.3 0 .715-.575 1.3-1.278 1.3a1.293 1.293 0 0 1-1.278-1.3c0-.715.575-1.3 1.278-1.3ZM8.944 20.8l-5.11-5.2 1.801-1.833 3.31 3.354 8.42-8.567 1.802 1.846L8.944 20.8Z"
      fill="#fff"
    />
  </svg>
);

export default SvgTasks;
