import { fadeIn } from '@/animations';
import LandingModule from '@/components/LandingModule/LandingModule';
import Nav from '@/components/Nav/Nav';
import Topbar from '@/components/Topbar/Topbar';
import '@/styles/globals.css';
import { motion as m } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Montserrat, Nunito } from 'next/font/google';
import React from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LandingModule />
      <ThemeProvider>
        <m.div
          variants={fadeIn}
          animate='show'
          initial='hidden'
          transition={{
            ease: 'easeInOut',
            duration: 3,
            delay: 3,
          }}
          className={`flex h-auto w-full min-h-screen py-10 justify-between relative flex-col lg:flex-row  ${nunito.variable} ${montserrat.variable}`}
        >
          <section className='lg:w-64 px-5 md:px-10 lg:relative border-t-[0.5px] border-opacity-50 border-white lg:border-none bg-[#2c4054] lg:bg-transparent bg-opacity-60 backdrop-blur-2xl lg:backdrop-filter-none z-10 bottom-0 w-full fixed'>
            <Nav />
          </section>
          <section className='w-full h-full mr-auto px-5 md:px-10 border-l-0 lg:border-l-[0.5px] min-h-[700px] relative flex flex-col'>
            <Topbar />
            <React.Fragment>
              <Component className='dark:bg-dark h-full' {...pageProps} />
            </React.Fragment>
          </section>
        </m.div>
      </ThemeProvider>
    </>
  );
}
