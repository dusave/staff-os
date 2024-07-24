'use client';

import { Member } from "@/data/members"
import { createContext, useContext, useState } from "react"

interface MemberContext {
  members: Member[]
  updateMember: (member: Member) => void
  error?: string
}

export const MemberContext = createContext<MemberContext>({members: [], updateMember: () => {}})

export const useMemberContext = () => {
  const context = useContext(MemberContext)
  if (!context) {
    throw new Error('useMemberContext must be used inside a MemberContextProvider')
  }
  return context
}

interface MemberContextProviderProps {
  children: React.ReactNode
  members: Member[]
}

export const MemberContextProvider = ({children, members: initialMembers}: MemberContextProviderProps) => {
  const [members, setMembers] = useState(initialMembers)
const updateMember = (member: Member) => {
  let tempMembers = [...members]
  const replaceIndex = tempMembers.findIndex(m => m.id === member.id)
  if(replaceIndex > -1) {
    tempMembers[replaceIndex] = member
  } else {
    tempMembers.push(member)
  }
  setMembers(tempMembers)
}

  return (
    <MemberContext.Provider value={{members, updateMember}}>
      {children}
    </MemberContext.Provider>
  )
}