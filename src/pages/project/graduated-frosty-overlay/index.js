import React from "react";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";

const Image = ({ imageLink, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maskOne}>
        <img
          src={imageLink}
          alt={title}
          width={"1000"}
          height={"800"}
        />
      </div>
      <div className={styles.maskTwo}>
        <img
          src={imageLink}
          alt={title}
          width={"1000"}
          height={"800"}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className={styles.page}>
      <p>
        Different browser handles blur different. <br/>Be sure to check out on other
        browsers too!
      </p>
      <Image
        imageLink={"https://c.tenor.com/UqzojRtY8eAAAAAd/aot-mikasa.gif"}
        title={"ミカサ・アッカーマン Mikasa Akkāman 💖"}
      />
      <Image
        imageLink={
          "https://media2.giphy.com/media/FUi94opKPNopjUmQvR/giphy.gif"
        }
        title={"Elon Musk (イーロン・マスク)"}
      />
      <Image
        imageLink={
          "https://c.tenor.com/ChfKaiA2AIMAAAAC/kinshiki-otsutsuki-sasuke-uchiha.gif"
        }
        title={"Sasuke Uchiha (うちは サスケ)"}
      />
      <Image
        imageLink={"https://c.tenor.com/YoZqAb8YA0kAAAAC/apple-tim-cook.gif"}
        title={"Tim Cook (ティム・クック)"}
      />
    </div>
  );
};

const Page = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "graduated-frosty-overlay" }) {
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
