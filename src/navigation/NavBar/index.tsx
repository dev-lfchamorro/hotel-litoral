import React, { useState } from "react";
import IconList from "../../assets/icons/list.svg";
import IconTelephone from "../../assets/icons/telephone.svg";
import IconX from "../../assets/icons/x.svg";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { IconSize } from "../../components/Icon/enums";
import MenuOptions from "../MenuOptions";
import "./styles.scss";
import { staticValues } from "../../constants";

const NavBar: React.FC = () => {
  const [visibleMenu, setVisibleMenu] = useState("");

  const handleOpenMenu = () => setVisibleMenu("visible");
  const handleCloseMenu = () => setVisibleMenu("");

  return (
    <div className="nav-bar-container">
      <div className="navigation-container">
        <Icon
          brightness={0}
          className="hamburger-menu-open"
          onClick={handleOpenMenu}
          pathIcon={IconList}
          size={IconSize.md}
        />

        <nav className={`nav-container ${visibleMenu}`}>
          <Icon
            brightness={1}
            className="hamburger-menu-close"
            onClick={handleCloseMenu}
            pathIcon={IconX}
            size={IconSize.xl}
          />

          <MenuOptions />
        </nav>
      </div>

      <div className="buttons-container">
        <Button iconPath={IconTelephone} text={staticValues.whatsApp} />
      </div>
    </div>
  );
};

export default NavBar;
