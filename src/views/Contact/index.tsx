import React from "react";
import ImgWhatsApp from "../../assets/icons/whatsapp.svg";
import ImgContact from "../../assets/img/images/contact.jpg";
import Button from "../../components/Button";
import CoverContent from "../../components/CoverContent";
import ListTextItems from "../../components/ListTextItems";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import InputText from "../../components/common/InputText";
import TextArea from "../../components/common/Textarea";
import { staticValues } from "../../constants";
import { contactInfo } from "./constants";
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

      <div className="contact-section">
        <div className="contact-section-form">
          <div className="contact-section-form-wrapper">
            <h1>Entrar em contato</h1>

            <ListTextItems listItems={contactInfo} />

            <form className="contat-form">
              <InputText
                id="contact-name"
                name="contact-name"
                placeholder="Seu nome *"
                required
              />

              <div className="contact-fields-wrapper">
                <InputText
                  id="contact-email"
                  name="contact-email"
                  placeholder="Seu email *"
                  required
                />

                <InputText
                  id="contact-phone"
                  name="contact-phone"
                  placeholder="Seu telefone"
                />
              </div>

              <TextArea
                id="contact-message"
                name="contact-message"
                placeholder="Mensagem *"
              />

              <Button text="Enviar" className="send-form-btn" />
            </form>
          </div>
        </div>

        <div className="contact-section-map">
          <iframe
            title="HL-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.67703243905675!2d-37.045937711293256!3d-10.982537873292083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3fc0e660ddb%3A0x52931434e26ff077!2sLitoral!5e1!3m2!1spt-BR!2sco!4v1710297645141!5m2!1spt-BR!2sco"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
