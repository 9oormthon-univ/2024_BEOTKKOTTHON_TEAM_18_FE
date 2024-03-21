import { SVGProps } from 'react';

const SvgCirclePlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <path
      fill="current"
      stroke="current"
      strokeWidth={0.4}
      d="M5.64 14A8.353 8.353 0 0 0 14 22.36 8.353 8.353 0 0 0 22.36 14 8.353 8.353 0 0 0 14 5.64 8.353 8.353 0 0 0 5.64 14ZM7 14c0-3.873 3.127-7 7-7s7 3.127 7 7-3.126 7-7 7a6.99 6.99 0 0 1-7-7Z"
    />
    <path
      fill="current"
      stroke="current"
      strokeWidth={0.4}
      d="M10.16 13.32a.68.68 0 0 0 0 1.36h7.68a.68.68 0 1 0 0-1.36z"
    />
    <path
      fill="current"
      stroke="current"
      strokeWidth={0.4}
      d="M14 9.48a.68.68 0 0 0-.68.68v7.68a.68.68 0 0 0 1.36 0v-7.68a.68.68 0 0 0-.68-.68Z"
    />
  </svg>
);
export default SvgCirclePlusIcon;
