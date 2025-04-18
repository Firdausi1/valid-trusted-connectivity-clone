import React from "react";
import Layout from "src/layout";
import Header from "./Header/Header";
import Solutions from "./Solutions/Solutions";
import Insights from "./Insights/Insights";
import Partner from "./About/About";

const LandingPage = () => {
  return (
    <Layout>
      <Header />
      <Solutions />
      <Insights />
      <Partner />
    </Layout>
  );
};

export default LandingPage;
