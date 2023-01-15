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
    if (id !== tab){
      setTab("loading")
      setTimeout(() => setTab(id), 10);
    }
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
    {
      id: 3,
      children: <><iframe width="560" height="315" src="https://www.youtube.com/embed/sVTy_wmn5SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /><p>From the return of miniskirts to low-rise jeans, everyone is cashing in on the Y2K and early ‘00s nostalgia wave — and K-pop is no exception. Enter NewJeans, the sparkling, brand new girl group by HYBE (the South Korean entertainment company behind BTS and Tomorrow x Together) and its independent label ADOR that’s paying homage to that glitzy bygone era. The new quintet — made up of members Minji, Danielle, Haerin, Hanni, and Hyein — made their soft launch on Friday with the release of the vibe-y, pop-R&B first single, “Attention,” a song that sounds like it was transmitted straight from the turn of the millennium. In the track’s flashy accompanying music video filmed in Spain, the members flawlessly execute early-aughts style choreography while wearing low-rise jeans, handkerchief tube tops, butterfly clips, wired headphones, and other stylish pieces you’d find scrolling on your TikTok FYP. They emanate effortless cool, and are already generating plenty of buzz online as fans resonate with their throwback sound and fashion style, as well as the group’s unique, K-pop standard-defying concept.</p></>,
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
