import { Page } from "@/src/interfaces/page";


export async function foodGetPage3ByParentId(parentId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetPages3ByParentId($parentId: String!){
        foodGetPages3ByParentId(parentId: $parentId) {
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
    .then((result) => result.foodGetPages3ByParentId)
}