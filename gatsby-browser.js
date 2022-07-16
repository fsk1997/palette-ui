import "./src/styles/global.css";
import "./src/styles/fonts.css";
import "windy-radix-palette/base.css";
import "tippy.js/dist/tippy.css"; //https://github.com/atomiks/tippyjs-react
import React from "react";

import { RecoilRoot } from "recoil";

export const wrapRootElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>;
};