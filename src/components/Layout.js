import React, { useEffect, useState, useRef } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { LogoLink } from "./Logo";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Layout = ({ children }) => {
  const location = useLocation();
  const notHome = location.pathname !== "/";
  const isHome = location.pathname === "/";


  return (
    <>
      <header className="container">
        <nav className="flex item-center justify-between">
          <LogoLink/>
          <ThemeToggler className="block">
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />{" "}
                Dark mode
              </label>
            )}
          </ThemeToggler>
        </nav>
      </header>

      <main>{children}</main>
      
      <footer className="container mx-auto">
        <nav></nav>
      </footer>
    </>
  );
};

export default Layout;
