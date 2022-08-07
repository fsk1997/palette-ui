import React, { useRef, useState } from "react";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";

const AnimatedGradientIcon = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "animated-gradient-svg-button" }) {
        ...ProjectFragment
      }
    }
  `);
  const project = data.projectJson;

  const [active, setActive] = useState(true);
  const buttonRef = useRef(null);

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
        customURL={`${siteMetadata.url}/${slugify(project.title)}`}
      />
      <div className={styles.page}>
        <button
          ref={buttonRef}
          className={`${styles.button} ${
            active && styles.scaleButtonAnimation
          }`}
          onClick={() => setActive(!active)}
          onMouseDown={(event) => event.preventDefault()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            {/* https://www.w3schools.com/css/tryit.asp?filename=trycss3_mask-image6 */}
            {/* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask */}
            <mask id="myMask">
              <rect x="0" y="0" width="256" height="256" fill="white" />
            </mask>
            <rect width="256" height="256" fill="none"></rect>
            <path
              fill="url(#grad1)"
              mask="url(#myMask)"
              d="M215,86.2l-29.8,28,30.2,83.1a8,8,0,0,1-1.9,8.4l-24,24a8.2,8.2,0,0,1-6.4,2.3,8.1,8.1,0,0,1-5.8-3.5l-42.6-62.3-18.8,17.3V204a8.2,8.2,0,0,1-2.4,5.7l-20,20a7.9,7.9,0,0,1-5.6,2.3l-1.8-.2a8,8,0,0,1-5.8-5.2L67.4,188.5,29.3,175.6a8,8,0,0,1-5.2-5.8,8.3,8.3,0,0,1,2.1-7.5l20-20a8.1,8.1,0,0,1,5.7-2.3H72.6l18.7-18.8L27.4,78.7a8.7,8.7,0,0,1-3.5-5.9,8.2,8.2,0,0,1,2.3-6.5l24-24a7.9,7.9,0,0,1,8.4-1.8l83.1,30.2,26.6-28.2a5.2,5.2,0,0,1,1-1.1,32,32,0,0,1,47,43.3A6.4,6.4,0,0,1,215,86.2Z"
            ></path>

            {/* https://stackoverflow.com/questions/14051351/svg-gradient-using-css */}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stop-color={active ? "orange" : "lightgray"}
                  style={{ transition: "all 0.6s" }}
                />
                <stop
                  offset="100%"
                  stop-color={active ? "orange" : "lightgray"}
                  style={{ transition: "all 0.1s" }}
                />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <p style={{ marginTop: "-0.125rem" }}>Click Me</p>
        <p style={{ fontSize: "0.8rem" }}>
          Inspired by{" "}
          <a href="https://tantanapp.com/en" target="_blank" rel="norefferer">
            TanTan's
          </a>{" "}
          Bottom Navigator Icon
        </p>
      </div>
    </ProjectLayout>
  );
};

export default AnimatedGradientIcon;
