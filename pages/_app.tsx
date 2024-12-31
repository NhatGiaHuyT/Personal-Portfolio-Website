import { AppProps } from 'next/app';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../styles/theme';
import Head from 'next/head';
import CustomCursor from '../components/CustomCursor';
import Toggle from '../components/ThemeToggle';
import VideoBackground from '../components/VideoBackground';


const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="A portfolio showcasing the work of a passionate Computer Scientist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
         <VideoBackground />
          <Toggle toggleTheme={toggleTheme} />
          <Component {...pageProps} />
        <CustomCursor />
      </ThemeProvider>
    </>
  );
};

export default MyApp;

