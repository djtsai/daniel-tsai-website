import "../styles/globals.css";
import React from 'react'
import NextApp from 'next/app'
import { Client } from "../prismic-configuration";

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client();
    const menu = (await client.getSingle("menu")) || {};
    const footer = (await client.getSingle("footer")) || {};
    return {
      props: {
        menu: menu,
        footer: footer
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <Component {...pageProps} menu={props.menu} footer={props.footer} />
    )
  }
}
