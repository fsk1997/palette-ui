import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const siteMetadata = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
          twitterUsername
          url
        }
      }
    }
  `);

  return siteMetadata.site.siteMetadata;
};

export default useSiteMetadata;
