import React, { FC } from 'react';
import Head from 'next/head';
import Nav from '../Nav';
import { StyledHero, StyledTitle, StyledDescripttion } from './index.styles';

interface LayoutProps {
  title: string,
  layoutStyle?: object
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const pageFileName = title === 'Home' ? 'index' : title.toLowerCase();
  return (
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
        <code>{`pages/${pageFileName}.js`}</code>
        {' '}
        and save to reload.
      </StyledDescripttion>
      {children}
    </StyledHero>
  );
};

export default Layout;
