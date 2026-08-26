import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "tailwindcss/tailwind.css";
import "../globalStyles.scss";

import { homePageMeta } from "../data/data";

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          // Runs before paint to avoid a light/dark flash on load.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
