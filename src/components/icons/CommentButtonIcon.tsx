import { SVGProps } from 'react';

const SvgCommentButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={'current'}
    height={'current'}
    fill="none"
    {...props}>
    <g clipPath="url(#commentButtonIcon_svg__a)">
      <path
        fill="#2388FF"
        d="m0 14 15.992-7L0 0v5.444L11.421 7 0 8.556z"
      />
    </g>
    <defs>
      <clipPath id="commentButtonIcon_svg__a">
        <path
          fill="#fff"
          d="M0 0h16v14H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCommentButtonIcon;
