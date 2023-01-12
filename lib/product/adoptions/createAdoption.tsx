import { graphQLClient } from "@/lib/graphqlClient";
import { CreateProduct, Product } from "@/src/interfaces/product";
import { gql } from "graphql-request";


export async function foodCreateAdoptiongq(input: CreateProduct): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation FoodCreateAdoption($input: CreateProduct!) {
        foodCreateAdoption(input: $input) {
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
    .then((result) => result.foodCreateAdoption)
}

export async function foodCreateAdoption(
  input: CreateProduct,
): Promise<Product> {
  const data = await graphQLClient.request(gql`
  mutation FoodCreateAdoption($input: CreateProduct!) {
        foodCreateAdoption(input: $input) {
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
`, {
    input,
  });
  return data.foodCreateAdoption;
  
}
