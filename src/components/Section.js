import React from "react";
import slugify from "react-slugify";

export const Section = ({ children, className, container, id }) => {
  return (
    <section
      id={id ? slugify(id) : ""}
      role="contentinfo"
      aria-label={id ? id : ""}
      className={`${className} ${container ? "container" : ""}`}
    >
      {children}
    </section>
  );
};
Section.defaultProps = {
  container: true,
};

export const SectionHeading = ({ headingText, headingDescription }) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex flex-row items-center space-x-2">
        <hr className="w-6 border-t-2 border-plum-11" />
        <h2 className="uppercase tracking-wider font-semibold text-plum-11">
          {headingText}
        </h2>
      </div>
      <p className="lg:w-10/12 xl:w-7/12 text-2xl lg:text-3xl font-medium leading-9 lg:leading-10">
        {headingDescription}
      </p>
    </div>
  );
};
