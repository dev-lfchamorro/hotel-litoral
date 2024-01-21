import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { paths } from "../../constants";
import "./styles.scss";

interface CustomNavLinkProps extends NavLinkProps {
  activeClassName?: string;
}

// This component is to fix the type error with TypeScript about the activeClassName property
const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  to,
  children,
  activeClassName,
  ...rest
}) => {
  return (
    <NavLink to={to} className={activeClassName} {...rest}>
      {children}
    </NavLink>
  );
};

const NavBar: React.FC = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <CustomNavLink to={paths.home}>Inicio</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to={paths.aboutUs}>Sobre nós</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to={paths.rooms}>Quartos</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to={paths.contact}>Contato</CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
