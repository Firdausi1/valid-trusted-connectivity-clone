import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.scss";
import { useTransform, motion, useScroll, useSpring } from "framer-motion";
import SectionHeader from "src/compnents/custom/SectionHeader/SectionHeader";
import AboutStats from "src/compnents/custom/AboutStats/AboutStats";

const stats = [
  {
    title: "+900",
    text: "Million connected devices use Valid's technology",
  },
  {
    title: "+100",
    text: "Remote SIM provisioning Platform implemented worldwide",
  },
  {
    title: "Top5",
    text: "SIM Manufacturer globally",
  },
];

const About = () => {
  const containerRef = useRef(null);
  const dRef = useRef(null);
  const [frame, setFrame] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    ["15.9919%", "0%"],
    ["25%", "0%"]
  );
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    mass: 1,
  });

  const scale = useTransform(smoothProgress, [0, 0.8], [1, 50]);
  const opacity = useTransform(smoothProgress, [0.3, 0.8], [1, 0]);

  const imageProgress = useTransform(smoothProgress, [0.35, 1], [0, 84]);
  const translateY = useTransform(smoothProgress, [0.8, 1], [500, 0]);
  const aboutOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  useEffect(() => {
    let lastFrame = -1;
    return imageProgress.on("change", (latest) => {
      const rounded = Math.round(latest);
      if (rounded !== lastFrame) {
        setFrame(rounded);
        lastFrame = rounded;
      }
    });
  }, [imageProgress]);

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= 84; i++) {
        const img = new Image();
        img.src = `/frames/frame-${String(i).padStart(3, "0")}.jpg`;
      }
    };
    preloadImages();
  }, []);

  return (
    <div className={styles.partnerContainer} ref={containerRef}>
      <div className={styles.partner}>
        <motion.h1
          className={styles.partnerText}
          style={{
            scale,
            opacity,
            backgroundPosition,
          }}
        >
          Your truste<span ref={dRef}>d</span>&nbsp;partner for secure and
          interoperable mobile services
        </motion.h1>
        <motion.div className={styles.frame}>
          <motion.img
            src={`/frames/frame-${String(frame + 1).padStart(3, "0")}.webp`}
            style={{
              willChange: "opacity",
            }}
            alt={`Frame ${frame + 1}`}
          />
        </motion.div>
        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          className={styles.about}
          style={{
            opacity: aboutOpacity,
            y: translateY,
          }}
        >
          <SectionHeader
            title="About us"
            text="We offer trusted connectivity solutions to device makers, connectivity providers and IoT players worldwide"
            buttonText="More about us"
          />
          <div className={styles.statsContainer}>
            <div className={styles.stats}>
              {stats.map((item, index) => (
                <AboutStats text={item.text} title={item.title} key={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
