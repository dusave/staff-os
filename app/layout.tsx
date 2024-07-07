import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Quicksand } from "next/font/google";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import { Header } from "@/components/header";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import "./fonts/fontawesome.min.css";

// Configure dotenv variables
require('dotenv').config()

const quicksand = Quicksand({ subsets: ["latin"] });
const fontAwesome = localFont({
  src: [
    {
      path: './fonts/fa-regular-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/fa-solid-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "staffOS",
  description: "Manage your staff with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[quicksand.className, fontAwesome.className].join(' ')}>
        <ThemeProvider attribute="class">
          <Theme accentColor="purple" grayColor="slate">
            <Header />
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
