import { Product } from "@/src/interfaces/product";


export async function foodGetAdoptionsByParentId(parentId: string): Promise<Product[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetAdoptionsByParentId($parentId: String!) {
        foodGetAdoptionsByParentId(parentId: $parentId) {
          _id
          slug
          parentId
          dataProduct{
            type
            seoProduct{
              title
              image{
                src
              }
            }
          }
        }
      }
      `,
      variables: { parentId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetAdoptionsByParentId)
}
