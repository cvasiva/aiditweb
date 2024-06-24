/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./accomplishments.module.css";

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
        <div className={styles.statistics}>
          <div className={styles.yearsInIndustry}>
            <b className={styles.years}>10 years</b>
            <div className={styles.industryLabel}>
              <div className={styles.inIndustry}>In Industry</div>
            </div>
          </div>
          <div className={styles.statsIconsWrapper}>
            <img
              className={styles.statsIcons}
              loading="lazy"
              alt=""
              src="/vector-7443.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.emptyWrapper}>
              <b className={styles.empty}>500+</b>
            </div>
            <div className={styles.projectsCompleted}>Projects Completed</div>
          </div>
          <div className={styles.statisticsInner}>
            <img className={styles.frameChild} alt="" src="/vector-7443.svg" />
          </div>
          <div className={styles.rateValueParent}>
            <b className={styles.rateValue}>
              <span>100</span>
              <span className={styles.span}>%</span>
            </b>
            <div className={styles.rateLabel}>
              <div className={styles.successRate}>Success Rate</div>
            </div>
          </div>
          <div className={styles.statisticsChild}>
            <img className={styles.frameItem} alt="" src="/vector-7443.svg" />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.wrapper}>
              <b className={styles.b}>
                <span>100</span>
                <span className={styles.span1}>%</span>
              </b>
            </div>
            <div className={styles.businessGrowth}>Business Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
