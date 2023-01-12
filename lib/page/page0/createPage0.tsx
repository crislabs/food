import { graphQLClient } from "@/lib/graphqlClient";
import { CreatePage, Page } from "@/src/interfaces/page";
import { gql } from "graphql-request";

export async function foodCreatePage0(
  input: CreatePage,
): Promise<Page> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 123`
    },
    body: JSON.stringify({
      query: `
      mutation FoodCreatePage0($input: CreatePage!) {
        foodCreatePage0(input: $input) {
          _id
            dataPage{
              type
              seoPage{
                title
                image{
                  src
                }
              }
            }
          slug
          parentId
        }
      }
    `,
      variables: { input },
    }),
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }

    console.log(res.status)

    throw new Error("Error creating review")
  })
    return res.data.foodCreatePage0
 
}
export async function foodCreatePage0gq(
  input: CreatePage,
): Promise<Page> {
  const data = await graphQLClient.request(gql`
  mutation FoodCreatePage0($input: CreatePage!) {
    foodCreatePage0(input: $input) {
      _id
        dataPage{
          type
          seoPage{
            title
            image{
              src
            }
          }
        }
      slug
      parentId
    }
  }
`, {
    input,
  });
  return data.foodCreatePage0;
  
}
