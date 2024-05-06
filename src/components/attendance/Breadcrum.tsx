import React from 'react';
import {
  BreadcrumbContainer,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from './StyledBreadcrumb';

const Breadcrumb: React.FC = () => {
  return (
    <BreadcrumbContainer>
      <span>Home</span>
      <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>
      <BreadcrumbLink href="/">Attendence</BreadcrumbLink>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
