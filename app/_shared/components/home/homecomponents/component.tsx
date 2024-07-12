/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./component.module.css";

export type ComponentType = {
  className?: string;
};

const Component: NextPage<ComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.div, className].join(" ")}>
      <div className={styles.child} />
      <div className={styles.benefitItems}>
        <img
          className={styles.benefitItemsChild}
          loading="lazy"
          alt=""
          src="/group-1707478881.svg"
        />
      </div>
      <div className={styles.scalabilityOptimalPerformanc}>
        Innovative Problem Solving
      </div>
    </div>
  );
};

export default Component;
