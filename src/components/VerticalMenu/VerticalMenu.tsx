import { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/los-caprichos-logo, dark.png";
import { PageCompLinks } from "../PageCompLinks/PageCompLinks";
import { ParentItem } from "./ParentItem/ParentItem";
// import { VertMenuItem } from "./VertMenuItem/VertMenuItem";
// import { VertMenuListTitle } from "./VertMenuListTitle/VertMenuListTitle";
import "./VerticalMenu.css";

interface Props {
  otherLinks: any[];
  categories: any[];
  vertMenuCollapsed: boolean;
  handleVertCollapse: any;
}
export const VerticalMenu: FC<Props> = ({
  otherLinks,
  categories,
  vertMenuCollapsed,
  handleVertCollapse,
}) => {
  return (
    // <div className={`vert-menu-wrapper ${vertMenuCollapsed && `collapsed`}`}>
    //   <Link className="branding-wrapper-link" to="/">
    //     <img className="site-logo" src={Logo} alt="site branding" />
    //   </Link>
    //   <nav>
    //     <ul>
    //       <VertMenuListTitle title="Themes" />
    //       {categories.map((category: any) => (
    //         <VertMenuItem key={category.id} category={category} />
    //       ))}
    //       {otherLinks && (
    //         <span className="other-link-wrapper">
    //           <PageCompLinks onVertMenu={true} otherLinks={otherLinks} />
    //         </span>
    //       )}
    //     </ul>
    //   </nav>
    // </div>
    <div className={`vert-menu-wrapper ${vertMenuCollapsed && `collapsed`}`}>
      <Link className="branding-wrapper-link" to="/">
        <img className="site-logo" src={Logo} alt="site branding" />
      </Link>
      <nav>
        <ul>
          {categories.map((cat) => (
            <ParentItem
              cat={cat}
              key={cat.id}
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
