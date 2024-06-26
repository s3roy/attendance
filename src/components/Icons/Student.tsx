import * as React from 'react';
import { SVGProps } from 'react';
const Student = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M32 64v80M54.2 216a88.1 88.1 0 0 1 147.6 0M224 64l-96 32-96-32 96-32 96 32z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M169.3 82.2a56 56 0 1 1-82.6 0"
    />
  </svg>
);
export default Student;
