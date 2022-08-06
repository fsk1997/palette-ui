import React from "react";

// Non essential imports
import ProjectLayout from "../components/Layouts/ProjectLayout";
import useSiteMetadata from "../hooks/useSiteMetadata";
import Seo from "../components/Seo";

const StickyHeaderLinks = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <ProjectLayout>
      <Seo 
        customTitle={`Projects | ${siteMetadata.title}`}
        customURL={`${siteMetadata.url}/projects`}
      />
        Click on any of the link beside to start browsing
    </ProjectLayout>
  );
};

export default StickyHeaderLinks;
