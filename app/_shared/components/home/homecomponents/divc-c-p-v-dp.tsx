import type { NextPage } from "next";
import styles from "./divc-c-p-v-dp.module.css";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export type DivcCPVDpType = {
  className?: string;
};

const DivcCPVDp: NextPage<DivcCPVDpType> = ({ className = "" }) => {
  return (
    <div className={[styles.divcCpvdp, className].join(" ")}>
      <div className={styles.copyrightContent}>
        <div className={styles.copyright}>
          <div className={styles.rights}>
            <div className={styles.allCopyrightsReserved}>
              All Copyrights reserved @AIDIT
            </div>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.link}>
              <div className={styles.symbol}><FaDribbble/></div>
            </div>
            <div className={styles.link1}>
              <div className={styles.symbol1}><FaBehance/></div>
            </div>
            <div className={styles.link2}>
              <div className={styles.symbol2}><FaFacebookF/></div>
            </div>
            <div className={styles.link2}>
              <div className={styles.symbol2}><FaXTwitter/></div>
            </div>
            <div className={styles.link3}>
              <div className={styles.symbol3}><FaInstagram/></div>
            </div>
            <div className={styles.link4}>
              <div className={styles.symbol4}><FaLinkedinIn/></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.link5}>
        <div className={styles.image} />
        <img className={styles.imageIcon} alt="" src="/image-3@2x.png" />
      </div> */}
    </div>
  );
};

export default DivcCPVDp;
