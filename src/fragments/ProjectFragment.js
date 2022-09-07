import { graphql } from "gatsby";

export const projectFragment = graphql`
  fragment projectFragment on ProjectJson {
    created_at
    title
    status
    slug
    id
    description
    last_updated
    type
    published
    mode
    dependencies {
      name
      link
      icon_url
    }
    version
    cover_image {
      publicURL
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
