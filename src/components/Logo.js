import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const imageConfig = {
  alt: "PaletteUI Logo",
  loading: "eager",
  backgroundColor: "transparent",
  draggable: false,
};

export const LogoLightLight = () => {
  return (
    <StaticImage
      {...imageConfig}
      src="../images/logo/logo-light-light.png"
      className="logo-light-light"
    />
  );
};
export const LogoLightDark = () => {
  return (
    <StaticImage
      {...imageConfig}
      src="../images/logo/logo-light-dark.png"
      className="logo-light-dark"
    />
  );
};

export const LogoLink = ({className, sizeClassName}) => {
  return (
    <Link
      to="/"
      title="Home - PaletteUI"
      className={`header-logo flex items-center justify-start ${className} ${sizeClassName ? sizeClassName : "h-10 w-32"}`}
    >
      <LogoLightDark />
      <LogoLightLight />
    </Link>
  );
};
