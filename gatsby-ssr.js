import "./src/styles/fonts.css";
import "./src/styles/global.css";
import "windy-radix-palette/base.css";
import "tippy.js/dist/tippy.css"; //https://github.com/atomiks/tippyjs-react
import React from "react";

import { RecoilRoot } from "recoil"
// https://medium.com/swlh/how-to-use-recoil-js-library-in-gatsby-d5212f2cd623

export const wrapRootElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
