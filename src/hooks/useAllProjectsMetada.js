import { useStaticQuery, graphql } from "gatsby";

export const useAllProjectsMetadata = () => {
  const projects = useStaticQuery(graphql`
    {
      allProjectJson(sort: {order: DESC, fields: created_at}) {
        edges {
          node {
            ...ProjectFragment
          }
        }
      }
    }
  `);

  return projects.allProjectJson.edges;
};

export default useAllProjectsMetadata;
