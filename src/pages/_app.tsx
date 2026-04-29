import "tailwindcss/tailwind.css";
import "../globalStyles.scss";

import type { AppProps } from "next/app";
import Script from "next/script";
import { memo, ReactElement } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const MyApp = memo(({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      {GA_ID ? (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`

      window.dataLayer = window.dataLayer || [];

      function gtag(){dataLayer.push(arguments);}

      gtag('js', new Date());

      gtag('config', '${GA_ID}');

    `}
          </Script>
        </>
      ) : null}
      <Component {...pageProps} />
    </>
  );
});

MyApp.displayName = 'MyApp';

export default MyApp;
