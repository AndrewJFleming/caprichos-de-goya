import React, { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./About.css";

interface Props {
  categories: any[];
}

export const About: FC<Props> = ({ categories }) => {
  const [categoryLinks, setCategoryLinks] = useState<any[]>([]);

  useEffect(() => {
    //Dislpay theme categories dynamically in sentence format where commas, 'and' and the period are placed correctly.
    let catThemes = [];
    for (let i = 0; i < categories.length; i++) {
      //Target second to last element in array.
      if (i === categories.length - 2) {
        catThemes.push({
          title: categories[i].title,
          slug: categories[i].slug,
          after: " and ",
        });
        //Target last element in array.
      } else if (i === categories.length - 1) {
        catThemes.push({
          title: categories[i].title,
          slug: categories[i].slug,
          after: ".",
        });
        //Target all elements preceding second to last and last elements in array.
      } else {
        catThemes.push({
          title: categories[i].title,
          slug: categories[i].slug,
          after: ", ",
        });
      }
    }
    setCategoryLinks(catThemes);
  }, [categories]);

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
