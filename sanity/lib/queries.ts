import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;
export const HERO_IMAGES_QUERY = groq`*[_type == "project"] {
    slug,
    "imageUrl": image.asset->url,
  } | order(publishedAt desc) [0...5]
`;
export const PROJECTS_QUERY = groq`*[_type == "project"] {
    name,
    slug,
    "imageUrl": image.asset->url,
    location,
    publishedAt
  } | order(publishedAt desc)
`  
export const PROJECT_BY_SLUG_QUERY = groq`*[_type == "project" && slug.current == $slug][0] {
    name,
    slug,
    location,
    "imageUrl": image.asset->url,
    body[]{
      ...,
      markDefs[]{
        ...,
        _type == "image" => {
          ...,
          "imageUrl": asset->url
        }
      }
    },
    publishedAt
  }
  `;
export const EMPOLOYEES_QUERY = groq`*[_type == "ansatteType"] {
  name,
  role,
  email,
  "imageUrl": image.asset->url
}
`;  