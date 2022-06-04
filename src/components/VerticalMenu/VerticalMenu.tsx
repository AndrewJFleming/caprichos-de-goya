import { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/caprichos-de-goya, dark.png";
import { PageCompLinks } from "../PageCompLinks/PageCompLinks";
import { ParentItem } from "./ParentItem/ParentItem";

import { OtherLink, Category } from "../../interfaces";
import "./VerticalMenu.css";

interface Props {
  otherLinks: OtherLink[];
  categories: Category[];
  vertMenuCollapsed: boolean;
  handleVertCollapse: () => void;
}
export const VerticalMenu: FC<Props> = ({
  otherLinks,
  categories,
  vertMenuCollapsed,
  handleVertCollapse,
}) => {
  return (
    <div className={`vert-menu-wrapper ${vertMenuCollapsed && `collapsed`}`}>
      <Link className="branding-wrapper-link" to="/">
        <img className="site-logo" src={Logo} alt="site branding" />
      </Link>
      <nav>
        <ul>
          {categories.map((category) => (
            <ParentItem
              category={category}
              key={category.id}
              handleVertCollapse={handleVertCollapse}
            />
          ))}
          {otherLinks && (
            <div className="other-link-wrapper">
              <PageCompLinks onVertMenu={true} otherLinks={otherLinks} />
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};
