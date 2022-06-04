import { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import { ImageData, SubCategory, ImageDataCategory } from "../../interfaces";

interface Props {
  imageData: ImageData[];
  allSubCategories: SubCategory[];
}

export const PrintCategory: FC<Props> = ({ imageData, allSubCategories }) => {
  const { catId } = useParams();

  return (
    <div className="page-comp-wrapper">
      <Container>
        {allSubCategories
          .filter((category: SubCategory) => category.slug === catId)
          .map((filteredCategory: SubCategory) => (
            <h1 className="page-component-title">{filteredCategory.title}</h1>
          ))}
        <Row>
          {imageData
            .filter((image: ImageData) =>
              image.categories.find(
                (category: ImageDataCategory) => category.slug === catId
              )
            )
            .map((item: ImageData) => (
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
