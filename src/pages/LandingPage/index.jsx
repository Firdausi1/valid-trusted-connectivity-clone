import React from "react";
import Layout from "src/layout";
import Header from "./Header/Header";
import Solutions from "./Solutions/Solutions";
import Insights from "./Insights/Insights";
import Partner from "./Partner/Partner";
import About from "./About/About";

const LandingPage = () => {
  return (
    <Layout>
      <Header />
      <Solutions />
      <Insights />
      <Partner />
      <About />
    </Layout>
  );
};

export default LandingPage;
