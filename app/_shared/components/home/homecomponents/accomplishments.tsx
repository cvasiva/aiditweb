/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./accomplishments.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Col, Row } from "reactstrap";
import { useEffect, useState } from "react";
export type AccomplishmentsType = {
  className?: string;
};

const Accomplishments: NextPage<AccomplishmentsType> = ({ className = "" }) => {
  const size = useWindowSize()
  return (
    <section className={[styles.accomplishments, className].join(" ")}>
      <div className={styles.accomplishmentsContent}>
        <div className={styles.accomplishmentsTitle}>
          <h1 className={styles.aiditsSignificantAccomplish}>
            AIDIT{"'"}s <br/> Significant Accomplishments
          </h1>
        </div>
        <Row className="w-100 m-auto">
          <Col md={3} className={`${styles.colEndBorder} mt-4`} xs={6}>
            <div className='d-flex justify-content-center gap-0'>
              <CountUp end={25} duration={0.6} redraw={true}>
                {({ countUpRef, start }) => {
                  return <>
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className={`${styles.empty}  fw-bold`} ref={countUpRef} />
                    </VisibilitySensor>
                  </>
                }}
              </CountUp>
              <h1 className={`${styles.empty} fw-bold`}>years</h1>
            </div>
            <div className={styles.industryLabel}>
              <div className={styles.inIndustry}>In Industry</div>
            </div>
          </Col>

          <Col md={3} className={`${styles.colEndBorder} mt-4`} xs={6}>
          <div className='d-flex justify-content-center gap-0'>
              <CountUp end={50} duration={0.6} redraw={true}>
                {({ countUpRef, start }) => {
                  return <>
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className={`${styles.empty}  fw-bold`} ref={countUpRef} />
                    </VisibilitySensor>
                  </>
                }}
              </CountUp>
              
            </div>
            
            <div className={`${styles.industryLabel} mt-2`}>
              <div className={`${styles.inIndustry} `}>Projects {size.width > 700 ? "Completed" : "done"} </div>
            </div>
          </Col>
          <Col md={3} className={`${styles.colEndBorder} mt-4`} xs={6}>
            <div className={styles.rateValueParent}>
              <b className={styles.rateValue}>
                <span className={`${styles.empty} fw-bold`}>100</span>
                <span className={styles.span}>%</span>
              </b>
              <div className={styles.rateLabel}>
                <div className={styles.successRate}>Success Rate</div>
              </div>
            </div>
          </Col>
          <Col md={3} className={`${styles.colEndBorder} mt-4`} xs={6}>
            <div className={styles.frameGroup}>
              <div className={styles.wrapper}>
                <b className={styles.b}>
                  <span className={`${styles.empty} fw-bold`}>100</span>
                  <span className={styles.span1}>%</span>
                </b>
              </div>
              <div className={styles.businessGrowth}>Business Growth</div>
            </div>
          </Col>
        </Row>
        
      </div>
    </section>
  );
};

export default Accomplishments;

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