// pages/_app.js

import React from 'react';
import App from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./components/fonts";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";

class MyApp extends App {
  render() {
    const { Component, pageProps, router, session } = this.props;
    return (
      <>
        <SessionProvider session={session}>
          <ChakraProvider>
            <Fonts />
            <AnimatePresence mode='sync' initial={true}>
              <Component {...pageProps} key={router.route} /> 
            </AnimatePresence>
          </ChakraProvider>
        </SessionProvider>
      </>
    );
  }
}

export default MyApp;
