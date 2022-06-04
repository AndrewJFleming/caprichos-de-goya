import { FC, useState } from "react";
import { SubCatItem } from "./SubCatItem/SubCatItem";

import { Category, SubCategory } from "../../../interfaces";
import "./ParentItem.css";

interface Props {
  category: Category;
  handleVertCollapse: () => void;
}

export const ParentItem: FC<Props> = ({ category, handleVertCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleCollapse = () => {
    if (category.collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className="parent-list-item-wrapper">
      <li
        className={`parent-list-item ${
          category.collapsible && "collapsible-parent-item"
        }`}
        key={category.id}
        onClick={handleCollapse}
      >
        <i className="fas fa-folder vert-menu-item-icon"></i>
        <span className="parent-list-item-text">{category.title}</span>
        {category.collapsible && (
          <i className="fal fa-angle-down vert-menu-item-angle"></i>
        )}
      </li>
      {category.subCategories && (
        <ul
          className={`subcat-unordered-list ${isCollapsed ? "collapsed" : ""}`}
        >
          {category.subCategories.map((subCategory: SubCategory) => (
            <SubCatItem key={subCategory.id} subCategory={subCategory} />
          ))}
        </ul>
      )}
    </div>
  );
};
