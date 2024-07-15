/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./choose-us.module.css";

export type ChooseUsType = {
  className?: string;
};

const ChooseUs: NextPage<ChooseUsType> = ({ className = "" }) => {
  return (
    <section className={[styles.chooseUs, className].join(" ")}>
      <div className={styles.chooseContainer}>
        <div className={styles.chooseContent}>
          <div className={styles.chooseHeading}>
            <div className={styles.headingTitleParent}>
              <div className={styles.flexheding}>
              <div className={styles.horizantalBorder}><div style={{visibility:'hidden'}}>qdwjijiefwijerjirej</div></div>
              <div className={styles.whyChooseUs}>WHY CHOOSE US</div>
              </div>
            </div>
            <div className={styles.headingBackground} />
            <div className={`${styles.industryHeading}`}>
              <h1 className={styles.howAiditIs}>
              <b>AIDIT</b> is leading the Technology Industry
              </h1>
              <div className={styles.industryHeadingChild} />
            </div>
            <div className={styles.aiditLeadsThe}>
              Aidit leads the technology industry by pioneering cutting-edge
              technologies, maintaining a customer-centric approach, and
              implementing robust security measures. Their continuous innovation
              culture, exceptional support, strategic partnerships, agile
              development, data-driven decisions, focus on user experience, and
              commitment to compliance set new benchmarks for success and
              customer trust.
            </div>
            {/* <div className={styles.headingBackground1} /> */}
          </div>
        </div>
        <div className={styles.customerFocus}>
          <div className={styles.feedbackWrapper}>
            <div className={styles.feedback}>
              <div className={styles.customerDev}>
                <div className={styles.development}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-9.svg"
                  />
                </div>
                <h2 className={styles.pioneeringCuttingEdgeTechno}>
                  Pioneering Cutting-Edge Technologies
                </h2>
                <div className={styles.aiditConsistentlyInvests}>
                  Aidit consistently invests in the latest technological
                  advancements, ensuring they stay ahead of industry trends.
                </div>
              </div>
              <div className={styles.customerDev1}>
                <div className={styles.noteParent}>
                  <img
                    className={styles.noteIcon}
                    loading="lazy"
                    alt=""
                    src="/note.svg"
                  />
                  <h3 className={styles.commitmentToCompliance}>
                    Commitment to Compliance and Standards
                  </h3>
                </div>
                <div className={styles.aiditEnsuresAll}>
                  Aidit ensures all their solutions with industry standards and
                  regulations,
                </div>
              </div>
            </div>
          </div>
          <div className={styles.decisionMaking}>
            <div className={styles.customerFeedback}>
              <img
                className={styles.usersIcon}
                loading="lazy"
                alt=""
                src="/users.svg"
              />
              <h2 className={styles.customerCentricDevelopment}>
                Customer-Centric Development.
              </h2>
              <div className={styles.prioritizingCustomerFeedback}>
                Prioritizing customer feedback and needs, Aidit designs and
                develops products that address the solution.
              </div>
            </div>
            <div className={styles.customerFeedback1}>
              <div className={styles.vectorParent}>
                <img className={styles.targetIcon} alt="" src="/target.svg" />
              </div>
              <h2 className={styles.dataDrivenDecisionMaking}>
                Data-Driven Decision Making
              </h2>
              <div className={styles.aiditEmploysAdvanced}>
                Aidit employs advanced analytics and data insights to inform
                their strategic decisions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
