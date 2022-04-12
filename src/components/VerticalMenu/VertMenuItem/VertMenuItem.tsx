import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./VertMenuItem.css";

interface Props {
  category: any;
}

export const VertMenuItem: FC<Props> = ({ category }) => {
  return (
    <Link className="subcat-list-item-link" to={`/category/${category.slug}`}>
      <li className="subcat-list-item" key={category.id}>
        {category.title}
      </li>
    </Link>
  );
};
