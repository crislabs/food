import { Product } from "@/src/interfaces/product";


export async function foodGetAdoption(id: string): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetAdoption($id: String!) {
        foodGetAdoption(id: $id) {
          _id
          slug
          parentId
          dataProduct{
            type
            imageProduct{
              src
              alt
            }
            seoProduct{
              title
              description
              image{
                src
              }
            }
          }
        }
      }
      `,
      variables: { id },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetAdoption)
}
