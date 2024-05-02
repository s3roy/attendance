import * as React from 'react';
import { SVGProps } from 'react';
const Attendance = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} {...props}>
    <path d="M5 2c13.664-.773 13.664-.773 17.438 2.375 3.706 4.192 3.23 8.685 2.937 14L25 28H5V2Zm12 3 1 5 4-1-5-4Zm-9 9 1 2Zm5 0 1 2Zm-5 7 1 2Zm5 0 1 2Z" />
  </svg>
);
export default Attendance;
