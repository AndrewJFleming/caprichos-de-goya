import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import "./SingleImage.css";

interface Props {
  imageData: object[];
}

export const SingleImage: FC<Props> = ({ imageData }) => {
  const { imageId } = useParams();
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  return (
    <div className="page-comp-wrapper">
      {imageData
        .filter((image: any) => image.id === imageId)
        .map((filteredImage: any) => (
          <Container>
            {!isFullscreen && (
              <React.Fragment>
                <h2 className="single-image-title">{filteredImage.title}</h2>
                <h5 className="single-image-english">
                  <em>({filteredImage.englishTitle})</em>
                </h5>
                <div className="categories-wrapper">
                  {filteredImage.categories.map((imageCategory: any) => (
                    <p className="single-image-category">
                      <Link to={`/category/${imageCategory.slug}`}>
                        {imageCategory.name}
                      </Link>
                    </p>
                  ))}
                </div>
              </React.Fragment>
            )}
            <div className="single-image-wrapper">
              <img
                className={`single-image-fullsize ${
                  isFullscreen && "enlarged"
                }`}
                src={filteredImage.fullsizeUrl}
                alt={`${filteredImage.title}, from fullsize url`}
                onClick={() => setIsFullscreen(!isFullscreen)}
              />
            </div>
          </Container>
        ))}
    </div>
  );
};
