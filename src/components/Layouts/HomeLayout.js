import React, { useEffect, useState, useRef } from "react";
import { LogoLink } from "../Logo";
import { Link } from "gatsby";
import {
  SmileySticker,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  Envelope
} from "phosphor-react";
import Tippy from "@tippyjs/react";
import { StaticImage } from "gatsby-plugin-image";
import { Section, SectionHeading } from "../Section";
import { Blur, ModeAndGithub } from "../Utils";
import { motion } from "framer-motion";
import useAllProjectsMetadata from "../../hooks/useAllProjectsMetada";
import slugify from "react-slugify"
import darkModeState from "../../hooks/darkModeState";
import { useRecoilState } from "recoil";

const Layout = ({
  children,
  heroFirstLine,
  heroSecondLine,
  heroThirdLine,
  heroDescription,
  heroButtonElement,
  newsletterSection
}) => {

  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const bigCardClassName = "overflow-hidden shadow-2xl shadow-plum-6 rounded-3xl border border-slate-2"

  const [compactNav, setCompactNav] = useState(false);
  const [revealNewsletter, setRevealNewsletter] = useState(false)

  const projects = useAllProjectsMetadata()

  const sectionHero = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      {sectionHero.current ?
        window.scrollY >= sectionHero.current.clientHeight ? setCompactNav(true) :
          setCompactNav(false): console.log('')
        }   
    });
  }, []);

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
    }
  ];

  return (
    <div
      className={`${
        darkMode ? "dark" : "light"
      } newBody bg-slate-2 text-slate-12 relative min-h-screen`}
    >

      <div className={`${compactNav ? "translate-y-0" : "translate-y-24"} transition-mid flex sm:hidden py-4 fixed z-[5] bottom-0 left-0 right-0 w-full items-center justify-center overflow-x-hidden`}>
        <Link to={`/project/${slugify(projects[0].node.title)}`} className={`btn btn-plum ${compactNav ? "btn-dark shadow-lg shadow-plum-7 scale-100" : "scale-0"} origin-bottom transition-all delay-150 duration-500 ease-out`} title="Explore Projects">Explore Projects</Link>
      </div> 

      <div
        className={`${compactNav && "opacity-60"} py-4 fixed top-0 left-0 right-0 z-[5] transition-mid`}
      >
        <nav className={`${compactNav ? "max-w-[100vw] px-4" : "container"} transition-mid flex item-center justify-between`}>
          <LogoLink className="logo-slide-out" type={compactNav ? "icon" : "full"} />
          <div className="flex items-center space-x-4">
            {compactNav && 
              <div className="hidden sm:block">
                <Link to={`/project/${slugify(projects[0].node.title)}`} className="btn btn-plum btn-outline btn-sm" title="Explore Projects">Explore Projects</Link>
              </div> 
            }
            <ModeAndGithub/>
          </div>
        </nav>
      </div>

      <main className="pt-24">
        <header ref={sectionHero} className="container">
          <div className={`bg-hero relative py-14 sm:py-28 ${bigCardClassName}`}>
            <div className="bg-ring-wrapper">
              {[...Array(5)].map((e, i) => {
                return <div className="bg-ring"></div>;
              })}
            </div>
            <Blur className="absolute z-0 top-24 -left-24 opacity-40" sizeClassName="w-[60vw] h-[60vw]"/>

            <div className="px-8 flex flex-col lg:flex-row items-center">
              <div className="mix-blend-luminosity w-full lg:w-1/2 relative z-[1] lg:-mt-14 mb-6 xl:mb-0">
                <h1 className="flex flex-col items-center lg:items-start text-slate-8 text-[2rem] sm:text-[2.8rem] md:text-[3rem] xl:text-[3.8rem] tracking-[-0.05rem] leading-[60%] font-medium lg:whitespace-nowrap transition-mid">
                  <span className="inline-block -ml-[5rem] sm:-ml-[10rem] lg:ml-0">
                    {heroFirstLine}
                  </span>
                  <br />
                  <span className="inline-block ml-[2.5rem] sm:ml-[9.5rem]">
                    {heroSecondLine}
                  </span>
                  <br />
                  <span className="inline-block sm:ml-12">{heroThirdLine}</span>
                </h1>
              </div>
              <div className="w-full lg:w-1/2 relative z-0">
                <StaticImage src="../../images/hero-image.png" className="w-full" />
              </div>
            </div>
            <div className="lg:ml-8 relative z-[1] lg:-mt-32">
              <div className="flex flex-col items-center lg:items-start lg:w-1/2">
                <p className="lg:text-lg text-slate-11 mt-5 mb-4">
                  {heroDescription}
                </p>
                <div className="flex items-center justify-start space-x-3">
                  {heroButtonElement}
                </div>
              </div>
            </div>
          </div>
        </header>
        <div>{children}</div>
      </main>

      <motion.footer 
        onViewportEnter={()=>{setRevealNewsletter(true)}}
        onViewportLeave={()=>{setRevealNewsletter(false)}}
        >
        {newsletterSection && 
          <Section id={"Newsletter"} className="relative z-[1]">
            <div className={`${revealNewsletter ? "translate-y-0" : "translate-y-[10vh]"} transition-transform delay-75 duration-500 ease-out flex items-center lg:justify-end relative bg-plum-3 px-16 py-[144px] ${bigCardClassName}`}>
              <div className="absolute z-0 top-0 left-8 md:left-16 h-full w-full mix-blend-luminosity opacity-[15%] dark:opacity-100">
                <div className="h-full w-full relative text-5xl flex flex-col text-slate-8 font-medium">
                  {[...Array(2)].map((e, i) => {
                    return (
                      <div className="newsletter-textgroup flex flex-col space-y-6 py-[0.6rem]">
                        <p>Major Release</p>
                        <p>Project Enhancements</p>
                        <p>Community Featuring</p>
                        <p>Creative Use Cases</p>
                        <p>Announcement</p>
                        <p>New components</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Blur className="absolute z-0 top-12 left-0"/>
              <Blur className="absolute z-0 -top-24 -right-24" sizeClassName="w-[40vw] h-[40vw]" colorClassName="opacity-40 bg-plum-2"/>
              <div className="lg:w-2/5 xl:w-1/3 relative z-[1]">
                <SectionHeading
                  headingText={"Newsletter"}
                  headingDescription={[`Get updates straight to your inbox.`]}
                />
              </div>
            </div>
          </Section>
        }

        <div className={`${newsletterSection && '-mt-40'} relative z-0 border-t border-slate-4`}>
          <div className="absolute w-full h-full top-0 left-0 footer-navlinks-section">
            <StaticImage draggable={false} src="../../images/bg-gradient-light.png"  className="h-full bg-gradient-light" alt="background image"/>
            <StaticImage draggable={false} src="../../images/bg-gradient-dark.png"  className="h-full bg-gradient-dark" alt="background image"/>
          </div>
          <div className={`relative z-0 container ${newsletterSection ? 'pt-80' : 'pt-40'} pb-24`}>
            <div className="relative mx-auto flex flex-col w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3">
              <div className="absolute -top-28 md:-top-24 left-0 right-0 mx-auto w-full h-full">
                <StaticImage draggable={false} src="../../images/p-outline.png" className="dark:brightness-150" alt="background image"/>
              </div>

              <p className="relative text-center text-slate-9 mb-2">
                Designed and developed by{" "}
                <span className="font-semibold">SayKiat</span>
              </p>
              <nav className="relative flex flex-row items-center justify-center space-x-5">
                {footerNav.map(item => {
                  return (
                    <Tippy key={item.id} content={item.title}>
                      <a
                        href={item.url}
                        target="_blank"
                        className="text-slate-11 hover:text-slate-12"
                      >
                        {item.icon}
                      </a>
                    </Tippy>
                  );
                })}
              </nav>
            
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;


Layout.defaultProps = {
  newsletterSection: true,
};