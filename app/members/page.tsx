import { MemberList } from "@/components/member-list";
import { Suspense } from "react";
import Loading from "../../components/loading";
import { MemberFetch } from "@/components/member-fetch";
 
export default function Page() {
  return (
    <Suspense fallback={<Loading/>}>
      <MemberFetch>
        <MemberList />
      </MemberFetch>
    </Suspense>
  );
}
