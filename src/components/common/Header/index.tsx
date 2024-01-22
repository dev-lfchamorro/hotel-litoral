import React from "react";
import NavBar from "../../../navigation/NavBar";
import Logo from "../../Logo";
import { LogoFontSize } from "../../Logo/enums";
import "./styles.scss";

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
