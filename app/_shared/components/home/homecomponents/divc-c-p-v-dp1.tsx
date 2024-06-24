/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./divc-c-p-v-dp1.module.css";

export type DivcCPVDp1Type = {
  className?: string;
};

const DivcCPVDp1: NextPage<DivcCPVDp1Type> = ({ className = "" }) => {
  return (
    <footer className={[styles.divcCpvdp, className].join(" ")}>
      <div className={styles.image} />
      <div className={styles.footerTop}>
        <div className={styles.companyInfo}>
          <div className={styles.brandContainer}>
            <div className={styles.brandNameContainer}>
              <b className={styles.aidit}>AIDIT</b>
            </div>
            <div className={styles.transformingFutureTogether}>
              Transforming Future. Together
            </div>
          </div>
        </div>
        <div className={styles.ourUnflinchingMission}>
          Our unflinching mission is to combine extraordinary new technologies
          with human ingenuity to meet business challenges and drive growth.
        </div>
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
        <img
          className={styles.footerLinksChild}
          alt=""
          src="/vector-7463.svg"
        />
        <div className={styles.linkServicesGroup}>
          <h3 className={styles.linkServices1}>Industries</h3>
          <div className={styles.linksList1}>
            <div className={styles.itemLink10}>{`banking & Finance`}</div>
            <div className={styles.itemLink11}>Engineering</div>
            <div className={styles.itemLink12}>Healthcare</div>
            <div className={styles.itemLink13}>Automotive</div>
            <div className={styles.itemLink14}>{`Software development `}</div>
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
