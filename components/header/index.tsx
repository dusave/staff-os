'use client';

import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { Heading, Text } from "@radix-ui/themes";
import { capitalize } from "@/utils";

export const Header = () => {
  const pathname = usePathname();
  
  const segment = pathname.split("/")[1] !== '' ? pathname.split("/")[1] : "Members";
  

  return (
    <header className={styles.header}>
      <Heading as="h1" size='7'>staffOS</Heading>
      <Text>/</Text>
      <Heading as="h2" size='5'>{capitalize(segment)}</Heading>
    </header>
  );
}