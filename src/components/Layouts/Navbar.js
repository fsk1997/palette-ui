import React, { useEffect, useState, useRef } from "react";
import darkModeState from "../../hooks/darkModeState";
import { useRecoilState } from "recoil";
import {
  Sun,
  GithubLogo,
} from "phosphor-react";
import Tippy from "@tippyjs/react";
import { LogoLink } from "../Logo";
import { Link } from "gatsby";
import slugify from "react-slugify";
import { useLocation } from "@reach/router";
import useAllProjectsMetadata from "../../hooks/useAllProjectsMetada"
import { ModeAndGithub } from "../Utils"

const Navbar = ({wrapperClassName}) => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const navIconConfig = {
    size: 20,
    className: "fill-plum-12"
  };

  const location = useLocation();

  const projects = useAllProjectsMetadata()

  return (
    <nav
      className={`${wrapperClassName && wrapperClassName} p-4 flex flex-col justify-between`}
    >
      <div className="flex flex-col space-y-5">
        <LogoLink/>
        <hr className="border-slate-4 transition-mid" />
        <nav className="flex flex-col space-y-4">
          <h6 className="text-slate-8 h-mini-title">projects</h6>
          {projects.map(item => {
            const project = item.node;
            return (
              <Link 
                key={item.slug}
                to={`/project/${slugify(project.title)}`} 
                className={`
                  text-sm font-medium hover:text-plum-12 transition-mid 
                  ${`/project/${slugify(project.title)}` === location.pathname ? "text-plum-12" : "text-slate-10"}`}>
                {project.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <footer className="mt-16 flex items-center space-x-4">
        <ModeAndGithub/>
      </footer>
    </nav>
  );
};


export default Navbar