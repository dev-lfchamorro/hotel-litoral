import { Link } from "react-router-dom";
import { paths } from "../../../constants";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <ul>
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
    </div>
  );
};

export default Header;
