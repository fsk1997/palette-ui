import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Seo = ({
  customTitle,
  customDescription,
  customOgImage,
  customURL,
}) => {

  const meta = useSiteMetadata()
  // console.log(meta);

  return (

      <Helmet>
        {/* Basic metadata */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={customDescription || meta.description}
        />
        <meta name="author" content={"Fong Say Kiat"} />

        {/* Facebook metadata */}
        <meta property="og:title" content={customTitle || meta.title} />
        <meta
          property="og:description"
          content={customDescription || meta.description}
        />
        <meta
          property="og:image"
          content={customOgImage || meta.url + meta.image}
        />
        <meta property="og:url" content={customURL || meta.url} />
        <meta property="og:image:width" content="730" />
        <meta property="og:image:height" content="487" />

        {/* Twitter metadata */}
        <meta
          name="twitter:title"
          content={customTitle || meta.title}
        />
        <meta
          name="twitter:description"
          content={customDescription || meta.description}
        />
        <meta
          name="twitter:image"
          content={customOgImage || meta.url + meta.image}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@SayKiat_____" />

        {/* Page Specific metadata */}
        <title>{customTitle || meta.title}</title>
        <link rel="canonical" href={customURL || meta.url} />
        {/* <meta
          name="google-site-verification"
          content="VIi4D2wRtBYKLPhF_KvlalIsFIpxwl95do0OOIGGKyQ"
        /> */}
      </Helmet>
    
  );
};

export default Seo