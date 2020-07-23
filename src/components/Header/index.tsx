import React, { FC } from "react";
import { ReactComponent as MenuLink } from "../../material/icons/ic-menu_link.svg";
import { ReactComponent as Logo } from "../../material/icons/logo.svg";
import { ReactComponent as ContactSupport } from "../../material/icons/ic-contact_support.svg";
import { ReactComponent as ContactSupportText } from "../../material/icons/Contact-Support-text.svg";
import { ReactComponent as Active } from "../../material/icons/active.svg";
import { ReactComponent as User } from "../../material/icons/ic-user.svg";
import { ReactComponent as PowerSetting } from "../../material/icons/ic-power_settings_new.svg";
import "./header.scss";

const Header: FC = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <span className="title-icon">
          <MenuLink />
        </span>
        <span className="title-logo">
          <Logo />
        </span>
      </div>
      <div className="icon-groups">
        <div className="header-icon support-wrapper">
          <ContactSupport />
          <div className="contact-support_icon">
            <ContactSupportText />
          </div>
        </div>
        <div className="header-icon">
          <Active />
        </div>
        <div className="header-icon">
          <User />
        </div>
        <div className="header-icon">
          <PowerSetting />
        </div>
      </div>
    </div>
  );
};

export default Header;
