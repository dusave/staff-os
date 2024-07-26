
import localFont from 'next/font/local'
import { Quicksand } from "next/font/google";

export const quicksand = Quicksand({ subsets: ["latin"], variable: '--font-quicksand' });
export const fontAwesome = localFont({
  variable: '--font-awesone',
  src: [
    {
      path: './fa-regular-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fa-solid-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})