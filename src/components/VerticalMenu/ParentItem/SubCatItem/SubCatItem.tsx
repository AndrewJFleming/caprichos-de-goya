import { FC } from "react";
import { Link } from "react-router-dom";

import { SubCategory } from "../../../../interfaces";
import "./SubCatItem.css";

interface Props {
  subCategory: SubCategory;
}

export const SubCatItem: FC<Props> = ({ subCategory }) => {
  return (
    <Link
      className="subcat-list-item-link"
      to={`/category/${subCategory.slug}`}
    >
      <li className="subcat-list-item" key={subCategory.id}>
        {subCategory.title}
      </li>
    </Link>
  );
};
