import { FC, useState } from "react";

import "./ParentItem.css";
import { SubCatItem } from "./SubCatItem/SubCatItem";

interface Props {
  cat: any;
  handleVertCollapse: any;
}

export const ParentItem: FC<Props> = ({ cat, handleVertCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleCollapse = () => {
    if (cat.collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className="parent-list-item-wrapper">
      <li
        className={`parent-list-item ${
          cat.collapsible && "collapsible-parent-item"
        }`}
        key={cat.id}
        onClick={handleCollapse}
      >
        <i className="fas fa-folder vert-menu-item-icon"></i>
        <span className="parent-list-item-text">{cat.title}</span>
        {cat.collapsible && (
          <i className="fal fa-angle-down vert-menu-item-angle"></i>
        )}
      </li>
      {cat.subCats && (
        <ul
          className={`subcat-unordered-list ${isCollapsed ? "collapsed" : ""}`}
        >
          {cat.subCats.map((subCat: any) => (
            <SubCatItem key={subCat.id} subCat={subCat} />
          ))}
        </ul>
      )}
    </div>
  );
};
