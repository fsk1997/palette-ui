import { useStaticQuery, graphql } from "gatsby";

export const useAllProjectsMetadata = () => {
  const projects = useStaticQuery(graphql`
    {
      allProjectJson(
        sort: { order: DESC, fields: created_at }
        filter: { published: { eq: true } }
      ) {
        edges {
          node {
            ...projectFragment
          }
        }
      }
    }
  `);

  return projects.allProjectJson.edges;
};

export default useAllProjectsMetadata;
