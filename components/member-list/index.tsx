'use client';

import { Member } from "@/data/members";
import Image from "next/image";

interface MemberListProps {
  members: Member[]
}

export const MemberList = ({members}: MemberListProps) => {
  if(!members) {
    return <p>No users found</p>
  }

  return (
    <>
    {members.map((member:any) => (
      <div key={member.id}>
        <Image src={member.photo} alt={member.first} width={200} height={200} />
        <h2>{member.first} {member.last}</h2>
        <p>{member.role}</p>
      </div>  
    ))}
    </>
  ) 
}