import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../constants";
import "./styles.scss";

const NavBar: React.FC = () => {
  return (
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
  );
};

export default NavBar;
