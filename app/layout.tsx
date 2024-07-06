import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import { Header } from "@/components/header";
import { ThemeProvider } from "next-themes";

// Configure dotenv variables
require('dotenv').config()

const quicksand = Quicksand({ subsets: ["latin"] });

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
      <body className={quicksand.className}>
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
