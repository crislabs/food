import { ListPage, Page } from '@/src/interfaces/page';
import { ConnectionArgs, ListInput } from '@/src/interfaces/site';

export async function foodGetPages0WithCursor(
  args: ConnectionArgs,
  parentId: string,
): Promise<ListPage> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetPages0WithCursor($args: ConnectionArgs!, $parentId: String!){
        foodGetPages0WithCursor(args: $args, parentId:$parentId){
          page {
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
            edges {
              cursor
              node {
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
          }
          pageData {
            count
            limit
            offset
          }
       
          
        }
      }
      `,
      variables: { args, parentId },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.foodGetPages0WithCursor);
}
