import * as React from "react";
import { SVGProps } from "react";

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M45 22.5C45 34.926 34.926 45 22.5 45S0 34.926 0 22.5 10.074 0 22.5 0 45 10.074 45 22.5Z"
      fill="#fff"
    />
    <path
      d="M45 22.5C45 34.926 34.926 45 22.5 45S0 34.926 0 22.5 10.074 0 22.5 0 45 10.074 45 22.5Z"
      fill="#fff"
    />
    <path
      d="M31 24.286h-7.714V32h-2.572v-7.714H13v-2.572h7.714V14h2.572v7.714H31v2.572Z"
      fill="#00155F"
    />
  </svg>
);

export default SvgAdd;
