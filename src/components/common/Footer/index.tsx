import React from "react";
import ListItems from "../../ListItems";
import Logo from "../../Logo";
import { LogoFontSize } from "../../Logo/enums";
import {
  ImportantInfo,
  LocationInfo,
  WeDoNotOwnInfo,
  WeOfferInfo,
} from "./constants";
import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <Logo
        fontSize={LogoFontSize.lg}
        hasPrimaryColors={false}
        slogan="desde 2005"
      />

      <div className="general-info-container">
        <div className="location-container">
          <ListItems items={LocationInfo} title="Nosso endereço" />
          <ListItems items={WeDoNotOwnInfo} title="Nós não possuímos" />
        </div>

        <ListItems items={WeOfferInfo} title="Nós oferecemos" />

        <ListItems
          isImportant
          items={ImportantInfo}
          title="Informação importante:"
        />
      </div>

      <span className="copy-right">
        Direitos Reservados © {new Date().getFullYear()} | Hotel Litoral |
        Aracaju, Sergipe - Brasil
      </span>
    </div>
  );
};

export default Footer;
