/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useMemo, type CSSProperties } from "react";
import styles from "./group-component.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
export type GroupComponentType = {
  className?: string;
  ellipse271?: string;
  cloudService?: string;
  scalableBusinessCentricSo?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propPadding?: CSSProperties["padding"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBorder1?: CSSProperties["border"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propGap?: CSSProperties["gap"];
  propGap1?: CSSProperties["gap"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  ellipse271,
  cloudService,
  scalableBusinessCentricSo,
  propBorder,
  propPadding,
  propBoxShadow,
  propBorder1,
  propBoxShadow1,
  propGap,
  propGap1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
      boxShadow: propBoxShadow,
    };
  }, [propBorder, propPadding, propBoxShadow]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder1,
      boxShadow: propBoxShadow1,
    };
  }, [propBorder1, propBoxShadow1]);

  const serviceCardItemsStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const serviceDetailsStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div  data-aos="flip-left"
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src={ellipse271}
      />
      <div className={styles.cardContent}>
        <div className={styles.serviceCardItems} style={serviceCardItemsStyle}>
          <h1 className={styles.cloudService}>{cloudService}</h1>
          <div className={styles.cardDescriptions}>
            <div className={styles.serviceDetails} style={serviceDetailsStyle}>
              <div className={styles.scalableBusinessCentricSol}>
                {scalableBusinessCentricSo}
              </div>
              <div className={styles.learnMore}>Learn more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
