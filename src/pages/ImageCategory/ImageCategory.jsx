import React from "react";
import { useParams, Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { categoryData, imageData } from "../../data.js";

const ImageCategory = () => {
  const { catId } = useParams();

  return (
    <div className="page-comp-wrapper">
      <Container>
        {categoryData[0].subCats
          .filter((cat) => cat.slug === catId)
          .map((cat) => (
            <h1 className="page-component-title">{cat.title}</h1>
          ))}
        <Row>
          {imageData
            .filter((image) =>
              image.categories.find((cat) => cat.slug === catId)
            )
            .map((item) => (
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

export default ImageCategory;
