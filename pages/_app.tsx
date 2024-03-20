import { createContext } from 'react';

import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { io } from 'socket.io-client';

import '../styles/globals.css';
const isDev = process.env.NODE_ENV === 'development';
const url = isDev
  ? 'http://localhost:3005'
  : 'https://server-sol-chat.onrender.com';
const socket = io(url);
export const SocketContext = createContext(socket);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/react-toastify@9.0.6/dist/ReactToastify.css"
        />
      </Head>
      <UserProvider>
        <SocketContext.Provider value={socket}>
          <Component {...pageProps} />
        </SocketContext.Provider>
      </UserProvider>
    </>
  );
}
