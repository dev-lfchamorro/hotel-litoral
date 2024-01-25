import React from "react";
import "./styles.scss";
import Logo from "../../Logo";
import { LogoFontSize } from "../../Logo/enums";
import Icon from "../../Icon";
import IconPhone from "../../../assets/icons/whatsapp.svg";
import { IconSize } from "../../Icon/enums";

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
          <div className="general-info-location">
            <span>Nosso endereço</span>
            <ul>
              <li>
                <span>Av.Oceânica, 819</span>
              </li>
              <li>
                <span>Atalaia - Aracaju/SE</span>
              </li>
              <li>
                <Icon
                  pathIcon={IconPhone}
                  size={IconSize.sm}
                  brightness={1}
                  text="Brasil"
                />
              </li>
            </ul>
          </div>

          <div className="general-info-location">
            <span>Nós não possuímos</span>
            <ul>
              <li>
                <Icon
                  pathIcon={IconPhone}
                  size={IconSize.sm}
                  brightness={1}
                  text="Elevador"
                />
              </li>
              <li>
                <Icon
                  pathIcon={IconPhone}
                  size={IconSize.sm}
                  brightness={1}
                  text="Piscina"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="we-offer-container">
          <span>Nós oferecemos</span>
          <ul>
            <li>
              <Icon
                pathIcon={IconPhone}
                size={IconSize.sm}
                brightness={1}
                text="TV de LED com canais por assinatura"
              />
            </li>
            <li>
              <Icon
                pathIcon={IconPhone}
                size={IconSize.sm}
                brightness={1}
                text="WI-FI"
              />
            </li>
            <li>
              <Icon
                pathIcon={IconPhone}
                size={IconSize.sm}
                brightness={1}
                text="Ótimo café da manhã (incluso)"
              />
            </li>
          </ul>
        </div>

        <div className="important-info-container">
          <span>Informação importante:</span>
          <ul>
            <li>
              <span>Parcelamos em até 3 vezes sem juros.</span>
            </li>
            <li>
              <span>Crianças até 7 anos não pagam.</span>
            </li>
            <li>
              <span>Os preços podem mudar em feriados e dias com eventos.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
