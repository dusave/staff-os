import type { Metadata } from "next";
import '@radix-ui/themes/styles.css';
import { Box, Theme } from "@radix-ui/themes";
import { Header } from "@/components/header";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import "./fonts/fontawesome.min.css";
import { Suspense } from "react";
import Loading from "../components/loading";
import { fontAwesome, quicksand } from "./fonts/fonts";

// Configure dotenv variables
require('dotenv').config()

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
    <html lang="en" className={`${quicksand.variable} ${fontAwesome.variable}`}>
      <body>
        <ThemeProvider attribute="class">
          <Theme accentColor="purple" grayColor="slate">
            <Box className="app-shell">
              <Header />
              <Suspense fallback={<Loading/>}>
                {children}
              </Suspense>
            </Box>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
