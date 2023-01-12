import { Product, UpdateDetailProduct, UpdateProduct } from "@/src/interfaces/product";


export async function foodUpdateProduct(input: UpdateProduct): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation FoodUpdateProduct($input: UpdateProduct!) {
        foodUpdateProduct(input: $input) {
          _id
          slug
          parentId
          dataProduct{
            details
            specs
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
      variables: { input },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodUpdateProduct)
}

export async function foodUpdateDetailProduct(input: UpdateDetailProduct): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation FoodUpdateDetailProduct($input: UpdateDetailProduct!) {
        foodUpdateDetailProduct(input: $input) {
          _id
          slug
          parentId
          dataProduct{
            specs
            details
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
      variables: { input },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodUpdateDetailProduct)
}
export async function foodUpdateSpecsProduct(input: UpdateDetailProduct): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation FoodUpdateSpecsProduct($input: UpdateSpecsProduct!) {
        foodUpdateSpecsProduct(input: $input) {
          _id
          slug
          parentId
          dataProduct{
            details
            specs
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
      variables: { input },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodUpdateSpecsProduct)
}
