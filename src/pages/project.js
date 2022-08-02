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
  Envelope
} from "phosphor-react";
import Tippy from "@tippyjs/react";
import { LogoLink } from "../components/Logo";

const Project = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const navIconConfig = {
    size: 20,
    // weight: "light",
    className: "fill-plum-12"
  };

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
            <Link to="/" title="target" className="font-semibold text-slate-10">
              Project 1
            </Link>
            <Link to="/" title="target" className="font-semibold text-slate-10">
              Project 1
            </Link>
            <Link to="/" title="target" className="font-semibold text-slate-10">
              Project 1
            </Link>
            <Link to="/" title="target" className="font-semibold text-slate-10">
              Project 1
            </Link>
            <Link to="/" title="target" className="font-semibold text-slate-10">
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
      <section className="ml-[300px] p-4">hello</section>
      {/* </div> */}
    </main>
  );
};

export default Project;
