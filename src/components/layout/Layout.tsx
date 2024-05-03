import React from 'react';

import styled from 'styled-components';
import Sidebar from '../sidebar';

const Main = styled.main`
  width: 86vw;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <Main>{children}</Main>
  </div>
);

export default Layout;
