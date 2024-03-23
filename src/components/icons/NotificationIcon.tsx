import { SVGProps } from 'react';

const SvgNotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={'current'}
    height={'current'}
    fill="none"
    {...props}>
    <g
      fill="current"
      clipPath="url(#notificationIcon_svg__a)">
      <path d="M6.8 3.3c-.38-.39-1-.39-1.4-.03a10.38 10.38 0 0 0-3.26 6.07c-.09.61.38 1.16.99 1.16.49 0 .9-.35.98-.83a8.44 8.44 0 0 1 2.65-4.94c.42-.38.43-1.03.03-1.43zM20.86 10.5c.61 0 1.09-.55.99-1.16a10.5 10.5 0 0 0-3.25-6.06c-.4-.37-1.02-.36-1.4.02-.4.4-.38 1.05.03 1.43 1.38 1.27 2.35 3 2.65 4.94.07.48.49.83.98.83M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zM12 22c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18q.15-.36.15-.78h-4c.01 1.1.9 2 2.01 2" />
    </g>
    <defs>
      <clipPath id="notificationIcon_svg__a">
        <path
          fill="#fff"
          d="M0 0h24v24H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotificationIcon;
