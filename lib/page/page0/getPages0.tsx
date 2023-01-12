import { Page } from "@/src/interfaces/page";
import { ListInput } from "@/src/interfaces/site";


export async function foodGetPages0(): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetPages0{
        foodGetPages0{
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
    .then((result) => result.foodGetPages0)
}

export async function foodPages0ByParentId(parentId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetPages0ByParentId($parentId: String!){
        foodGetPages0ByParentId(parentId: $parentId) {
          _id
          dataPage{
            type
            seoPage{
              title
              image{
                src
                alt
              }
            }
          }
          slug
        }
      }
      `,
      variables: { parentId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetPages0ByParentId)
}
export async function foodPages0ByParentIdByPagination( listInput: ListInput, parentId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetPages0ByParentIdByPagination($listInput: ListInput!, $parentId: String!){
        foodGetPages0ByParentIdByPagination(listInput: $listInput, parentId: $parentId) {
          _id
          dataPage{
            type
            seoPage{
              title
              image{
                src
                alt
              }
            }
          }
          slug
        }
      }
      `,
      variables: { listInput, parentId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetPages0ByParentIdByPagination)
}
export async function foodPages0BySiteId(siteId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetPages0BySiteId($siteId: String!){
        foodGetPages0BySiteId(siteId: $siteId) {
          _id
        }
      }
      `,
      variables: { siteId: siteId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetPages0BySiteId)
}