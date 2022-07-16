import * as React from "react";
import Tippy from "@tippyjs/react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <section className="container">
        <p>this is some content</p>
      </section>
    </Layout>
  );
};

export default IndexPage;
