import React, { FC } from "react";
import { Link } from "react-router-dom";

import { OtherLink } from "../../interfaces";
import "./PageCompLinks.css";

interface Props {
  otherLinks: OtherLink[];
  onVertMenu: boolean;
}

export const PageCompLinks: FC<Props> = ({ onVertMenu, otherLinks }) => {
  return (
    <React.Fragment>
      {otherLinks?.map((otherLink) => (
        <Link className="dropdown-item-link" to={otherLink.link}>
          <li className={`${onVertMenu && "page-comp-link-item"}`}>
            {otherLink.title}
          </li>
        </Link>
      ))}
    </React.Fragment>
  );
};
