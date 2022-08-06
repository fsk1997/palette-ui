import React, { useEffect, useState, useRef } from "react";
import Seo from "../components/Seo";
import ProjectLayout from "../components/Layouts/ProjectLayout";

const Project = () => {
  return (
    <ProjectLayout>
      <Seo />
      {[...Array(200)].map((e, i) => {
        return <div>helo</div>;
      })}
    </ProjectLayout>
  );
};

export default Project;
