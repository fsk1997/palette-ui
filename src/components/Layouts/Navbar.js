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
      className={`${wrapperClassName && wrapperClassName} bg-slate-2 p-4 flex flex-col justify-between`}
    >
      <div className="flex flex-col space-y-5">
        <LogoLink
          className={`${location.pathname === "/projects" && "logo-slide-in"}`}
        />
        <hr className="border-slate-4 transition-mid" />
        <nav className="flex flex-col space-y-5">
          {projects.map(item => {
            const project = item.node;
            return (
              <Link
                to={`/project/${slugify(project.title)}`}
                className="font-medium text-slate-10"
              >
                {project.title}
              </Link>
            );
          })}
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
    </nav>
  );
};


export default Navbar