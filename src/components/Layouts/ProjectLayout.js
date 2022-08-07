import React, { useEffect, useState, useRef } from "react";
import darkModeState from "../../hooks/darkModeState";
import { GatsbyImage } from "gatsby-plugin-image";
import { useRecoilState } from "recoil";
import {
  ArrowsOutSimple,
  Info,
  ArrowSquareOut,
  DeviceMobileSpeaker,
  Desktop
} from "phosphor-react";
import Tippy from "@tippyjs/react";
import { Popover } from "@headlessui/react";
import Navbar from "./Navbar";
import { useLocation } from "@reach/router";
import slugify from "react-slugify";

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
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const [hideSidebar, setHideSidebar] = useState(false);

  const [viewMode, changeViewMode] = useState("desktop")

  const iconConfig = { size:16, weight: "bold" }
  const buttonClassName = "btn btn-plum btn-dark btn-sm"

  const location = useLocation();

  return (
    <main
      className={`${
        darkMode ? "dark" : "light"
      } newBody bg-slate-2 text-slate-12 relative min-h-screen`}
    >
      
      <section
        className={`${
          hideSidebar ? "-translate-x-[300px]" : ""
        } transition-mid w-[300px] fixed z-10 h-screen border-r border-slate-4`}
      >
        <Navbar wrapperClassName={"h-full"} />
      </section>

      <section className={`${hideSidebar ? "ml-0" : "ml-[300px]"} transition-mid h-full min-h-screen relative`} //Dont put overflow hidden on this page, it will cause layout issue especially for projects with sticky element
      >
        {location.pathname !== "/projects" && (
          <>
            <div className="fixed z-10 top-4 right-4 flex items-center space-x-2">
              <div className="hidden sm:block">
                <Tippy content="Enlarge">
                  <button
                    onClick={() => setHideSidebar(!hideSidebar)}
                    className={buttonClassName}
                  >
                    <ArrowsOutSimple {...iconConfig} />
                  </button>
                </Tippy>
              </div>

              {projectMode.includes("mobile") ? ( 
                <div className="hidden sm:block">
                  {viewMode === "desktop" && 
                    (
                    <Tippy content="Toggle Device">
                      <button onClick={() => {changeViewMode("mobile"); console.log(viewMode)}} className={buttonClassName}>
                        <DeviceMobileSpeaker {...iconConfig} />
                      </button>
                    </Tippy>
                    )
                  }
                  {viewMode === "mobile" && 
                    (
                    <Tippy content="Toggle Device">
                      <button onClick={() => {changeViewMode("desktop"); console.log(viewMode)}} className={buttonClassName}>
                        <Desktop {...iconConfig} />
                      </button>
                    </Tippy>
                    )
                  }
                </div>
              ) : null}

              <Popover className="relative">
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
                      <div className="flex flex-col px-5 py-4">
                        <h1 className="font-medium text-lg text-slate-12 mb-1">
                          {projectTitle}
                        </h1>
                        <div className="flex items-center space-x-2 mb-4">
                          <div
                            className={`
                            ${projectStatus === "alpha" ? "bg-red-400" : ""}
                            ${projectStatus === "beta" ? "bg-yellow-9" : ""}
                            ${
                              projectStatus === "production"
                                ? "bg-green-400"
                                : ""
                            }
                            h-2 w-2 rounded-full`}
                          />
                          <p className="uppercase tracking-wider text-xs text-slate-10">
                            {projectStatus} {projectVersion}
                          </p>
                        </div>

                        <GatsbyImage
                          image={projectCoverImage}
                          alt={projectTitle}
                          draggable={false}
                          className="rounded-xl mb-4"
                        />

                        <p className="text-sm text-slate-11">
                          {projectDescription}
                        </p>

                        {projectDependencies.length > 0 && (
                          <div className="mt-2 flex items-center space-x-2">
                            <p className="font-medium text-sm text-slate-11">
                              Dependencies:
                            </p>
                            {projectDependencies.map(item => {
                              return (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span className="inline-flex items-center justify-center space-x-1 font-semibold text-slate-12 bg-slate-3 hover:bg-slate-4 transition-mid  rounded px-2 py-1 text-xs">
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
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            </div>
          </>
        )}

        {viewMode === "desktop" && <div className="show-interface h-full w-full">{children}</div>}

        {viewMode === "mobile" && (
          <div className="absolute top-0 left-0 h-full w-full z-0 flex items-center justify-center show-interface">
            <div className="w-[276px] h-[597px] rounded-2xl relative border border-plum-5 shadow-2xl shadow-plum-7 hover:shadow-plum-6 scale-[102%] hover:scale-100 transition-mid overflow-scroll scrollbar-none">
              <div className="absolute top-0 left-0 right-0 z-10 h-4 w-3/4 rounded-b-xl mx-auto border-l border-r border-b border-plum-4 bg-plum-1" />
              {children}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Project;
