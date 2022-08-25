import { Link } from "gatsby";
import React, { useRef } from "react";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";

const Project = () => {

  const numberArrays = [{ id: 526 }, { id: 1268 }, { id: 92068 }];
  // Inspiration: https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
  
  return (
    <div className={styles.page}>
      <div className={styles.textContainer}>
        {numberArrays.map((number) => {
          return (
            <p
              key={number.id}
              className={`
                ${slugify(number.id).length === 3 && styles.threeNumbers}
                ${slugify(number.id).length === 4 && styles.fourNumbers}
                ${slugify(number.id).length === 5 && styles.fiveNumbers}
            `}
            >
              {number.id}
            </p>
          );
        })}

      </div>
        <p>Try resizing the browser :-)</p>
    </div>
  );
};

const Page = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "fluid-font-size" }) {
        ...ProjectFragment
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
