import React, { useState, useRef, useEffect } from "react";
import * as styles from "./index.module.css";

// Non essential imports
import ProjectLayout from "../../../components/Layouts/ProjectLayout";
import { useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import slugify from "react-slugify";
import Seo from "../../../components/Seo";
const DialogHeightTransition = () => {
  const siteMetadata = useSiteMetadata();

  const data = useStaticQuery(graphql`
    {
      projectJson(slug: { eq: "dialog-height-transition" }) {
        ...ProjectFragment
      }
    }
  `);

  const project = data.projectJson;

  const [showDialog, setShowDialog] = useState(false);
  const [switchContent, setSwitchContent] = useState(false);
  const dialogEl = useRef(0);
  const [changeDialogHeight, setChangeDialogHeight] = useState("100%");
  const [zeroOpacity, setZeroOpacity] = useState(false);
  const [transform, setTranform] = useState(false);

  const falsey = () => {
    setSwitchContent(false);
    setZeroOpacity(true);
    setTranform(true);
    setTimeout(function () {
      setChangeDialogHeight(dialogEl.current.clientHeight);
    }, 150);
  };
  const truey = () => {
    setSwitchContent(true);
    setZeroOpacity(true);
    setTranform(true);
    setTimeout(function () {
      setChangeDialogHeight(dialogEl.current.clientHeight);
    }, 150);
  };

  useEffect(() => {
    setTimeout(function () {
      setChangeDialogHeight(dialogEl.current.clientHeight);
    }, 150);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setZeroOpacity(false);
      setTranform(false);
    }, 300);
  }, [zeroOpacity]);

  const prepForDialog = () => {
    setShowDialog(true);
    setTimeout(function () {
      setChangeDialogHeight(dialogEl.current.clientHeight);
    }, 150);
  };

  const transitionStyle = {
    opacity: `${zeroOpacity ? "0%" : "100%"}`,
    transform: `${transform ? "scale(0%)" : "scale(100%)"}`,
  };

  return (
    <ProjectLayout>
      <Seo 
        customTitle={`${project.title} | ${siteMetadata.title}`}
        customDescription={project.description}
        customURL={`${siteMetadata.url}/${slugify(project.title)}`}
      />
      <div className={styles.page}>
        {showDialog ? (
          <div className={styles.dialog} ref={dialogEl}>
            <div
              className={styles.dialogBackground}
              style={{
                height: changeDialogHeight ? changeDialogHeight : "100%",
              }}
            ></div>
            <div className={styles.dialogInner}>
              <div className={styles.dialogNav}>
                <div className={styles.toggles}>
                  <button onClick={falsey}>Square Photo</button>
                  <button onClick={truey}>Rectangle Photo</button>
                </div>
                <button onClick={() => setShowDialog(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="200"
                      y1="56"
                      x2="56"
                      y2="200"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <line
                      x1="200"
                      y1="200"
                      x2="56"
                      y2="56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                  </svg>
                </button>
              </div>
              <div className={styles.content}>
                {switchContent ? (
                  <div style={transitionStyle}>
                    <img
                      src="https://media2.malaymail.com/uploads/articles/2020/2020-01/jihyo_070120.jpg"
                      alt="Jihyo from Twice"
                    />
                    <p>
                      JYP Entertainment had scouted Jihyo after she participated
                      in a contest on Junior Naver and placed second. She then
                      joined JYP Entertainment as a trainee at the age of eight
                      and trained for ten years before her debut.
                    </p>
                  </div>
                ) : (
                  <div style={transitionStyle}>
                    <img
                      src="https://64.media.tumblr.com/169440c74ac5b01cea71f225d535ebb8/dca73683daa8345f-72/s1280x1920/b45cfd8873719663d5e0225313948c4c7f21fcff.jpg"
                      alt="Jihyo from Twice"
                    />
                    <p>
                      Park Ji-hyo (Korean: 박지효; born Park Ji-soo on February
                      1, 1997), known mononymously as Jihyo, is a South Korean
                      singer. She is the leader and vocalist of the South Korean
                      girl group Twice formed by JYP Entertainment.{" "}
                    </p>
                  </div>
                )}
                {/* <div>
                <img
                  style={{
                    opacity: `${zeroOpacity ? "0%" : "100%"}`,
                    transform: `${transform ? "scale(0%)" : "scale(100%)"}`
                  }}
                  src={
                    switchContent
                      ? `https://media2.malaymail.com/uploads/articles/2020/2020-01/jihyo_070120.jpg`
                      : `https://64.media.tumblr.com/169440c74ac5b01cea71f225d535ebb8/dca73683daa8345f-72/s1280x1920/b45cfd8873719663d5e0225313948c4c7f21fcff.jpg`
                  }
                />
              </div> */}
              </div>
            </div>
          </div>
        ) : (
          <button onClick={prepForDialog}>Click for Jihyo!</button>
        )}
      </div>
    </ProjectLayout>
  );
};

export default DialogHeightTransition;
