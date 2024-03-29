import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { throttle } from "underscore";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";

const Project = () => {
  const [dismiss, setDismiss] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Idea: https://dev.to/nadeemkhanrtm/detect-scroll-direction-reactjs-1gnp

  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(() => {
        if (window.scrollY < lastScrollTop) {
          console.log("scrolling up", window.scrollY, lastScrollTop, dismiss);
          setDismiss(false);
        } else {
          console.log("scrolling down", window.scrollY, lastScrollTop, dismiss);
          setDismiss(true);
        }
        setLastScrollTop(window.scrollY);
        //if scrolltop is less than 0, then set lastScrollTop to 0.
        //if scrolltop is more than 0, then set lastScrollTop to current scrollTop
      }, 1000)
    );
  }, [lastScrollTop]);

  return (
    <div className={styles.page}>
      <div className="page-content">
        <h1>BottomTabNavigator (Still Buggy)</h1>
        {[...Array(50)].map(index => (
          <p key={index}>this is some content</p>
        ))}
      </div>
      <div
        className={`${styles.tabContainer} ${
          dismiss ? styles.tabDismiss : null
        }`}
      >
        <div>
          <a href="#">text 1</a>
        </div>
        <div>
          <a href="#">text 2</a>
        </div>
        <div>
          <a href="#">text 3</a>
        </div>
        <div>
          <a href="#">text 4</a>
        </div>
        <div>
          <a href="#">text 5</a>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "bottom-tab-navigator" }) {
        ...projectFragment
      }
    }
  `);

  const project = data.projectJson;

  return (
    <ProjectLayout
      projectTitle={project.title}
      projectStatus={project.status}
      projectVersion={project.version}
      projectCoverImage={project.cover_image.childImageSharp.gatsbyImageData}
      projectDescription={project.description}
      projectDependencies={project.dependencies}
      projectMode={project.mode}
    >
      <Seo
        customTitle={`${project.title} | ${siteMetadata.title}`}
        customDescription={project.description}
        customURL={`${siteMetadata.url}/project/${slugify(project.title)}`}
        customOgImage={`${siteMetadata.url}${project.cover_image.publicURL}`}
      />
      <Project />
    </ProjectLayout>
  );
};

export default Page;
