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

    const buttonSpacing = "duration-50 ease-in relative py-0.5 md:py-0"

    const buttonElFlow = "inline-flex flex-row flex-nowrap items-center gap-1"

    const buttonBg = "before:content-[''] before:absolute before:inset-0 before:h-[95%] before:m-auto before:transition-all before:rounded-lg"

    const buttonElNoWrap = "[&>*]:relative [&>*]:whitespace-nowrap"


    return (
        <span class="relative inline">
            <span class="inline opacity-60">{preText}</span>
        
            <Disclosure as="span" className="iaButtonWrapper buttonClosed relative inline-flex flex-row flex-wrap items-center gap-1">
                {({ open }) => (
                    <>
                        <Disclosure.Button className={`
                            ${open ? "text-white" : "text-green-500"} 
                            button-animateIn
                            before:left-[-5%] before:w-[110%] before:origin-center before:scale-100 before:hover:scale-100
                            ${buttonSpacing}
                            ${buttonBg} 
                            ${buttonElNoWrap}
                            ${open ? "" : "before:transparent before:hover:bg-green-50"}`}
                        >
                            <span className={`relative z-[1] ${buttonElFlow}`}>
                                {buttonElement}
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel as="span" unmount={false} ref={scope} className={`
                            my-auto px-1.5
                            before:w-full 
                            before:bg-green-500/20 before:border before:border-green-500/[5%]
                            ${buttonSpacing}
                            ${buttonBg} 
                            ${buttonElNoWrap}`}
                        >
                            <span className={`relative z-[1] ${buttonElFlow}`}>
                                {expandedElement}
                            </span>
                        </Disclosure.Panel> 
                    </>
                )}
            </Disclosure>
            
            <span class="inline opacity-60">{postText}</span>
        </span>
    )
}


const Project = () => {
  return (
    <div className={styles.page}>
        <p class="leading-[156%] md:leading-[172%] tracking-wide mb-5">
            <IAButtons     
                preText="Historically, thermodynamics developed out of a desire to increase the efficiency of early steam engines, particularly through the work of "
                buttonElement={<span>French physicist</span>}
                expandedElement={<span>Sadi Carnot (1824)</span>}
                postText=" who believed that engine efficiency was the key that could help France win the Napoleonic Wars."
            />
        </p>
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
