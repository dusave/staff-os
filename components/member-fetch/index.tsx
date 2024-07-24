import { Member } from "@/data/members"
import { MemberContextProvider } from "../member-context"

async function getData(): Promise<Member[]> {
  const apiEndpoint = process.env.MEMBER_API_ENDPOINT

  if(apiEndpoint) {
    const data = await fetch(apiEndpoint)
    const json = await data.json()
    return Object.entries<Member>(json.users).map(([key, value]) => {
      return {
        id: key,
        first: value.first,
        last: value.last,
        role: value.role,
        photo: value.photo,
        isAdmin: value.role === 'admin'
      }
    }).sort((a, b) => a.last.localeCompare(b.last))
  } else {
    console.error('API endpoint not specified')
    return []
  }
}


interface MemberFetchProps {
  children: React.ReactNode
}

export const MemberFetch = async ({children}: MemberFetchProps) => {
  let members = await getData() 

  return (
    <MemberContextProvider members={members}>
      {children}
    </MemberContextProvider>
  )
}