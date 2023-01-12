import { Article } from "@/src/interfaces/article";


export async function foodGetArticlesBySiteId(siteId: string): Promise<Article[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetArticlesBySiteId($siteId: String!) {
        foodGetArticlesBySiteId(siteId: $siteId) {
          slug
        }
      }
      `,
      variables: { siteId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetArticlesBySiteId)
}

export async function foodGetArticlesByParentId(parentId: string): Promise<Article[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetArticlesByParentId($parentId: String!) {
        foodGetArticlesByParentId(parentId: $parentId) {
          _id
          slug
          parentId
          dataArticle{
            seoArticle{
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
    .then((result) => result.foodGetArticlesByParentId)
}
