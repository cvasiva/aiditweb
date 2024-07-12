/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useMemo, type CSSProperties } from "react";
import styles from "./testimonial.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
export type TestimonialType = {
  className?: string;
  oneOfTheBestCoachingClass?: string;
  avatar?: string;
  sONALMADAN?: string;
  cAAspirant?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propTextTransform?: CSSProperties["textTransform"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Testimonial: NextPage<TestimonialType> = ({
  className = "",
  oneOfTheBestCoachingClass,
  avatar,
  sONALMADAN,
  cAAspirant,
  propPadding,
  propTextTransform,
  propMinWidth,
  propMinWidth1,
}) => {
  const testimonialStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const sONALMADANStyle: CSSProperties = useMemo(() => {
    return {
      textTransform: propTextTransform,
      minWidth: propMinWidth,
    };
  }, [propTextTransform, propMinWidth]);

  const cAAspirantStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up"
      className={[styles.testimonial, className].join(" ")}
      style={testimonialStyle}
    >
      <div className={styles.oneOfThe}>{oneOfTheBestCoachingClass}</div>
      <div className={styles.info} />
      <div className={styles.userContainer}>
        <div className={styles.user}>
          <div className={styles.userImage}>
            <img className={styles.avatarIcon} alt="" src={avatar} />
            <div className={styles.userName}>
              <div className={styles.sonalMadan} style={sONALMADANStyle}>
                {sONALMADAN}
              </div>
              <div className={styles.caAspirant} style={cAAspirantStyle}>
                {cAAspirant}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.googleRating}>
            <img
              className={styles.googleLogo98081Icon}
              alt=""
              src="/googlelogo9808-1@2x.png"
            />
          </div>
          <div className={styles.emptyRating}>
            <div className={styles.empty}>4.8</div>
            <div className={styles.starRating}>
              <img className={styles.fsvgIcon} alt="" src="/fsvg.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
