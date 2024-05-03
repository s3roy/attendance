import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: #263238;
  width: 14vw;
  height: 100vh;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const NavItem = styled.div<{ $isActive: boolean }>`
  color: white;
  padding: 15px 20px 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  border-bottom: 1px solid #37474f;
  margin-bottom: 8px;
  text-decoration: none;

  ${({ $isActive }) =>
    $isActive &&
    `
    color: #FFEB3B; 
    svg {
      color: #FFEB3B;
    }
  `}
`;

export const Icon = styled.span`
  display: inline-block;
  width: 30px;
  text-align: center;
  font-size: 28px;
`;

export const Label = styled.span`
  margin-left: 15px;
  font-size: 21px;
`;
