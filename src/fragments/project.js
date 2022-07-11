import { graphql } from "gatsby";

export const projectFragment = graphql`
  fragment projectFragment on ProjectJson {
    title
    slug
    description
    created_at
    last_updated
    status
    version
    mode
  }
`;
