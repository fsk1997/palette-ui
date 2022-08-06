import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import HomeLayout from "../components/HomeLayout";
import Seo from "../components/Seo";
import { Section, SectionHeading } from "../components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowCircleRight } from "phosphor-react";
import { motion, useInView } from "framer-motion";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "swiper/css";
import { Blur, InlineEmoji } from "../components/Utils";

const IndexPage = () => {
  const [image, setImage] = useState("image1");
  const [showImage, setShowImage] = useState(false);

  const sectionHowImageClassName="w-full h-full object-cover"
  const sectionHow = [
    {
      id:1,
      title:"Check dependencies on each project",
      description:"Some projects might require dependencies for better code and performance optimisation. Be sure to check them at the bottom of each project page.",
      image: <StaticImage className={sectionHowImageClassName} src="../images/how-step-1.png"/> ,
    },
    {
      id:2,
      title:"Visit the repository folder on Github",
      description:"On each project’s repository, you will find a index.js file and index.module.css.",
      image: <StaticImage className={sectionHowImageClassName} src="../images/how-step-1.png"/> ,
    },
    {
      id:3,
      title:"Copy and paste the code",
      description:"After installing the necessary dependencies, copy the React code and its corresponding stylesheet to your own project. Extend or further optimise the code if needed.",
      image: <StaticImage className={sectionHowImageClassName} src="../images/how-step-1.png"/> ,
    },
    {
      id:4,
      title:"Modify your CSS",
      description:"PaletteUI borrows the idea of HeadlessUI. Every project are written in plain CSS so you can adapt it to any preferred CSS frameworks or design system. ",
      image: <StaticImage className={sectionHowImageClassName} src="../images/how-step-1.png"/> ,
    },
  ]

  return (
    <HomeLayout
      heroFirstLine={"Open Source,"} 
      heroSecondLine={"Plug-and-Play "} 
      heroThirdLine={"React UI Components"} 
      heroDescription={"Experimental React UI Components with Plain CSS"} 
      heroButtonElement={<Link className="btn btn-plum" to="/project" title="Explore All Projects">Explore All Projects</Link>}
      // TODO: To dynamically point the link to latest project
      >

      <Seo />

      <Section id={"About"} className="pt-24 pb-16">
        <SectionHeading
          headingText={"About"}
          headingDescription={[`Palette UI is an `, <span className="text-plum-11">experimental UI component library </span>,<InlineEmoji ariaLabel="books">📚</InlineEmoji>,` referencing unique design patterns on existing user interface. Build your next web application with our `, <span className="text-plum-11">boilerplate React code </span>, <InlineEmoji ariaLabel="atom">⚛️</InlineEmoji>,` and customise the CSS to your own need.`]}
          headingDescriptionClassName={"lg:w-10/12 xl:w-7/12 "}
        />
      </Section>
      <Section
        id={"Recent Projects"}
        container={false}
        className="relative overflow-x-hidden pb-12"
      >
        <div
          className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-plum-3 to-transparent"
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)" }}
        ></div>
        <Swiper
          style={{ overflow: "visible", paddingLeft: "1rem" }}
          className="container"
          spaceBetween={48}
          slidesPerView={1.2}
          breakpoints={{
            576: {
              slidesPerView: 1.75,
            },
            768: {
              slidesPerView: 2.25,
            },
            922: {
              slidesPerView: 2.75,
            },
            1140: {
              slidesPerView: 3.25,
            },
            1141: {
              slidesPerView: 3.75,
            },
          }}
        >
          {[...Array(8)].map((e, i) => {
            return (
              <SwiperSlide>
                <div className="group cursor-pointer transition-mid flex flex-col space-y-6">
                  <div
                    className="transform-gpu transition-mid relative overflow-hidden w-full rounded-xl shadow-xl group-hover:shadow-lg shadow-plum-6 group-hover:shadow-plum-5 brightness-100 group-hover:brightness-105 pt-[52.5%]"
                  >
                    <StaticImage
                      className={`top-0 left-0 bottom-0 right-0 w-full h-full`}
                      src="../images/project-card-placeholder.png"
                      alt="img"
                      style={{position:"absolute"}}
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <h6 className="font-medium text-plum-12 text-2xl">
                      Draggable Dialogue
                    </h6>
                    <div
                      className="transform-gpu transition-all duration-75 -translate-y-[3.25rem] group-hover:translate-y-0 flex flex-row space-x-3"
                      style={{
                        transitionTimingFunction: "cubic-bezier(.75,0,.51,.99)",
                      }}
                    >
                      <p
                        className="w-full text-slte-10 transition-[opacity] duration-50 group-hover:opacity-100 opacity-0 translate-y-[3.25rem] group-hover:translate-y-0 "
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(.75,0,.51,.99)",
                        }}
                      >
                        A minimal recreation of Figma's notorious comment
                        component.
                      </p>
                      <ArrowCircleRight
                        size={52}
                        weight="thin"
                        className="transform-gpu transition-all group-hover:-translate-x-0 -translate-x-3"
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(.75,0,.51,.99)",
                        }}
                      />
                    </div>
                    <div className="transition-mid group-hover:translate-y-0 -translate-y-14 flex flex-row items-center space-x-3 text-xs uppercase tracking-wide">
                      <div className="font-semibold bg-plum-12 text-plum-1 px-2 py-1 rounded">
                        button
                      </div>
                      <span className="text-slate-12 opacity-50">
                        alpha v1.0.2
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Section>
      

      <Section id={"How To use"} className="py-24">
        <Section className="pb-12">
          <SectionHeading
            headingText={"How To use"}
            headingDescription={[
              `Palette UI is customisable and extendable. Start integrating components with these few steps.`,
            ]}
            headingDescriptionClassName={"lg:w-10/12 xl:w-7/12 "}
          />
        </Section>
        <div className="flex flex-row space-x-8 relative">
          <div className="relative w-full lg:w-2/5 h-full">
            <div className="hidden lg:block sticky top-0 z-[2] w-full h-36 bg-gradient-to-b from-slate-2 via-slate-2 to-transparent"></div>
            {/* <div className={`${showImage ? "opacity-100" : "opacity-0"} transition-[opacity] duration-300 ease-in z-[-1] sticky top-0 left-0`}>
                <Blur colorClassName="bg-plum-3"
                />
            </div> */}
            {sectionHow.map((item)=>{return(
              <div className="px-4 lg:px-0 flex flex-col space-y-6 pb-16 lg:pb-0">
                <div key={item.id} className="lg:p-8 flex items-center lg:h-screen max-h-[42rem]">
                  <motion.div
                    className="flex flex-row space-x-4 h-auto"
                    onViewportEnter={() => {setImage(item.id)}}
                  >
                    <div className="flex flex-col space-y-4 py-1 relative">
                      <div className={`relative z-[1] font-semibold text-sm h-6 w-6 rounded-full bg-slate-2 border-2 border-plum-9 ring-4 ring-slate-2 text-plum-9 flex items-center justify-center leading-tight transition-mid`}>
                        {item.id}
                      </div>
                      <div className="absolute z-0 top-0 left-0 right-0 w-full h-screen flex justify-center">
                        <div className={`transition-mid ml-1 w-1 h-full border-l ${item.id < 4 ? "border-plum-9" : "border-slate-2"}`}/>
                      </div>

                    </div>
                    <div className="flex flex-col w-full space-y-1">
                      <h4 className="text-2xl text-plum-12 font-medium leading-tight">{item.title}</h4>
                      <p className="text-slate-11">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="pl-10 block lg:hidden w-full">
                  <div className={`shadow-2xl shadow-plum-7 px-12 pt-12 flex items-end h-full bg-gradient-to-t from-plum-11 to-plum-12 rounded-3xl overflow-hidden relative`}>
                    <motion.div 
                      onViewportEnter={(e)=>{
                        e.target.classList.add('translate-y-0');
                        e.target.classList.remove('translate-y-24');
                      }} 
                      onViewportLeave={(e)=>{
                        e.target.classList.remove('translate-y-0');
                        e.target.classList.add('translate-y-24');
                      }} 
                      className={`transition-transform duration-300 ease-out w-full rounded-t-2xl overflow-hidden shadow-2xl shadow-plum-12`}>
                      {item.image}
                    </motion.div>
                  </div>
                </div>
              </div>
            )})}
          </div>
          <motion.div 
            className="hidden lg:block sticky top-0 w-3/5 h-full py-24"
            onViewportEnter={()=>{setShowImage(true)}} 
            onViewportLeave={()=>{setShowImage(false)}} 
          >
            <div className={`${showImage ? "scale-100 shadow-2xl shadow-plum-7" : "scale-[80%]"} origin-right pt-12 pl-12 transform-gpu transition-all duration-300 ease-out flex items-end h-full bg-gradient-to-t from-plum-11 to-plum-12 rounded-3xl overflow-hidden relative`}>
              {sectionHow.map((item)=>{return(
                image === item.id  ? (
                  <div className="w-full rounded-tl-2xl overflow-hidden shadow-2xl shadow-plum-12">
                    {item.image}
                  </div>
                ) : (
                  null
                )
              )})}
            </div>
          </motion.div>
        </div>
      </Section>

    </HomeLayout>
  );
};

export default IndexPage;
