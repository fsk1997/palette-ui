import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const siteMetadata = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          siteUrl
          oneline
          description
          url
          image
          twitterUsername
        }
      }
    }
  `);

  return siteMetadata.site.siteMetadata;
};

export default useSiteMetadata;
