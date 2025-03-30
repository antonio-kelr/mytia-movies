import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { LayoutContainer, Main } from '../styles/components/Layout.styles';

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