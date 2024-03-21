import { SVGProps } from 'react';

const SvgHomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path
      fill="current"
      d="M21.615 9.6a1.2 1.2 0 1 0-2.4 0zm-16.8 0a1.2 1.2 0 0 0-2.4 0zm17.151 3.248a1.2 1.2 0 0 0 1.697-1.697zM12.015 1.2l.848-.849a1.2 1.2 0 0 0-1.697 0zM.366 11.15a1.2 1.2 0 1 0 1.697 1.697zM6.015 24h12v-2.4h-12zm15.6-3.6V9.6h-2.4v10.8zm-16.8 0V9.6h-2.4v10.8zm18.848-9.249-10.8-10.8-1.697 1.697 10.8 10.8zM11.166.351l-10.8 10.8 1.697 1.697 10.8-10.8zM18.015 24a3.6 3.6 0 0 0 3.6-3.6h-2.4a1.2 1.2 0 0 1-1.2 1.2zm-12-2.4a1.2 1.2 0 0 1-1.2-1.2h-2.4a3.6 3.6 0 0 0 3.6 3.6z"
    />
  </svg>
);
export default SvgHomeIcon;
