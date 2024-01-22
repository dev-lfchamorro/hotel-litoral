import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../constants";
import { LogoColors, LogoFontSize } from "./enums";
import "./styles.scss";
import { LogoProps } from "./types";

const Logo: React.FC<LogoProps> = ({
  hasPrimaryColors = true,
  fontSize,
  primaryText = "Hotel",
  secondaryText = "Litoral",
  slogan,
}) => {
  const classFontSize =
    fontSize === LogoFontSize.md ? LogoFontSize.md : LogoFontSize.lg;

  const classLogoColors = hasPrimaryColors
    ? LogoColors.primary
    : LogoColors.secondary;

  return (
    <Link to={paths.home}>
      <div className="logo">
        <div className="logo-name">
          <div className={`${classLogoColors} ${classFontSize}`}>
            {primaryText} <span>{secondaryText}</span>
          </div>
        </div>
        <span className="logo-slogan">
          <span className={`${classLogoColors} ${classFontSize}`}>
            {slogan}
          </span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
