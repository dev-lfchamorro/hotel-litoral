import React from "react";
import "./styles.scss";

type LogoProps = {
  primaryText?: string;
  secondaryText?: string;
  slogan: string;
};

const Logo: React.FC<LogoProps> = ({
  primaryText = "Hotel",
  secondaryText = "Litoral",
  slogan,
}) => {
  return (
    <div className="logo">
      <div className="logo-name">
        {primaryText} <span>{secondaryText}</span>
      </div>
      <span className="logo-slogan">{slogan}</span>
    </div>
  );
};

export default Logo;
