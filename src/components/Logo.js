import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const imageConfig = {
  alt: "PaletteUI Logo",
  loading: "eager",
  backgroundColor: "transparent",
  draggable: false
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
export const LogoLightIcon = () => {
  return (
    <StaticImage
      {...imageConfig}
      src="../images/logo/icon-light.png"
      className="logo-light-icon object-fit"
    />
  );
};
export const LogoDarkIcon = () => {
  return (
    <StaticImage
      {...imageConfig}
      src="../images/logo/icon-dark.png"
      className="logo-dark-icon object-fit"
    />
  );
};
export const LogoLink = ({ className, type }) => {
  return (
    <Link
      to="/"
      title="Home - PaletteUI"
      className={`
        header-logo flex items-center justify-start ${className} 
        ${type === "full" && "h-10 w-32"} 
        ${type === "icon" && "h-[1.875rem] w-[1.875rem]"}`}
    >
      {type === "full" && (
        <>
          <LogoLightDark />
          <LogoLightLight />
        </>
      )}
      {type === "icon" && (
        <>
          <LogoLightIcon />
        </>
      )}
    </Link>
  );
};
LogoLink.defaultProps = {
  type: "full",
};
