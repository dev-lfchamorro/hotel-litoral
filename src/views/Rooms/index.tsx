import React from "react";
import ImgWhatsApp from "../../assets/icons/whatsapp.svg";
import ImgRoom4 from "../../assets/img/gallery/room-4.jpeg";
import Button from "../../components/Button";
import CoverContent from "../../components/CoverContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { staticValues } from "../../constants";
import "./styles.scss";

const Rooms: React.FC = () => {
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

      <Footer />
    </div>
  );
};

export default Rooms;
