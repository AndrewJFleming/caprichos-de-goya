import { FC } from "react";
import { Link } from "react-router-dom";

import "./SubCatItem.css";

interface Props {
  subCat: any;
}

export const SubCatItem: FC<Props> = ({ subCat }) => {
  return (
    <Link className="subcat-list-item-link" to={`/category/${subCat.slug}`}>
      <li className="subcat-list-item" key={subCat.id}>
        {subCat.title}
      </li>
    </Link>
  );
};
