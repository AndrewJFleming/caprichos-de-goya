import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

interface Props {
  imageData: any[];
  categories: any[];
}

export const ImageCategory: FC<Props> = ({ imageData, categories }) => {
  const { catId } = useParams();

  return (
    <div className="page-comp-wrapper">
      <Container>
        {categories
          .filter((category: any) => category.slug === catId)
          .map((filteredCategory: any) => (
            <h1 className="page-component-title">{filteredCategory.title}</h1>
          ))}
        <Row>
          {imageData
            .filter((image: any) =>
              image.categories.find((category: any) => category.slug === catId)
            )
            .map((item: any) => (
              <Col className="gallery-col" xs="6" sm="4" md="4" lg="3" xl="2">
                <Link to={`/caprichos/${item.id}`}>
                  <img
                    src={item.squareUrl}
                    alt={`${item.title}, category gallery square thumbnail.`}
                  />
                </Link>

                <p className="gallery-item-title">
                  <span className="print-id">No. {item.id},&nbsp;</span>
                  <Link
                    className="gallery-item-title-link"
                    to={`/caprichos/${item.id}`}
                  >
                    {item.title.length <= 13
                      ? item.title
                      : `${item.title.substring(0, 14)}...`}
                  </Link>
                </p>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};
