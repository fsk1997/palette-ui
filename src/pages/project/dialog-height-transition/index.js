import React, { useState, useRef, useEffect } from "react";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";


const Project = () => {

  const [showDialog, setShowDialog] = useState(false)
  const [tab, setTab] = useState(null)


  const initiateDialog = () => {
    setShowDialog(true)
    setTab(1)
  }
  const closeDialog = () => {
    setShowDialog(false)
    setTab(null)
  }
  const fetchTab = (id) => {
    setTab("loading")
    setTimeout(() => setTab(id), 150);
  }


  const tabContent = [
    {
      id: 1,
      children: <><img src="https://media2.malaymail.com/uploads/articles/2020/2020-01/jihyo_070120.jpg"/> <p>this is some content</p></>,
    },
    {
      id: 2,
      children: <><img src="https://i.pinimg.com/originals/3a/1b/6d/3a1b6da5adaf9371d8b7e56b30d4fef3.png"/><p>this is another content. This content is longer than the first one to demonstrate some transition</p></>,
    },
  ]

  return (
    <div className={styles.page}>
      <button className={styles.button} onClick={() => initiateDialog()}>Click for Jihyo!</button>
      {showDialog &&
        <div className={styles.dialog}>
          <div
            className={styles.dialogBackground}
            style={null}
          ></div>
          <div className={styles.dialogInner}>
            <div className={styles.dialogNav}>
              <div className={styles.toggles}>
                {tabContent.map((item) => {
                  return (
                    <button key={item.id} className={styles.button} onClick={() => fetchTab(item.id)}>Tab {item.id}</button>
                  )
                })}
              </div>
              <button onClick={() => closeDialog()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="200"
                    y1="56"
                    x2="56"
                    y2="200"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="200"
                    y1="200"
                    x2="56"
                    y2="56"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
              </button>
            </div>
            <div className={tab === "loading" ? styles.loading : styles.content}>
              {tabContent.map((item) => {
                return (
                  tab === item.id && item.children
                )
              })}
            </div>
          </div>
        </div>
      }
    </div>
  )
}


const Page = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "dialog-height-transition" }) {
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
