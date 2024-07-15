/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image1 from "./image1";
import CardContent from "./card-content";
import styles from "./news-grid.module.css";

export type NewsGridType = {
  className?: string;
};

const NewsGrid: NextPage<NewsGridType> = ({ className = "" }) => {
  return (
    <div className={[styles.newsGrid, className].join(" ")}>
      <div className={`${styles.newsCard} shadow-sm`}>
        <Image1 image="/image@2x.png" />
        <div className={styles.cardContent}>
          <div className={styles.contentHeader}>
            <div className={styles.december052021}>December 05, 2021</div>
            <div className={styles.minRead}>3 min read</div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.line} />
          </div>
          <div className={styles.previewTitle}>
            <h2 className={styles.detailedInsightsForContainer}>
              <p className={styles.detailedInsightsFor}>
                Detailed insights for your
              </p>
              <p className={styles.socialMedia}>social media</p>
            </h2>
          </div>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          <b className={styles.viewMore}>View More</b>
        </div>
      </div>
      <div className={styles.newsCard1}>
        <div className={styles.image}>
          <div className={styles.background} />
          <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
          <div className={styles.tag}>
            <div className={styles.analyze}>Analyze</div>
          </div>
        </div>
        <CardContent
          newDeviceInventionFor="New Device Invention for "
          digitalPlatform="Digital Platform"
        />
      </div>
      <div className={styles.newsCard1}>
        <div className={styles.image}>
          <div className={styles.background} />
          <img className={styles.imageIcon} alt="" src="/image-2@2x.png" />
          <div className={styles.tag}>
            <div className={styles.analyze}>Analyze</div>
          </div>
          <div className={`${styles.tag} ms-3`}>
            <div className={styles.analyze}>Marketing</div>
          </div>
        </div>
        <CardContent
          newDeviceInventionFor="New Device Invention for "
          digitalPlatform="Digital Platform"
        />
      </div>
     
    </div>
  );
};

export default NewsGrid;
