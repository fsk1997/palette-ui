import React, { useState } from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import Seo from "../components/Seo";
import { Section, SectionHeading } from "../components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ArrowCircleRight } from "phosphor-react";
import { motion} from "framer-motion";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import slugify from "react-slugify";
import useAllProjectsMetadata from "../hooks/useAllProjectsMetada"
import "swiper/css";
import 'swiper/css/navigation';
import {InlineEmoji } from "../components/Utils";

const IndexPage = () => {
  const [image, setImage] = useState(1);
  const [showImage, setShowImage] = useState(false);

  const projects = useAllProjectsMetadata()
  // console.log(projects.slice(0,3).map((item)=>{return(item)}))

  const sectionHowImageClassName="w-full h-full object-cover"
  const sectionHow = [
    {
      id:1,
      title:"Check dependency for each project",
      description:"We use libraries and packages for better code readability and performance optimisation. You can find them at the info section on each project page.",
      image: <StaticImage className={sectionHowImageClassName} src="../images/how-step/1.png"/> ,
    },
    {
      id:2,
      title:"Visit the repository folder on Github",
      description:"You will find a index.js file and index.module.css on each project.",
      image: <StaticImage className={sectionHowImageClassName} src="../images/how-step/2.png"/> ,
    },
    {
      id:3,
      title:"Copy and paste the code",
      description:"After installing the required dependencies, copy the React code and its stylesheet to your own project.",
      image: <StaticImage className={sectionHowImageClassName} src="../images/how-step/3.png"/> ,
    },
    {
      id:4,
      title:"Modify your CSS",
      description:"As every project is written in plain old CSS, you can adapt the existing styles to any preferred CSS frameworks. ",
      image: <StaticImage className={sectionHowImageClassName} src="../images/how-step/4.png"/> ,
    },
  ]

  return (
    <HomeLayout
      heroFirstLine={"Open Source,"} 
      heroSecondLine={"Plug-and-Play "} 
      heroThirdLine={"React UI Components"} 
      heroDescription={"Experimental React UI Components with Plain CSS"} 
      heroButtonElement={<Link className="btn btn-plum" to={`/project/${slugify(projects[0].node.title)}`} title="Explore All Projects">Explore All Projects</Link>}
      newsletterSection={false}
      >

      <Seo />

      <Section id={"About"} className="pt-24 pb-16">
        <SectionHeading
          headingText={"About"}
          headingDescription={[`PaletteUI is an `, <span className="text-plum-11">experimental UI component library </span>,<InlineEmoji ariaLabel="books">📚</InlineEmoji>,` referencing unique design patterns on existing user interface. Build your next web application with our `, <span className="text-plum-11">boilerplate React code </span>, <InlineEmoji ariaLabel="atom">⚛️</InlineEmoji>,` and customise the CSS to your own need.`]}
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
          className="container home-project-swiper"
          modules={[Navigation]}
          navigation
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
          {projects.slice(0,7).map((item) => {
            const project = item.node
            return (
              <SwiperSlide>
                <Link key={project.id} to={`/project/${slugify(project.title)}`} className="group cursor-pointer flex flex-col space-y-6">
                  <div className="transition-slow relative overflow-hidden w-full rounded-xl shadow-xl group-hover:shadow-lg shadow-plum-6 group-hover:shadow-plum-5 brightness-100 group-hover:brightness-105 pt-[52.5%]">
                    <GatsbyImage
                      className={`top-0 left-0 bottom-0 right-0 w-full h-full`}
                      image={project.cover_image.childImageSharp.gatsbyImageData}
                      alt={project.title}
                      style={{position:"absolute"}}
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <h5 className="font-medium text-plum-12 h5 leading-4 lg:leading-5 w-5/6">
                      {project.title}
                    </h5>
                    <div
                      className="transition-fast ease-power-1 lg:-translate-y-12 lg:group-hover:translate-y-0 flex flex-row space-x-3">
                      <p className="c-line-clamp w-full text-slate-11 text-sm transition-fast ease-power-1 lg:group-hover:opacity-100 lg:opacity-0 lg:translate-y-12 lg:group-hover:translate-y-0">
                        {project.description}
                      </p>
                      <ArrowCircleRight size={48} weight="thin" />
                    </div>
                    <div className="transition-mid lg:group-hover:-translate-y-2 -translate-y-2 lg:-translate-y-14 flex flex-row items-center space-x-3 text-xs uppercase tracking-wide">
                      <div className="font-semibold bg-plum-12 text-plum-1 px-2 py-1 rounded">
                        {project.type}
                      </div>
                      <span className="text-slate-12 opacity-50">
                        {project.status} {project.version}
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Section>
      

      <Section id={"How To use"} className="py-24">
        <SectionHeading
          headingText={"How To use"}
          headingDescription={[
            `PaletteUI is extremely customisable. Start integrating new components with these few steps.`,
          ]}
          headingDescriptionClassName={"lg:w-10/12 xl:w-7/12 pb-12"}
        />
        <div className="flex flex-row space-x-8 relative">
          <div className="relative w-full lg:w-2/5 h-full">
            <div className="hidden lg:block sticky top-0 z-[2] w-full h-36 bg-gradient-to-b from-slate-2 via-slate-2 to-transparent"></div>
            {/* <div className={`${showImage ? "opacity-100" : "opacity-0"} transition-[opacity] duration-300 ease-in z-[-1] sticky top-0 left-0`}>
                <Blur colorClassName="bg-plum-3"
                />
            </div> */}
            {sectionHow.map((item)=>{return(
              <div className="flex flex-col space-y-6 pb-16 lg:pb-0">
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
                      <h4 className="text-xl text-plum-12 font-medium leading-6 my-1">{item.title}</h4>
                      <p className="text-sm text-slate-11">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="pl-10 block lg:hidden w-full">
                  <div className={`shadow-2xl shadow-plum-7 px-8 pt-8 md:px-12 md:pt-12 flex items-end h-full bg-gradient-to-t from-plum-11 to-plum-12 rounded-3xl overflow-hidden relative`}>
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
            className="hidden lg:block sticky top-0 w-3/5 transition-mid h-full py-24"
            onViewportEnter={()=>{setShowImage(true)}} 
            onViewportLeave={()=>{setShowImage(false)}} 
          >
            <div className={`${showImage ? "scale-100 shadow-2xl shadow-plum-7" : "scale-[80%]"} origin-right pt-12 pl-12 transition-mid ease-power-1 flex items-end h-full bg-gradient-to-t from-plum-11 to-plum-12 rounded-3xl overflow-hidden relative`}>
              {sectionHow.map((item)=>{
                return(
                image === item.id  ? (
                  <div className={`w-full rounded-tl-2xl overflow-hidden shadow-2xl shadow-plum-12 ${image === item.id ? "blur-none" : "blur-lg"} transition-fast ease-power-1`}>
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
