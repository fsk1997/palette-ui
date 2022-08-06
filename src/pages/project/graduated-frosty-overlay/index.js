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
          alt="Random Image from Online"
          width={"1000"}
          height={"800"}
        />
      </div>
      <div className={styles.maskTwo}>
        <img
          src={imageLink}
          alt="Random Image from Online"
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

const FadingBackdropBlur = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "graduated-frosty-overlay" }) {
        ...ProjectFragment
      }
    }
  `);

   const project = data.projectJson;

  return (
    <ProjectLayout>
      <Seo 
        customTitle={`${project.title} | ${siteMetadata.title}`}
        customDescription={project.description}
        customURL={`${siteMetadata.url}/${slugify(project.title)}`}
      />
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
      <p style={{ textAlign: "center" }}>
        <b>
          Different browser handles blur different. Be sure to check out on
          other browsers too!
        </b>
      </p>
    </ProjectLayout>
  );
};

export default FadingBackdropBlur;
