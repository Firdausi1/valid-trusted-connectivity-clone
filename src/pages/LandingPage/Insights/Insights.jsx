import Button from "src/compnents/ui/Button/Button";
import styles from "./Insights.module.scss";
import React from "react";
import BlogCard from "src/compnents/custom/BlogCard/BlogCard";
import InsightCard from "src/compnents/custom/InsightCard/InsightCard";
import SectionHeader from "src/compnents/custom/SectionHeader/SectionHeader";

const insights = [
  {
    topText: "Next Event",
    title: "MVC BARCELONA 2025",
    smallText:
      "MWC 2025 promises to be an unmissable event—where innovation, big ideas, and global change converge. It’s the only platform where you’ll hear from industry leaders, emerging voices, and visionary tech pioneers shaping the future of connectivity",
    bigText: "",
    background: "image",
  },
  {
    topText: "white papers",
    title: "",
    smallText: "",
    bigText: "Optimizing eSIM Adoption: Adoption Interoperability",
    background: "light",
  },
  {
    topText: "PRS",
    title: "",
    smallText: "",
    bigText:
      "CATEL Selects Valid’s Quarter-Size SIM Cards solution: A Step Towards Innovation and Sustainability",
    background: "dark",
  },
];

const Insights = () => {
  return (
    <div className={styles.insightContainer}>
      <SectionHeader
        title="LATEST INSIGHTS"
        text=" Stay informed on the latest trends and discover how the world around
            you is evolving"
        buttonText="All Insights"
      />
      <div className={styles.insightCards}>
        <BlogCard />
        {insights.map((item) => (
          <InsightCard
            topText={item.topText}
            bigText={item.bigText}
            title={item.title}
            smallText={item.smallText}
            background={item.background}
          />
        ))}
      </div>
    </div>
  );
};

export default Insights;
