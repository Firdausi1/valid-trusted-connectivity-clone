import React from "react";
import Layout from "src/layout";
import Header from "./Header/Header";
import Solutions from "./Solutions/Solutions";
import Insights from "./Insights/Insights";
import About from "./About/About";

// const About = React.lazy(() => import('./About/About'));

const LandingPage = () => {
  return (
    <Layout>
      <Header />
      <Solutions />
      <Insights />
      <About />
    </Layout>
  );
};

export default LandingPage;
