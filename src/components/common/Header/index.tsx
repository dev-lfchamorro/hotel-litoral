import NavBar from "../../../navigation/NavBar";
import Logo from "../../Logo";
import "./styles.scss";

const Header = () => {
  return (
    <header id="header-container">
      <Logo slogan="Espaço, Conforto e Tranquilidade" />
      <NavBar />
    </header>
  );
};

export default Header;
