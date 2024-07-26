'use client';

import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { capitalize } from "@/utils";

export const Header = () => {
  const pathname = usePathname();
  
  const segment = pathname.split("/")[1] !== '' ? pathname.split("/")[1] : "Members";
  

  return (
    <header className={styles.header}>
      <h1>staffOS</h1>
      <span>/</span>
      <h2>{capitalize(segment)}</h2>
    </header>
  );
}