import React, { useEffect, useState, useRef } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { useRecoilState } from "recoil";
import darkModeState from "../hooks/darkModeState"


const Layout = ({ children }) => {

  const location = useLocation();
  const notHome = location.pathname !== "/";
  const isHome = location.pathname === "/";

  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <body className={darkMode ? 'dark' : 'light'}>
      <header className="">
        <nav>
          <Link to="/" title="Home - PaletteUI">
            <div className={`header-logo ${darkMode && 'logo-light'}`}></div>
          </Link>
          <input type="checkbox" checked={darkMode} value={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
          <label htmlFor="theme">{darkMode}</label>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav></nav>
      </footer>
    </body>
  );
};

export default Layout;
