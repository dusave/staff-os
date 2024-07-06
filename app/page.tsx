import { MemberList } from "@/components/member-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Member } from "@/data/members";

async function getData(): Promise<Member[]> {
  console.log('ENDPOINT', process.env.MEMBER_API_ENDPOINT);
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
        photo: value.photo
      }
    })
  } else {
    console.error('API endpoint not specified')
    return []
  }
}
 
export default async function Page() {
  const members = await getData()

  return (
    <section>
      <h1>Members</h1>
      <p>Manage your staff with ease</p>
      <Suspense fallback={<Loading/>}>
        <MemberList members={members} />
      </Suspense>
    </section>
  );
}
