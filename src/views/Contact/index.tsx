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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.67703243905675!2d-37.045937711293256!3d-10.982537873292083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3fc0e660ddb%3A0x52931434e26ff077!2sLitoral!5e1!3m2!1spt-BR!2sco!4v1710297645141!5m2!1spt-BR!2sco"
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
