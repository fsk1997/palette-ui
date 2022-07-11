import * as React from "react";
import Tippy from "@tippyjs/react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <p>this is some content</p>
    </Layout>
  );
};

export default IndexPage;
