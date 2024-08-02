"use client"
import React from 'react';
// import styles from "./sarvices.module.scss";
// import FrameComponent7 from "./cybersecurity/frame-component7";
// import FrameComponent6 from "./cybersecurity/frame-component6";
// import FrameComponent5 from "./cybersecurity/frame-component5";
// import LocalBenchmarking from "./cybersecurity/local-benchmarking";
// import FrameComponent4 from "./cybersecurity/frame-component4";
// import FrameComponent3 from "./cybersecurity/frame-component3";
// import FrameComponent2 from "./cybersecurity/frame-component2";
// import BusinessGrowth from "../home/homecomponents/business-growth";
// import NewsHeader from "../home/homecomponents/news-header";
// import NewsGrid from "../home/homecomponents/news-grid";
// import styleshome from "../home/home.module.scss";
// import FrameComponent8 from "./cybersecurity/frame-component8";
// import FrameComponent from "./cybersecurity/frame-component";
import About from '../about/about';
const Sarvices: React.FC = () => {
  return (
    <>
      {/* <div className={styles.cybersecurity}>
        <div className={styles.cybersecurityChild} />
        <Cybersecurity />
        <FrameComponent8 />
        <FrameComponent7 />
        <FrameComponent6 />
        <FrameComponent5 />
        <div className={styles.webApplicationContainerWrapper}>
          <div className={styles.webApplicationContainer}>
            <LocalBenchmarking />
            <FrameComponent4 />
          </div>
        </div>
        <FrameComponent3 />
        <FrameComponent2 />
        
      </div>
      <section className={styleshome.newsContainerWrapper}>
        <div className={styleshome.newsContainer}>
          <NewsHeader />
          <NewsGrid />
        </div>
      </section>
      <FrameComponent />
      <div style={{width:"100%"}}>
        <BusinessGrowth />
      </div> */}
      <About />
    </>
  );
};

export default Sarvices;
