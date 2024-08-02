/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import type { NextPage } from "next";
import styles from "./frame-component2.module.css";
// import dataSlider from './slider.json'
export type FrameComponent2Type = {
  className?: string;
};
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import { useEffect, useState } from "react";
// import BannerSlider from "./BannerSlider";

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
  }
];
interface ExampleProps {
  args?: any;
}
const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }, ExampleProps) => {
  const size = useWindowSize()
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
      style={{ width: "100%", height: '100vh' }}
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
              {size.width > 700 ? <div className={styles.reachMoreCustomers}>
                {item.caption}
              </div> : ""}

            </div>
          </div>
          <div className={styles.titleAndDescription1} />
          <div className={styles.titleAndDescription2} />
        </div>
      </div>

    </CarouselItem>
  ));
  return (
    <>
      <section className={[styles.frameParent, className].join(" ")}>
        {/* {size.width > 700 ?

          <div className={styles.AditSectionBannerBg} >
            <div className={styles.positionOfHeading}>
              <div className={styles.headingWhite}>Enhance Digital Experiences with our development service</div>
              <div className={`${styles.paragraphWhite} mt-3`}>Build custom mobile & web applications that are responsive, scalable, and user business centric design.</div>
              <div className={`${styles.knowMoreButton} mt-4`}>
                <div className={styles.knowMoreContainer}>
                  <div className={styles.knowMore}>Know More</div>
                </div>
              </div>
              <div className="mt-5 pt-5">
                <div className={`${styles.paragraphWhite} mt-5 pt-3`}>Team of excellence from brilliant companies</div>
                <div className={styles.serviceSuccess}>
                  <div className={styles.serviceSuccessChild} />
                  <div className={`${styles.positionLogos}  d-flex justify-content-center m-auto`}>
                    <div className={styles.wrapper}>
                      <img src="./L1.png" className={`${styles.itemLeft} ${styles.item1}`} />
                      <img src="./L2.png" className={`${styles.itemLeft} ${styles.item2}`} />
                      <img src="./L3.png" className={`${styles.itemLeft} ${styles.item3}`} />
                      <img src="./L4.png" className={`${styles.itemLeft} ${styles.item4}`} />
                      <img src="./L5.png" className={`${styles.itemLeft} ${styles.item5}`} />
                      <img src="./L6.png" className={`${styles.itemLeft} ${styles.item6}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          
          <div className={styles.AditSectionMobileBannerBg} >
            <div className={styles.positionOfHeadingMobile}>
              <div className={styles.headingWhiteMobile}>Enhance Digital Experiences with our development service</div>
              <div className={`${styles.paragraphWhite} mt-3`}>Build custom mobile & web applications that are responsive, scalable, and user business centric design.</div>
              <div className={`${styles.knowMoreButton} mt-4`}>
                <div className={styles.knowMoreContainer}>
                  <div className={styles.knowMore}>Know More</div>
                </div>
              </div>
              <div className=" pt-5">
                <div className={`${styles.paragraphWhite}  pt-3`}>Team of excellence from brilliant companies</div>
                <div className={styles.serviceSuccessMobile}>
                  <div className={styles.serviceSuccessChild} />
                  <div className={`${styles.positionLogos}  d-flex justify-content-center m-auto`}>
                    <div className={styles.wrapper}>
                      <img src="./L1.png" className={`${styles.itemLeft} ${styles.item1}`} />
                      <img src="./L2.png" className={`${styles.itemLeft} ${styles.item2}`} />
                      <img src="./L3.png" className={`${styles.itemLeft} ${styles.item3}`} />
                      <img src="./L4.png" className={`${styles.itemLeft} ${styles.item4}`} />
                      <img src="./L5.png" className={`${styles.itemLeft} ${styles.item5}`} />
                      <img src="./L6.png" className={`${styles.itemLeft} ${styles.item6}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        } */}
        <div className={styles.bgcolor}>
          <div className={styles.bghome}>
            <div className={styles.United}>
              <div className={styles.unitgap}>
                <div>
                  <div className={styles.unitfont}>United</div>
                  <div className={styles.Wefont}>We Thrive</div>
                </div>
                <p className={styles.netfont}>Networking and security. Strong on their own.
                  Unbeatable together.</p>
                <div>
                  <button className={styles.knowMoreContainer}>Learn More</button>
                </div>
              </div>
            </div>
            <div className={styles.homeorder}>
              <img src="./homeimg.png" alt="homeimg" style={{ width: "100%" }} />
            </div>
          </div>
          <div className=" py-5">
            <div className={`${styles.paragraphWhite}  pt-3`}>Team of excellence from brilliant companies</div>
            <div className={styles.serviceSuccessMobile}>
              <div className={`${styles.positionLogos}  d-flex justify-content-center m-auto`}>
                <div className={styles.wrapper}>
                  <img src="./L1.png" className={`${styles.itemLeft} ${styles.item1}`} />
                  <img src="./L2.png" className={`${styles.itemLeft} ${styles.item2}`} />
                  <img src="./L3.png" className={`${styles.itemLeft} ${styles.item3}`} />
                  <img src="./L4.png" className={`${styles.itemLeft} ${styles.item4}`} />
                  <img src="./L5.png" className={`${styles.itemLeft} ${styles.item5}`} />
                  <img src="./L6.png" className={`${styles.itemLeft} ${styles.item6}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
};
export default FrameComponent2;
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}