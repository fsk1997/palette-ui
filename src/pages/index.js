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
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [image, setImage] = useState("image1");
  // const { scrollY } = useScroll()

  // const isInView1 = useInView(ref1)
  // const isInView2 = useInView(ref1)
  // const isInView3 = useInView(ref1)

  // useEffect(()=>{
  //     console.log("Element is in view", isInView1)
  // },[isInView1])

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
        <SectionHeading
          headingText={"How To use"}
          headingDescription={[
            `Palette UI is infinitely customisable and extendable. Start integrating components with these few steps.`,
          ]}
        />
        <div className="flex flex-row space-x-8 relative">
          <div className="w-1/2 h-full">
            <div className="flex items-center h-screen bg-plum-3">
              <motion.div
                className="h-auto bg-plum-8"
                onViewportEnter={() => setImage("image1")}
              >
                item 1
              </motion.div>
            </div>
            <div className="flex items-center h-screen bg-plum-5">
              <motion.div
                className="h-auto bg-plum-8"
                onViewportEnter={() => setImage("image2")}
              >
                item 1
              </motion.div>
            </div>
          </div>
          <div className="sticky top-0 w-1/2 h-screen h-min-screen py-12">
            <div className="h-full w-full bg-gradient-to-t from-plum-11 to-plum-12 rounded-xl flex items-center justify-center">
              {image == "image1" ? (
                <img
                  className=""
                  src="https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
                />
              ) : (
                ""
              )}
              {image == "image2" ? (
                <img
                  className="w-full"
                  src="https://i.pinimg.com/originals/b7/fb/80/b7fb80122cf46d0e584f3a0768aef282.gif"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;
