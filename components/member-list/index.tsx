'use client';

import { Member } from "@/data/members";
import { MemberComponent } from "../member";
import styles from './member-list.module.css'
import { Box } from "@radix-ui/themes";
import { useMemberContext } from "../member-context";

interface MemberListProps {
  isGrouped?: boolean
}

export const MemberList = ({isGrouped = false}: MemberListProps) => {

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

  if(isGrouped) {
    const admins = members.filter(m => m.isAdmin)

    const plebs = members.filter(m => !m.isAdmin)
    return (
      <>
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
      </>
    )
  }

  return (
    <Box className={[styles.memberListContainer, styles.rows].join(' ')}>
    {members.map((member) => (
      <MemberComponent member={member} key={member.id} onMemberChange={updateMember}/>
    ))}
    </Box>
  ) 
}