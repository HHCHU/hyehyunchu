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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
