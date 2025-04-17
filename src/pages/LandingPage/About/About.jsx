import React from "react";
import styles from "./About.module.scss";
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
  return (
    <div className={styles.about}>
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
    </div>
  );
};

export default About;
