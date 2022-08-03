import React, { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
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
} from "phosphor-react";
import Tippy from "@tippyjs/react";
import { LogoLink } from "../components/Logo";
import { Popover } from "@headlessui/react";

const Project = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const navIconConfig = {
    size: 20,
    // weight: "light",
    className: "fill-plum-12",
  };

  let [referenceElement, setReferenceElement] = useState()

  return (
    <main
      className={`${
        darkMode ? "dark" : "light"
      } newBody bg-slate-1 text-slate-12 min-h-screen`}
    >
      <Seo />
      {/* <div className=""> */}
      <section className="w-[300px] fixed h-screen bg-slate-2 border-r border-slate-4 p-4 flex flex-col justify-between">
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
      <section className="ml-[300px] min-h-screen p-4 relative">
        <div className="absolute top-4 right-4 flex items-center space-x-4">
        <Tippy content="Enlarge">
            <button className="btn btn-plum btn-dark">
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

            <Popover.Panel 
              className="absolute z-10 bg-red-400 top-14 right-0 w-[325px] max-w-screen"
              >
              <div className="grid grid-cols-2">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
              </div>

              <img src="/solutions.jpg" alt="" />
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
