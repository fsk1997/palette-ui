import React, { useEffect, useRef, useState } from "react";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";


// Problem with using plain useState loading method: https://www.codingwithjesse.com/blog/image-onload-isnt-being-called/
// Solution: https://stackoverflow.com/questions/57162865/react-onload-event-on-image-tag-is-not-getting-called-when-using-conditional-ren

const Image = ({ src }) => {
  const [loaded, setLoaded] = useState("not-loaded");

  const image = useRef();

  const handleLoad = () => setLoaded(true);
  useEffect(() => {
    if (image.current.complete === true) setLoaded("loaded");
  }, []);

  return (
    <div style={{ overflow: "hidden" }} className={styles.shimmer}>
      <img
        ref={image}
        style={{ objectFit: "cover", width: "100%" }}
        className={`${
          loaded === "not-loaded" ? styles.notLoaded : styles.loaded
        } ${styles.image}`}
        src={src}
        onLoad={handleLoad}
        width="400"
        height="400"
        alt="Twice of Dahyun"
        loading="lazy"
      />
    </div>
  );
};

const RefreshButton = () => {
  return (
    <button
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
      onClick={() => window.location.reload()}
    >
      🤜 Refresh for Dahyun 🤛
    </button>
  );
};

const Project = () => {
  return (
<div style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Image src="https://img.wattpad.com/431072c4a44a7abb6de79a529531155ab1d7d0d0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f665573576d4f556a5052304f6a413d3d2d313038323433323535392e313638366165393833393632646336653630373035343438343935372e676966" />
          <RefreshButton />
          <Image src="https://c.tenor.com/l6iB9WixiwMAAAAC/twice-dahyun.gif" />
          <RefreshButton />
          <Image src="https://media0.giphy.com/media/gLcbZ01uqIOZIsBWlC/200.gif" />
          <RefreshButton />
          <Image src="https://c.tenor.com/Uuqvk7gFgFUAAAAM/dahyun-twice-dahyun.gif" />
          <RefreshButton />
          <Image src="https://i.gifer.com/7aP9.gif" />
          <RefreshButton />
          <Image src="https://i.pinimg.com/originals/0c/9a/b8/0c9ab802c182a27086bda6f8dfef2faf.gif" />
          <RefreshButton />
          <Image src="https://i0.wp.com/i.pinimg.com/originals/79/92/f0/7992f02f2f874cdd5f62495212cf679e.gif?resize=160,120" />
          <RefreshButton />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_nQl3big1FubfKnf985jUvYNu9Jv6CQGmg&usqp=CAU" />
          <RefreshButton />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmNGf_WPdZo2OI4R8kF3SICRP5HVSmcDFKvg&usqp=CAU" />
          <RefreshButton />
          <Image src="https://c.tenor.com/wyALJ6mH5DoAAAAd/dahyun-twice.gif" />
          <RefreshButton />
          <Image src="https://i.pinimg.com/originals/f0/00/2a/f0002a7b36ac34af116687e9edad9802.gif" />
          <RefreshButton />
          <Image src="https://cutewallpaper.org/21/twice-dahyun-cute/Twice-Dahyun-Cute-GIF-by-Dary-Gfycat.gif" />
          <RefreshButton />
          <Image src="https://thumbs.gfycat.com/WelcomeBraveInchworm-max-1mb.gif" />
        </div>

        <p>
          <a
            href="https://en.wikipedia.org/wiki/Dahyun"
            rel="noreferrer"
            target="_blank"
          >
            Dahyun from Twice
          </a>
        </p>
      </div>
  )
}

const Page = () => {
  const siteMetadata = useSiteMetadata();
  
  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "loaded-image-transition" }) {
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
      <Project/>
    </ProjectLayout>
  );
};

export default Page;
