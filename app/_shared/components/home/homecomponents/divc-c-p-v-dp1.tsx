/* eslint-disable @next/next/no-img-element */

"use client"
import type { NextPage } from "next";
import styles from "./divc-c-p-v-dp1.module.css";
import { useEffect, useState } from "react";

export type DivcCPVDp1Type = {
  className?: string;
};

const DivcCPVDp1: NextPage<DivcCPVDp1Type> = ({ className = "" }) => {
  const size = useWindowSize()
  return (
    <footer className={[styles.divcCpvdp, className].join(" ")}>
      <div className={styles.image} />
      <div className={styles.footerTop}>
        <div className={styles.companyInfo}>
          <div className={styles.brandContainer}>
            <div className={styles.brandNameContainer}>
              <b>AIDIT</b>
            </div>
            <div className={styles.transformingFutureTogether}>
              Transforming Future. Together
            </div>
          </div>
        </div>
        {size.width > 700 ?<div className={styles.ourUnflinchingMission}>
          Our unflinching mission is to combine extraordinary new technologies
          with human ingenuity to meet business challenges and drive growth.
        </div> : ""}
        
      </div>
      <div className={styles.footerDivider}>
        <img
          className={styles.footerDividerChild}
          alt=""
          src="/vector-7463.svg"
        />
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.linkServicesParent}>
          <h3 className={styles.linkServices}>Services</h3>
          <div className={styles.linksList}>
            <div className={styles.itemLink}>Cloud Service</div>
            <div className={styles.itemLink1}>Infrastructure solutions</div>
            <div className={styles.itemLink2}>Cybersecurity offerings</div>
            <div className={styles.itemLink3}>IT strategy consulting</div>
            <div className={styles.itemLink4}>{`Software development `}</div>
            <div className={styles.itemLink5}>Data and Analytics</div>
            <div className={styles.itemLink6}>AI/ML capabilities</div>
            <div className={styles.itemLink7}>Business Intelligence</div>
            <div className={styles.itemLink8}>
              Enterprise applications expertise
            </div>
            <div className={styles.itemLink9}>IoT, AR/VR, 5G, Blockchain</div>
          </div>
        </div>
        <div className={styles.horizantelLine}>
          <div className={styles.textHide}>dcldlfllf</div>
        </div>
        <img
          className={styles.footerLinksChild}
          alt=""
          src="/vector-7463.svg"
        />
        <div className={styles.linkServicesGroup}>
          <h3 className={styles.linkServices1}>Industries</h3>
          <div className={styles.linksList1}>
            <div className={styles.itemLink10}>{`banking & Finance`}</div>
            <div className={styles.itemLink10}>Engineering</div>
            <div className={styles.itemLink10}>Healthcare</div>
            <div className={styles.itemLink10}>Automotive</div>
            <div className={styles.itemLink10}>Software development</div>
            <div className={styles.horizantelLine}>
              <div className={styles.textHide}>dcldlfllf</div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightInfo}>
          <img
            className={styles.logoContainerIcon}
            alt=""
            src="/vector-7463.svg"
          />
          <div className={styles.logoImage}>
            <div className={styles.footerTitleParent}>
              <h3 className={styles.footerTitle}>Company</h3>
              <div className={styles.socialLinks}>
                <div className={styles.about}>About</div>
                <div className={styles.contactUs}>Contact us</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.culture}>Culture</div>
                <div className={styles.blog}>Blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DivcCPVDp1;


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