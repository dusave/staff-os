import { Member } from '@/data/members'
import Image from 'next/image'
import React from 'react'
import styles from './member.module.css'

interface MemberProps {
  member: Member
}

export const MemberComponent = ({member}: MemberProps) => {
  return (
    <div className={styles.memberContainer}>
      <Image src={member.photo} alt={member.first} width={200} height={200} />
      <h2>{member.first} {member.last}</h2>
      <p>{member.role}</p>
      <i className="fa-solid fa-grid"></i>
    </div>  
  )
}
