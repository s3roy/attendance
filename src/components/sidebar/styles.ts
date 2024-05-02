// styles.ts

import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: #263238;
  width: 250px;
  height: 100vh;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const NavItem = styled.div<{ isActive: boolean }>`
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #37474f;
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: #FFEB3B; // Yellow when active
    svg {
      color: #FFEB3B;
    }
  `}
`;

export const Icon = styled.span`
  margin-right: 10px;
  display: inline-block;
  width: 20px;
  text-align: center;
  font-size: 20px;
`;

export const Label = styled.span`
  font-size: 16px;
`;
