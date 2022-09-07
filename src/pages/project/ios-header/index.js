import React, { useEffect, useState } from "react";
import { throttle } from "underscore";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";



const Project = () => {
  
  const [smallerHeaderFont, setSmallerHeaderFont] = useState(1);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    var scrollTop = window.scrollY + 1; //Add one only it works
    window.addEventListener(
      "scroll",
      throttle(() => {
        requestAnimationFrame(() => {
          if (scrollTop < lastScrollTop) {
            setSmallerHeaderFont(smallerHeaderFont + window.scrollY / 100);
            console.log("scrolling up");
          }
          if (scrollTop > lastScrollTop) {
            setSmallerHeaderFont(smallerHeaderFont - window.scrollY / 100);
            console.log("scrolling down");
          }
        });
        setLastScrollTop(scrollTop < 0 ? 0 : scrollTop);
      }, 50)
    );
  }, [null]);


  return (
    <div className={styles.page}>
        <div className={styles.headers}>
          <header className={styles.HeaderLarge}>
            <h1
              className={styles.h1}
              style={{
                transform: `scale(${smallerHeaderFont})`,
                opacity: smallerHeaderFont,
                transformOrigin: "top left",
                marginLeft: "1rem"
              }}
            >
              Scroll me!
            </h1>
          </header>
          <header
            className={`${styles.HeaderSmall} ${smallerHeaderFont < 1 && styles.HeaderSmallHasBorderBottom}`}
            // style={{
            //   borderBottomColor: `rgba(230,230,230,${
            //     -smallerHeaderFont
            //   })`, 
            // }}
          >
            <h1 style={{ opacity: -smallerHeaderFont + 0.8, fontSize: "1rem" }}>
              Continue scroll me!
            </h1>
          </header>
        </div>
        <div className={styles.content}>
          {[...Array(50)].map((index) => (
            <p key={index}>this is some content</p>
          ))}
        </div>
      </div>
  )
}

const Page = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "ios-header" }) {
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
      <Project/>
    </ProjectLayout>
  );
};

export default Page;
