import { Link } from "react-router-dom";
import { paths } from "../../../constants";
import Logo from "../../Logo";
import "./styles.scss";

const Header = () => {
  return (
    <header id="header-container">
      <Logo slogan="Espaço, Conforto e Tranquilidade" />
      <nav className="nav-container">
        <ul className="nav-list">
          <li>
            <Link to={paths.home}>Inicio</Link>
          </li>
          <li>
            <Link to={paths.aboutUs}>Sobre nós</Link>
          </li>
          <li>
            <Link to={paths.rooms}>Quartos</Link>
          </li>
          <li>
            <Link to={paths.contact}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
