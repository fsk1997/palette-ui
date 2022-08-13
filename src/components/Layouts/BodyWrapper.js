import React from "react";
import { Helmet } from "react-helmet";
import darkModeState from "../../hooks/darkModeState";
import { useRecoilState } from "recoil";

const BodyWrapper = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  return (
    <Helmet>
      <body
        className={`${
          darkMode ? "dark" : "light"
        } newBody bg-slate-2 text-slate-12 relative min-h-screen`}
      />
    </Helmet>
  );
};

export default BodyWrapper;
