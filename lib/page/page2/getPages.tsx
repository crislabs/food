import { Page } from "@/src/interfaces/page";


export async function foodGetPages1(): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetPages1{
        foodGetPages1{
          _id
          parentId
          siteId
        }
      }
      `,
      variables: {},
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetPages1)
}

export async function foodGetPage2ByParentId(parentId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetPages2ByParentId($parentId: String!){
        foodGetPages2ByParentId(parentId: $parentId) {
          _id
          dataPage{
            type
            seoPage{
              title
            }
          }
          slug
        }
      }
      `,
      variables: { parentId: parentId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetPages2ByParentId)
}