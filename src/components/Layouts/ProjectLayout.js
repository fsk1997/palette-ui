import React, { useEffect, useState, useRef } from "react";
import darkModeState from "../../hooks/darkModeState";
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
  ArrowSquareOut,
} from "phosphor-react";
import Tippy from "@tippyjs/react";
import { LogoLink } from "../Logo";
import { Popover } from "@headlessui/react";

const Project = ({children}) => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const navIconConfig = {
    size: 20,
    className: "fill-plum-12",
  };

  return (
    <main
      className={`${
        darkMode ? "dark" : "light"
      } newBody bg-slate-1 text-slate-12 min-h-screen`}
    >
      <section
        className={`${
          hideSidebar ? "-translate-x-[300px]" : ""
        } transition-mid w-[300px] fixed z-[1] h-screen bg-slate-2 border-r border-slate-4 p-4 flex flex-col justify-between`}
      >
        <div className="flex flex-col space-y-5">
          <LogoLink className={"logo-slide-in"} />
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

      <section
        className={`${
          hideSidebar ? "ml-0" : "ml-[300px]"
        } transition-mid min-h-screen p-4 relative overflow-x-hidden`}
      >
        <div className="fixed z-[1] top-4 right-4 flex items-center space-x-4">
          <Tippy content="Enlarge">
            <button
              onClick={() => {
                setHideSidebar(!hideSidebar);
              }}
              className="btn btn-plum btn-dark"
            >
              <ArrowsOutSimple size={24} weight="regular" />
            </button>
          </Tippy>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button>
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
                      src="../../images/project-card-placeholder.png"
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

        <div className="fixed z-[1] bottom-4 right-4 flex items-center space-x-4">
          <div class="phone-toggle flex items-center justify-center w-full mb-12">
            <label for="phoneToggle" class="flex items-center cursor-pointer">
              {/* <!-- toggle --> */}
              <div class="relative">
                {/* <!-- input --> */}
                <input onClick={()=>setShowPhone(!showPhone)} id="phoneToggle" type="checkbox" class="sr-only" />
                {/* <!-- line --> */}
                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                {/* <!-- dot --> */}
                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
              {/* <!-- label --> */}
              <div class="ml-3 text-gray-700 font-medium">Toggle Me!</div>
            </label>
          </div>
        </div>

            {showPhone ? null : <div className="show-interface">{children}</div>}

        {showPhone && 
          <div className={`absolute top-0 left-0 h-full w-full z-0 flex items-center justify-center show-interface`}>
            <div className="overflow-hidden w-[276px] h-[597px] rounded-2xl relative border border-plum-3 shadow-2xl shadow-plum-5 hover:shadow-plum-3 scale-[102%] hover:scale-100 transition-mid overflow-scroll scrollbar-none">
              <div className="absolute top-0 left-0 right-0 h-4 w-3/4 rounded-b-xl mx-auto border-l border-r border-b border-plum-4 bg-plum-1" />
              {children}
            </div>
          </div>
        }
      </section>
      {/* </div> */}
    </main>
  );
};


export default Project;
