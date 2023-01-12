import { UpdatePage, Page, UpdateImage } from "@/src/interfaces/page";

export async function foodUpdatePage0(
  input: UpdatePage,
): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation FoodUpdatePage0($input: UpdatePage!) {
        foodUpdatePage0(input: $input) {
          _id
            dataPage{
              type
              seoPage{
                title
                description
                image{
                  src
                  alt
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
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.foodUpdatePage0)

}

export async function foodUpdateImagePage0(
  input: UpdateImage,
): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation FoodUpdateImagePage0($input: UpdateImage!) {
        foodUpdateImagePage0(input: $input) {
          _id
            dataPage{
              type
              seoPage{
                title
                description
                image{
                  src
                  alt
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
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.foodUpdateImagePage0)

}
