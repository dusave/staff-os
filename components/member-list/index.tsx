'use client';

import { MemberComponent } from "../member";
import styles from './member-list.module.css'
import { Box, Tabs } from "@radix-ui/themes";
import { useMemberContext } from "../member-context";
import { usePathname } from "next/navigation";

export const MemberList = () => {
  const pathname = usePathname()
  const { members, updateMember, error } = useMemberContext()

  if(error) {
    return (
      <>
        <h1>Error</h1>
        <p>There was an error loading the members</p>
        <p>{error}</p>
      </>
    )
  }

  if(!members) {
    return (
      <>
        <h1>No users found</h1>
        <p>There were no users found</p>
      </>
    )
  }

  const admins = members.filter(m => m.isAdmin)
  const plebs = members.filter(m => !m.isAdmin)

  const selectedTab = pathname === '/groups' ? 'groups' : 'members'

  const onTabChange = (value: string) => {
    if(value === 'members') {
      history.pushState({}, 'Members', '/members')
    } else {
      history.pushState({}, 'Groups', '/groups')
    }
  }

  return (<section className="container">
    <Tabs.Root defaultValue={selectedTab}>
      <Tabs.List>
        <Tabs.Trigger value="members" onClick={() => onTabChange('members')}>Members</Tabs.Trigger>
        <Tabs.Trigger value="groups" onClick={() => onTabChange('groups')}>Groups</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="members">
          <h1 className={styles.groupHeader}>Members</h1>
          <Box className={[styles.memberListContainer, styles.rows].join(' ')}>
            {members.map((member) => (
              <MemberComponent member={member} key={member.id} onMemberChange={updateMember}/>
            ))}
            </Box>
        </Tabs.Content>
        <Tabs.Content value="groups">
          <h1 className={styles.groupHeader}>Groups</h1>
          {admins.length > 0 && (
            <Box className={[styles.memberListContainer, styles.columns].join(' ')}>
              <h2>Admin Users</h2>
              {admins.map((member) => (
                <MemberComponent member={member} key={member.id} onMemberChange={updateMember}/>
              ))}
            </Box>
          )}

          {plebs.length > 0 && (
            <Box className={[styles.memberListContainer, styles.columns].join(' ')}>
              <h2>Standard Users</h2>
              {plebs.map((member) => (
                <MemberComponent member={member} key={member.id} onMemberChange={updateMember}/>
              ))}
            </Box>
          )}
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  </section>
  )
}