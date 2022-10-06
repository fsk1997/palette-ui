import { Link } from "gatsby";
import React, { useState, useRef, useEffect } from "react";
import * as styles from "./index.module.css";
import { motion } from "framer-motion"

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";


const FeatureCard = ({title, imageURL, activeTitle, setActiveTitle}) => {

  const handleSetExpand = (title) => (activeTitle !== title) && setActiveTitle(title)

  return (
    <motion.div
        key={title}
        layout
        transition={spring}
        className={`${styles.buttonWrapper} ${
          activeTitle === title && (styles.expandButtonWrapper)
        }`}
      >
        <button className={styles.openButton} onClick={() => {handleSetExpand(title)}}></button>
        <button className={styles.closeButton} onClick={() => {handleSetExpand("")}}></button>
        <img
          src={imageURL}
          width={1600}
          height={900}
        />
        <p>Hello, this is some text</p>
      </motion.div>
  )
}

const spring = {
  type:"tween",
  duration: 0.15,
}

const Project = () => {
  const [activeTitle, setActiveTitle] = useState("");

  const cards = [
    {
      title:"Minji",
      imageURL:"https://images.hindustantimes.com/img/2022/10/04/550x309/APPLE-IPHONE-USA-26_1664883749966_1664883749966_1664883772911_1664883772911.JPG",
    },
    {
      title:"Haerin",
      imageURL:"https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg",
    },
    {
      title:"Hanni",
      imageURL:"https://cdn.thegentlemansjournal.com/wp-content/uploads/2015/10/front18-900x600-c-center.jpg",
    },
    {
      title:"Danielle Marsh",
      imageURL:"https://media.cnn.com/api/v1/images/stellar/prod/221005132437-08-biden-florida-visit-1005.jpg?c=16x9&q=h_270,w_480,c_fill",
    },
    {
      title:"Hyein",
      imageURL:"http://images4.fanpop.com/image/photos/19100000/Sasuke-Uchiha-little-naruto-kids-19186093-1280-720.jpg",
    },
  ]


  return (
    <div className={`${styles.page}`}>
      {cards.map((card)=>{return(
        <FeatureCard 
          title={slugify(card.title)}
          imageURL={card.imageURL}
          activeTitle={activeTitle}
          setActiveTitle={setActiveTitle}/>
      )})}
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
