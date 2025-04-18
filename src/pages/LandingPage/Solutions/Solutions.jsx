import React, { useRef } from "react";
import styles from "./Solutions.module.scss";
import SolutionCard from "src/compnents/custom/SolutionCard/SolutionCard";
import sim from "../../../assets/images/sim.jpg";
import esim from "../../../assets/images/esim.jpg";
import esimSolution from "../../../assets/images/esim solution.jpg";
import fiveG from "../../../assets/images/5G.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const solutions = [
  {
    title: "SIMs",
    text: "Explore our comprehensive range of SIMs to find the perfect fit for your connectivity needs.",
    button: [{ text: "SIM" }],
    color: "purple",
    image: sim,
  },
  {
    title: "eSIMs",
    text: "Our secure, scalable eSIMs deliver on-demand reliability for Consumer, IoT, and M2M applications.",
    button: [{ text: "eSIM" }, { text: "eSIM interoperability" }],
    color: "teal",
    image: esim,
  },
  {
    title: "eSIM Solutions",
    text: "Manage eSIM subscriptions and streamline consumer onboarding to drive acquisition and retention.",
    button: [
      { text: "Remote SIM Provisioning" },
      { text: "eSIM Onboarding Journeys" },
    ],
    color: "green",
    image: esimSolution,
  },
  {
    title: "5G",
    text: "Our solutions enable seamless integration of private and public networks with advanced interoperable technology and secure OTA management for remote SIM updates.",
    button: [{ text: "Private Networks" }, { text: "OTA Suite" }],
    color: "orange",
    image: fiveG,
  },
];

const Solutions = () => {
  const sectionRef = useRef();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["150px", "0px"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["200px", "0px"]);

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-100vw`]);

  return (
    <div className={styles.solutionContainer}>
      <div className={styles.solutionTextContainer}>
        <div className={styles.solutionText}>
          <p>solutions</p>
          <div>
            <svg
              width="241"
              height="16"
              viewBox="0 0 241 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240.707 8.70709C241.098 8.31656 241.098 7.6834 240.707 7.29287L234.343 0.928912C233.953 0.538387 233.319 0.538387 232.929 0.928912C232.538 1.31944 232.538 1.9526 232.929 2.34313L238.586 7.99998L232.929 13.6568C232.538 14.0474 232.538 14.6805 232.929 15.071C233.319 15.4616 233.953 15.4616 234.343 15.071L240.707 8.70709ZM8.74228e-08 9L240 8.99998L240 6.99998L-8.74228e-08 7L8.74228e-08 9Z"
                fill="url(#paint0_linear_2892_12455)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2892_12455"
                  x1="4.37114e-08"
                  y1="8.5"
                  x2="240"
                  y2="8.49998"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#191F80"></stop>
                  <stop offset="0.339518" stopColor="#1A14FA"></stop>
                  <stop offset="0.679518" stopColor="#3276FB"></stop>
                  <stop offset="1" stopColor="#21BDFC"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2>We</h2>
          <h2>deliver</h2>
          <h2>trusted</h2>
          <h2>connectivity</h2>
          <h2>and</h2>
          <h2>guarantee</h2>
          <h2>interoperability</h2>
          <h2>through:</h2>
        </div>
      </div>
      <div ref={sectionRef} className={styles.solutionCardsContainer}>
        <div className={styles.check}>
          <motion.div style={{ x }} className={styles.solutionCards}>
            {solutions.map((item, i) => {
              const style =
                i === 1 ? y2 : i === 2 ? y3 : i === 3 ? y4 : undefined;
              return (
                <SolutionCard
                  title={item.title}
                  text={item.text}
                  button={item.button}
                  color={item.color}
                  image={item.image}
                  id={i}
                  key={i}
                  style={style}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
