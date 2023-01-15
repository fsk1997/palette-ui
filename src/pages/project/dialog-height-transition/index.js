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
    if (id !== tab) {
      setTab(id)
    }
  }

  const dialogRef = useRef()

  const tabContent = [
    {
      id: 1,
      name: "☃️",
      children: <><img src="https://newjeans.kr/imgs/window/pc/icon-melody-card.gif" /><p>NewJeans (Korean: 뉴진스; RR: Nyujinseu) is a South Korean girl group formed by ADOR, a subsidiary of Hybe Corporation. The group is composed of five members: Minji, Hanni, Danielle, Haerin and Hyein.</p></>,
    },
    {
      id: 2,
      name: "🐱",
      children: <><img loading="lazy" src="https://newjeans.kr/imgs/window/new-folder-1/nj_ditto_16.jpg" /></>,
    },
    {
      id: 3,
      name: "🍬",
      children: <><img loading="lazy" src="https://newjeans.kr/imgs/window/new-folder-1/nj_ditto_12.jpg" /></>,
    },
    {
      id: 4,
      name: "🧡",
      children: <><img loading="lazy" src="https://newjeans.kr/imgs/window/new-folder-1/nj_omg_2.jpg" /></>,
    },
    {
      id: 5,
      name: "🧸",
      children: <><iframe style={{ width: "100%" }} width="560" height="315" src="https://www.youtube.com/embed/sVTy_wmn5SU" title="YouTube video player" frameborder="0" allowfullscreen /></>,
    },
  ]

  return (
    <div className={styles.page}>
      <button className={styles.button} onClick={() => initiateDialog()}>New Jeans</button>
      <div className={styles.dialog + " " + (showDialog && styles.show)}>
        <div
          className={styles.dialogBackground}
          style={null}
        ></div>
        <div className={styles.dialogInner}>
          <div className={styles.dialogNav}>
            <div className={styles.toggles}>
              {tabContent.map((item) => {
                return (
                  <button key={item.id} className={styles.button} onClick={() => fetchTab(item.id)}>{item.name}</button>
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
          {tabContent.map((item) => {
            return (
              <div ref={dialogRef} className={(styles.content) + " " + (tab === item.id && styles.active)}>
                {item.children}
              </div>
            )
          })}
        </div>
      </div>

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
