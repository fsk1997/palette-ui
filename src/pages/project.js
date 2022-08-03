import React, { useEffect, useState, useRef } from "react";
import Seo from "../components/Seo";
import darkModeState from "../hooks/darkModeState";
import { StaticImage } from "gatsby-plugin-image";
import { useRecoilState } from "recoil";
import { Link } from "gatsby";
import {
  Sun,
  Coffee,
  SmileySticker,
  Sparkle,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  Envelope,
  ArrowsOutSimple,
  Info,
  ArrowSquareOut
} from "phosphor-react";
import Tippy from "@tippyjs/react";
import { LogoLink } from "../components/Logo";
import { Popover } from "@headlessui/react";

const Project = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    const [hideSidebar, setHideSidebar] = useState(false)

  const navIconConfig = {
    size: 20,
    // weight: "light",
    className: "fill-plum-12"
  };

  let [referenceElement, setReferenceElement] = useState();

  return (
    <main
      className={`${
        darkMode ? "dark" : "light"
      } newBody bg-slate-1 text-slate-12 min-h-screen`}
    >
      <Seo />
      {/* <div className=""> */}
      <section className={`${hideSidebar ? "-translate-x-[300px]" : ""} transition-mid w-[300px] fixed z-[1] h-screen bg-slate-2 border-r border-slate-4 p-4 flex flex-col justify-between`}>
        <div className="flex flex-col space-y-5">
          <header className="">
            <LogoLink />
          </header>
          <hr className="border-slate-4" />
          <nav className="flex flex-col space-y-5">
            <Link to="/" title="target" className="font-medium text-slate-10">
              Project 1
            </Link>
            <Link to="/" title="target" className="font-medium text-slate-10">
              Project 1
            </Link>
            <Link to="/" title="target" className="font-medium text-slate-10">
              Project 1
            </Link>
            <Link to="/" title="target" className="font-medium text-slate-10">
              Project 1
            </Link>
            <Link to="/" title="target" className="font-medium text-slate-10">
              Project 1
            </Link>
          </nav>
        </div>
        <footer className="flex items-center gap-4">
          <Tippy content="Dark Mode">
            <button
              className="outline-none bg-transparent"
              onClick={() => setDarkMode(!darkMode)}
            >
              <Sun {...navIconConfig} />
            </button>
          </Tippy>
          <a
            href="https://github.com/fsk1997/palette-ui"
            target="_blank"
            rel="noreferrer"
          >
            <Tippy content="Github Repository">
              <GithubLogo {...navIconConfig} />
            </Tippy>
          </a>
        </footer>
      </section>
      <section className={`${hideSidebar ? "ml-[300px]" : ""} min-h-screen p-4 relative`}>
        <div className="absolute top-4 right-4 flex items-center space-x-4">
          <Tippy content="Enlarge">
            <button 
                onClick={()=>{setHideSidebar(!hideSidebar)}}
                className="btn btn-plum btn-dark"
                >
              <ArrowsOutSimple size={24} weight="regular" />
            </button>
          </Tippy>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button ref={setReferenceElement}>
                  <Tippy content="Project Info">
                    <button className="btn btn-plum btn-dark">
                      <Info size={24} weight="regular" />
                    </button>
                  </Tippy>
                </Popover.Button>

                <Popover.Panel className="absolute z-10 flex flex-col bg-slate-1 top-14 right-0 w-[325px] max-w-screen rounded-xl shadow-xl shadow-slate-3 border border-slate-2">
                  <div className="flex flex-col px-5 py-4">
                    <h1 className="font-medium text-lg text-slate-12 mb-2">
                      Project Title
                    </h1>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="bg-yellow-9 h-2 w-2 rounded-full"></div>
                      <p className="uppercase tracking-wider text-xs text-slate-10">
                        alpha v0.03
                      </p>
                    </div>

                    <StaticImage
                      src="../images/project-card-placeholder.png"
                      alt=""
                      className="rounded-xl mb-4"
                    />

                    <p className="text-sm text-slate-11 mb-4">
                      A minimal recreation of Figma's notorious comment
                      component.
                    </p>

                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-sm text-slate-11">
                        Depedencies:
                      </p>
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="inline-flex font-semibold text-slate-12 bg-slate-3 hover:bg-slate-4 transition-mid  rounded px-2 py-1 text-xs">
                          Framer
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-slate-4 bg-slate-2 px-5 py-4 w-full">
                    <a
                      href="https://www.google.com"
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
      </section>
      {/* </div> */}
    </main>
  );
};

export default Project;
