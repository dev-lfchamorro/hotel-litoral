import React from "react";
import ImgWhatsApp from "../../assets/icons/whatsapp.svg";
import ImgRoom4 from "../../assets/img/gallery/room-4.jpeg";
import Button from "../../components/Button";
import CoverContent from "../../components/CoverContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { staticValues } from "../../constants";
import "./styles.scss";
import TextContent from "../../components/TextContent";
import { SectionsText } from "../../types";
import RoomCard from "../../components/RoomCard";

const Rooms: React.FC = () => {
  const [section1] = SectionsText["Quartos"] || [];

  return (
    <div className="rooms-container">
      <Header />

      <CoverContent bgImg={ImgRoom4}>
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

      <div className="rooms-section">
        <TextContent orientation="center" size="medium" title={section1.title}>
          {section1.description}

          <div className="rooms-card-wrapper">
            <RoomCard image={ImgRoom4} />
            <RoomCard image={ImgRoom4} />
            <RoomCard image={ImgRoom4} />
            <RoomCard image={ImgRoom4} />
            <RoomCard image={ImgRoom4} />
          </div>
        </TextContent>
      </div>

      <Footer />
    </div>
  );
};

export default Rooms;
