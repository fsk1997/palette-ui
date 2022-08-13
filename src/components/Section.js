import React, { useState } from "react";
import slugify from "react-slugify";
import { motion } from "framer-motion"

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

export const SectionHeading = ({ headingText, headingDescription, headingDescriptionClassName }) => {
  
  const [revealLine, setRevealLine] = useState(false)

  return (
    <motion.div 
      onViewportEnter={()=>{setRevealLine(true)}} 
      onViewportLeave={()=>{setRevealLine(false)}} 
      className="flex flex-col space-y-1"
    >
      <div className="flex flex-row items-center space-x-2">
        <hr className={`${revealLine ? "w-6" : "w-0"} transition-mid border-t-2 border-plum-11`} />
        <h2 className={`${revealLine ? "tracking-wider" : "tracking-snug"} transition-fast uppercase font-semibold text-plum-11`}>
          {headingText}
        </h2>
      </div>
      {headingDescription && 
        <div className={`${headingDescriptionClassName} h2 font-medium leading-9 lg:leading-10`}>
          {headingDescription}
        </div>
      }
    </motion.div>
  );
};
