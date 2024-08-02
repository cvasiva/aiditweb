/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component1.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export type FrameComponent1Type = {
  className?: string;
};
const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const size = useWindowSize()
  return (
    <section className={[styles.homeInner, className].join(" ")}>
      <div className={`${styles.productsBenefitsParent}`}>
        <div className={styles.productsBenefits}>
          <div className={styles.productsTitle}>
            <div className={styles.availableProductsLabel}>
              <div className={styles.sectionWrapper}>
                <div className={styles.section}>
                  <div className={styles.availableProducts}>
                    Available products
                  </div>
                </div>
              </div>
              <h1 className={styles.sectionSetUp}>
                Services with Future Technology.
              </h1>
            </div>
          </div>
          {size.width > 700 ?
            <div className={styles.healthServices}>
              <div className={styles.healthServiceLinks}>
                <div className={styles.sectionLinkHealthInsura}>
                  <div className={styles.divcPjlv} />
                  <div className={styles.healthIcon} />
                  <h3 className={styles.cloudServices}>Cloud Services</h3>
                  <div className={styles.groupIcon}>
                    <div className="text-nowrap">View Details</div>
                    <div style={{ marginTop: '-0.2rem' }}><IoIosArrowForward className="fw-bold " /></div>
                  </div>
                  <div className={styles.hovreffect}></div>
                </div>
                <div className={styles.sectionLinkHealthInsura12}>
                  <div className={styles.divcPjlv} />
                  <div className={styles.healthIcon} />
                  <h3 className={styles.cloudServices}>Infrastructure Solution</h3>
                  <div className={styles.groupIcon}>
                    <div className="text-nowrap">View Details</div>
                    <div style={{ marginTop: '-0.2rem' }}><IoIosArrowForward className="fw-bold " /></div>
                  </div>
                  <div className={styles.hovreffect}></div>
                </div>
                <div className={styles.sectionLinkHealthInsura22}>
                  <div className={styles.divcPjlv} />
                  <div className={styles.healthIcon} />
                  <h3 className={styles.cloudServices}>Cybersecurity Offerings</h3>
                  <div className={styles.groupIcon}>
                    <div className="text-nowrap">View Details</div>
                    <div style={{ marginTop: '-0.2rem' }}><IoIosArrowForward className="fw-bold " /></div>
                  </div>
                  <div className={styles.hovreffect}></div>
                </div>
              </div>
              <div className={styles.section1}>
                <div className={styles.pcGvnpxb2} />
                <div className={styles.consultingDescription}>
                  <h1
                    className={styles.itStrategy}
                  >{`IT Strategy & Consulting`}</h1>
                  <div className={styles.formulationAndExecutionContainer}>
                    <p className={styles.formulationAndExecution}>
                      Formulation and execution of a technology roadmap that aligns
                      with an organization's overall business objectives.
                    </p>
                  </div>
                </div>
                <div className={styles.learnMoreIT}>
                  <div className={styles.learnMoreContainer}>
                    <img
                      className={styles.learnMoreContainerChild}
                      alt=""
                      src="/rectangle-34628414@2x.png"
                    />
                    <a className={styles.learnMore}>LEARN MORE</a>
                    <div className={styles.learnMoreITIcon}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            <div className="w-100">
              <div className=" h-screen">
                <ul className="h-full w-100 p-0">
                  <Swiper
                     pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                    autoplay={{
                      "delay": 2500,
                      "disableOnInteraction": false
                    }}
                    loop={true}
                  >
                    <SwiperSlide>
                      <div className={styles.service3}>
                        <h3 className={` text-white pt-4 text-start px-4 fs-4`}>Cloud Services</h3>
                        <div className={`text-start pt-3 px-4  ${styles.groupIcon}`}>
                          <div className="text-nowrap">View Details</div>
                          <div style={{ marginTop: '-0.2rem' }}><IoIosArrowForward className="fw-bold " /></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.service1}>
                        <h3 className={` text-white pt-4 text-start px-4 fs-4`}>Infrastructure Solution</h3>
                        <div className={`text-start pt-3 px-4  ${styles.groupIcon}`}>
                          <div className="text-nowrap">View Details</div>
                          <div style={{ marginTop: '-0.2rem' }}><IoIosArrowForward className="fw-bold " /></div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.service2}>
                        <h3 className={` text-white pt-4 text-start px-4 fs-4`}>Cybersecurity Offerings</h3>
                        <div className={`text-start pt-3 px-4  ${styles.groupIcon}`}>
                          <div className="text-nowrap">View Details</div>
                          <div style={{ marginTop: '-0.2rem' }}><IoIosArrowForward className="fw-bold " /></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </ul>
              </div>
            </div>}
        </div>
        <div className={styles.frameParent}>
          <div className={styles.growthBackgroundParent}>
            <img
              className={styles.growthBackgroundIcon}
              alt=""
              src="/growth-background@2x.png"
            />
            <div className={styles.securedGrowth}>
              <div className={styles.securedGrowthBackground} />
              <div className={styles.growthContent}>
                <div className={styles.growthIcon}>
                </div>
                <div className={styles.securedBusinessGrowthContainer}>
                  <p className={styles.secured}>Secured</p>
                  <p className={styles.businessGrowth}>Business Growth</p>
                </div>
              </div>
              <div className={styles.growthShapes}>
                <div className={styles.shapeContainers}>
                  <div className={styles.backgroundShapes} />
                </div>
                <div className={styles.bottomShape} />
                <div className={styles.shapeContainers1}>
                  <div className={styles.shapeContainersChild} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutAidit}>
            <div className={styles.aiditDescription}>
              <div className={styles.descriptionContent}>
                <b className={styles.aidit}>AIDIT</b>
                <div className={styles.transformingFutures}>
                  <h1 className={styles.transformingFuturesDeliveriContainer}>
                    <p className={styles.transformingFutures1}>
                      Transforming Futures,
                    </p>
                    <p className={styles.deliveringExcellence}>
                      Delivering Excellence
                    </p>
                  </h1>
                </div>
                <div className={styles.welcomeContent}>
                  <div className={styles.welcomeContainer}>
                    <div className={styles.welcomeToAidant}>
                      Welcome to AIDANT IT (“AIDIT”), your IT strategic partner
                      specialized in Cloud solutions, Digital Transformation,
                      Security, Strategy and Consulting paves the way for your
                      business to thrive in the digital era.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.bg} />
                <b className={styles.aboutUs}>ABOUT US</b>
                <div className={styles.aboutUsIcon}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FrameComponent1;
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