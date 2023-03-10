import { Site } from "@/src/interfaces/site";

export const PET_GET_SITE = `
query FoodGetSite($id: String!) {
  foodGetSite(id: $id) {
    _id
    dataSite {
      name
      description
      type
      dbSite {
        uid
        label
        slug
      }
      infoSite{
        clientId
      }
      imageSite {
        banner {
          src
          alt
        }
        logo {
          src
          alt
        }
        icon {
          src
          alt
        }
      }
    }
    url
  }
}
`;

export async function foodGetSite(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: PET_GET_SITE,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.foodGetSite) 
}

export async function foodGetSiteByAdmin(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetSite($id: String!) {
        foodGetSite(id: $id) {
          dataSite {
            name
            adminSite{
              sid
            }
          }
        }
      }
      `,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.foodGetSite) 
}

export async function foodGetSiteStoreNavigation(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query FoodGetSite($id: String!) {
        foodGetSite(id: $id) {
          _id
          dataSite {
            name
            description
            type
            imageSite {
              icon {
                src
                alt
              }
              logo {
                src
                alt
              }
            }
          }
          pages{
            _id
            dataPage{
              type
              seoPage{
                title
              }
            }
            slug
            
          }
        }
      }
      `,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.foodGetSite) 
}
