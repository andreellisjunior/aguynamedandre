import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import "../styles/globals.scss";
const { motion } = require("framer-motion");

const pageAnimation = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2HY26RMDSC`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2HY26RMDSC', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Head>
        <title>I&apos;m André! It&apos;s Nice To Meet You!</title>
        <meta
          name="description"
          content="My name is André. This is were you'll find many things I've worked on in my career as a Software Developer."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Spartan:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

      </Head>
      <Header />
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={pageAnimation}
        key={router.route}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </>
  );
}

export default MyApp;
