/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Testimonial from "./testimonial";
import styles from "./frame-component.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const size = useWindowSize()
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={[styles.careTeamWrapper, className].join(" ")}>
      <div className={styles.careTeam}>
        <div className={styles.careTeamChild} />
        <div className={styles.lovedTeam}>
          <div className={styles.peopleTechParent}>
            <div className={styles.peopleTech}>
              <div className={styles.lovedImage}>
                <div className={styles.lovedByPeopleParent}>
                  <h1 className={styles.lovedByPeople}>Loved by people</h1>
                  <div className={styles.techImage}>
                    <img
                      className={styles.filtersformatwebpIcon}
                      loading="lazy"
                      alt=""
                      src="/filtersformatwebp@2x.png"
                    />
                  </div>
                  <h1 className={styles.andTechnology}>and Technology</h1>
                </div>
              </div>
              <div className={styles.businessTeam}>
                <h1 className={styles.teamsThat}>teams that</h1>
                <div className={styles.teamImage}>
                  <img
                    className={styles.filtersformatwebpIcon1}
                    alt=""
                    src="/filtersformatwebp-1@2x.png"
                  />
                </div>
                <h1 className={styles.careAboutBusiness}>
                  care about business
                </h1>
              </div>
            </div>


            <div className={styles.testimonialList}>
              <div className={styles.spancDbpoic}>
                <div className={styles.testimonials}>Testimonials</div>
              </div>
            </div>
          </div>
        </div>
        {
          size.width > 700 ?
            <div className={styles.testimonialCarousel}>
              <div className={styles.testimonialContainer}>
                <div data-aos="fade-up" className={styles.testimonial}>
                  <div className={styles.bestExperienceOfClassesClParent}>
                    <div className={styles.bestExperienceOf}>
                      For more than three years, AIDIT has been our trusted partner for all our IT service needs, consistently exceeding our expectations. Their unwavering reliability and exceptional efficiency in managing our IT infrastructure have been indispensable to our business operations. AIDIT's proactive approach to system maintenance is particularly noteworthy; they identify and address potential issues before they escalate, which has dramatically reduced downtime for our company. This foresight and diligence have not only enhanced our overall productivity but also resulted in significant cost savings over time. We truly value their commitment to excellence and look forward to continuing our successful partnership with them.
                    </div>
                    <div className={styles.info} />
                  </div>
                  <div className={styles.userContainer}>
                    <div className={styles.user}>
                      <div className={styles.userImage}>
                        <img
                          className={styles.avatarIcon}
                          loading="lazy"
                          alt=""
                          src="/Avatar1.png"
                        />
                        <div className={styles.userName}>
                          <div className={styles.annetteBlack}>Annette Black</div>
                          <div className={styles.caAspirant}>CA Aspirant</div>
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
                <Testimonial
                  oneOfTheBestCoachingClass="Transitioning to the cloud was a daunting task, but AIDIT made it seamless. Their expertise in cloud integration and management has transformed our business operations, making us more agile and efficient. Thanks to Chandrasekhar."
                  avatar="/avatar-1@2x.png"
                  sONALMADAN="SONAL MADAN"
                  cAAspirant="CA Aspirant"
                />
              </div>
              <div className={styles.thirdTestimonial}>
                <Testimonial
                  oneOfTheBestCoachingClass="Our experience with AIDIT has been outstanding. Their customer support team is responsive, knowledgeable, and always willing to go the extra mile to resolve any issues we encounter. Our IT infrastructure has never been more reliable."
                  avatar="/Avatar2.png"
                  sONALMADAN="Harsha Aladi"
                  cAAspirant="Swift Pvt. Ltd."
                  propPadding="var(--padding-12xl) var(--padding-15xl) var(--padding-10xl)"
                  propTextTransform="unset"
                  propMinWidth="5.063rem"
                  propMinWidth1="4.063rem"
                />
                <div className={styles.testimonial1}>
                  <div className={styles.bestExperienceOf1}>
                    In today's digital age, cybersecurity is paramount. AIDIT has been instrumental in safeguarding our sensitive data and ensuring our systems are secure. Their dedication to cybersecurity gives us peace of mind. Thanks to AIDIT Team.
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.avatarParent}>
                        <img
                          className={styles.avatarIcon1}
                          alt=""
                          src="/avatar@2x.png"
                        />
                        <div className={styles.gnanendraPatangeParent}>
                          <div className={styles.gnanendraPatange}>
                            GNANENDRA PATANGE
                          </div>
                          <div className={styles.caAspirant1}>CA Aspirant</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.googleLogo98081Wrapper}>
                        <img
                          className={styles.googleLogo98081Icon1}
                          alt=""
                          src="/googlelogo9808-1@2x.png"
                        />
                      </div>
                      <div className={styles.parent}>
                        <div className={styles.div}>4.8</div>
                        <div className={styles.fsvgWrapper}>
                          <img
                            className={styles.fsvgIcon1}
                            alt=""
                            src="/fsvg.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Testimonial
                  oneOfTheBestCoachingClass="The team at AIDIT exemplifies expertise and professionalism in every project they undertake. We've entrusted them with several complex IT projects, and they have consistently delivered outstanding results on time and within budget."
                  avatar="/avatar-4@2x.png"
                  sONALMADAN="Bhumika Shaldar"
                  cAAspirant="CA Aspirant"
                  propPadding="var(--padding-11xl) var(--padding-15xl)"
                  propTextTransform="unset"
                  propMinWidth="6.75rem"
                  propMinWidth1="3.5rem"
                />
              </div>
              <div className={styles.fourthTestimonial}>
                <div data-aos="fade-up" className={styles.testimonial2}>
                  <div className={styles.info1} />
                  <div className={styles.anandAcademyIs}>
                    The level of expertise and professionalism demonstrated by the team at AIDIT Pvt. Ltd. is unparalleled. They have successfully managed several complex IT projects for us, “Always delivering on time and within budget”.
                  </div>
                  <div className={styles.userContainer1}>
                    <div className={styles.user1}>
                      <div className={styles.userImage1}>
                        <img
                          className={styles.avatarIcon2}
                          alt=""
                          src="/Avatar3.png"
                        />
                        <div className={styles.userName1}>
                          <div className={styles.vijiyaViji}>Vijiya Viji</div>
                          <div className={styles.caAspirant2}>CA Aspirant</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.rating1}>
                      <div className={styles.googleRating1}>
                        <img
                          className={styles.googleLogo98081Icon2}
                          alt=""
                          src="/googlelogo9808-1@2x.png"
                        />
                      </div>
                      <div className={styles.emptyRating1}>
                        <div className={styles.empty1}>4.8</div>
                        <div className={styles.fsvgContainer}>
                          <img
                            className={styles.fsvgIcon2}
                            alt=""
                            src="/fsvg.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" className={styles.testimonial3}>
                  <div className={styles.testimonialContent}>
                    <div className={styles.iAttendedAContainer}>
                      <p className={styles.iAttendedA}>
                        From network management to custom software development, AIDIT offers a comprehensive suite of IT services that cater to all our needs. Their holistic approach means that we have a one-stop shop for everything IT-related, which has been invaluable to our growth and success. They take the time to understand our business and provide solutions that enhance our operations. Their all-encompassing services have allowed us to focus on what we do best, knowing that our IT needs are in capable hands.
                      </p>

                    </div>
                    <div className={styles.info2} />
                  </div>
                  <div className={styles.testimonialUser}>
                    <div className={styles.userImageContainerWrapper}>
                      <div className={styles.userImageContainer}>
                        <img
                          className={styles.avatarIcon3}
                          alt=""
                          src="/avatar-4@2x.png"
                        />
                        <div className={styles.userCredentials}>
                          <div className={styles.bhumikaShaldar}>
                            Bhumika Shaldar
                          </div>
                          <div className={styles.caAspirant3}>CA Aspirant</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.platformLogoContainerParent}>
                      <div className={styles.platformLogoContainer}>
                        <img
                          className={styles.googleLogo98081Icon3}
                          alt=""
                          src="/googlelogo9808-1@2x.png"
                        />
                      </div>
                      <div className={styles.reviewSeparator}>
                        <div className={styles.div1}>4.8</div>
                        <div className={styles.reviewRating}>
                          <img
                            className={styles.fsvgIcon3}
                            alt=""
                            src="/fsvg.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            <div className="w-100">
              <div className=" h-screen">
                <ul className="h-full w-100 p-0 shadow-0">
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                    autoplay={{
                      "delay": 2500,
                      "disableOnInteraction": false
                    }}
                    loop={true}
                  >
                    <SwiperSlide>
                      <div className={`${styles.testimonial2} h-100 `}>
                        <div className={styles.info1} />
                        <div className={styles.anandAcademyIs}>
                          The level of expertise and professionalism demonstrated by the team at AIDIT Pvt. Ltd. is unparalleled. They have successfully managed several complex IT projects for us, “Always delivering on time and within budget”.
                        </div>
                        <div className={styles.userContainer1}>
                          <div className={styles.user1}>
                            <div className={styles.userImage1}>
                              <img
                                className={styles.avatarIcon2}
                                alt=""
                                src="/Avatar3.png"
                              />
                              <div className={styles.userName1}>
                                <div className={styles.vijiyaViji}>Vijiya Viji</div>
                                <div className={styles.caAspirant2}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rating1}>
                            <div className={styles.googleRating1}>
                              <img
                                className={styles.googleLogo98081Icon2}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.emptyRating1}>
                              <div className={styles.empty1}>4.8</div>
                              <div className={styles.fsvgContainer}>
                                <img
                                  className={styles.fsvgIcon2}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial3} h-100 `}>
                        <div className={styles.testimonialContent}>
                          <div className={styles.iAttendedAContainer}>
                            <p className={styles.iAttendedA}>
                              From network management to custom software development, AIDIT offers a comprehensive suite of IT services that cater to all our needs. Their holistic approach means that we have a one-stop shop for everything IT-related, which has been invaluable to our growth and success. They take the time to understand our business and provide solutions that enhance our operations. Their all-encompassing services have allowed us to focus on what we do best, knowing that our IT needs are in capable hands.
                            </p>

                          </div>
                          <div className={styles.info2} />
                        </div>
                        <div className={styles.testimonialUser}>
                          <div className={styles.userImageContainerWrapper}>
                            <div className={styles.userImageContainer}>
                              <img
                                className={styles.avatarIcon3}
                                alt=""
                                src="/avatar-4@2x.png"
                              />
                              <div className={styles.userCredentials}>
                                <div className={styles.bhumikaShaldar}>
                                  Bhumika Shaldar
                                </div>
                                <div className={styles.caAspirant3}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.platformLogoContainerParent}>
                            <div className={styles.platformLogoContainer}>
                              <img
                                className={styles.googleLogo98081Icon3}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.reviewSeparator}>
                              <div className={styles.div1}>4.8</div>
                              <div className={styles.reviewRating}>
                                <img
                                  className={styles.fsvgIcon3}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial2} h-100`}>
                        <div className={styles.info1} />
                        <div className={styles.anandAcademyIs}>
                          The level of expertise and professionalism demonstrated by the team at AIDIT Pvt. Ltd. is unparalleled. They have successfully managed several complex IT projects for us, “Always delivering on time and within budget”.
                        </div>
                        <div className={styles.userContainer1}>
                          <div className={styles.user1}>
                            <div className={styles.userImage1}>
                              <img
                                className={styles.avatarIcon2}
                                alt=""
                                src="/Avatar3.png"
                              />
                              <div className={styles.userName1}>
                                <div className={styles.vijiyaViji}>Vijiya Viji</div>
                                <div className={styles.caAspirant2}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rating1}>
                            <div className={styles.googleRating1}>
                              <img
                                className={styles.googleLogo98081Icon2}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.emptyRating1}>
                              <div className={styles.empty1}>4.8</div>
                              <div className={styles.fsvgContainer}>
                                <img
                                  className={styles.fsvgIcon2}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial3} h-100`}>
                        <div className={styles.testimonialContent}>
                          <div className={styles.iAttendedAContainer}>
                            <p className={styles.iAttendedA}>
                              From network management to custom software development, AIDIT offers a comprehensive suite of IT services that cater to all our needs. Their holistic approach means that we have a one-stop shop for everything IT-related, which has been invaluable to our growth and success. They take the time to understand our business and provide solutions that enhance our operations. Their all-encompassing services have allowed us to focus on what we do best, knowing that our IT needs are in capable hands.
                            </p>

                          </div>
                          <div className={styles.info2} />
                        </div>
                        <div className={styles.testimonialUser}>
                          <div className={styles.userImageContainerWrapper}>
                            <div className={styles.userImageContainer}>
                              <img
                                className={styles.avatarIcon3}
                                alt=""
                                src="/avatar-4@2x.png"
                              />
                              <div className={styles.userCredentials}>
                                <div className={styles.bhumikaShaldar}>
                                  Bhumika Shaldar
                                </div>
                                <div className={styles.caAspirant3}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.platformLogoContainerParent}>
                            <div className={styles.platformLogoContainer}>
                              <img
                                className={styles.googleLogo98081Icon3}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.reviewSeparator}>
                              <div className={styles.div1}>4.8</div>
                              <div className={styles.reviewRating}>
                                <img
                                  className={styles.fsvgIcon3}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial2} h-100`}>
                        <div className={styles.info1} />
                        <div className={styles.anandAcademyIs}>
                          The level of expertise and professionalism demonstrated by the team at AIDIT Pvt. Ltd. is unparalleled. They have successfully managed several complex IT projects for us, “Always delivering on time and within budget”.
                        </div>
                        <div className={styles.userContainer1}>
                          <div className={styles.user1}>
                            <div className={styles.userImage1}>
                              <img
                                className={styles.avatarIcon2}
                                alt=""
                                src="/Avatar3.png"
                              />
                              <div className={styles.userName1}>
                                <div className={styles.vijiyaViji}>Vijiya Viji</div>
                                <div className={styles.caAspirant2}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rating1}>
                            <div className={styles.googleRating1}>
                              <img
                                className={styles.googleLogo98081Icon2}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.emptyRating1}>
                              <div className={styles.empty1}>4.8</div>
                              <div className={styles.fsvgContainer}>
                                <img
                                  className={styles.fsvgIcon2}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial3} h-100`}>
                        <div className={styles.testimonialContent}>
                          <div className={styles.iAttendedAContainer}>
                            <p className={styles.iAttendedA}>
                              From network management to custom software development, AIDIT offers a comprehensive suite of IT services that cater to all our needs. Their holistic approach means that we have a one-stop shop for everything IT-related, which has been invaluable to our growth and success. They take the time to understand our business and provide solutions that enhance our operations. Their all-encompassing services have allowed us to focus on what we do best, knowing that our IT needs are in capable hands.
                            </p>

                          </div>
                          <div className={styles.info2} />
                        </div>
                        <div className={styles.testimonialUser}>
                          <div className={styles.userImageContainerWrapper}>
                            <div className={styles.userImageContainer}>
                              <img
                                className={styles.avatarIcon3}
                                alt=""
                                src="/avatar-4@2x.png"
                              />
                              <div className={styles.userCredentials}>
                                <div className={styles.bhumikaShaldar}>
                                  Bhumika Shaldar
                                </div>
                                <div className={styles.caAspirant3}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.platformLogoContainerParent}>
                            <div className={styles.platformLogoContainer}>
                              <img
                                className={styles.googleLogo98081Icon3}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.reviewSeparator}>
                              <div className={styles.div1}>4.8</div>
                              <div className={styles.reviewRating}>
                                <img
                                  className={styles.fsvgIcon3}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial2} h-100`}>
                        <div className={styles.info1} />
                        <div className={styles.anandAcademyIs}>
                          The level of expertise and professionalism demonstrated by the team at AIDIT Pvt. Ltd. is unparalleled. They have successfully managed several complex IT projects for us, “Always delivering on time and within budget”.
                        </div>
                        <div className={styles.userContainer1}>
                          <div className={styles.user1}>
                            <div className={styles.userImage1}>
                              <img
                                className={styles.avatarIcon2}
                                alt=""
                                src="/Avatar3.png"
                              />
                              <div className={styles.userName1}>
                                <div className={styles.vijiyaViji}>Vijiya Viji</div>
                                <div className={styles.caAspirant2}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rating1}>
                            <div className={styles.googleRating1}>
                              <img
                                className={styles.googleLogo98081Icon2}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.emptyRating1}>
                              <div className={styles.empty1}>4.8</div>
                              <div className={styles.fsvgContainer}>
                                <img
                                  className={styles.fsvgIcon2}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial3} h-100`}>
                        <div className={styles.testimonialContent}>
                          <div className={styles.iAttendedAContainer}>
                            <p className={styles.iAttendedA}>
                              From network management to custom software development, AIDIT offers a comprehensive suite of IT services that cater to all our needs. Their holistic approach means that we have a one-stop shop for everything IT-related, which has been invaluable to our growth and success. They take the time to understand our business and provide solutions that enhance our operations. Their all-encompassing services have allowed us to focus on what we do best, knowing that our IT needs are in capable hands.
                            </p>

                          </div>
                          <div className={styles.info2} />
                        </div>
                        <div className={styles.testimonialUser}>
                          <div className={styles.userImageContainerWrapper}>
                            <div className={styles.userImageContainer}>
                              <img
                                className={styles.avatarIcon3}
                                alt=""
                                src="/avatar-4@2x.png"
                              />
                              <div className={styles.userCredentials}>
                                <div className={styles.bhumikaShaldar}>
                                  Bhumika Shaldar
                                </div>
                                <div className={styles.caAspirant3}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.platformLogoContainerParent}>
                            <div className={styles.platformLogoContainer}>
                              <img
                                className={styles.googleLogo98081Icon3}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.reviewSeparator}>
                              <div className={styles.div1}>4.8</div>
                              <div className={styles.reviewRating}>
                                <img
                                  className={styles.fsvgIcon3}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial2} h-100`}>
                        <div className={styles.info1} />
                        <div className={styles.anandAcademyIs}>
                          The level of expertise and professionalism demonstrated by the team at AIDIT Pvt. Ltd. is unparalleled. They have successfully managed several complex IT projects for us, “Always delivering on time and within budget”.
                        </div>
                        <div className={styles.userContainer1}>
                          <div className={styles.user1}>
                            <div className={styles.userImage1}>
                              <img
                                className={styles.avatarIcon2}
                                alt=""
                                src="/Avatar3.png"
                              />
                              <div className={styles.userName1}>
                                <div className={styles.vijiyaViji}>Vijiya Viji</div>
                                <div className={styles.caAspirant2}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rating1}>
                            <div className={styles.googleRating1}>
                              <img
                                className={styles.googleLogo98081Icon2}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.emptyRating1}>
                              <div className={styles.empty1}>4.8</div>
                              <div className={styles.fsvgContainer}>
                                <img
                                  className={styles.fsvgIcon2}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.testimonial3} h-100`}>
                        <div className={styles.testimonialContent}>
                          <div className={styles.iAttendedAContainer}>
                            <p className={styles.iAttendedA}>
                              From network management to custom software development, AIDIT offers a comprehensive suite of IT services that cater to all our needs. Their holistic approach means that we have a one-stop shop for everything IT-related, which has been invaluable to our growth and success. They take the time to understand our business and provide solutions that enhance our operations. Their all-encompassing services have allowed us to focus on what we do best, knowing that our IT needs are in capable hands.
                            </p>

                          </div>
                          <div className={styles.info2} />
                        </div>
                        <div className={styles.testimonialUser}>
                          <div className={styles.userImageContainerWrapper}>
                            <div className={styles.userImageContainer}>
                              <img
                                className={styles.avatarIcon3}
                                alt=""
                                src="/avatar-4@2x.png"
                              />
                              <div className={styles.userCredentials}>
                                <div className={styles.bhumikaShaldar}>
                                  Bhumika Shaldar
                                </div>
                                <div className={styles.caAspirant3}>CA Aspirant</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.platformLogoContainerParent}>
                            <div className={styles.platformLogoContainer}>
                              <img
                                className={styles.googleLogo98081Icon3}
                                alt=""
                                src="/googlelogo9808-1@2x.png"
                              />
                            </div>
                            <div className={styles.reviewSeparator}>
                              <div className={styles.div1}>4.8</div>
                              <div className={styles.reviewRating}>
                                <img
                                  className={styles.fsvgIcon3}
                                  alt=""
                                  src="/fsvg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </ul>
              </div>
            </div>
        }

      </div>
    </section>
  );
};

export default FrameComponent;


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