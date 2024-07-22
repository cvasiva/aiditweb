/* eslint-disable @next/next/no-img-element */
"use client";
import type { NextPage } from "next";
import styles from "./frame-component2.module.css";
export type FrameComponent2Type = {
  className?: string;
};
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { useState } from "react";
interface Item {
  src: string;
  altText: string;
  altText1: string;
  caption: string;
  key: number;
}
const items: Item[] = [
  {
    src: '/cardbg.png',
    altText: 'Deliver Seamless Mobile Web Experiences',
    altText1: 'with our Application Development',
    caption: 'Reach more customers and enhance their experience with a seamless mobile web application. Build custom mobile web applications that are responsive, scalable, and user business centric design.',
    key: 1,
  },
  {
    src: './AditBannerBg.png',
    altText: 'Protect Business',
    altText1: 'with Cybersecurity & Compliance',
    caption: 'Shield your organization from cyber threats and ensure compliance with our expert solutions. Stay ahead of evolving threats and regulations with our experienced team.',
    key: 2,
  },
  {
    src: '/cardbg2.png',
    altText: 'Enterprise',
    altText1: 'Cloud Infrastructure Solutions',
    caption: 'Shield your organization from cyber threats and ensure compliance with our expert solutions. Stay ahead of evolving threats and regulations with our experienced team.',
    key: 3,
  },
  {
    src: '/cardbg3.png',
    altText: 'Empowering Your Business with',
    altText1: 'Robust Infrastructure Solution',
    caption: 'Shield your organization from cyber threats and ensure compliance with our expert solutions. Stay ahead of evolving threats and regulations with our experienced team.',
    key: 4,
  },
  {
    src: '/cardbg4.png',
    altText: 'Transform Your Business with',
    altText1: 'Expert IT Strategy',
    caption: 'Shield your organization from cyber threats and ensure compliance with our expert solutions. Stay ahead of evolving threats and regulations with our experienced team.',
    key: 5,
  },
];
interface ExampleProps {
  args?: any;
}
const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }, ExampleProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
      style={{ width: "100%",height:'100vh' }}
    >
      <img key={item.key}
        src={item.src} alt={item.altText} className={styles.homepageBannerIcon} />
      <div className={styles.mobileExperienceWrapper}>
        <div className={styles.mobileExperience}>
          <div className={styles.mobileExperienceBackground} />
          <div className={styles.seamlessExperienceParent}>
            <div className={styles.seamlessExperience}>
              <div className={styles.seamlessBackground} />
              <h1 className={styles.deliverSeamlessMobileContainer}>
                <p className={styles.deliverSeamlessMobileWebEx}>
                  <b>{item.altText}</b>
                </p>
                <p className={styles.withOurApplication}>
                  {item.altText1}
                </p>
              </h1>
            </div>
            <div className={styles.titleAndDescription} />
          </div>
          <div className={styles.reachCustomers}>
            <div className={styles.customerExperience}>
              <div className={styles.reachMoreCustomers}>
                {item.caption}
              </div>
              <div className={styles.knowMoreButton}>
                <div className={styles.knowMoreContainer}>
                  <div className={styles.knowMore}>Know More</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.titleAndDescription1} />
          <div className={styles.titleAndDescription2} />
        </div>
      </div>
      <div className={styles.serviceSuccess}>
        <div className={styles.serviceSuccessChild} />
        {/* <div className={`${styles.servicesForTheSuccessOfBrWrapper} mb-5`}>
          <div className={styles.servicesForThe}>
            Services for the success of brilliant companies
          </div>
        </div> */}
        <div className={`${styles.positionLogos} mb-5 w-75 d-flex justify-content-center m-auto`}>
          <div className={styles.sectionLogos}>
            <img
              className={styles.sectionmaskGroupIcon}
              loading="lazy"
              alt=""
              src="/logoicons.png"
            />
          </div>
        </div>
      </div>
    </CarouselItem>
  ));
  return (
    <>
      <section className={[styles.frameParent, className].join(" ")}>
        <Carousel interval={false} activeIndex={activeIndex} next={next} previous={previous} style={{ width: "100%", height: "100%" }}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </section>
    </>
  );
};
export default FrameComponent2;
