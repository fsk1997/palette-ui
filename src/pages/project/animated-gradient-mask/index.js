import React, { useRef, useState } from "react";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";

const Project = () => {

  const [animate, setAnimate] = useState(false)

  return (
    <div className={styles.page}>
      {animate && 
        <div className={styles.wrapper + " " + (animate === true ? styles.animateIn : styles.blank)} style={{aspectRatio: "9/16"}}>
          {/* <iframe width="560" height="500" src="https://youtube.com/embed/tsQ3lCWV5PY?autoplay=1&mute=1&playlist=tsQ3lCWV5PY&loop=1&controls=0&disablekb=0&" title="YouTube video player" /> */}
          <img src="https://kpopping.com/documents/d5/5/1844-image-20221029143647-2-gif-gif.jpeg?v=25590" alt="newjeans x mcdonalds kr"/>    
        </div>
      }

      <button className={styles.button} onClick={()=>setAnimate(!animate)}>{animate ? "Toggle Off" : "Toggle On" }</button>
    </div>
  );
};

const Page = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "animated-gradient-mask" }) {
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
