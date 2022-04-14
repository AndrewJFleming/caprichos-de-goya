import React, { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./About.css";

interface Props {
  allSubCats: any[];
}

export const About: FC<Props> = ({ allSubCats }) => {
  const [categoryLinks, setCategoryLinks] = useState<any[]>([]);

  useEffect(() => {
    //Dislpay theme categories dynamically in sentence format where commas, 'and' and the period are placed correctly.
    let catThemes = [];
    for (let i = 0; i < allSubCats.length; i++) {
      //Target second to last element in array.
      if (i === allSubCats.length - 2) {
        catThemes.push({
          title: allSubCats[i].title,
          slug: allSubCats[i].slug,
          after: " and ",
        });
        //Target last element in array.
      } else if (i === allSubCats.length - 1) {
        catThemes.push({
          title: allSubCats[i].title,
          slug: allSubCats[i].slug,
          after: ".",
        });
        //Target all elements preceding second to last and last elements in array.
      } else {
        catThemes.push({
          title: allSubCats[i].title,
          slug: allSubCats[i].slug,
          after: ", ",
        });
      }
    }
    setCategoryLinks(catThemes);
  }, [allSubCats]);

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
