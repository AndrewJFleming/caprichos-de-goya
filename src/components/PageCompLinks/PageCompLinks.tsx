import React, { FC } from "react";
import { Link } from "react-router-dom";

import { VertMenuListTitle } from "../VerticalMenu/VertMenuListTitle/VertMenuListTitle";
import "./PageCompLinks.css";

interface Props {
  otherLinks: any[];
  onVertMenu: boolean;
}

export const PageCompLinks: FC<Props> = ({ onVertMenu, otherLinks }) => {
  return (
    <React.Fragment>
      {onVertMenu && <VertMenuListTitle title="Other Links" />}
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
