import React from "react";
import NavBar from "../../../navigation/NavBar";
import Logo from "../../Logo";
import "./styles.scss";
import { LogoFontSize } from "../../Logo/enums";

const Header: React.FC = () => {
  return (
    <header id="header-container">
      <Logo
        slogan="Espaço, Conforto e Tranquilidade"
        fontSize={LogoFontSize.md}
      />
      <NavBar />
    </header>
  );
};

export default Header;
