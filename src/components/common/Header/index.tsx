import React, { useEffect, useState } from "react";
import NavBar from "../../../navigation/NavBar";
import Logo from "../../Logo";
import { LogoFontSize } from "../../Logo/enums";
import "./styles.scss";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <header id="header-container" className={sticky ? "sticky" : ""}>
      <Logo
        slogan="Espaço, Conforto e Tranquilidade"
        fontSize={LogoFontSize.md}
      />
      <NavBar />
    </header>
  );
};

export default Header;
