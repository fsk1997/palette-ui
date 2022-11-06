import { Link } from "gatsby";
import React, { useState, useRef, useEffect } from "react";
import * as styles from "./index.module.css";
import { motion } from "framer-motion";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";

const spring = {
  type: "tween",
  duration: 0.15
};

const Project = () => {
  const [activeTitle, setActiveTitle] = useState("");

  const handleSetExpand = (title) => (activeTitle !== title) && setActiveTitle(title)

  const cards = [
    {
      title: "Minji (민지)",
      imageURL: "https://i.imgur.com/BFAmv4Z.jpeg",
      videoURL: "https://i.imgur.com/3FEYPU6.mp4",
      body: <p></p>
    },
    {
      title: "Hanni (하니)",
      imageURL: "https://i.imgur.com/HVkvKrt.jpeg",
      videoURL: "https://i.imgur.com/ZqpJrji.mp4",
      body: <p></p>
    },
    {
      title: "Danielle (다니엘)",
      imageURL: "https://i.imgur.com/04EOJ4X.jpeg",
      videoURL: "https://i.imgur.com/V6nBhSY.mp4",
      body: <p></p>
    },
    {
      title: "Haerin (해린)",
      imageURL: "https://i.imgur.com/bZzKy6R.jpeg",
      videoURL: "https://i.imgur.com/ETqAeZ6.mp4",
      body: <p></p>
    },
    {
      title: "Hyein (혜인)",
      imageURL: "https://i.imgur.com/4wl10j7.jpeg",
      videoURL: "https://i.imgur.com/77oSY8n.mp4",
      body: <p></p>
    }
  ];

  return (
    <div className={styles.page}>
      <div style={{margin: "2rem 1rem", textAlign:"center"}}>If you're viewing on desktop mode, collapse the sidebar for best viewing experience</div>
      <div className={styles.buttonGroup}>
        {cards.map(card => {
          return (
            <motion.div
              key={card.title}
              layout
              id={slugify(card.title)}
              transition={spring}
              className={`
                ${activeTitle === card.title && styles.expandButtonWrapper} 
                ${styles.buttonWrapper}
              `}
            >
              <button
                className={styles.openHotspot}
                onClick={() => {
                  handleSetExpand(card.title);
                  document.body.style.overflow = "hidden"; //prevent background scrolling. Lock position.
                }}
              ></button>
 
              <button
                className={styles.closeButton}
                onClick={() => {
                  document.querySelector(`#${slugify(card.title)}`).scrollTop = 0;
                  document.body.style.overflow = "";
                  handleSetExpand("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"></path>
                </svg>
              </button>
              
              <img src={card.imageURL} width={300} height={500} />
              <video width="320" height="240" autoPlay muted>
                <source src={card.videoURL} type="video/mp4" />
              </video>

              <div className={styles.body}>
                <h2>{card.title}</h2>
                {card.body}
              </div>
            </motion.div>
          );
        })}
        <div style={{paddingBottom:"20vh"}}/> 
        {/* Need to add more space below. If this is not added, when closing the last card, the viewport will scroll up, causing the card to be hidden */} 
      </div>
      <div style={{margin: "2rem 0", textAlign:"center"}}>
        <img style={{margin: "0 auto", paddingBottom:"1rem"}} src="https://newjeans.kr/imgs/main/title.png" width="200" height="90"/>
        <div>
          <a style={{color:"blueviolet"}} href="https://www.instagram.com/newjeans_official/?hl=en" target="_blank" rel="noreferrer">Instagram 🐰</a>
          &nbsp;&nbsp;||&nbsp;&nbsp;
          <a style={{color:"blueviolet"}} href="https://www.youtube.com/watch?v=S4UEJePR0UE" target="_blank" rel="noreferrer">Hype Boy 📺</a>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "shared-card-element-transition" }) {
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
