import React, { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Image } from "./Image/Image";
import { Container } from "react-bootstrap";
import "./SinglePrint.css";

interface Props {
  imageData: object[];
}

export const SinglePrint: FC<Props> = ({ imageData }) => {
  const { imageId } = useParams();
  const [isZoomedIn, setIsZoomedIn] = useState<boolean>(false);

  return (
    <div className="page-comp-wrapper">
      {imageData
        .filter((image: any) => image.id === imageId)
        .map((filteredImage: any) => (
          <Container>
            {!isZoomedIn && (
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
            <Image
              isZoomedIn={isZoomedIn}
              filteredImage={filteredImage}
              setIsZoomedIn={setIsZoomedIn}
            />
          </Container>
        ))}
    </div>
  );
};
