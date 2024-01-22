import React from "react";
import NavBar from "../../../navigation/NavBar";
import Logo from "../../Logo";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <header id="header-container">
      <Logo slogan="Espaço, Conforto e Tranquilidade" />
      <NavBar />
    </header>
  );
};

export default Header;
