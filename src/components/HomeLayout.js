import React, { useEffect, useState, useRef } from "react";
import { LogoLink } from "./Logo";
import { Link } from "gatsby";
import { Sun, Moon, Coffee, SmileySticker, Sparkle, InstagramLogo, LinkedinLogo, GithubLogo, TwitterLogo, Envelope } from "phosphor-react";
import Tippy from "@tippyjs/react";
import { useRecoilState } from "recoil";
import darkModeState from "../hooks/darkModeState"
import { StaticImage } from "gatsby-plugin-image";
import { Section, SectionHeading } from "./Section"

const Layout = ({ children, heroFirstLine, heroSecondLine, heroThirdLine, heroDescription, heroButtonElement  }) => {

  const [darkMode, setDarkMode] = useRecoilState(darkModeState)
  const [compactHeader, setCompactHeader] = useState(false)

  const sectionHero = useRef(null)

  useEffect(()=>{
    document.addEventListener('scroll', ()=>{
      if(window.scrollY >= sectionHero.current.clientHeight){
        setCompactHeader(true) 
      } else {
        setCompactHeader(false) 
      }
    })
  },[])

  const navIconConfig = {
    size: 20,
    weight: "fill",
    className: "text-plum-12"
  };

  const footerNav = [
    {
      id: 1,
      title: "Personal Site",
      url: "https://saykiat.com/bio",
      icon: <SmileySticker size={24} />
    },
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
    <div className={`${darkMode ? 'dark' : 'light'} newBody bg-slate-1 text-slate-12 relative min-h-screen`}>
      
      <header className={`${compactHeader ? "opacity-60 py-5" : "lg:py-9 backdrop-blur-none bg-transparent shadow-none"} py-4 fixed top-0 left-0 right-0 z-[5] transition-mid`}>
        <nav className="container flex item-center justify-between">
          <LogoLink type={compactHeader ? "icon" : "full"}/>
          <div className="flex items-center space-x-4">
            <Tippy content={darkMode ? "Light Mode" : "Dark Mode"}>
              <button className="outline-none bg-transparent" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun {...navIconConfig} /> : <Moon {...navIconConfig} />}
              </button>
            </Tippy>
            <Tippy content="Github Repository">
              <a href="https://github.com/fsk1997/palette-ui" target="_blank" rel="noreferrer">
                <GithubLogo {...navIconConfig} />
              </a>
            </Tippy>
          </div>
        </nav>
      </header>

      <main>
        <section ref={sectionHero} className="bg-hero relative pt-32 pb-20">
          <div className="bg-ring-wrapper">
            {[...Array(3)].map((e, i) => {return <div className="bg-ring"></div>})}
          </div>

          <div className="container flex flex-col lg:flex-row items-center">
            <div className="mix-blend-luminosity w-full lg:w-1/2 relative z-[1] lg:-mt-14 mb-6 xl:mb-0">
              <h1 className="flex flex-col items-center lg:items-start text-slate-8 text-[2rem] sm:text-[2.8rem] md:text-[3rem] xl:text-[3.8rem] tracking-[-0.05rem] leading-[60%] font-medium lg:whitespace-nowrap transition-mid dark:brightness-150">
                <span className="inline-block -ml-[10rem] lg:ml-0">{heroFirstLine}</span>
                <br/>
                <span className="inline-block ml-[3rem] sm:ml-[9.5rem]">{heroSecondLine}</span>
                <br/>
                <span className="inline-block ml-12">{heroThirdLine}</span>
              </h1>
            </div>
            <div className="w-full lg:w-1/2 relative z-0">
              <StaticImage src="../images/hero-image.png" className="w-full"/>
            </div>
          </div>
          <div className="container relative z-[1] lg:-mt-32">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              <p className="lg:text-lg text-slate-11 mt-5 mb-4">
                {heroDescription}
              </p>
              <div className="flex items-center justify-start space-x-3">
                {heroButtonElement}
              </div>
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
              <div className="newsletter-textgroup-wrapper absolute z-[1] top-0 left-16 text-5xl flex flex-col space-y-6 text-slate-8 font-medium mix-blend-luminosity newsletter-items-wrapper">
                {[...Array(2)].map((e, i) => {return (
                  <div className="newsletter-textgroup flex flex-col space-y-6">
                    <p>Major Release</p>
                    <p>Project Enhancements</p>
                    <p>Community Featuring</p>
                    <p>Creative Use Cases</p>
                    <p>Announcement</p>
                    <p>New components</p>
                  </div>
                )})}
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
