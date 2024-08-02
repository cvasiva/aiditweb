/* eslint-disable @next/next/no-img-element */
"use client"
import type { NextPage } from "next";
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"
import Link from "next/link";
export type MainType = {
  className?: string;
};
const Main: NextPage<MainType> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [colorChange, setColorChange] = useState<boolean>(false);
  const changeNavbarColor = (): void => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);
  const pathname = usePathname()
  return (
    <>
      <section className={[styles.main, className].join(" ")}>
        <div className={styles.flenone}>
          <header className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.heroContent}>
              {/* <div className={styles.heroTitle}>
                <a className={styles.aidit}>AIDIT</a>
              </div>
              <a className={styles.taglineChange}>TAGLINE CHANGE</a> */}
              <img src="./llogo.png" alt="logo" style={{width:"110%"}}/>
            </div>
            <nav className={styles.developerResources}>
              <nav className={styles.solutionDevelopers}>
                <Link href="/home" className={pathname === '/home' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                  <div className={styles.navigationMenu}>
                    <div className={styles.navigationProducts}>
                      <a className={styles.itemButton}>Home</a>
                    </div>
                    <div className={pathname === '/home' ? `${styles.solutionsLink}` : ""} />
                  </div>
                </Link>
                <Link href="/about" className={pathname === '/about' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                  <div className={styles.navigationMenu}>
                    <div className={styles.navigationProducts}>
                      <a className={styles.itemButton}>About</a>
                    </div>
                    <div className={pathname === '/about' ? `${styles.solutionsLink}` : ""} />
                  </div>
                </Link>
                <Link href="/services" className={pathname === '/services' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                  <div className={styles.navigationMenu}>
                    <div className={styles.navigationProducts}>
                      <a className={styles.itemButton}>Services</a>
                    </div>
                    <div className={pathname === '/services' ? `${styles.solutionsLink}` : ""} />
                  </div>
                </Link>
                <Link href="/resources" className={pathname === '/resources' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                  <div className={styles.navigationMenu}>
                    <div className={styles.navigationProducts}>
                      <a className={styles.itemButton}>Resources</a>
                    </div>
                    <div className={pathname === '/resources' ? `${styles.solutionsLink}` : ""} />
                  </div>
                </Link>
                <Link href="/learn" className={pathname === '/learn' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                  <div className={styles.navigationMenu}>
                    <div className={styles.navigationProducts}>
                      <a className={styles.itemButton}>Learn</a>
                    </div>
                    <div className={pathname === '/learn' ? `${styles.solutionsLink}` : ""} />
                  </div>
                </Link>
              </nav>
            </nav>
            <div className={styles.resourceButtonWrapper}>
              <a href="https://wa.me/916303790179?text=hello, I need more details on your service" target="_blank" rel="noopener noreferrer" className={`${styles.resourceButton} ${styles.itemButton5}`}>
                <div className={styles.resourceButtonContainer}>
                  <a  className={styles.itemButton5}>Contact</a>
                </div>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </a>
            </div>
          </header>
        </div>
      </section>
      <div className={styles.dnonenav}>
        <div className={colorChange ? `${styles.rectangleParent}` : `${styles.rectangleParent}`}>
          <div className={styles.heroTitle}>
            {/* <a className={styles.aidit}>AIDIT</a> */}
            <img src="./llogo.png" alt="logo" style={{width:"45%"}}/>
          </div>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="" size={25} />
            ) : (
              <FaBars className="" size={25} />
            )}
            {menuOpen && (
              <>
                <div className={menuOpen ? `${styles.navpostion}` : 'bgnav'}>
                  <div className={styles.rectangle_parent10}>
                    <div className={styles.link_about_us_parent}>
                      <Link href="/home" className={pathname === '/home' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                        <div className={styles.heroNavigation}>
                          <div className={styles.navigationMenu}>
                            <div className={styles.navigationProducts}>
                              <a className={styles.itemButton}>Home</a>
                            </div>
                            <div className={pathname === '/home' ? `${styles.solutionsLink}` : `${styles.solutionsLinkactive}`} />
                          </div>
                        </div>
                      </Link>
                      <div className="link-about">
                        <Link href="/about" className={pathname === '/about' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                          <div className={styles.heroNavigation}>
                            <div className={styles.navigationMenu}>
                              <div className={styles.navigationProducts}>
                                <a className={styles.itemButton}>About</a>
                              </div>
                              <div className={pathname === '/about' ? `${styles.solutionsLink}` : `${styles.solutionsLinkactive}`} />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="link-about">
                        <Link href="/services" className={pathname === '/services' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                          <div className={styles.heroNavigation}>
                            <div className={styles.navigationMenu}>
                              <div className={styles.navigationProducts}>
                                <a className={styles.itemButton}>Services</a>
                              </div>
                              <div className={pathname === '/services' ? `${styles.solutionsLink}` : `${styles.solutionsLinkactive}`} />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="about-us-link-two">
                        <div className="link-about">
                          <Link href="/resources" className={pathname === '/resources' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                            <div className={styles.heroNavigation}>
                              <div className={styles.navigationMenu}>
                                <div className={styles.navigationProducts}>
                                  <a className={styles.itemButton}>Resources</a>
                                </div>
                                <div className={pathname === '/resources' ? `${styles.solutionsLink}` : `${styles.solutionsLinkactive}`} />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="link-about">
                        <Link href="/learn" className={pathname === '/learn' ? `${styles.linkstyle}` : `${styles.linkstyleactive}`}>
                          <div className={styles.heroNavigation}>
                            <div className={styles.navigationMenu}>
                              <div className={styles.navigationProducts}>
                                <a className={styles.itemButton}>Learn</a>
                              </div>
                              <div className={pathname === '/learn' ? `${styles.solutionsLink}` : `${styles.solutionsLinkactive}`} />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className={styles.resourceButtonWrapper}>
                        <a href="https://wa.me/916303790179?text=hello, I need more details on your service" target="_blank" rel="noopener noreferrer" className={`${styles.itemButton5} ${styles.resourceButton}`}>
                          <div className={styles.resourceButtonContainer}>
                            <a className={styles.itemButton5}>Contact</a>
                          </div>
                          <div className={styles.ellipseParent}>
                            <div className={styles.frameItem} />
                            <img
                              className={styles.groupIcon}
                              loading="lazy"
                              alt=""
                              src="/group.svg"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
