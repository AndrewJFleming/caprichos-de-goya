import React, { FC } from "react";

import "./VertMenuListTitle.css";

interface Props {
  title: string;
}
export const VertMenuListTitle: FC<Props> = ({ title }) => {
  return (
    <li className="parent-list-item">
      <span className="parent-list-item-text">{title}</span>
    </li>
  );
};
