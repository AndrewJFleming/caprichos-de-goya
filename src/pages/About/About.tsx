import React, { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { SubCategory, CategoryThemes } from "../../interfaces";
import "./About.css";

interface Props {
  allSubCategories: SubCategory[];
}

export const About: FC<Props> = ({ allSubCategories }) => {
  const [categoryLinks, setCategoryLinks] = useState<CategoryThemes[]>([]);

  useEffect(() => {
    //Dislpay theme categories dynamically in sentence format where commas, 'and' and the period are placed correctly.
    let categoryThemes = [];
    for (let i = 0; i < allSubCategories.length; i++) {
      //Target second to last element in array.
      if (i === allSubCategories.length - 2) {
        categoryThemes.push({
          title: allSubCategories[i].title,
          slug: allSubCategories[i].slug,
          after: " and ",
        });
        //Target last element in array.
      } else if (i === allSubCategories.length - 1) {
        categoryThemes.push({
          title: allSubCategories[i].title,
          slug: allSubCategories[i].slug,
          after: ".",
        });
        //Target all elements preceding second to last and last elements in array.
      } else {
        categoryThemes.push({
          title: allSubCategories[i].title,
          slug: allSubCategories[i].slug,
          after: ", ",
        });
      }
    }
    setCategoryLinks(categoryThemes);
  }, [allSubCategories]);

  return (
    <div className="page-comp-wrapper">
      <Container>
        <h1 className="page-component-title">About</h1>
        <p>
          In the <em>Los Caprichos</em> etchings collection, Francisco Goya
          criticizes many of the superstitions and antiquated customs that were
          common in Spanish society during his lifetime.
        </p>
        <p>
          The aim of the project is to present high resolution scans of Goya's
          prints and to curate the collection by categorizing the pieces by the
          following themes repeated throughout:{" "}
          {categoryLinks.map((categoryLink) => (
            <React.Fragment>
              <Link to={`/category/${categoryLink.slug}`}>
                {categoryLink.title}
              </Link>
              {categoryLink.after}
            </React.Fragment>
          ))}
        </p>
        <p>
          If you've enjoyed this project, consider exploring the rest of my{" "}
          <a href="https://github.com/AndrewJFleming/AndrewJFleming">
            web development portfolio
          </a>{" "}
          at my GitHub.
        </p>
      </Container>
    </div>
  );
};
