/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import GroupComponent from "./group-component";
import styles from "./emerging-services.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
export type EmergingServicesType = {
  className?: string;
};

const EmergingServices: NextPage<EmergingServicesType> = ({
  className = "",
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const size = useWindowSize()
  return (
    <section className={[styles.emergingServices, className].join(" ")}>
      <div className={styles.emergingServicesContent}>
        <div className={styles.emergingServicesContentChild} />
        <div className={styles.emergingServicesTitle}>
          <div className={styles.emergingServicesHeading}>
            <h1 className={styles.ourEmergingServices}>
              Our Emerging Services
            </h1>
            <div className={styles.emergingDescription}>
            {size.width > 700 ?<div className={styles.seamlessIntegrationFor}>
                Seamless Integration for a Future Defined by Efficiency,
                Security, and Digital Excellence
              </div>
              : <div className={styles.seamlessIntegrationForMob}>
              Seamless Integration for a Future <br/> Defined by Efficiency,
              Security, and <br/> Digital Excellence
            </div>}
              
            </div>
          </div>
        </div>
        <div className={styles.servicesCloud}>
          <GroupComponent
            ellipse271="/ellipse-271.svg"
            cloudService="Cloud Service"
            scalableBusinessCentricSo="Scalable, Business-Centric solutions, enabling you to spearhead innovation, bolster agility, and optimize operational costs."
          />

          <div data-aos="flip-left" className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-1.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>Strategic Advisory</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Optimize operational efficiency, and maintain a
                  competitive edge in the ever evolving digital landscape.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-2.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>IT Infrastructure</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Redefine the future of infrastructure, ensuring unparalleled
                  reliability, efficiency, and technological advancement.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-3.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>Cybersecurity</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Secure your data, applications, and reputation, providing you the assurance to navigate the digital realm securely.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-4.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>AI & ML</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Optimize operational efficiency, automate intricate tasks, and furnish actionable insights, empowering.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-5.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>Hyper Automation</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Experience manual tasks transform into automated brilliance, driving enhanced efficiency, substantial cost savings.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergingServices;


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