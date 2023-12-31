import React, { ReactNode } from 'react';
import GlobalStyle from '@/styles/GlobalStyles';
import Head from 'next/head';

interface LayoutProps {
  title: string;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon.png"/>
      </Head>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;