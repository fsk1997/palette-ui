import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react"
import * as styles from "./index.module.css";
import { useAnimate, useInView, stagger } from "framer-motion"

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";


const IAButtons = ({
    preText,
    buttonElement, 
    expandedElement,
    postText
}) => {

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, { once: false })

    useEffect(() => {
        animate("&>*", { opacity: [0, 1], x: [10, 0] }, { delay: stagger(0.1, { ease: "easeIn" }) })
    }, [isInView])

    return (
        <span className={styles.buttonWrapper}>
            <span>{preText}</span>
        
            <Disclosure as="span" className={styles.buttonDisclosure}>
                {({ open }) => (
                    <>
                        <Disclosure.Button className={`
                            ${styles.disclosureButton} 
                            ${styles.disclosureElSpacing} 
                            ${styles.disclosureElBg}
                            ${styles.disclosureElNoWrap} 
                            ${open ? styles.open : styles.closed} `}
                        >
                            <span className={styles.disclosureSpan}>
                                {buttonElement}
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel as="span" unmount={false} ref={scope} className={`
                            ${styles.disclosurePanel}
                            ${styles.disclosureElSpacing}
                            ${styles.disclosureElBg} 
                            ${styles.disclosureElNoWrap}`}
                        >
                            <span className={styles.disclosureSpan}>
                                {expandedElement}
                            </span>
                        </Disclosure.Panel> 
                    </>
                )}
            </Disclosure>
            
            <span>{postText}</span>
        </span>
    )
}

const IAParagraph = ({children}) => {
    return (
        <p className={styles.paragraph}>{children}</p>
    )
}

const Project = () => {
  return (
    <div className={styles.page}>
        <IAParagraph>
            <IAButtons     
                preText="Historically, thermodynamics developed out of a desire to increase the efficiency of early steam engines, particularly through the work of "
                buttonElement={<span>French physicist</span>}
                expandedElement={<span>Sadi Carnot (1824)</span>}
                postText=" who believed that engine efficiency was the key that could help France win the Napoleonic Wars."
            />
            <IAButtons     
                preText=" "
                buttonElement={<span>Scots-Irish physicist </span>}
                expandedElement={<span>Lord Kelvin</span>}
                postText={` was the first to formulate a concise definition of thermodynamics in 1854 which stated, "Thermo-dynamics is the subject of the relation of heat to forces acting between contiguous parts of bodies, and the relation of heat to electrical agency." `}
            />
        </IAParagraph>
    </div>
  )
}

const Page = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "inline-accordion" }) {
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
      <Project/>
    </ProjectLayout>
  );
};

export default Page;
