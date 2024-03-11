import React from "react";
import ImgWhatsApp from "../../assets/icons/whatsapp.svg";
import ImgContact from "../../assets/img/images/contact.jpg";
import Button from "../../components/Button";
import CoverContent from "../../components/CoverContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { staticValues } from "../../constants";
import "./styles.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <Header />

      <CoverContent bgImg={ImgContact}>
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

export default Contact;
