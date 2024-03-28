import React from "react";
import { ReactComponent as IconBeachBed } from "../../assets/icons/beach-bed.svg";
import { ReactComponent as IconBed } from "../../assets/icons/bed.svg";
import { ReactComponent as IconHotel } from "../../assets/icons/hotel.svg";
import ImgWhatsApp from "../../assets/icons/whatsapp.svg";
import ImgSection1 from "../../assets/img/gallery/main-facade.jpeg";
import ImgReception from "../../assets/img/gallery/reception.jpeg";
import Button from "../../components/Button";
import CoverContent from "../../components/CoverContent";
import Feature from "../../components/Feature";
import ImgCarousel from "../../components/ImgCarousel";
import SectionImageText from "../../components/SectionImageText";
import SectionParallax from "../../components/SectionParallax";
import Slider from "../../components/Slider";
import TextContent from "../../components/TextContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { staticValues } from "../../constants";
import { SectionsText } from "../../types";
import { features, roomCardSlider } from "./constants";
import "./styles.scss";

const Home: React.FC = () => {
  const [section1, section2] = SectionsText.Inicio || [];

  return (
    <div className="home-container">
      <Header />

      <CoverContent bgImg={ImgReception}>
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

      <SectionParallax img={ImgSection1}>
        <IconHotel className="parallax-content-icon" />
        <IconBed className="parallax-content-icon" />
        <IconBeachBed className="parallax-content-icon" />
      </SectionParallax>

      <TextContent
        className="rooms-slider-section"
        orientation="center"
        size="medium"
        title={section2.title}
      >
        {section2.description}
        <Slider children={roomCardSlider} />
      </TextContent>

      <Footer />
    </div>
  );
};

export default Home;
