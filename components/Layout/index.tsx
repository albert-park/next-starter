import React, { FC } from 'react';
import Head from 'next/head';
import Nav from '../Nav';
import { StyledHero, StyledTitle, StyledDescripttion } from './index.styles';

interface LayoutProps {
  title: string,
  layoutStyle?: object
}

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <StyledHero>
    <Nav />
    <StyledTitle>
        Welcome to Next.js Starter
      {' '}
      {title}
      {' '}
Page!
    </StyledTitle>
    <StyledDescripttion>
        To get started, edit
      {' '}
      <code>pages/index.js</code>
      {' '}
        and save to reload.
    </StyledDescripttion>
    {children}
  </StyledHero>
);

export default Layout;
