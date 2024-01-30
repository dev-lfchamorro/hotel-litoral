import React from "react";
import Feature from "../../components/Feature";
import ImgCarousel from "../../components/ImgCarousel";
import TextContent from "../../components/TextContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { homeSectionsText } from "../../types";
import { features } from "./constants";
import "./styles.scss";

const Home: React.FC = () => {
  const [section1, section2] = homeSectionsText.Inicio || [];

  return (
    <div className="home-container">
      <Header />
      <Feature features={features} />
      <ImgCarousel />

      {homeSectionsText.Inicio && (
        <TextContent orientation="left" size="medium" title={section1.title}>
          {section1.description}
        </TextContent>
      )}

      {homeSectionsText.Inicio && (
        <TextContent orientation="center" size="medium" title={section2.title}>
          {section2.description}
        </TextContent>
      )}

      <Footer />
    </div>
  );
};

export default Home;
