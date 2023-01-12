import { CreateProduct, Product } from "@/src/interfaces/product";


export async function foodCreateProduct(input: CreateProduct): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation FoodCreateProduct($input: CreateProduct!) {
        foodCreateProduct(input: $input) {
          _id
          slug
          parentId
          dataProduct{
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
      variables: { input },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodCreateProduct)
}
