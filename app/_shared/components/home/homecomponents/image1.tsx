/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./image1.module.css";

export type Image1Type = {
  className?: string;
  image?: string;
};

const Image1: NextPage<Image1Type> = ({ className = "", image }) => {
  return (
    <div className={[styles.image, className].join(" ")}>
      <div className={styles.background} />
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.tag}>
        <div className={styles.analyze}>UX writing</div>
      </div>
      <div className={styles.tag1}>
        <a className={styles.marketing}>UX writing</a>
      </div>
    </div>
  );
};

export default Image1;
