'use server'

export type Member = {
  id: string
  first: string
  last: string
  role: string
  photo: string
}

export async function fetchMembers() {
  const apiEndpoint = process.env.MEMBER_API_ENDPOINT

  if(apiEndpoint) {
    const data = await fetch(apiEndpoint)

    return await data.json()
  } else {
    console.error('API endpoint not specified')
    return {}
  }
}