import React from "react";
import ImgWhatsApp from "../../assets/icons/whatsapp.svg";
import ImgSection1 from "../../assets/img/gallery/garage.jpeg";
import ImgReception2 from "../../assets/img/gallery/reception-2.jpeg";
import ImgSection2 from "../../assets/img/images/landscapes_1.jpg";
import ImgSection3 from "../../assets/img/images/landscapes_2.jpg";
import ImgSection4 from "../../assets/img/images/landscapes_3.jpg";
import AnimatedNumbers from "../../components/AnimatedNumbers";
import Button from "../../components/Button";
import CircularProgressBar from "../../components/CircularProgressBar";
import CoverContent from "../../components/CoverContent";
import SectionImageText from "../../components/SectionImageText";
import SectionParallax from "../../components/SectionParallax";
import Slider from "../../components/Slider";
import TextContent from "../../components/TextContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { staticValues } from "../../constants";
import { SectionsText } from "../../types";
import { animatedNumbersContent, testimonialCardSlider } from "./constants";
import "./styles.scss";

const AboutUs: React.FC = () => {
  const [section1, section2, section3] = SectionsText["Sobre nós"] || [];
  const animatedNumbersSection1 = animatedNumbersContent.section1 || [];
  const animatedNumbersSection2 = animatedNumbersContent?.section2 || [];

  return (
    <div className="about-us-container">
      <Header />

      <CoverContent bgImg={ImgReception2}>
        <div className="cover-content">
          {staticValues.coverText}
          <Button
            className="cover-content-btn"
            text={staticValues.whatsApp}
            iconPath={ImgWhatsApp}
            textSize={20}
          />
        </div>
      </CoverContent>

      <SectionImageText
        className="section1-container"
        imageSize="middle"
        img={ImgSection1}
        sectionOrientation="right"
        textContentOrientation="top"
      >
        <TextContent orientation="left" size="medium" title={section1.title}>
          {section1.description}
        </TextContent>
      </SectionImageText>

      <SectionImageText
        imageSize="full"
        img={ImgSection2}
        sectionOrientation="left"
        textContentOrientation="middle"
      >
        <TextContent orientation="left" size="large" title={section2.title}>
          {section2.description}
        </TextContent>

        <AnimatedNumbers content={animatedNumbersSection1} />
      </SectionImageText>

      <SectionImageText
        imageSize="full"
        img={ImgSection3}
        sectionOrientation="right"
        textContentOrientation="middle"
      >
        <TextContent orientation="left" size="large" title={section3.title}>
          {section3.description}
        </TextContent>

        <div className="circular-progress-bar-wrapper">
          {animatedNumbersSection2.map((content, idx) => (
            <CircularProgressBar
              endValue={content.endValue}
              key={idx + 1}
              speed={content.speed || 50}
              text={content.text}
            />
          ))}
        </div>
      </SectionImageText>

      <SectionParallax className="section-parallax-container" img={ImgSection4}>
        <Slider children={testimonialCardSlider} />
      </SectionParallax>

      <Footer />
    </div>
  );
};

export default AboutUs;
