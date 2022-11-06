import React, { useEffect, useState, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  ArrowsOutSimple,
  Info,
  ArrowSquareOut,
  DeviceMobileSpeaker,
  List,
  Desktop,
} from "phosphor-react";
import Tippy from "@tippyjs/react";
import { Popover } from "@headlessui/react";
import Navbar from "./Navbar";
import slugify from "react-slugify";
import { BottomSheet } from "react-spring-bottom-sheet";
import BodyWrapper from "./BodyWrapper";

const Project = ({
  children,
  projectTitle,
  projectStatus,
  projectVersion,
  projectCoverImage,
  projectDescription,
  projectDependencies,
  projectMode,
}) => {

  const [hideSidebar, setHideSidebar] = useState(false);

  const [viewMode, changeViewMode] = useState("desktop");

  const hideBelowSMClass = "hidden sm:block";

  const [openProjectBottomSheet, setOpenProjectBottomSheet] = useState(false);
  const [openNavBottomSheet, setOpenNavBottomSheet] = useState(false);

  const iconConfig = { size: 16, weight: "bold" };
  const buttonClassName = "btn btn-plum btn-dark btn-sm";

  const [curtainTransition, setCurtainTransition] = useState('block scale-100 opacity-100')

  useEffect(()=>{
    setTimeout(() => {
      setCurtainTransition('block scale-110 opacity-0')
      console.log('Curtain is fading...')
    }, 800);
    setTimeout(() => {
      setCurtainTransition('hidden')
      console.log('Curtain has ended...')
    }, 1000);
    
  },[])


  return (
    <>
      <BodyWrapper/>

      <div className={`fixed top-0 left-0 w-screen h-screen bg-slate-2 sm:hidden z-10 transition-slow ease-power-1 ${curtainTransition}`}>
        <div className="container pb-8 h-full flex flex-col items-center justify-center text-center space-y-2">
          <p className="tracking-wide text-slate-11">You're viewing</p>
          <h1 className="font-medium text-4xl text-slate-12 ">
            {projectTitle}
          </h1>
          <p className="tracking-wide text-slate-11 pt-2 text-slate-11">Change project via menu</p>
        </div>
      </div>
      
      <section
        className={`${hideBelowSMClass} ${
          hideSidebar ? "-translate-x-[300px]" : ""
        } transition-mid w-[300px] fixed z-10 h-screen border-r border-slate-4 top-0 left-0 `}
      >
        <Navbar wrapperClassName={"bg-slate-3 h-full"} />
      </section>

      <section
        className={`${
          hideSidebar ? "ml-0" : "sm:ml-[300px]"
        } transition-mid h-full min-h-screen relative`} //Dont put overflow hidden on this page, it will cause layout issue especially for projects with sticky element
      >
        <div className="fixed z-10 top-4 right-4 flex items-center space-x-2">
          {/* Desktop Enlarge Button */}
          <div className={hideBelowSMClass}>
            <Tippy content="Enlarge">
              <button
                onClick={() => setHideSidebar(!hideSidebar)}
                className={buttonClassName}
              >
                <ArrowsOutSimple {...iconConfig} />
              </button>
            </Tippy>
          </div>

          {/* Desktop Change Mode Button */}
          {projectMode.includes("mobile") ? (
            <div className={hideBelowSMClass}>
              {viewMode === "desktop" && (
                <Tippy content="Toggle Device">
                  <button
                    onClick={() => {
                      changeViewMode("mobile");
                      console.log(viewMode);
                    }}
                    className={buttonClassName}
                  >
                    <DeviceMobileSpeaker {...iconConfig} />
                  </button>
                </Tippy>
              )}
              {viewMode === "mobile" && (
                <Tippy content="Toggle Device">
                  <button
                    onClick={() => {
                      changeViewMode("desktop");
                      console.log(viewMode);
                    }}
                    className={buttonClassName}
                  >
                    <Desktop {...iconConfig} />
                  </button>
                </Tippy>
              )}
            </div>
          ) : null}

          {/* Mobile Project Info Button */}
          <div className={"block sm:hidden"}>
            <Tippy content="Project Info">
              <button
                onClick={() => {
                  setOpenProjectBottomSheet(true);
                }}
                className={buttonClassName}
              >
                <Info {...iconConfig} />
              </button>
            </Tippy>
          </div>

          {/* Mobile Nav Button */}
          <div className={"block sm:hidden"}>
            <Tippy content="Menu">
              <button
                onClick={() => {
                  setOpenNavBottomSheet(true);
                }}
                className={buttonClassName}
              >
                <List {...iconConfig} />
              </button>
            </Tippy>
          </div>

          {/* Desktop Project Info Button */}
          <Popover className="relative hidden sm:block">
            {({ open }) => (
              <>
                <Popover.Button>
                  <Tippy content="Project Info">
                    <button className={buttonClassName}>
                      <Info {...iconConfig} />
                    </button>
                  </Tippy>
                </Popover.Button>

                <Popover.Panel className="absolute z-10 flex flex-col bg-slate-1 top-10 right-0 w-[325px] max-w-screen rounded-xl shadow-xl shadow-slate-3 border border-slate-2 overflow-hidden">
                  <ProjectInfo
                    projectTitle={projectTitle}
                    projectStatus={projectStatus}
                    projectVersion={projectVersion}
                    projectCoverImage={projectCoverImage}
                    projectDescription={projectDescription}
                    projectDependencies={projectDependencies}
                  />
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>

        {viewMode === "desktop" && (
          <main className="show-interface h-full w-full">{children}</main>
        )}

        {viewMode === "mobile" && (
          <main className="absolute top-0 left-0 h-full w-full z-0 flex items-center justify-center show-interface">
            <div className="w-[276px] h-[597px] rounded-2xl relative border border-plum-5 shadow-2xl shadow-plum-7 hover:shadow-plum-6 scale-[102%] hover:scale-100 transition-mid overflow-scroll scrollbar-none">
              <div className="absolute top-0 left-0 right-0 z-10 h-4 w-3/4 rounded-b-xl mx-auto border-l border-r border-b border-plum-4 bg-plum-1" />
              {children}
            </div>
          </main>
        )}
      </section>

      <BottomSheet
        open={openNavBottomSheet}
        onDismiss={() => setOpenNavBottomSheet(false)}
      >
        <Navbar wrapperClassName={""} />
      </BottomSheet>
      
       <BottomSheet
        open={openProjectBottomSheet}
        onDismiss={() => setOpenProjectBottomSheet(false)}
      >
        <ProjectInfo
          projectTitle={projectTitle}
          projectStatus={projectStatus}
          projectVersion={projectVersion}
          projectCoverImage={projectCoverImage}
          projectDescription={projectDescription}
          projectDependencies={projectDependencies}
        />
      </BottomSheet>
    </>
  );
};

const ProjectInfo = ({
  projectTitle,
  projectStatus,
  projectVersion,
  projectCoverImage,
  projectDescription,
  projectDependencies,
}) => {

  const projectStatusColourClassName = (projectStatus) => {
    if (projectStatus === "alpha") {
      return "bg-red-400"
    }
    if (projectStatus === "beta") {
      return "bg-yellow-9"
    }
    if (projectStatus === "production") {
      return "bg-green-400"
    }
  }

  return (
    <>
      <div className="flex flex-col px-5 py-4">
        <h1 className="font-medium text-lg text-slate-12 mb-1">
          {projectTitle}
        </h1>
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex items-center justify-center h-2 w-2">
            <div className={`${projectStatusColourClassName(projectStatus)} animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}></div>
            <div className={`${projectStatusColourClassName(projectStatus)} h-2 w-2 rounded-full`}/>
          </div>
          <p className="uppercase tracking-wider mt-1 text-xs text-slate-10">
            {projectStatus} {projectVersion}
          </p>
        </div>

        <GatsbyImage
          image={projectCoverImage}
          alt={projectTitle}
          draggable={false}
          className="rounded-xl mb-4"
        />

        <p className="text-sm text-slate-11">{projectDescription}</p>

        {projectDependencies.length > 0 && (
          <div className="mt-2 flex items-center space-x-2">
            <p className="font-medium text-sm text-slate-11">Dependencies:</p>
            {projectDependencies.map((item) => {
              return (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <span className="inline-flex items-center justify-center space-x-1 font-semibold text-slate-12 bg-slate-3 hover:bg-slate-4 transition-mid rounded px-2 py-1 text-xs">
                    {item.icon_url !== "" && (
                      <img
                        loading="lazy"
                        alt={`${item.name} Logo`}
                        src={item.icon_url}
                        width={8}
                        height={8}
                        className="h-3 w-3 object-fit"
                      />
                    )}
                    <span>{item.name}</span>
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div className="border-t border-slate-4 bg-slate-2 px-5 py-4 w-full">
        <a
          href={`https://github.com/fsk1997/palette-ui/tree/master/src/pages/project/${slugify(
            projectTitle
          )}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-plum flex space-x-2 justify-center items-center w-full"
        >
          <span>Visit Github Repo</span>
          <ArrowSquareOut size={20} weight="bold" />
        </a>
      </div>
    </>
  );
};

export default Project;
