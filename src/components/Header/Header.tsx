import React, { FC, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import LogoDark from "../../images/caprichos-de-goya.png";
import { PageCompLinks } from "../PageCompLinks/PageCompLinks";
import "./Header.css";

interface Props {
  otherLinks: any;
  handleVertCollapse: any;
  vertMenuCollapsed: boolean;
}

export const Header: FC<Props> = ({
  otherLinks,
  vertMenuCollapsed,
  handleVertCollapse,
}) => {
  return (
    <header
    // ref={ref}
    >
      <nav className="top-nav">
        <Link className="header-branding-link" to="/">
          <img
            className="header-logo"
            src={LogoDark}
            alt="80 Caprichos logo dark variant"
          />
        </Link>
        <div className="page-comp-links">
          <PageCompLinks onVertMenu={false} otherLinks={otherLinks} />
        </div>
        <div className="close-button-wrapper" onClick={handleVertCollapse}>
          {vertMenuCollapsed ? (
            <i className="fas fa-bars close-button-icon"></i>
          ) : (
            <i className="fas fa-times close-button-icon"></i>
          )}
        </div>
      </nav>
    </header>
  );
};
