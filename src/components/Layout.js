import React, { useEffect, useState, useRef } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { LogoLink } from "./Logo";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Sun, Coffee, SmileySticker, Sparkle, InstagramLogo, LinkedinLogo, GithubLogo, TwitterLogo, Envelope } from "phosphor-react";
import Tippy from "@tippyjs/react";
import { useRecoilState } from "recoil";
import darkModeState from "../hooks/darkModeState"
import { StaticImage } from "gatsby-plugin-image";
import { Section, SectionHeading } from "./Section"

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

  const footerNav = [
    {
      id: 1,
      title: "Personal Site",
      url: "https://saykiat.com/bio",
      icon: <SmileySticker size={24} />
    },
    // {
    //   id: 1,
    //   title: "Personal Site - SayKiat",
    //   url: "https://saykiat.com",
    //   icon: <Sparkle size={24} />
    // },
    {
      id: 3,
      title: "Instagram",
      url: "https://www.instagram.com/fana.byfong/",
      icon: <InstagramLogo size={24} />
    },
    {
      id: 4,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/fongsaykiat/",
      icon: <LinkedinLogo size={24} />
    },
    {
      id: 5,
      title: "Github",
      url: "https://github.com/fsk1997",
      icon: <GithubLogo size={24} />
    },
    {
      id: 6,
      title: "Twitter",
      url: "https://twitter.com/SayKiat_____",
      icon: <TwitterLogo size={24} />
    },
    {
      id: 7,
      title: "Email",
      url: "mailto:saykiat.fong@gmail.com",
      icon: <Envelope size={24} />
    },
  ]

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

      <footer className="">
        <div className="footer-newsletter-wrapper">
          <Section id={"Newsletter"}>
          <div className="flex items-center justify-end rounded-xl overflow-hidden bg-plum-3 relative px-16 py-[144px]">
              <div className="lg:w-1/2 relative z-[2]">
                  <SectionHeading
                  headingText={"Newsletter"}
                  headingDescription={[`Get updates straight to your inbox.`]}
                />
              </div>
              <div className="absolute z-[1] top-0 left-16 text-5xl flex flex-col space-y-6 text-slate-8 font-medium mix-blend-luminosity newsletter-items-wrapper">
                <div className="flex flex-col space-y-6">
                  <p>Major Release</p>
                  <p>Project Enhancements</p>
                  <p>Community Featuring</p>
                  <p>Creative Use Cases</p>
                  <p>Announcement</p>
                  <p>New components</p>
                </div>
                <div className="flex flex-col space-y-6">
                  <p>Major Release</p>
                  <p>Project Enhancements</p>
                  <p>Community Featuring</p>
                  <p>Creative Use Cases</p>
                  <p>Announcement</p>
                  <p>New components</p>
                </div>
              </div>
          </div>
        </Section>
        </div>
        <div className="bg-slate-3">
          <div className="container py-24">
            <p className="text-center text-slate-9 mb-2">Designed and developed by <span className="font-semibold">SayKiat</span></p>
            <nav className="flex flex-row items-center justify-center space-x-5">
              {footerNav.map((item)=>{return(
                <Tippy key={item.id} content={item.title}>
                  <a href={item.url} target="_blank" className="text-slate-11 hover:text-slate-12">
                    {item.icon}
                  </a>
                </Tippy>
              )})}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
