import React from "react";
import ImgSection1 from "../../assets/img/gallery/main-facade.jpeg";
import Feature from "../../components/Feature";
import ImgCarousel from "../../components/ImgCarousel";
import SectionImageText from "../../components/SectionImageText";
import TextContent from "../../components/TextContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { SectionsText } from "../../types";
import { features } from "./constants";
import "./styles.scss";

const Home: React.FC = () => {
  const [section1, section2] = SectionsText.Inicio || [];

  return (
    <div className="home-container">
      <Header />
      <Feature features={features} />
      <ImgCarousel />

      <SectionImageText
        imageSize="middle"
        img={ImgSection1}
        sectionOrientation="right"
        textContentOrientation="middle"
      >
        <TextContent orientation="left" size="medium" title={section1.title}>
          {section1.description}
        </TextContent>
      </SectionImageText>

      <TextContent orientation="center" size="medium" title={section2.title}>
        {section2.description}
      </TextContent>

      <Footer />
    </div>
  );
};

export default Home;
