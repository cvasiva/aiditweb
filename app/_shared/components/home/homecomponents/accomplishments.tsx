/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./accomplishments.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Col, Row } from "reactstrap";
export type AccomplishmentsType = {
  className?: string;
};

const Accomplishments: NextPage<AccomplishmentsType> = ({ className = "" }) => {
  return (
    <section className={[styles.accomplishments, className].join(" ")}>
      <div className={styles.accomplishmentsContent}>
        <div className={styles.accomplishmentsTitle}>
          <h1 className={styles.aiditsSignificantAccomplish}>
            Aidit{"'"}s Significant Accomplishments
          </h1>
        </div>
        <Row className="w-100 m-auto">
          <Col md={3} className={`${styles.colEndBorder} mt-4`} xs={6}>
            <div className='d-flex justify-content-center gap-0'>
              <CountUp end={15} duration={0.6} redraw={true}>
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
              <CountUp end={20} duration={0.6} redraw={true}>
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
              <div className={`${styles.inIndustry} `}>Projects Completed</div>
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
