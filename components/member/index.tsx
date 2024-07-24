import { Member } from '@/data/members'
import Image from 'next/image'
import React, { useCallback } from 'react'
import styles from './member.module.css'
import { Box, Checkbox } from '@radix-ui/themes'

interface MemberProps {
  member: Member
  onMemberChange: (member: Member) => void
}

export const MemberComponent = ({member, onMemberChange}: MemberProps) => {
  const toggleAdmin = useCallback(() => {
    onMemberChange({ ...member, isAdmin: !member.isAdmin })
  }, [member, onMemberChange])

  return (
    <div className={[styles.memberContainer, styles.row].join(' ')}>
      <Checkbox onCheckedChange={toggleAdmin} checked={member.isAdmin}/>
      <div className={[styles.standard, member.isAdmin ? styles.admin : ''].join(' ') }>
        <i className="fa-solid fa-user-crown fa-2x" />
      </div>
      <Image className={styles.avatar} src={member.photo} alt={member.first} width={200} height={200} />
      <Box className={styles.nameplate}>
        <h4>{member.first} {member.last}</h4>
        <p>{member.role}</p>
      </Box>
    </div>  
  )
}
