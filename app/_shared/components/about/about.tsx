"use client";
import React, { useEffect, useRef } from 'react';
import styles from './about.module.css';
import Link from 'next/link';

const About = () => {
  const videoEl = useRef(null);

  useEffect(() => {
    if (videoEl.current) {
      videoEl.current.play();
    }
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Website Coming Soon</h1>
        <p className={styles.description}>
          Our website is under construction. Stay tuned for something amazing!
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/home">
            <button className={styles.home}>Return Home</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;
