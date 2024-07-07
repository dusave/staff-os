'use client';

import { Member } from "@/data/members";
import { MemberComponent } from "../member";
import styles from './member-list.module.css'

interface MemberListProps {
  members: Member[]
}

export const MemberList = ({members}: MemberListProps) => {
  if(!members) {
    return <p>No users found</p>
  }

  return (
    <div className={styles.memberListContainer}>
    {members.map((member) => (
      <MemberComponent member={member} key={member.id}/>
    ))}
    </div>
  ) 
}