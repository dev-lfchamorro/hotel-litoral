import React from "react";
import Feature from "../../components/Feature";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { features } from "./constants";
import "./styles.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />

      <Feature features={features} />

      <Footer />
    </div>
  );
};

export default Home;
