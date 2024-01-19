import { Link } from "react-router-dom";
import { paths } from "../../../constants";
import "./styles.scss";

const Header = () => {
  return (
    <header id="header-container">
      <div className="logo">
        <div className="logo-name">
          Hotel <span>Litoral</span>
        </div>
        <span className="logo-slogan">Espaço, Conforto e Tranquilidade</span>
      </div>
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
