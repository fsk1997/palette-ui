import React, { useEffect, useState, useRef } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { LogoLink } from "./Logo";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Sun, GithubLogo, Coffee } from "phosphor-react";
import Tippy from "@tippyjs/react";
import { useRecoilState } from "recoil";
import darkModeState from "../hooks/darkModeState"
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {
  const location = useLocation();
  const notHome = location.pathname !== "/";
  const isHome = location.pathname === "/";

  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  const navIconConfig = {
    size: 24,
    weight: "fill",
    className: "fill-plum-12"
  };

  return (
    <div className={`${darkMode ? 'dark' : 'light'} newBody bg-slate-1 text-slate-12 min-h-screen`}>
      <header className="container relative z-[5]">
        <nav className="flex item-center justify-between py-4 lg:py-9">
          <LogoLink />
          <div className="flex items-center gap-4">
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
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-hero relative -mt-28 pt-32 lg:pt-28 pb-10 lg:pb-20">
          <div className="bg-ring-wrapper absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
            <div className="bg-ring"></div>
            <div className="bg-ring"></div>
            <div className="bg-ring"></div>
          </div>

          <div className="container flex flex-col lg:flex-row items-center">
            <div className="mix-blend-luminosity w-full lg:w-1/2 relative z-[1] lg:-mt-14">
              <h1 className="text-slate-8 dark:brightness-150 text-[3.5rem] lg:text-[3rem] xl:text-[3.8rem] tracking-[-0.05rem] leading-[110%] font-medium lg:whitespace-nowrap transition-mid">
                <span className="inline-block">Open Source,</span>
                <br/>
                <span className="inline-block ml-[9.5rem]">Plug-and-Play</span>
                <br/>
                <span className="inline-block ml-12">React UI Components</span>
              </h1>
            </div>
            <div className="w-full lg:w-1/2 relative z-0">
              <StaticImage src="../images/hero-image.png"/>
            </div>
          </div>
          <div className="container relative z-[1] -mt-32">
            <p className="lg:text-xl my-6">
              Experimental React UI Components with Plain CSS
            </p>
            <div className="flex items-center justify-start gap-4">
              <button className="btn btn-plum">button 1</button>
              <button className="btn btn-plum btn-outline">button 2</button>
            </div>
          </div>
        </section>
        <div>
          {children}
        </div>
      </main>

      <footer className="container">
        <nav></nav>
      </footer>
    </div>
  );
};

export default Layout;
