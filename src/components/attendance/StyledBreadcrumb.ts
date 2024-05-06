import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
  margin-top: 1rem;
  font-size: 18px;
  color: #666;
  padding: 10px 20px;
  margin-left: 1rem;
`;

export const BreadcrumbLink = styled.a`
  color: orange;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: #333;
`;
