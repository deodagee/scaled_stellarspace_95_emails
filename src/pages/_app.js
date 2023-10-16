// pages/_app.js

import React from 'react';
import App from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./components/fonts";
import { SessionProvider } from "next-auth/react";

class MyApp extends App {
  render() {
    const { Component, pageProps, router, session } = this.props;
    return (
      <>
        <SessionProvider session={session}>
          <ChakraProvider>
            <Fonts />
              <Component {...pageProps} key={router.route} /> 
          </ChakraProvider>
        </SessionProvider>
      </>
    );
  }
}

export default MyApp;
