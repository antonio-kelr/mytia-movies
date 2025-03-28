import { ReactNode } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  // min-height: 100vh;
  border:5px solid red;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 1;
`;

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}; 