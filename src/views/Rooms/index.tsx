import React from "react";
import ImgWhatsApp from "../../assets/icons/whatsapp.svg";
import ImgRoom4 from "../../assets/img/gallery/room-4.jpeg";
import Button from "../../components/Button";
import CoverContent from "../../components/CoverContent";
import RoomCard from "../../components/RoomCard";
import TextContent from "../../components/TextContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { SectionsText, staticValues } from "../../constants";
import { roomsCardContent } from "./constants";
import "./styles.scss";

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
            {roomsCardContent.map(({ image, title }, idx) => (
              <RoomCard image={image} key={idx + 1} title={title} />
            ))}
          </div>
        </TextContent>
      </div>

      <Footer />
    </div>
  );
};

export default Rooms;
