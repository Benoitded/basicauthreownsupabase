import Header from "@/component/Header/Header";
import type { AppProps } from "next/app";
import ReownContextProvider from "@/context/reown";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Supprimez cette ligne
  // const cookies = headers().get("cookie");
  return (
    <>
      <SessionProvider>
        <ReownContextProvider cookies={pageProps.cookies}>
          <Header />
          <Component {...pageProps} />
        </ReownContextProvider>
      </SessionProvider>
    </>
  );
}
