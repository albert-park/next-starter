import React, { FC } from 'react';
import Head from 'next/head';
import Nav from '../Nav';
import LayoutStyles from './index.styles';

interface LayoutProps {
  title: string,
  layoutStyle?: object
}

const Layout: FC<LayoutProps> = ({ children, title, layoutStyle }) => {
  const useStyles = layoutStyle || LayoutStyles;
  return (
    <div className="hero">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <h1 className="title">
        Welcome to Next.js Starter
        {' '}
        {title}
        {' '}
Page!
      </h1>
      <p className="description">
        To get started, edit
        {' '}
        <code>pages/index.js</code>
        {' '}
        and save to reload.
      </p>
      {children}
      <style jsx>
        {useStyles}
      </style>
    </div>
  );
};

export default Layout;
