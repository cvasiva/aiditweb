/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Component from "./component";
import styles from "./consultancy.module.css";
import ScrollCarousel from "scroll-carousel-react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type ConsultancyType = {
  className?: string;
};

const Consultancy: React.FC<ConsultancyType> = ({ className = "" }) => {
  const size = useWindowSize()
  return (
    <section className={[styles.consultancy, className].join(" ")}>
      <div className={styles.consultancyContent}>
        <div className={styles.consultancyTitle}>
          <div className={styles.consultancyHeading}>
            <div className={styles.consultancyLogo}>
              <div className={styles.logoContainer}>
                <div className={styles.aidit}>AIDIT</div>
                <div className={styles.consultancyDescription}>
                  <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionContent}>
                      <h1 className={styles.strategicItConsultancyContainer}>
                        <span
                          className={styles.strategicItConsultancyContainer1}
                        >
                          <p className={`${styles.strategicItConsultancy} mt-3`}>
                            Strategic IT Consultancy with AI expertise
                          </p>
                        </span>
                      </h1>
                      <div className={styles.artificialIntelligenceFor}>
                        Artificial intelligence for a seamless digital
                        transformation ensuring efficiency, agility, and a
                        future-ready approach.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.bg} />
                    <a className={styles.learnMore}>LEARN MORE</a>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.businessSuccess}>
                <div className={styles.successContainer}>
                  <div className={styles.successContent}>
                    <div className={styles.successImageParent}>
                      <div className={styles.successImage} />
                      <div className={styles.successDescription}>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.vectorParent}>
                            <img
                              className={styles.frameChild}
                              alt=""
                              src="/group-1707478897.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.aiEnablesBusinessContainer}>
                          <p className={styles.aiEnablesBusiness}>
                            AI Enables Business
                          </p>
                          <p className={styles.success}>success</p>
                        </div>
                      </div>
                      <div className={styles.businessBenefits}>
                        <div className={styles.benefitCards}>
                          <div className={styles.benefitCardItems}>
                            <div className={styles.benefitImages} />
                          </div>
                          <div className={styles.benefitBackground} />
                          <div className={styles.benefitCardItems1}>
                            <div className={styles.benefitCardItemsChild} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/rectangle-700@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.valueHeading}>
              <h1 className={styles.whatValueHas}>What value has it added?</h1>
            </div>
          </div>
          {size.width > 700 ? <div className={styles.valueBenefits}>

            <div className={styles.div}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/group-1707478881.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Innovative Problem Solving
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/customer_focus.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Customer Focus
                Aproach
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/security.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Security with regulations
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Sustainability and growth
              </div>
            </div>


          </div> : 
          <ul className="h-full w-100 p-0">
          <Swiper
        //  pagination={{
        //   dynamicBullets: true,
        // }}
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} 
        loop={true}
         >
            <SwiperSlide>
            <div className={styles.div}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/group-1707478881.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Innovative Problem Solving
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.div}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/customer_focus.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Customer Focus
                Aproach
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.div}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/security.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Security with regulations
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={styles.div}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Sustainability and growth
              </div>
            </div>

            </SwiperSlide>
          </Swiper>
        </ul>
          }




        </div>

      </div>
    </section>
  );
};

export default Consultancy;




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