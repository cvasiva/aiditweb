/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./business-growth.module.css";

export type BusinessGrowthType = {
  className?: string;
};

const BusinessGrowth: NextPage<BusinessGrowthType> = ({ className = "" }) => {
  return (
    <>

      <div className={styles.flexclasdata}>
        <div className={styles.businessGrowth}>
          <div className={styles.growthContainer}>
            <div className={styles.growthContent}>
              <div className={styles.ourServiceYourData}>
                Our Service. Your data.
              </div>
            </div>
            <div className={styles.elevateYourDigitalContainer}>
              <span>Elevate your <br /> digital business with</span>
              <span className="fw-bold ms-3">AIDIT</span>
            </div>
          </div>
          <div className={styles.contactButton}>
            <div className={styles.contactUs}>Contact Us</div>
          </div>

        </div>
        <div>
          <img
            className={styles.representationUserExperienceIcon}
            alt=""
            src="/representationuserexperienceinterfacedesign-3-2@2x.png"
          />
        </div>
      </div>
    </>
  );
};

export default BusinessGrowth;
