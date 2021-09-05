import React from "react";
import Head from "next/head";
import Header from './Header'
import Footer from './Footer'
import ExitPreviewButton from './ExitPreviewButton'

const Layout = ({ children, menu, footer }) => {
  return (
    <div>
      <Head>
        <title> Prismic Next.js Multi Page Website </title>
      </Head>
      <Header menu={menu} />
      <main>{children}</main>
      <Footer footer={footer} />
      <ExitPreviewButton />
    </div>
  );
};

export default Layout;
