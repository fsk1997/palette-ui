import { graphql } from "gatsby";

export const projectFragment = graphql`
  fragment ProjectFragment on ProjectJson {
    created_at
    title
    status
    slug
    id
    description
    last_updated
    type
    mode
    version
    cover_image {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
