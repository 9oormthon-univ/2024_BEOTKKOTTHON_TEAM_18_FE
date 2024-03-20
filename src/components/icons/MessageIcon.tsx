import { SVGProps } from 'react';
const SvgMessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <path
      stroke="#2463FF"
      strokeWidth={2}
      d="M21 7H7a2.333 2.333 0 0 0-2.333 2.333v9.334A2.333 2.333 0 0 0 7 21h14a2.333 2.333 0 0 0 2.333-2.333V9.333A2.333 2.333 0 0 0 21 7Z"
    />
    <path
      stroke="#2463FF"
      strokeWidth={2}
      d="m4.667 10.5 8.29 4.145a2.33 2.33 0 0 0 2.086 0l8.29-4.145"
    />
  </svg>
);
export default SvgMessageIcon;
