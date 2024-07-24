import { MemberList } from "@/components/member-list";
import { Suspense } from "react";
import Loading from "../components/loading";
import { Box, Tabs } from "@radix-ui/themes";
import { MemberFetch } from "@/components/member-fetch";
import styles from './page-styles.module.css'
 
export default async function Page() {

  return (
    <Suspense fallback={<Loading/>}>
      <MemberFetch>
        <section className="container">
          <Tabs.Root defaultValue="members">
            <Tabs.List>
              <Tabs.Trigger value="members">Members</Tabs.Trigger>
              <Tabs.Trigger value="groups">Groups</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="members">
                <h1 className={styles.groupHeader}>Members</h1>
                <Suspense fallback={<Loading/>}>
                  <MemberList />
                </Suspense>`
              </Tabs.Content>
              <Tabs.Content value="groups">
              <h1 className={styles.groupHeader}>Groups</h1>
                <Suspense fallback={<Loading/>}>
                  <MemberList isGrouped />
                </Suspense>`
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </section>
      </MemberFetch>
    </Suspense>
  );
}
