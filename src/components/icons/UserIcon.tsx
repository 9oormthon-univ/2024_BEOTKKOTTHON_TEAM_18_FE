import { SVGProps } from 'react';
const SvgUserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}>
    <path
      stroke="#585858"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 25.143V24a8 8 0 0 1 8-8m0 0a8 8 0 0 1 8 8v1.143M16 16a4.571 4.571 0 1 0 0-9.143A4.571 4.571 0 0 0 16 16"
    />
  </svg>
);
export default SvgUserIcon;
