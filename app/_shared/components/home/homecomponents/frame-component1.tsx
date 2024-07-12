/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component1.module.css";
import { IoIosArrowForward } from "react-icons/io";
export type FrameComponent1Type = {
  className?: string;
};
const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.homeInner, className].join(" ")}>
      <div className={styles.productsBenefitsParent}>
        <div className={styles.productsBenefits}>
          <div className={styles.productsTitle}>
            <div className={styles.availableProductsLabel}>
              <div className={styles.sectionWrapper}>
                <div className={styles.section}>
                  <div className={styles.availableProducts}>
                    Available products
                  </div>
                </div>
              </div>
              <h1 className={styles.sectionSetUp}>
                Services with Future Technology.
              </h1>
            </div>
          </div>
          <div className={styles.healthServices}>
            <div className={styles.healthServiceLinks}>
              <div className={styles.sectionLinkHealthInsura}>
                <div className={styles.divcPjlv} />
                <div className={styles.healthIcon} />
                <h3 className={styles.cloudServices}>Cloud Services</h3>
                <div className={styles.groupIcon}>
                  <div>View Details</div>
                  <div style={{marginTop:'-0.2rem'}}><IoIosArrowForward className="fw-bold " /></div>
                </div>
                <div className={styles.hovreffect}></div>
              </div>
              <div className={styles.sectionLinkHealthInsura12}>
                <div className={styles.divcPjlv} />
                <div className={styles.healthIcon} />
                <h3 className={styles.cloudServices}>Infrastructure Solution</h3>
                <div className={styles.groupIcon}>
                  <div>View Details</div>
                  <div style={{marginTop:'-0.2rem'}}><IoIosArrowForward className="fw-bold " /></div>
                </div>
                <div className={styles.hovreffect}></div>
              </div>
              <div className={styles.sectionLinkHealthInsura22}>
                <div className={styles.divcPjlv} />
                <div className={styles.healthIcon} />
                <h3 className={styles.cloudServices}>Cybersecurity Offerings</h3>
                <div className={styles.groupIcon}>
                  <div>View Details</div>
                  <div style={{marginTop:'-0.2rem'}}><IoIosArrowForward className="fw-bold " /></div>
                </div>
                <div className={styles.hovreffect}></div>
              </div>
              {/* <div className={styles.sectionLinkWorkplacePen}>
                <img
                  className={styles.freepikExport20240514221652yIcon}
                  loading="lazy"
                  alt=""
                  src="/freepikexport20240514221652yqgt-1@2x.png"
                />
                 <div className={styles.divcPjlvGroup}>
                  <div className={styles.divcPjlv2} />
                  <div className={styles.pcGvnpxb1} />
                  <div className={styles.frameChild} />
                  <h3 className={styles.infrastructureSolution}>Infrastructure Solution</h3>
                  <div className={styles.groupIcon}>
                    <div>View Details</div>
                    <div><IoIosArrowForward className="fw-bold" fontSize={20} /></div>
                  </div>
                  <div className={styles.hovreffect}></div>
                </div>
              </div>
              <div className={styles.sectionLinkLifeInsuranc}>
                <img
                  className={styles.image104296Icon}
                  alt=""
                  src="/image-104296@2x.png"
                />
                <div className={styles.divcPjlvGroup}>
                  <div className={styles.divcPjlv2} />
                  <div className={styles.pcGvnpxb1} />
                  <div className={styles.frameChild} />
                  <h3 className={styles.infrastructureSolution}>Cybersecurity Offerings</h3>
                  <div className={styles.groupIcon2}>
                    <div>View Details</div>
                    <div><IoIosArrowForward className="fw-bold " /></div>
                  </div>
                  <div className={styles.hovreffect}></div>
                </div>
              </div> */}
            </div>
            <div className={styles.section1}>
              <div className={styles.pcGvnpxb2} />
              <div className={styles.consultingDescription}>
                <h1
                  className={styles.itStrategy}
                >{`IT Strategy & Consulting`}</h1>
                <div className={styles.formulationAndExecutionContainer}>
                  <p className={styles.formulationAndExecution}>
                    Formulation and execution of a technology roadmap that aligns
                    with an organization's overall business objectives.
                  </p>

                </div>
              </div>
              <div className={styles.divcPjlv3} />
              <div className={styles.learnMoreIT}>
                <div className={styles.learnMoreContainer}>
                  <img
                    className={styles.learnMoreContainerChild}
                    alt=""
                    src="/rectangle-34628414@2x.png"
                  />
                  <a className={styles.learnMore}>LEARN MORE</a>
                  <div className={styles.learnMoreITIcon}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.growthBackgroundParent}>
            <img
              className={styles.growthBackgroundIcon}
              alt=""
              src="/growth-background@2x.png"
            />
            <div className={styles.securedGrowth}>
              <div className={styles.securedGrowthBackground} />
              <div className={styles.growthContent}>
                <div className={styles.growthIcon}>
                </div>
                <div className={styles.securedBusinessGrowthContainer}>
                  <p className={styles.secured}>Secured</p>
                  <p className={styles.businessGrowth}>Business Growth</p>
                </div>
              </div>
              <div className={styles.growthShapes}>
                <div className={styles.shapeContainers}>
                  <div className={styles.backgroundShapes} />
                </div>
                <div className={styles.bottomShape} />
                <div className={styles.shapeContainers1}>
                  <div className={styles.shapeContainersChild} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutAidit}>
            <div className={styles.aiditDescription}>
              <div className={styles.descriptionContent}>
                <b className={styles.aidit}>AIDIT</b>
                <div className={styles.transformingFutures}>
                  <h1 className={styles.transformingFuturesDeliveriContainer}>
                    <p className={styles.transformingFutures1}>
                      Transforming Futures,
                    </p>
                    <p className={styles.deliveringExcellence}>
                      Delivering Excellence
                    </p>
                  </h1>
                </div>
                <div className={styles.welcomeContent}>
                  <div className={styles.welcomeContainer}>
                    <div className={styles.welcomeToAidant}>
                      Welcome to AIDANT IT (“AIDIT”), your IT strategic partner
                      specialized in Cloud solutions, Digital Transformation,
                      Security, Strategy and Consulting paves the way for your
                      business to thrive in the digital era.
                    </div>
                    {/* <img className={styles.vectorIcon2} alt="" /> */}
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.bg} />
                <b className={styles.aboutUs}>ABOUT US</b>
                <div className={styles.aboutUsIcon}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FrameComponent1;
