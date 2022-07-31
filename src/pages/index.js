import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Section, SectionHeading } from "../components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowCircleRight } from "phosphor-react";
import { motion, useInView } from "framer-motion";

import "swiper/css";

const IndexPage = () => {
  const [image, setImage] = useState("image1");
  
  const sectionHow = [
    {
      id:1,
      title:"Check dependencies on each project",
      description:"Some projects might require dependencies for better code and performance optimisation. Be sure to check them at the bottom of each project page.",
      image:"https://6.viki.io/image/04e38199eed143708309d70155fd16f4/dummy.jpeg?s=900x600&e=t",
    },
    {
      id:2,
      title:"Visit the repository folder on Github",
      description:"On each project’s repository, you will find a index.js file and index.module.css.",
      image:"https://www.allkpop.com/upload/2022/06/content/011114/web_data/allkpop_1654096573_untitled-1.jpg",
    },
    {
      id:3,
      title:"Copy and paste the code",
      description:"After installing the necessary dependencies, copy the React code and its corresponding stylesheet to your own project. Extend or further optimise the code if needed.",
      image:"https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/itzy2.png?itok=IRgFJSJz&mtime=1549839120",
    },
    {
      id:4,
      title:"Modify your CSS",
      description:"PaletteUI borrows the idea of HeadlessUI. Every project are written in plain CSS so you can adapt it to any preferred CSS frameworks or design system. ",
      image:"data:image/jpeg;base64,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",
    },
  ]

  return (
    <Layout>
      <Seo />
      <Section id={"About"} className="pt-24 pb-12">
        <SectionHeading
          headingText={"About"}
          headingDescription={[
            `Palette UI is an `,
            <span className="text-plum-11">
              experimental UI component library
            </span>,
            ` referencing unique design patterns on existing user interface. Build your next web application with our boilerplate React code and customise the CSS to your own need.`,
          ]}
        />
      </Section>
      <Section
        id={"Recent Projects"}
        container={false}
        className="relative pt-12 pb-24 overflow-x-hidden"
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
                    className="transform-gpu transition-mid relative overflow-hidden w-full rounded-xl shadow-xl group-hover:shadow-lg shadow-plum-6 group-hover:shadow-plum-5 brightness-100 group-hover:brightness-105"
                    style={{ paddingTop: "52.5%" }}
                  >
                    <img
                      className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                      src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/ITZY.jpg"
                      alt="img"
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
      <Section container={false} id={"How To use"} className="py-24">
        <Section className="py-24">
          <SectionHeading
            headingText={"How To use"}
            headingDescription={[
              `Palette UI is infinitely customisable and extendable. Start integrating components with these few steps.`,
            ]}
          />
        </Section>
        <div className="flex flex-row space-x-8 relative">
          <div className="w-1/2 h-full">
            {sectionHow.map((item)=>{return(
              <div key={item.id} className="p-8 flex items-center h-screen max-h-[42rem]">
                <motion.div
                  className="flex flex-row space-x-4 h-auto"
                  onViewportEnter={() => setImage(item.id)}
                >
                  <div className="font-semibold text-sm h-8 w-8 rounded-full bg-slate-1 border border-plum-9 text-plum-9 flex items-center justify-center leading-tight">
                    {item.id}
                  </div>
                  <div className="flex flex-col w-full space-y-1">
                    <h4 className="text-2xl text-plum-12 font-medium">{item.title}</h4>
                    <p className="text-slate-11">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            )})}
          </div>
          <div className="sticky top-0 bottom-0 right-0 w-1/2 h-full py-12">
            <div className="flex items-end h-full bg-gradient-to-t pl-12 pt-12 from-plum-11 to-plum-12 rounded-l-xl overflow-hidden how-image-wrapper-shadow">
              {sectionHow.map((item)=>{return(
                image === item.id  ? (
                  <div className="aspect-square w-full rounded-tl-lg overflow-hidden how-image-shadow">
                    <img
                      className="w-full h-full object-cover"
                      key={item.id}
                      src={item.image}
                      />
                  </div>
                ) : (
                  null
                )
              )})}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;
