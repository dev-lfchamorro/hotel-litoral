import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import "./styles.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="home-container">
        <Header />
      </div>
      <Footer />
    </>
  );
};

export default Home;
