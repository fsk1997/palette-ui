import React from "react";
import darkModeState from "../hooks/darkModeState";
import { useRecoilState } from "recoil";
import Tippy from "@tippyjs/react";
import { Sun, Moon, GithubLogo } from "phosphor-react";

export const Blur = ({ className, sizeClassName, colorClassName }) => {
  return (
    <div
      className={`${className} ${
        sizeClassName ? sizeClassName : "w-[75vw] h-[75vw]"
      } ${
        colorClassName
          ? colorClassName
          : "bg-brand-magenta mix-blend-color-burn"
      } rounded-full blur-3xl`}
    />
  );
};

export const InlineEmoji = ({ children, ariaLabel }) => {
  return (
    <span role="img" aria-label={ariaLabel}>
      {children}
    </span>
  );
};

export const ModeAndGithub = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const navIconConfig = {
    size: 20,
    weight: "fill",
    className: "text-plum-12"
  };

  return (
    <>
      <Tippy content={darkMode ? "Light Mode" : "Dark Mode"}>
        <button
          className="outline-none bg-transparent"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun {...navIconConfig} /> : <Moon {...navIconConfig} />}
        </button>
      </Tippy>
      <Tippy content="Github Repository">
        <a
          href="https://github.com/fsk1997/palette-ui"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo {...navIconConfig} />
        </a>
      </Tippy>
    </>
  );
};
