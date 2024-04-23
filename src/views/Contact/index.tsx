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
import { useContactForm } from "../../hooks";
import { contactInfo } from "./constants";
import "./styles.scss";

const Contact: React.FC = () => {
  const { errors, formData, handleChange, handleSave } = useContactForm();

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

            <div className="contat-form">
              <InputText
                errorText={errors.name && errors.name}
                hasError={!!errors.name}
                id="name"
                name="name"
                placeholder="Seu nome *"
                required
                value={formData.name}
                onChange={(e) => handleChange(e)}
              />

              <div className="contact-fields-wrapper">
                <InputText
                  errorText={errors.email && errors.email}
                  hasError={!!errors.email}
                  id="email"
                  name="email"
                  placeholder="Seu email *"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />

                <InputText
                  errorText={errors.phone && errors.phone}
                  hasError={!!errors.phone}
                  id="phone"
                  name="phone"
                  placeholder="Seu telefone"
                  pattern="(\+)?([0-9]){0,}"
                  value={formData.phone}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <TextArea
                errorText={errors.message && errors.message}
                hasError={!!errors.message}
                id="message"
                name="message"
                placeholder="Mensagem *"
                required
                value={formData.message}
                onChange={(e) => handleChange(e)}
              />

              <Button
                text="Enviar"
                className="send-form-btn"
                onClick={handleSave}
              />
            </div>
          </div>
        </div>

        <div className="contact-section-map">
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={process.env.REACT_APP_GM_EMBED}
            style={{ border: 0 }}
            title="HL-map"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
